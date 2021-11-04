<?php require_once __DIR__ . "/../vendor/autoload.php"; ?>
<?php
   My\Helpers::log()->info("Entro a la pàgina d'inici");
   My\Helpers::log()->debug("Entro a una pàgina", ["page" => basename(__FILE__)]);
?>

<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Home"]) ?>
<body>
   <?php My\Helpers::flash("Required name is empty");?>
   <?= My\Helpers::render("/_commons/header.php") ?>
   <h2>Index</h2>
   <p>Welcome back!</p>
   <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>
