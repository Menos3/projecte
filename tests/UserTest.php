<?php
use PHPUnit\Framework\TestCase;
use My\User;
use My\Token;
use My\Database;
final class UserTest extends TestCase{

    public function testId():void{
        $number= User::getId();
        $this->assertEquals(1,$number);
    }
    public function testToken():void{
        $token=Token::generate();
        $db = new Database();
        $db->open();
        $query = $db->prepare("INSERT INTO user_tokens(token) VALUES($token) ");
        $query->execute();
        $db->close();
        $str=User::getToken();
        $this->assertEquals($token,$str);
    }
    public function testAutentifaction():void{
        $bol=User::isAuthenticated();
        $this->assertTrue($bol);
        

    }
}


?>