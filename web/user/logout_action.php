<?php
require_once __DIR__ . "/../..vendor/autoload.php";


use My\Database;
use My\Helpers;


if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
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




// if(isset($_GET['cerrar'])) {

//   //Vaciamos y destruimos las variables de sesión
//   $_SESSION['iduser'] = NULL;
//   $_SESSION['nombreuser'] = NULL;
//   unset($_SESSION['iduser']);
//   unset($_SESSION['nombreuser']);

//   //Redireccionamos a la pagina index.php
//   header('Location: profile_action.php');
// }

?>