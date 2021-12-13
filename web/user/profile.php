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
    <p>Edit account settings.</p>
    <form name="profile" action="<?= My\Helpers::url("/user/profile_action.php") ?>" method="post" enctype="multipart/form-data">
        <p>
            <label>Username</label><br>
            <input type="text" name="username" value="<?= $row["username"] ?>" readonly required>
        </p>
        <p>
            <label>Password</label><br>
            <input type="password" name="password">
        </p>
        <p>
            <label>Repeat password</label><br>
            <input type="password" name="confirm_password">
        </p>
        <p>
            <label>E-mail</label><br>
            <input type="email" name="email" value="<?= $row["email"] ?>" required>
        </p>
        <p>
            <label>Image</label><br>
            <input type="file" name="avatar" value="<?= $row["avatar"] ?>">
        </p>
        <?php if (!empty($row["avatar"])): ?>
        <p>
            <img src="<?= Helpers::url($row["avatar"]) ?>" height="50px"/>
        </p>
        <?php endif; ?>
        <p>
            <button>Save changes</button>
            <button type="reset">Reset form</button>
        </p>
    </form>
    <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>