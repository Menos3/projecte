<?php
require_once __DIR__ . "/../../vendor/autoload.php";

//GUARDO EL TOKEN DE LA COOKIE EN UNA VARIABLE
$token = $_COOKIE["session_token"];

//PREPARO LA BASE DE DATOS PARA HACER UN SELECT
$database = new My\Database();

$querySelectTypeToken = $database->prepare("SELECT type FROM user_tokens");
$querySelectTypeToken->execute();

foreach($querySelectTypeToken as $row) {

    if($row) {

    }
}



