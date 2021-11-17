<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
    <?= My\Helpers::render("/../_commons/head.php")?>
    <title>Recuperar Contrasenya</title>
    <body>
        <form action = "forgot2_action.php" method = "POST">
            <h1>Canviar Contrasenya</h1>
            <p>Escriu la nova contraseya</p>
            <input type = "text" name = "novaContrasenya"/>

            <p>Torna a escriure la nova contrasenya</p>
            <input type = "text" name = "repetirContrasenya"/>
            <br><br>

            <button type = "submit" id = "btCanviarContrasenya">Canviar Contrasenya</button>
        </form>
    </body>
</html>