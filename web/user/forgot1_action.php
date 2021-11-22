<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    if(!empty($_POST["email"])) {

        //Utilizar libreria de validacion
        $validator = new Validator;

        $validation = $validator->make($_POST, [
        'email' => 'required|email'

        ]);

        $validation->validate();

        if($validation->fails()) {

            //TODO: Averiguar la forma de tirar para atras
            $url = My\Helpers::url("forgot1.php");
            My\Helpers::redirect($url);

            $errores = $validation->errors();
            foreach($errores as $error) {

                //TODO: Corregir error del flash
                My\Helpers::flash($error);
            }
            
        } else {

            $database = new My\Database;
            $database->open();
            $querySelectEmail = $database->prepare("SELECT email FROM users WHERE email = :email");
            $querySelectEmail->execute();
            $resultado = $query->fetch(PDO::FETCH_ASSOC);

            if ($correo == $_POST["email"]) {

                //TODO: Fabricar Token
                $bytes = random_bytes(20);
                    
                    
                //TODO: Hacer el insert en la tabla
                $queryInsertToken = $database->prepare("INSERT into user_tokens ('user_id','token','type','created') VALUES (25, $token, 'R', $fecha)");
                $queryInsertToken->execute();
            } 

            //TODO: Enviar correo con el email para cambiar la contraseña, enviando un link a forgot2.php
            $correo = new My\Mail("Canvi de contrasenya", 'Fes click a <a href ="http://localhost/projecte/web/user/forgot2.php?token='.$token.'"> aquest link</a>', false);
            $envio = $correo->send("email");

            if($envio) {
                echo "Enviado";
            }
        }
    }
}