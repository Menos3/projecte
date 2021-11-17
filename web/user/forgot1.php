<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="en">
    <?= My\Helpers::render("/../_commons/head.php")?>
    <title>Recuperar Contrasenya</title>

    <body>
        <form action = "forgot1_action.php" method = "POST">

            <h1>Recuperar Contrasenya</h1>

            <p>Escriu el correu electrónic amb el que t'has registrat</p>
            <input type = "text" name = "email"/>
            <br><br>

            <button id = "btCancelar">Cancelar</button>
            <button type = "submit" id = "btEnviarCorreu">Recuperar Contrasenya</button>

        </form>
    </body>
    
</html>