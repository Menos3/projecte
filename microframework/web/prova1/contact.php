<?php require_once __DIR__ . "/../../vendor/autoload.php"; 
use My\Helpers;
use My\User;
if (User::isAuthenticated()) {
    Helpers::flash("Accés no autoritzat");    
    $url = Helpers::url("/prova1"); // Go to homepage
    Helpers::redirect($url);
}
?>
<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Contact us"]) ?>
<body>
    <?= My\Helpers::render("/_commons/header.php") ?>
    <h2>Contacte</h2>
    <p>Omple les dades i et contactarem:</p>
    
    <form name="contact" action="<?= My\Helpers::url("/contact_action.php") ?>" method="post" enctype="multipart/form-data">
        <p>
            <label>Assumpte</label><br>
            <input type="text" name="subject" required>
        </p>
        <p>
            <label>Cos</label><br>
            <textarea name="body" required></textarea>
        </p>
        <p>
            <label>Nom</label><br>
            <input type="text" name="username">
        </p>
        <p>
            <label>Correu electrònic</label><br>
            <input type="email" name="email" required>
        </p>
        <p>
            <label>Adjunt</label><br>
            <input type="file" name="attachment">
        </p>
        <p>
            <button>Send message</button>
            <button type="reset">Reset form</button>
        </p>
    </form>
    <?= My\Helpers::render("../_commons/footer.php") ?>
</body>
</html>