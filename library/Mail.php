<?php
 
namespace My;
 
use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\Exception as PHPMailerException;
 
class Mail {
   // PHPMailer
   private $_mailer;
 
   /**
    * Constructs mail
    *
    * @param string $subject
    * @param string $body
    * @param bool $isHTML (optional)
    */
   public function __construct(string $subject, string $body, bool $isHTML = false)
   {
       // Setup SMTP server...
       // Configure mail contact: from and reply...
       // Set subject and body (HTML or not)...
   }
 
   /**
    * Send mail to recipients
    *
    * @param array $to
    * @param array $cc (optional)
    * @param array $bcc (optional)
    * @return bool
    */
   public function send(array $to, array $cc = [], array $bcc = [])
   {
    // Add recipients...
    // Send mail...
    // Clear recipients...
}
}


