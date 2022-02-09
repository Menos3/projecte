<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("roles")-> insert([
            'name'=>"admin",
        ]);
        DB::table("roles")-> insert([
            "name"=>'basic',
        ]);
        DB::table("roles")-> insert([
            "name"=>'tech',
        ]);
        DB::table("roles")-> insert([
            "name"=>'coord',
        ]);

    }
}
