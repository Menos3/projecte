<?php

require_once __DIR__ . "/../../vendor/autoload.php";

use Rakit\Validation\Validator;

if(!empty($_POST)) {

    $database = new My\Database;
    //CARGAR USUARIO A TRAVES DEL TOKEN
    if(!empty($_POST["token"])) {

        $token = $_POST["token"];
        $querySelectToken = $database->prepare("SELECT user_id FROM user_tokens WHERE token = '$token'");
        $idUsuario = $querySelectToken->execute();

        if($idUsuario != null) {

            if(!empty($_POST["novaContrasenya"] && $_POST["repetirContrasenya"])) {

                //UTILIZAR LIBRERIA DE VALIDACION
                $validator = new Validator;
        
                $validation = $validator->make($_POST, [
        
                    'novaContrasenya'    => 'required|min:8|regex:/\d/',
                    'repetirContrasenya' => 'required|same:novaContrasenya'
                ]);

                $validation->validate();

                if($validation->fails()) {
                    My\Helpers::flash("Las contraseñas no coinciden");
                    $url = My\Helpers::url("user/forgot2.php");
                    My\Helpers::redirect($url);

                } else {

                    //ENCRIPTAR CONTRASEÑA USANDO ALGORITMO SHA256
                    $contraEnriptada = hash('sha256', $_POST["repetirContrasenya"]);

                    //HACER UPDATE DE LA CONTRASEÑA USANDO EL ID DEL USUARIO EXTRAIDA DEL TOKEN
                    $queryUpdateContrasena = $database->prepare("UPDATE users SET password = '$contraEnriptada' WHERE id = '$idUsuario'");
                    $queryUpdateContrasena->execute();

                    //SI FUNCIONA, SE REDIRIGE A LA PAGINA DE INICIO
                    $urlInicio = My\Helpers::url("../web/index.php");
                    My\Helpers::redirect($urlInicio);
                    My\Helpers::flash("Cambio de contraseña aceptado");
                }
            }

        } else {

            My\Helpers::flash("El token es incorrecte");
            $urlForgot1 = My\Helpers::url("user/forgot1.php");
            My\Helpers::redirect($urlForgot1);
        }
    }
}