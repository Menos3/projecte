<?php

require_once __DIR__ . "/../../vendor/autoload.php";
use Rakit\Validation\Validator;
use PHPMailer\PHPMailer\Exception as PHPMailerException;
use My\Helpers;
use My\Database;
use My\Mail;
use My\Token;
use My\User;

if (User::isAuthenticated()) {

    Helpers::flash("Accés no autoritzat");    
    $url = Helpers::url("/index.php"); // Go to homepage

}else {

    //libreria Helpers url actualizada
    $url = Helpers::url("/contact.php");

    $validator = new Validator();

    $validation = $validator->make($_POST + $_FILES, [
        'subject'               => 'required',
        'body'                   => 'required',
        'email'                 => 'required|email',
        'attachment'            => 'uploaded_file|max:1M',
    ]);
    $validation->validate();
    //si la validacion tiene fallos
    if ($validation->fails()) {
     //coge los fallos [] y luego se reccorre enseñando fallo a fallo
        $errors = $validation->errors();
        $messages = $errors->all();
        foreach ($messages as $message) {
            Helpers::flash($message);
        }

    }else {
        //para la cookie
        $uid=1;
        $datetime=date('Y-m-d H:i:s');

        
        
        //para el mail
        $asumte=$_POST["subject"];
        $cos=$_POST["cos"];
        $mail=$_POST["email"];
        // if(!empty($_POST['attachment'])){
        // Helpers::log()->debug("Uploading file en la carpeta temporal",$_FILES[""]);
        // }

        if(!empty($_POST["username"])){
            $urlMail=Helpers::url("/contact.php");
            $link="<a href=''>aquí</a>";
            $eMail= new Mail("{$subject}","{$username} envia aquest text {$cos}","Enviado desde{$urlMail}");
            $send=$eMail->send([$email]);

        }
        else{
            $urlMail=Helpers::url("/contact.php");
            $link="<a href='${$urlMail}'>aquí</a>";
            $eMail= new Mail("{$subject}","Anònim envia aquest email{$cos}","Enviado desde{$urlMail}");
            $send=$eMail->send([$email]);

        }
        if($send){
            Helpers::url("/contact.php");
            Helpers::log()->debug("email enviat!");
        }
        else{
            Helpers::redirect("/index.php");
            Helpers::log()->debug("error en em enviament del mail.");

        }


       
       
    }
    Helpers::redirect($url);
}