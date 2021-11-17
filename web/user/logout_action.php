<?php

if(isset($_GET['cerrar'])) {

  //Vaciamos y destruimos las variables de sesión
  $_SESSION['iduser'] = NULL;
  $_SESSION['nombreuser'] = NULL;
  unset($_SESSION['iduser']);
  unset($_SESSION['nombreuser']);

  //Redireccionamos a la pagina index.php
  header('Location: profile_action.php');
}

?>