<?php

require("/../../vendor/autoload.php");

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    if(!empty($_POST["novaContrasenya"] && $_POST["repetirContrasenya"])) {

        //Utilizar libreria de validacion
        $validator = new Validator;

        $validation = $validator->make($_POST, [

            'novaContrasenya'    => 'required|min:8|regex:/\d/',
            'repetirContrasenya' => 'required|same:novaContrasenya'
        ]);
        
        //Hacer un SELECT del usuario para obtener su contraseña actual
        $database = new My\Database;
        $database -> open();
        $query = $database ->prepare("SELECT password FROM users WHERE username = ''");

        //Cambiar la contraseña

        //Hacer un UPDATE con la contraseña cambiada

    }
}