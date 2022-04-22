<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable=[
        'id',
        'name'
    ];
    protected $cast=[
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];
}
