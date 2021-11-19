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
        <form class="formulario__form" action="profile_action.php" method="post">
                <div class="formulario__foto">
                    <input class="formulario__form--button" name="archivo" id="archivo" type="file"/>
                    <input class="formulario__form--button" type="submit" name="subir" value="Subir imagen"/>
                </div>
                <label class="formulario__label" for="">Username</label>
                <input class="formulario__form--input" type="nickname" >
                <label class="formulario__label" for="">email</label>
                <input class="formulario__form--input" type="email">
                <label class="formulario__label" for="">Contraseña anterior</label>
                <input class="formulario__form--input" type="current-password">
                <label class="formulario__label" for="">Contraseña nueva</label>
                <input class="formulario__form--input" type="new-password">
                <label class="formulario__label" for="">Repite contraseña nueva</label>
                <input class="formulario__form--input" type="new-password">
                <button  class="formulario__form--button" type="submit">Guardar</button>
                <button class="formulario__form--button" >Cancelar</button>
        </form>
   </div>

 
</body>
</html>