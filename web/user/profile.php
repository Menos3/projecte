<?php require_once __DIR__ . "/../../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php") ?>
<!--  -->

<?= My\Helpers::render("/_commons/header.php") ?>
<?php 
    use My\Database;
    $db = new Database();
    $sentencia = $db->prepare("SELECT id, username, email, avatar_id, role_id  FROM users WHERE id = 1;");
    $sentencia->execute();
    $results = $sentencia->fetchAll(PDO::FETCH_OBJ);
    $user = $results[0];

    $sentencia1 = $db->prepare("SELECT filepath FROM files WHERE id = '{$user->avatar_id}';");
    $sentencia1->execute();
    $results2 = $sentencia1->fetchAll(PDO::FETCH_OBJ);
    $file = $results2[0];
    $avatarurl = My\Helpers::url($file->filepath);
    My\Helpers::log()->debug($avatarurl);

    //My\Helpers::log()->debug("Datos");
?>
<body>
   <h2>Perfil</h2>
   <div class="formulario">
        <form class="formulario__form" action="profile_action.php" method="POST" enctype="multipart/form-data">
                <div class="formulario__foto">
                    <img src="<?= $avatarurl ?>"></img>

                    <input class="formulario__form--button" name="avatar" id="archivo" type="file"/>
                    <input class="formulario__form--button" type="submit" name="subir" value="Subir imagen"/>
                </div>
                <input type="hidden" name="user_id" value="<?=$user->id?>" >
                <label class="formulario__label" for="username">Username</label>
                <input class="formulario__form--input" name="username" type="nickname" value="<?=$user->username ?>" readonly>
                <label class="formulario__label" for="email">email</label>
                <input class="formulario__form--input" name ="email"type="email" value="<?=$user->email?>">
                <!-- <label class="formulario__label" for="passwordAnterior">Contraseña anterior</label>
                <input class="formulario__form--input" name="passwordAnterior" type="current-password"> -->
                <label class="formulario__label" for="passwordNew">Contraseña nueva</label>
                <input class="formulario__form--input" name="passwordNew" type="password">
                <label class="formulario__label" for="PasswordRepit">Repite contraseña nueva</label>
                <input class="formulario__form--input" name="PasswordRepit"type="password">
                <button name="guardar" class="btn btn-primary" type="submit">Guardar</button>
                <button class="btn btn-danger" >Cancelar</button>
        </form>
   </div>

 
</body>
</html>