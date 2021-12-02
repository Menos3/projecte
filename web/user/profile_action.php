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
    'avatar'   =>'required|uploaded_file:0,2Mb,jpg,png,gif,jpeg'
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

    $sql=$query->prepare( "SELECT * FROM users WHERE email ='{$_POST["email"]}'");
    $sql->execute();
    $resultados =$sql->fetchAll(PDO::FETCH_OBJ);
    if($sql->rowCount()>0){
        $url=My\Helpers::url("profile.php");
        My\Helpers::redirect($url);
    }
    else{
        
        $sql = $query->prepare("SELECT token FROM user_tokens WHERE user_id = 1");
        $sql->execute();
        //aqui esta el TOKEN
        $resultado=$sql->fetch(PDO::FETCH_OBJ);
        
        $passwordEncriptado=hash('sha256', '$_POST["passwordRepit"]');
        $sql=$query->prepare("UPDATE users set username='{$_POST["username"]}',email='{$_POST["email"]}',password='{$passwordEncriptado}', status=0");
        $sql->execute();

        $correo=new My\Mail("NOTIFICACIÓ CANVI DE EMAIL",'El seu email ha sigut canviat amb exit. Fes click amb aquest enllaç: <a href="http://localhost/projecte/web/user/profile.php?token='."hola".'"></a>', false);
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