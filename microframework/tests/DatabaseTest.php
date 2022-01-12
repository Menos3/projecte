<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;
use My\Database;

final class DatabaseTest extends TestCase
{
   public function testConnection(): Database
   {
       $db = new Database();
       $this->assertIsObject($db);
       return $db;
   }
 
   /**
    * @depends testConnection
    */
    //para conectarnos
   public function testStatements(Database $db): void
   {    
        $db->open();
        $query = $db->prepare("SELECT email, role_id FROM users WHERE username= 'admin'");
        $query->execute();
        $resultado = $query->fetchAll();
        $contador =count($resultado);
        print ($contador);
        $this->assertEquals($contador,1);
        $db->close();
        $query = $db->prepare("SELECT email, role_id FROM users WHERE username= 'admin'");
        $query->execute();
        $resultado = $query->fetchAll();
        $contador =count($resultado);
        $this->assertEquals($contador,0);

        
        


    //    $db->open();
    //    $query= "SELECT email, role_id FROM users WHERE username= 'admin'";
       
    }
   
}
