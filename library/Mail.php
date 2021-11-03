<?php
 
namespace My;
 
use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\Exception as PHPMailerException;
 
class Mail {
   // PHPMailer
   private $_mailer;
   private $_subject;
   private $_body;
   private $_isHTML;

 
   /**
    * Constructs mail
    *
    * @param string $subject
    * @param string $body
    * @param bool $isHTML (optional)
    */
   public function __construct(string $subject, string $body, bool $isHTML = false)

   {     // Setup SMTP server...
        $cnf=include(__DIR__."/../config/mail.php");
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Mailer = $cnf["server"]["protocol"];
        $mail->SMTPDebug  = $cnf["server"]["debug"];  
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = $cnf["server"]["security"];
        $mail->Port       = $cnf["server"]["port"];
        $mail->Host       = $cnf["server"]["host"];
        $mail->Username   = $cnf["server"]["username"];
        $mail->Password   = $cnf["server"]["password"];
        // Configure mail contact: from
        // Configure mail contact: reply...
        
        $mail->setFrom($cnf["from"]["mail"],$cnf["from"]["name"]);
        $mail->addReplyTo($cnf["reply"]["mail"],$cnf["reply"]["name"]);
        // Set subject and body (HTML or not)...
        $mail->Subject =$subject;
        $mail->IsHTML($isHTML);
        $mail->Body=$body;

        $this->_mailer = $mail;
    }
    
   /**
    * Send mail to recipients
    *
    * @param array $to
    * @param array $cc (optional)
    * @param array $bcc (optional)
    * @return bool
    */
   public function send(array $to, array $cc = [], array $bcc = []):bool
   {
    // Add recipients...
    foreach($to as $nombre => $correo){
        $this->_mailer->addAddress($correo, $nombre);
    }
    foreach($cc as  $nombre => $correo){
        $this->_mailer->addCC($correo, $nombre);
    }
    foreach($bcc as  $nombre => $correo){
        $this->_mailer->addBCC($correo, $nombre);
    }

    
    // Send mail...
    $ok=$this->_mailer->send();

    
    // Clear recipients...
    $this->_mailer->clearAllRecipients();
    return $ok;
    
}
}


