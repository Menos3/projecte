<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    //CARGAR USUARIO A TRAVES DEL TOKEN
    if(!empty($_POST["token"])) {

    }

    if(!empty($_POST["novaContrasenya"] && $_POST["repetirContrasenya"])) {

        //UTILIZAR LIBRERIA DE VALIDACION
        $validator = new Validator;

        $validation = $validator->make($_POST, [

            'novaContrasenya'    => 'required|min:8|regex:/\d/',
            'repetirContrasenya' => 'required|same:novaContrasenya'
        ]);
        
        //HACER UN UPDATE CON LA CONTRASEÑA CAMBIADA
        $database = new My\Database;

    }
}