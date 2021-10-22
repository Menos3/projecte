<?php declare(strict_types=1);
 
use PHPUnit\Framework\TestCase;
use My\Helpers;
 
final class HelpersTest extends TestCase
{
   public function testExpectedText(): void {
       $txt = Helpers::sayHello("Pep");
       $this->assertEquals("Hello Pep", $txt);
   }
   public function testUrl():void {
    //nos hemos quedado aqui!!!!!!!!
    //comença per “http://” quan l’argument $ssl és FALS (o no es passa l’argument)
    $url = Helpers::url("localhost/projecte/web/", true);
    $this->assertStringStartsWith("https",$url);
    //okey bad
    $url = Helpers::url("localhost/projecte/web/",false);
    $this->assertStringStartsWith("http",$url);
    //comença per “https://” quan l’argument $ssl és CERT
    //sempre inclou la ruta relativa al final
    $url = Helpers::url("localhost/projecte/web/");
    $this->assertStringStartsWith("http",$url);



   }

   
}
