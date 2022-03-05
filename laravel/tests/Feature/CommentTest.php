<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CommentTest extends TestCase

{
    const NUMTICKET=1;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    // Llistas
    public function test_comments_listed()
    {
        $tid=self::NUMTICKET;
        $response = $this->get("/api/tickets/{$tid}/comments/");

        $response->assertStatus(200);
    }
    //CREACION
    public function test_comment_created()
    {
        $tid=self::NUMTICKET;
        $response = $this->post("/api/tickets/{$tid}/comments",[
            'msg'=>'me esta empezando a gustar esto',
            'author_id'=>1,
            'ticket_id'=>$tid,
        ]);

        $response->assertStatus(200);
        $json = json_decode($response->getContent());

        return $json->id;
    }
    //obtener un Ticket con un ID especifico
    /**
     * @depends test_comment_created
     */
    public function test_comment_get($id)
    {
        $tid=self::NUMTICKET;
        $response=$this->get("api/tickets/{$tid}/comments/{$id}");
        $response->assertStatus(200);

    }
    //ACTUALIZAR
    /**
     * @depends test_comment_created
     */
    // public function test_comment_update($id){
    //     $response=$this->put("api/comments/{$id}",
    //     [
    //         'msg'=>'lo que no se grabó'
    //     ]);
    //     $response->assertStatus(200);
    // }
    //BORRAR TICKETS
    /**
     * @depends test_comment_created
     */
    public function test_comment_deleted($id){
        $tid=self::NUMTICKET;
        $response=$this->delete("api/tickets/{$tid}/comments/{$id}");
        $response->assertStatus(200);
    }
}


