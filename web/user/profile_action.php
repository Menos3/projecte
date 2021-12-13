<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;
use PHPMailer\PHPMailer\Exception as PHPMailerException;
use My\Helpers;
use My\Database;
use My\Mail;
use My\Token;

$url = Helpers::url("/user/profile.php");

$validator = new Validator();

$validation = $validator->make($_POST + $_FILES, [
    'email'                 => 'required|email',
    'password'              => 'min:6|regex:/\d/',
    'confirm_password'      => 'same:password',
    'avatar'                => 'uploaded_file|max:2M|mimes:jpeg,png'
]);

$validation->validate();

if ($validation->fails()) {
    // See https://github.com/rakit/validation#working-with-error-message
    $errors = $validation->errors();
    $messages = $errors->all();
    foreach ($messages as $message) {
        Helpers::flash($message);
    }

} else {

    $uid = 1; // COOKIE / SESSION in next version!!!
    $datetime = date('Y-m-d H:i:s');

    try {

        // Load user data from DB
        Helpers::log()->debug("Get user '{$uid}' data");
        $db = new Database();
        $sql = "SELECT u.id, u.username, u.email, f.filepath as avatar
                FROM users u
                LEFT JOIN files f ON u.avatar_id=f.id
                WHERE u.id=$uid";
        Helpers::log()->debug("SQL: {$sql}");
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $row = $stmt->fetch();

        // Not editable
        $username = $row["username"];

        // Update data
        $data = [
            "last_access" => "'$datetime'"
        ];

        // Check repeated email
        $emailChanged = $_POST["email"] != $row["email"];
        $emailRepeated = false;

        if ($emailChanged) {
            $email = $_POST["email"];
            Helpers::log()->debug("Check other users with email '{$email}'");
            $sql = "SELECT COUNT(*) as count FROM users 
                    WHERE id!=$uid AND email='$email'";
            Helpers::log()->debug("SQL: {$sql}");
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetch();
            $emailRepeated = $row["count"] > 0;
        }

        if ($emailRepeated) {
            Helpers::log()->debug("Mail already exists");
            Helpers::flash("El correu ja existeix i no s'ha modificat");
        } else if ($emailChanged) {
            Helpers::log()->debug("Email update");
            $data["email"] = "'{$_POST["email"]}'";        
        }

        if (!empty($_POST["password"])) {
            Helpers::log()->debug("Password update");
            $data["password"] = "'" . hash("sha256", $_POST["password"]) . "'";
        }

        // Upload avatar and create file (optional)
        if (!empty($_FILES["avatar"]["name"])) {
            Helpers::log()->debug("Uploading file", $_FILES["avatar"]);
            $filepath = $_FILES["avatar"]["tmp_name"];
            $filepath = Helpers::upload($_FILES["avatar"], $username);
            $filesize = $_FILES["avatar"]["size"];
            $sql = "INSERT INTO files(filepath,filesize,uploaded) 
                    VALUES ('$filepath',$filesize,'$datetime')";
            Helpers::log()->debug("SQL: {$sql}");
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $fid = $db->lastInsertId();
            Helpers::log()->debug("New file with id {$fid}");
            Helpers::log()->debug("Avatar update");
            $data["avatar_id"] = $fid;
        }
        
        // Update user
        Helpers::log()->debug("Updating user", $data);
        foreach($data as $k => $v) {
            $data[$k] = "{$k}={$v}";
        }
        $set = implode(", ", $data);
        $sql = "UPDATE users 
                SET $set 
                WHERE id=$uid";
        Helpers::log()->debug("SQL: {$sql}");
        $stmt = $db->prepare($sql);
        $stmt->execute();
        Helpers::log()->debug("User with id {$uid} updated");
        Helpers::flash("Compte actualitzat.");

        // Reset user activation token?
        if ($email = $data["email"]) {            
            Helpers::log()->debug("Updating user activation token");
            $token = Token::generate();
            $type = Token::ACTIVATION;
            $sql = "INSERT INTO user_tokens 
                    VALUES ($uid, '$token', '$type', '$datetime')";
            Helpers::log()->debug("SQL: {$sql}");
            $stmt = $db->prepare($sql);            
            $stmt->execute();
            Helpers::log()->debug("New user activation token {$token}");    

            // Send activation mail
            Helpers::log()->debug("Sending user activation mail");
            $tokenUrl = Helpers::url("/user/register_action2.php") . "?token={$token}";
            Helpers::log()->debug("Token URL: {$tokenUrl}");
            $link = "<a href='{$tokenUrl}'>aquí</a>";
            $mail = new Mail("Activar compte J-Suite",  "Fes click {$link} per activar el compte.");            
            $send = $mail->send([$email]);
            if ($send) {
                Helpers::log()->debug("Send mail OK");
                $url = Helpers::url("/"); // Go to home
                Helpers::flash("Has de reactivar el teu compe. Consulta el correu.");
            } else {
                Helpers::log()->debug("Send mail ERR");
                throw new PHPMailerException("Send method returns false.");
            }
        }

        $db->close();
        
    } catch (PDOException $e) {
        Helpers::log()->debug($e->getMessage());
        Helpers::flash("No s'han pogut desar les dades. Prova-ho més tard.");
    } catch (PHPMailerException $e) {
        Helpers::log()->debug($e->getMessage());
        Helpers::flash("No s'han pogut enviar el correu d'activació. Contacta amb l'administrador/a.");
    } catch (Exception $e) {
        Helpers::log()->debug($e->getMessage());
        Helpers::flash("Hi hagut un error inesperat. Prova-ho més tard.");
    }
}

Helpers::redirect($url);