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
            'author_id'=>1
        ];

        $response = $this->postJson('api/chats/', $chat);
        $response->assertStatus(200);

        $json = json_decode($response->getContent());

        return $json->id;
    }

    /**
     * @depends test_chat_created
     */
    public function test_chat_get($id) {

        $response = $this->get("api/chats/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @depends test_chat_created
     */
    public function test_chat_update($id) {

        $response = $this->put("api/chats/{$id}", 
        [
            'name' => "prueba Testeo Update"
        ]);
        $response->assertStatus(200);
    }

    /**
     * @depends test_chat_created
     */
    public function test_chat_deleted($id) {

        $response = $this->delete("api/chats/{$id}");
        $response->assertStatus(200);
    }
}