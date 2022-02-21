<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MessagesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_messages_listed() {

        $response = $this->get('/api/messages');
        $response->assertStatus(200);
    }

    public function test_message_created() {

        $message = [
            'message' => "Hola Test",
            'chat_id' => 6,
            'author_id' => 2
        ];

        $response = $this->postJson('api/messages/', $message);
        $response->assertStatus(200);

        $json = json_decode($response->getContent());

        return $json->id;
    }

    /** 
     * @depends test_message_created
    */
    public function test_message_get($id) {

        $response = $this->get("api/messages/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @depends test_message_created
     */
    public function test_message_update($id) {

        $response = $this->put("api/messages/{$id}",
        [
            'message' => "Hello World, Test is here"
        ]);
        $response->assertStatus(200);
    }

    /**
     * @depends test_message_created
     */
    public function test_message_deleted($id) {

        $response = $this->delete("api/messages/{$id}");
        $response->assertStatus(200);
    }
}
