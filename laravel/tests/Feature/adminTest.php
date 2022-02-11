<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class AdminTest extends TestCase
{
    /**
     * Test user admin exists
     *
     * @return void
     */
    public function test_exists()
    {
        $count = DB::table('users')
               ->where('username', '=', 'admin')
               ->count();
       $this->assertEquals($count, 1);
    }
}

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function test_making_an_api_request()
    {
        $response = $this->postJson('/api/user', ['name' => 'Sally']);
 
        $response
            ->assertStatus(201)
            ->assertJson([
                'created' => true,
            ]);
    }
}