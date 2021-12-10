<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("_commons/head.php", ["subtitle" => "Register Sing up"]) ?>
<body>
   <!-- <?= My\Helpers::render("_commons/header.php") ?> -->
   <div class="contenedor">
      <h2>Register</h2>
        <form action="register_action.php" method="post" enctype="">
      <label for="fname">Nombre</label> <br>
      <input type="text" name="fname" id="fname">
            <br> <br>

      <label for="cognom">Primer apellido</label> <br>
      <input type="text" name="cognom" id="cognom">
            <br> <br>
      <label for="cognom2">Segundo apellido</label> <br>
      <input type="text" name="cognom2" id="cognom2">
            <br> <br>
      <label  for="mail">Correo Electronico</label> <br>
      <input type="mail" name="mail">
            <br><br>
      <label for="contraseña">Contraseña</label> <br>
      <input type="text" name="contraseña">
            <br><br>

      <!-- <label for="role">Rol</label> -->
      <!-- <input type="text" name="role" id="role"> -->
            
            
            <input type="submit" id="registre" value="Registrar">
      
      
      
      
      
        </form>
   </div>
  
</body>


</html>


