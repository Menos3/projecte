<?php


require_once __DIR__ . "/../../vendor/autoload.php";
$correoElectronico=$_POST["mail"];
$pasword=$_POST["contraseña"];
  
$db = new My\Database();

$sentencia=$db->prepare("select * from users");
$sentencia -> execute();

foreach ($sentencia as $row)
{
    if ($row['email']==$correoElectronico & $row['password']==$pasword ){
      //  Eso significa que ya esta registrado
      echo "Bienvenido";
      // Link al Layaout

    }else{
        echo"Fallo";
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

