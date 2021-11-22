<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php") ?>
<!-- <head>
    <style>
    div {
    display: flex;
    flex-direction: column;
}

form {
    width: 50%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
}
form  * {margin:0 auto;
}

</style>
</head> -->

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