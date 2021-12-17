<?php
namespace My;
class User{
    //configuracion de la clase
    const COOKIE_NAME='session_token';
    public static function getId(): int
    {   
        session_start();
        return $_SESSION['uid'];

    }
    public static function getToken():string{
        
        return $_COOKIE[COOKIE_NAME];
    }
    public static function isAuthenticated():bool{
            if(isset($_COOKIE[COOKIE_NAME])){
                return true;
            }else{return false;}
    }
}

?>