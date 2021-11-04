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
    $path = "localhost/projecte/web/user";
    //comença per “http://” quan l’argument $ssl és FALS (o no es passa l’argument)
    $url = Helpers::url($path, true);
    $this->assertStringStartsWith("https",$url);
    $this->assertStringEndsWith($path, $url);
    //okey bad
    $url = Helpers::url($path,false);
    $this->assertStringStartsWith("http",$url);
    $this->assertStringEndsWith($path, $url);
    //comença per “https://” quan l’argument $ssl és CERT
    //sempre inclou la ruta relativa al final
    $url = Helpers::url($path);
    $this->assertStringStartsWith("http",$url);
    $this->assertStringEndsWith($path, $url);



   }
   public function testLog(): void
   {
       $logger = Helpers::log();
       $this->assertIsObject($logger);
       // Calling methods using object or directly works...
       $logger->info("PHPUnit test");
       Helpers::log()->debug("PHPUnit test");
   }

   
}

