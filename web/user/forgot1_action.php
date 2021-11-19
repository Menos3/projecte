<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    if(!empty($_POST["email"])) {

        //Utilizar libreria de validacion
        $validator = new Validator();

        $validation = $validator->make($_POST, [
        'email' => 'required|email'

        ]);

        $validation->validate();

        if($validation->fails()) {

            //Averiguar la forma de tirar para atras
            $url = My\Helpers::url("forgot1.php");
            My\Helpers::redirect($url);

            $errores = $validation->errors();
            foreach($errores as $error) {

                My\Helpers::flash($error);
            }
            
        } else {

            $database = new My\Database;
            $database->open();
            $querySelectEmail = $database->prepare("SELECT email FROM users");
            $querySelectEmail->execute();
            $resultado = $query->fetchAll();

            foreach($resultado as $correo) {

                if ($correo == $_POST["email"]) {

                    $queryInsertToken = $database->prepare("INSERT into user_token ");
                }
            }

            //Enviar correo con el email para cambiar la contraseña, enviando un link a forgot2.php
            $correo = new My\Mail("Canvi de contrasenya", "Voste ha sol·licitat canviar la seva contrasenya", false);
            $envio = $correo->send("email");

        }
    }
}