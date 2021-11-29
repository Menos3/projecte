<?php
// use PHPUnit\Framework\TestCase;
// use My\Database;
// poner el autoLoad con el required
require_once __DIR__ . "/../vendor/autoload.php";
$db = new My\Database();


$nombre=$_POST["fname"];
$primerApellido=$_POST["cognom"];
$segundoApellido=$_POST["cognom2"];
$correoElectronico=$_POST["mail"];
$pasword=$_POST["contraseña"];

$sentencia=$connect->prepare("select * from '2daw.equip02'.user");
$sentencia -> execute();

foreach ($sentencia as $row)
{
    if ($row['email']==$correoElectronico ){
        My\Helpers::flash("El correo electronico ya existe");
        $url=My\Helpers::url("/user/registrer.php");
    }else{
        $sentencia=$connect->prepare("select id from '2daw.equip02'.user");
        $sentencia -> execute();
        $id=count($sentencia);
        $id=$id +1;
        $last_id = $conn->lastInsertId();
        
        $status=0;
        $avatar=$_FILES['avatar'];
        $insert=$connect()->prepare("insert into '2daw.equip02'.users(id,username,password,email) VALUES ('$last_id','$nombre','$pasword','$correoElectronico')");
    }
    

}



$file=fopen('registro.txt','a');
fwrite($file,$nombre.' '.$primerApellido.' '.' '.$segundoApellido.' '.' '.$correoElectronico.' '.$pasword."\n" );
fclose($file);