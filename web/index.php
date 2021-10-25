<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Home"]) ?>
<body>
   <?= My\Helpers::render("/_commons/header.php") ?>
   <h2>Index</h2>
   <p>Welcome back!</p>
   <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>
