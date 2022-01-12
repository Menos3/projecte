<?php
require_once __DIR__ . "/../../vendor/autoload.php";

//GUARDO EL TOKEN DE LA COOKIE EN UNA VARIABLE
$token = $_COOKIE["session_token"];

//PREPARO LA BASE DE DATOS PARA HACER UN SELECT DEL TIPO DE TOKEN DONDE EL TOKEN COINCIDA CON EL DE LA COOKIE
$database = new My\Database();

$querySelectTypeToken = $database->prepare("SELECT type FROM user_tokens WHERE token = ?");
$querySelectTypeToken->execute([$token]);

//SI EL RESULTADO ES NEGATIVO, DESTRUYO LA COOKIE DEL TOKEN Y LA VARIABLE "UID" DE LA SESION
if($querySelectTypeToken == null) {
    setcookie("session_token", "", time() - 3600);
    session_start();
    unset($_SESSION["uid"]);

    //REDIRIGIR A LA PAGINA DE INICIO
    My\Helpers::flash("Sessio expirada");
    $url = My\Helpers::url("index.php");
    My\Helpers::redirect($url);

} else {

    //REDIRIGIR A LA PAGINA DE INICIO
    My\Helpers::flash("Sessio expirada");
    $url = My\Helpers::url("index.php");
    My\Helpers::redirect($url);

}



