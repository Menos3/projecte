<?php require_once __DIR__ . "/../../vendor/autoload.php";
use My\Database;
?>

<!DOCTYPE html>
<html lang="ca">
<?= My\Helpers::render("/_commons/head.php", ["subtitle" => "Roles"])






?>
<body>
    <?= My\Helpers::render("/_commons/header.php") ?>
    <h2>Llistat actual de rols</h2>
    <?= $db= new Database(); 
    $sql="SELECT id name FROM roles";
    Helpers::log()->debug("SQL: {$sql}");
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $row=$stmt->fetch();

    // hacer un bucle y que por cada iteracion cree un nueva tr con sus dos valos inyectado
    //cada uno en un td.
?>
    <table>
        <thead>
            
            <tr>
                <td>id</td>
                <td>name</td>
            </tr>
            <!-- <?=foreach($fila as $row){
                foreach($columna as $columnas){

                }

            }
            //hacer un tr
             `<tr>
                <td></td>
                <td></td>
             </tr>`
            
            
            ?> -->
                     
        </thead>
        <tbody>
        </tbody>
    </table>
    <?= My\Helpers::render("/_commons/footer.php") ?>
</body>
</html>

 
<!-- configuracion de la dataBAse
    return [
   "driver"    => "mysql",
   "host"      => "alumnes.insjoaquimmir.cat",
   "port"      => 9316,
   "database"  => "demo",
   "user"      => "demo",
   "password"  => "VGz739ghGmQU!",
   "options"   => [
       PDO::MYSQL_ATTR_SSL_KEY                => __DIR__ . '/client-key.pem',
       PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false
   ]
]; -->
