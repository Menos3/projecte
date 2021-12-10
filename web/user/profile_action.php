<?php
require_once __DIR__ . "/../../vendor/autoload.php";
require_once __DIR__ . "/../../config/database.php";
// $db=new My\Database();
// $db->open();
use My\Mail;
use Rakit\Validation\Validator;

$validator = new Validator;

$validation = $validator->make($_POST + $_FILES, [
    'username' => 'required',
    'email' =>  'required|email',
    'passwordNew' => 'required|min:8|regex: /\d/',
    'passwordRepit'   => 'same:passwordNew',
    'avatar'   =>'uploaded_file:0,2Mb,jpg,png,gif,jpeg'
]);
$validation->validate();
if($validation->fails()){
    $errors =$validation->errors();
    echo "<pre>";
    print_r ($errors->firstOfAll());
    echo"</pre>";
}

else {
    $query= new My\Database;
    $query->open();

    //imagen subir 
    $sql = "SELECT MAX(id) FROM files";
    $sentencia = $query->prepare($sql);
    $sentencia->execute();
    $last_id = $query->lastInsertId();
   
    if ( !empty($_FILES["avatar"]) ){
        $image_array = $_FILES["avatar"];
        $ruta = My\Helpers::upload($_FILES["avatar"],$_POST["username"]);
        My\Helpers::log()->debug("ruta".$ruta);
        $sql = "INSERT INTO files (filepath, filesize, uploaded) VALUES ('{$ruta}', '{$image_array["size"]}', now() )";
        $sentencia = $query->prepare($sql);
        $sentencia->execute();
        $last_id = $query->lastInsertId();
        My\Helpers::log()->debug($last_id);
    }

    
    
    $sql=$query->prepare( "SELECT * FROM users WHERE email ='{$_POST["email"]}'");
    $sql->execute();
    

    if($sql->rowCount()>0){
        //Email no actualizado
        //actualizar password y avatar
        $passwordEncriptado=hash('sha256', '$_POST["passwordRepit"]');
        $sql=$query->prepare("UPDATE users set password='{$passwordEncriptado}', avatar_id= '$last_id'");
        $sql->execute();
        My\Helpers::flash("cuenta actualizada");
        $url=My\Helpers::url("/user/profile.php");
        My\Helpers::redirect($url);
    }

    else{      

        /* $sql=$query->prepare( "SELECT token FROM user_tokens WHERE user_id ='{$_POST["user_id"]}'");
        $sql->execute();
        $resultados =$sql->fetchAll(PDO::FETCH_OBJ); */
        $passwordEncriptado=hash('sha256', '$_POST["passwordRepit"]');
        $sql=$query->prepare("UPDATE users set email='{$_POST["email"]}',password='{$passwordEncriptado}', status=0, avatar_id='{$last_id}' WHERE id='{$_POST["user_id"]}'" );
        $sql->execute();
        //creacion del token
        $bytes = random_bytes(20);
        $token = bin2hex($bytes);
        //insertar token
        $sqltoken = "INSERT INTO user_tokens (token, 'type' ) VALUES ('$token', 'A')";
        $url="http://localhost/projecte/web/user/profile.php";
        $url .= '?token='.$token;

        $correo=new My\Mail("NOTIFICACIÓ CANVI DE EMAIL",'El seu email ha sigut canviat amb exit. Fes click amb aquest enllaç: <a href="'.$url.'"></a>', false);
        $email=[$_POST["email"]];
        $enviado=$correo->send($email);
        if($enviado){
            My\Helpers::flash("enviado");
        }
        else{
            My\Helpers::flash("este correo no EXISTE");
        }
        
    }
    }


    


    
    // $sql=('INSERT into users (username, password, status, role_id,avatar_id, created, last_access ) VALUES ("{$_POST["username"]}","{$_POST["password"]}","{$_POST["status"]}",0,"{$_POST["avatar_id"]}","","")');
    
    // if
    //en la select
    // $query= execute();
    // $result= $query->fetchAll(PDO::FETCH_OBJ);
    // $database->prepare($sql);
    // $data=PDOState->execute();


?>