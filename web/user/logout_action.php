<?php

require_once __DIR__ . "../../../vendor/autoload.php";
require_once __DIR__ . "../../../config/database.php";

use Rakit\Validation\Validator;
use My\Helpers;
use My\Database;

$url = Helpers::url("index.php"); // Go to homepage
$urlLogin= Helpers::url("user/login.php");

$validator = new Validator();

$validation = $validator->make($_POST, [
    'usuario' => 'required',
    'contrasena' => 'required'
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

    $username = $_POST["usuario"];
    $password = hash("sha256", $_POST["contrasena"]);

    try {

        Helpers::log()->debug("Check username and password");
        $db = new Database();
        $sql = "SELECT * FROM users u 
                WHERE u.username='$username' AND password='$password'";
        Helpers::log()->debug("SQL: {$sql}");
        $stmt = $db->prepare($sql);
        $stmt->execute();
        
        if ($user = $stmt->fetch()) {

            Helpers::log()->debug("Username and password OK");

            $datetime = date('Y-m-d H:i:s');
            $uid = $user["id"];
            
            // Update user
            Helpers::log()->debug("Update user last access");
            $sql = "UPDATE users 
                    SET last_access='$datetime' 
                    WHERE id=$uid";
            Helpers::log()->debug("SQL: {$sql}");
            $stmt = $db->prepare($sql);
            $stmt->execute();
            Helpers::log()->debug("User updated");

            // Create user session token
            
            $token=bin2hex(random_bytes(20));

            $insert=$db->prepare("INSERT INTO user_tokens VALUES ('{$uid}','{$token}','S','{$datetime}')");
            $insert->execute();
            

            $db->close();
            

            // Create user session cookie
            if (isset($_POST['mantener'])){
                setcookie("session_token",$token,strtotime('+1 month'));
            }else{
                setcookie("session_token",$token,time()+3600);
            }

            Helpers::flash("Benvingut!");
            $_SESSION["uid"]=$uid;

            Helpers::log()->debug($_COOKIE['session_token']);

            Helpers::redirect($url);
            

        } else {
            Helpers::log()->debug("Invalid username and password");
            Helpers::flash("Error de credencials. Prova de nou");
        }
    } catch (PDOException $e) {
        Helpers::log()->debug($e->getMessage());
        Helpers::flash("No s'han pogut enviar les dades. Prova-ho més tard.");

    } catch (Exception $e) {
        Helpers::log()->debug($e->getMessage());
        Helpers::flash("Hi hagut un error inesperat. Prova-ho més tard.");
        
    }
}

Helpers::redirect($urlLogin);
