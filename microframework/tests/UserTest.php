<?php
use PHPUnit\Framework\TestCase;
use My\User;
use My\Token;
use My\Database;
final class UserTest extends TestCase{

    
    public function testId():void{
        $_SESSION['uid']=1;   
        echo($_SESSION['uid']);
        $num= User::getId();
        echo($num);
        $this->assertEquals($_SESSION['uid'],$num);
        
    }
    // public function testToken():void{
    //     $token=Token::generate();
    //     $db = new Database();
    //     $db->open();
    //     $query = $db->prepare("INSERT INTO user_tokens(user_id,token,created) VALUES(1,'$token','2021/12/20 18:44:00') ");
    //     $query->execute();
    //     $db->close();
    //     $str=User::getToken();
    //     $this->assertEquals($token,$str);
    // }
    public function testAutentifaction():void{
        $bol=User::isAuthenticated();
        $this->assertFalse($bol);
        

    }
}


?>