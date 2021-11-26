<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php") ?>
<?php
  /* FUNCION GENÉRICA VALIDACIÓN USUARIO */

  // $id = $_POST['id'];
  function verificarUsuario($id) {
    // $sql_leer = 'SELECT usuario FROM usuarios WHERE username= '.$id.' AND usuario = '.$_SESSION['admin'].' ';
    $sql_user= 'SELECT * FROM users WHERE id=1';
    $gsnet = $pdo->prepare($sql_user);
    $gsnet->execute($id);

    if ($gsnet->fetchColumn() > 0) return true;
    return false;
  };

  /* Se cargan los datos del usuario para mostrar en el FORM */


  
  
  
  
  
  
  

?>

<body>
   <!-- <?= My\Helpers::render("/_commons/header.php") ?> -->
   <h2>Perfil</h2>
   <div class="formulario">
        <form class="formulario__form" action="profile_action.php" method="POST" enctype="multipart/form-data">
                <div class="formulario__foto">
                    <input class="formulario__form--button" name="avatar" id="archivo" type="file"/>
                    <input class="formulario__form--button" type="submit" name="subir" value="Subir imagen"/>
                </div>
                <label class="formulario__label" for="username">Username</label>
                <input class="formulario__form--input" name="username" type="nickname" value="CristinaAran89" readonly>
                <label class="formulario__label" for="email">email</label>
                <input class="formulario__form--input" name ="email"type="email">
                <!-- <label class="formulario__label" for="passwordAnterior">Contraseña anterior</label>
                <input class="formulario__form--input" name="passwordAnterior" type="current-password"> -->
                <label class="formulario__label" for="passwordNew">Contraseña nueva</label>
                <input class="formulario__form--input" name="passwordNew" type="password">
                <label class="formulario__label" for="PasswordRepit">Repite contraseña nueva</label>
                <input class="formulario__form--input" name="PasswordRepit"type="password">
                <button  class="formulario__form--button" type="submit">Guardar</button>
                <button class="formulario__form--button" >Cancelar</button>
        </form>
   </div>

 
</body>
</html>