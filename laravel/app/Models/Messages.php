<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'chat_id',
        'author_id'
    ];

    protected $casts = [
        'created' => 'datetime'
    ];
}
