<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ChatTest extends TestCase
{
    public function test_chats_listed() {

        $response = $this->get('/api/chats');
        $response->assertStatus(200);
    }

    public function test_chat_created() {

        $chat = [
            'name'=>"prueba de Testeo A",
            'author_id'=>2
        ];

        $response = $this->postJson('api/chats', [$chat]);
        $response->assertStatus(200);
    }

    public function test_chat_get() {

        $response = $this->get('api/chats/3');
        $response->assertStatus(200);
    }

    public function test_chat_update() {

        $response = $this->put('api/chats/3', 
        [
            'name' => "prueba Testeo Update"
        ]);
        $response->assertStatus(200);
    }

    public function test_chat_deleted() {

        $response = $this->delete('api/chats/3');
        $response->assertStatus(200);
    }
}