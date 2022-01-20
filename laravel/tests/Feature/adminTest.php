<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;
class AdminTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_exists()
    {
        $count = DB::table ('users')
            ->where('username', '=', 'admin')
            ->count();
        $this->assertEquals($count,1);
       
    }
}
