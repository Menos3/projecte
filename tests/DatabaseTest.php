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
    
        $db = testConnection();
   }
}
