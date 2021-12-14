<?php
require_once __DIR__ . "/../..vendor/autoload.php";


use My\Database;
use My\Helpers;

//Creamos la primera cookie
setcookie("user", "", time() + 3600);
//Ahora la volvemos a crear con el tiempo expirado. Así se elimina

$cookie_name=$_COOKIE["galleta"];

if(!isset($_COOKIE[$cookie_name])) {
  Helpers::log()->debud("$_COOKIE[$cookie_name]");
//  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  
  Helpers::log()->debud("{$cookie_name}");
  Helpers::log()->debud("el valor es{$_COOKIE[$cookie_name]}");
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];
}

setcookie("user", "", time() - 3600);



session_start();
$_SESSION["newsession"];

//conexion database

//delete de la tabla token donde uid sea = al que toca.
$db=  new Database();
$sql= " DELETE FROM user_tokens WHERE user_id='{$_SESSION["newsession"]}'";
Helpers::log()->debud("SQL:{$sql}");

$stmt=$db->prepare($sql);
$stmt=execute();

unset($_SESSION["newsession"]);

?>