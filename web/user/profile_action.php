<?php
require_once __DIR__ . "/../../vendor/autoload.php";
use Rakit\Validation\Validator;

$validator = new Validator;

$validation = $validator->make($_POST + $_FILES, [
    'username' => 'required',
    'email' =>  'required|email',
    'passwordNew' => 'required|min:8',
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
   
}

?>