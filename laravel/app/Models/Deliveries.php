<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deliveries extends Model {

    use HasFactory;

    protected $fillable = [

        'hours',
        'price',
        'company_id'
    ];
}