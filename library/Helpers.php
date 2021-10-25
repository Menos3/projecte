<?php

namespace My;



class Helpers{

    public static function sayHello($username) {
        return "Hello {$username}";
    }

public static function url(string $path, bool $ssl = false): string 
{
       $protocol = $ssl ? "https" : "http";
       return "{$protocol}://localhost/projecte/{$path}";
   }
   public static function render(string $path, array $__params = []) : string 
   {
       ob_start();
       $root = __DIR__ . "/../web";
       include("{$root}/{$path}");
       $content = ob_get_contents();
       ob_end_clean();
       return $content;
   }
   public static function redirect(string $url) : string 
   {
       ob_flush(); // use ob_clean() instead to discard previous output       
       header("Location: {$url}");
       exit();
   }



}
