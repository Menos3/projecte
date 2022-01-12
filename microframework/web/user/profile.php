<?php 
require_once __DIR__ . "/../../vendor/autoload.php"; 

use My\Helpers;
use My\Database;

$uid = 1; // COOKIE / SESSION in next version!!!

// Load user data from DB
Helpers::log()->debug("Get user '{$uid}' data");
$db = new Database();
$sql = "SELECT u.id, u.username, u.email, f.filepath as avatar
        FROM users u
        LEFT JOIN files f ON u.avatar_id=f.id
        WHERE u.id=$uid";
Helpers::log()->debug("SQL: {$sql}");
$stmt = $db->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();
?>

<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Profile"]) ?>
<body>
    <?= My\Helpers::render("/_commons/header.php") ?>
    <h2>Profile</h2>
    <div class="logout">
        <a href="<?=My\Helpers::url("/user/logout_action.php") ?>"><img src="https://www.pngitem.com/pimgs/m/312-3120816_logout-icon-png-transparent-png.png" alt="logout"></a>
    </div>
    <p>Edit account settings.</p>

    <form name="profile" class="profile" action="<?= My\Helpers::url("/user/profile_action.php") ?>" method="post" enctype="multipart/form-data">
        <?php if (!empty($row["avatar"])): ?>
        
            <img src="<?= Helpers::url($row["avatar"]) ?>" height="50px"/>
        </p>
        <?php endif; ?>
        <p>
            <label>Username</label><br>
            <input class="form-control form-control-sm" type="text" name="username" value="<?= $row["username"] ?>" readonly required>
        </p>
        <p>
            <label>Password</label><br>
            <input class="form-control form-control-sm" type="password" name="password">
        </p>
        <p>
            <label>Repeat password</label><br>
            <input class="form-control form-control-sm" type="password" name="confirm_password">
        </p>
        <p>
            <label>E-mail</label><br>
            <input class="form-control form-control-sm" type="email" name="email" value="<?= $row["email"] ?>" required>
        </p>
        <p>
            <label>Image</label><br>
            <input class="form-control form-control-sm" type="file" name="avatar" value="<?= $row["avatar"] ?>">
        </p>
        <p>
            <button class="btn btn-success">Save changes</button>
            <button  class="btn btn-danger" type="reset">Reset form</button>
            
        </p>
    </form>
    <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>