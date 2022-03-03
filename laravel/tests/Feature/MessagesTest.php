<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MessagesTest extends TestCase
{
    const CHATID = 1;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_messages_listed() {

        $cid = self::CHATID;

        $response = $this->get("/api/chats/{$cid}/messages");
        $response->assertStatus(200);
    }

    public function test_message_created() {

        $cid = self::CHATID;

        $message = [
            'message' => "Hola Test",
            'chat_id' => $cid,
            'author_id' => 1
        ];

        $response = $this->postJson("api/chats/{$cid}/messages", $message);
        $response->assertStatus(200);

        $json = json_decode($response->getContent());

        return $json->id;
    }

    /** 
     * @depends test_message_created
    */
    public function test_message_get($id) {

        $cid = self::CHATID;
        $response = $this->get("api/chats/{$cid}/messages/{$id}");
        $response->assertStatus(200);
    }

    /**
     * @depends test_message_created
     */
    public function test_message_update($id) {

        $cid = self::CHATID;

        $response = $this->put("api/chats/{$cid}/messages/{$id}",
        [
            'message' => "Hello World, Test is here"
        ]);
        $response->assertStatus(200);
    }

    /**
     * @depends test_message_created
     */
    public function test_message_deleted($id) {

        $cid = self::CHATID;
        $response = $this->delete("api/chats/{$cid}/messages/{$id}");
        $response->assertStatus(200);
    }
}