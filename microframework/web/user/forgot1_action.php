<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    if(!empty($_POST["email"])) {

        $email = $_POST["email"];
        $url = My\Helpers::url("user/forgot1.php");

        //UTILIZAR LIBRERIA DE VALIDACION
        $validator = new Validator;

        $validation = $validator->make($_POST, [
        'email' => 'required|email'

        ]);

        $validation->validate();

        if($validation->fails()) {

            My\Helpers::flash("Formato de correo incorrecto");
            My\Helpers::redirect($url);
            
        } else {

            try{

                //CREAR OBJETO DATABASE, HACER LA QUERY Y EJECUTARLA
                $database = new My\Database();

                $querySelectEmail = $database->prepare("SELECT email, id FROM users WHERE email = '$email'");
                $querySelectEmail->execute();

                $coincidencia = false;

                foreach($querySelectEmail as $row) {

                    if($row["email"] == $email) {
                        $coincidencia = true;
                        $id = $row["id"];
                    }
                }
                
                //COMPROVAR SI EL EMAIL COINCIDE CON EL EMAIL QUE LLEGA DEL FORMULARIO
                if($coincidencia) {

                    My\Helpers::flash("El usuario existe");

                    //FABRICAMOS TOKEN
                    $bytes = random_bytes(20);
                    $token = bin2hex($bytes);
                
                    //HACER INSERT EN LA TABLA DE USER_TOKENS
                    $queryInsertToken = $database->prepare("INSERT INTO user_tokens (user_id, token, type, created) VALUES ($id, '$token', 'R', '2021/11/24 14:25:00');");
                    $queryInsertToken->execute();
                    My\Helpers::log();

                    //ENVIAR CORREO CON EL ENLACE A FORGOT2.PHP 
                    $correo = new My\Mail("Canvi de contrasenya", 'Fes click a aquest link per cambiar la contrasenya: <a href ="http://localhost/projecte/web/user/forgot2.php?token='.$token.'"> </a>', true);
                    $envio = $correo->send([$email]);

                    if($envio) {
                        echo "Enviado";
                    }

                } else {

                    My\Helpers::flash("El correo proporcionado no existe");
                    My\Helpers::redirect($url);
                }

            } catch (PDOException $pdoException) {

                My\Helpers::flash("Error al conectarse a la base de datos");
                My\Helpers::redirect($url);
            }    
        }
    }
}