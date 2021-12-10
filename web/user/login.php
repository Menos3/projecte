<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Sign in"]) ?>

<body>
<div class="contenedor">
      <h2>Login</h2>
        <form action="login_action.php" method="post">
    
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
   <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>
