<?php
require("/../../vendor/autoload.php");

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

            $errores = $validation->errors();

            foreach($errores as $error) {
                My\Helpers::flash($error);
            }
            
        } else {

            //Enviar correo con el email para cambiar la contraseña, enviando un link a forgot2.php
            $correo = new My\Mail("Canvi de contrasenya", "Voste ha sol·licitat canviar la seva contrasenya", false);
            $envio = $correo->send("email");

        }
    }
}