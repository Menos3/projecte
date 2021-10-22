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

}
