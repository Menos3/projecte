<?php

if(!empty($_POST)) {

    if(!empty($_POST["email"])) {

        //Utilizar libreria de validacion
        
        //Enviar correo con el email para cambiar la contraseña, enviando un link a forgot2.php
        $correo = new My\Mail("Canvi de contrasenya", "Voste ha sol·licitat canviar la seva contrasenya", false);
        $envio = $correo->send("email");
    }
}