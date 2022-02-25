<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CommentTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    // Llistas
    public function test_comments_listed()
    {
        $response = $this->get('/api/comments');

        $response->assertStatus(200);
    }
    //CREACION
    public function test_comment_created($id)
    {
        $comment=[
            'msg'=>'me esta empezando a gustar esto',
            'created_at'=>"2022-02-17 17:49:56",
            'updated_at'=>"2022-02-17 17:49:56",
            'author_id'=>2,
            'ticket_id'=>$id


        ];

        $response=$this->postJson('api/tickets/'+$id+'/comments/', $comment);
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
        $response=$this->get("api/comments/{$id}");
        $response->assertStatus(200);

    }
    //ACTUALIZAR
    /**
     * @depends test_comment_created
     */
    public function test_comment_update($id){
        $response=$this->put("api/comments/{$id}",
        [
            'msg'=>'lo que no se grabó'
        ]);
        $response->assertStatus(200);
    }
    //BORRAR TICKETS
    /**
     * @depends test_comment_created
     */
    public function test_comment_deleted($id){
        $response=$this->delete("api/comments/{$id}");
        $response->assertStatus(200);
    }
}


