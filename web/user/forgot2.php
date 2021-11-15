<!DOCTYPE html>
<html lang="en">
<?= My\Helpers::render("/../_commons/head.php")?>
<title>Recuperar Contrasenya</title>
<body>
    <form action = "forgot2_action.php" method = "POST">
        <h1>Canviar Contrasenya</h1>
        <p>Escriu la nova contraseya</p>
        <input type = "text" id = "tfNovaContrasenya"/>
        <p>Torna a escriure la nova contrasenya</p>
        <input type = "text" id = "tfRepetirContrasenya"/>
        <br><br>
        <button id = "btCanviarContrasenya">Canviar Contrasenya</button>
    </form>
</body>
</html>