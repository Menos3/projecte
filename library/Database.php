<?php
namespace My;
class Database {
   // Config
   private $_dsn;
   private $_user;
   private $_password;
   // PDO
   private $_connection;
 
   /**
    * Constructs custom PDO
    */
   public function __construct()
   {
       $cnf = include(__DIR__ . "/../config/database.php");
       $this->_dsn = $cnf["driver"].":". implode(";",[
           "host=".$cnf["host"],
           "port=".$cnf["port"],
           "dbname=".$cnf["database"]
       ]);
       $this->_user = $cnf["user"];
       $this->_password = $cnf["password"];
       $this->open();
   }
 
   /**
    * Create PDO connection
    */
   public function open() : void
   {
       if (is_null($this->_connection)) {
           try {
               $this->_connection = new \PDO(
                   $this->_dsn,
                   $this->_user,
                   $this->_password
               );
           } catch (\PDOException $e) {
               throw new \Exception("DB connection error: " . $e->getMessage());
           }
       }
   }
 
   /**
    * Closes PDO connection
    */
   public function close() : void
   {
       $this->_connection = null;
   }
   public function __call($name, $arguments) : mixed
   {
       call_user_func_array([$this->_connection, $name], $arguments);
   }

}