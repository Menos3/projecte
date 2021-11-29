<?php
require_once __DIR__ . "/../../vendor/autoload.php";
require_once __DIR__ . "/../../config/database.php";
// $db=new My\Database();
// $db->open();

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
        foreach($resultados as $resultado){
            echo "$resultado->id";
        }
    }}


    


    
    // $sql=('INSERT into users (username, password, status, role_id,avatar_id, created, last_access ) VALUES ("{$_POST["username"]}","{$_POST["password"]}","{$_POST["status"]}",0,"{$_POST["avatar_id"]}","","")');
    
    // if
    //en la select
    // $query= execute();
    // $result= $query->fetchAll(PDO::FETCH_OBJ);
    // $database->prepare($sql);
    // $data=PDOState->execute();


?>