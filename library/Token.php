<?php

namespace My;

class Token {

    const ACTIVATION = 'A';
    const RECOVER    = 'R';
    const SESSION    = 'S';
    
    /**
     * Generate random token
     * 
     * @param int $bytes (optional)
     * @return string
     */
    public static function generate(int $bytes = 20) : string
    {
        return bin2hex(random_bytes($bytes));
    }
}