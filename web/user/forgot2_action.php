<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    if(!empty($_POST["novaContrasenya"] && $_POST["repetirContrasenya"])) {

        //UTILIZAR LIBRERIA DE VALIDACION
        $validator = new Validator;

        $validation = $validator->make($_POST, [

            'novaContrasenya'    => 'required|min:8|regex:/\d/',
            'repetirContrasenya' => 'required|same:novaContrasenya'
        ]);
        
        //HACER UN SELECT DEL USUARIO
        $database = new My\Database;
        $database -> open();

        //SETEAR LA CONTRASEÑA DEL USUARIO CON LA NUEVA CONTRASEÑA

        //HACER UN UPDATE CON LA CONTRASEÑA CAMBIADA

    }
}