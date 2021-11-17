<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>

<!DOCTYPE html>
<html lang="en">
<?= My\Helpers::render("/_commons/head.php") ?>


<body>
    <form action="profile_action.php" method="post" enctype="multipart/form-data">
        <input name="archivo" id="archivo" type="file"/>
        <input type="submit" name="subir" value="Subir imagen"/>
        <label for="">Nom de Usuari</label>
        <input type="text">
        <label for="">Email</label>
        <input type="text">
        <label for="">Password </label>
        <input type="text">
        <label for="">Password 2</label>
        <input type="text">
        <button type="submit">Guardar</button>
        <button type="cancel">Cancelar</button>
        <p><a href="logout_action.php?cerrar=yes">Tancar sesió</a></p>
 
 
 
    </form>
    
</body>
</html>