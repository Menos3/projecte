<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    if(!empty($_POST["email"])) {

        $email = $_POST["email"];
        //UTILIZAR LIBRERIA DE VALIDACION
        $validator = new Validator;

        $validation = $validator->make($_POST, [
        'email' => 'required|email'

        ]);

        $validation->validate();

        if($validation->fails()) {

            //TODO: Averiguar la forma de tirar para atras
            $url = My\Helpers::url("user/forgot1.php");
            My\Helpers::redirect($url);

            $errores = $validation->errors();
            foreach($errores as $error) {

                //TODO: Corregir error del flash
                My\Helpers::flash($error);
            }
            
        } else {

            //CREAR OBJETO DATABASE, HACER LA QUERY Y EJECUTARLA
            $database = new My\Database();

            $querySelectEmail = $database->prepare("SELECT `email` FROM `2daw.equip02`.users WHERE email =?");
            $querySelectEmail->execute([$email]);

            $coincidencia = false;

            foreach($querySelectEmail as $row) {

                if($row["email"] == $email) {
                    $coincidencia = true;
                }
            }

            //COMPROVAR SI EL EMAIL COINCIDE CON EL EMAIL QUE LLEGA DEL FORMULARIO
            if($coincidencia) {

                My\Helpers::flash("El usuario existe");

                //FABRICAMOS TOKEN
                $bytes = random_bytes(20);
                $token = bin2hex($bytes);
                    
                //HACER INSERT EN LA TABLA DE USER_TOKENS
                $queryInsertToken = $database->prepare("INSERT INTO `2daw.equip02`.user_tokens (`user_id`, `token`, `type`, `created`) VALUES (2, `{$token}`, `R`, `24/11/2021`);");
                $queryInsertToken->execute();
                My\Helpers::log()->debug($queryInsertToken);

                //ENVIAR CORREO CON EL ENLACE A FORGOT2.PHP 
                $correo = new My\Mail("Canvi de contrasenya", 'Fes click a aquest link per cambiar la contrasenya: <a href ="http://localhost/projecte/web/user/forgot2.php?token='.$token.'"> </a>', false);
                $envio = $correo->send($_POST['email']);

                if($envio) {
                    echo "Enviado";
                }
            }
        }
    }
}