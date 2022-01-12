<?php
// use PHPUnit\Framework\TestCase;
// use My\Database;
// poner el autoLoad con el required
require_once __DIR__ . "/../../vendor/autoload.php";
$db = new My\Database();


$nombre=$_POST["fname"];
$primerApellido=$_POST["cognom"];
$segundoApellido=$_POST["cognom2"];
$correoElectronico=$_POST["mail"];
$pasword=$_POST["contraseña"];
$role=2;
$opcionesPasword = [
    'cost' => 12,
];
$pasword=password_hash($pasword, PASSWORD_BCRYPT,$opcionesPasword);

$sentencia=$db->prepare("select * from users");
$sentencia -> execute();

foreach ($sentencia as $row)
{
    if ($row['email']==$correoElectronico ){
        My\Helpers::flash("El correo electronico ya existe");
        $url=My\Helpers::url("/user/registrer.php");
    }else{
        // $sentencia=$db->prepare("select id from users");
        // $sentencia->execute();
        // $id=count($sentencia);
        // $id=$id +1;
        
        // $dataCreacio=new DateTime();
        $datetime = date('Y-m-d H:i:s');
        

        $status=0;
        // $avatar=$_FILES['avatar'];
        
    }
    

}

$sql="insert into users(username,password,email,status,role_id, created,last_access) VALUES ('{$nombre}','{$pasword}','{$correoElectronico}',{$status},{$role},'{$datetime}','{$datetime}')";
        $insert=$db->prepare($sql);
        $insert ->execute();
        $last_id = $db->lastInsertId();



$file=fopen('registro.txt','a');
fwrite($file,$nombre.' '.$primerApellido.' '.' '.$segundoApellido.' '.' '.$correoElectronico.' '.$pasword."\n" );
fclose($file);