<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_task_created()
    {
        $task=[
            'title'=>'Arreglar cañerias',
            'description'=>'no se puede usar el WC hay qie arreglar sus cañerias',
            'assigned_id'=>2,
            'asset_id'=>2,
            'created_at'=>"2022-02-17 17:49:56",
            'updated_at'=>"2022-02-17 17:49:56",
            'author_id'=>2,


        ];

        $response=$this->postJson('api/task/', $task);
        $response->assertStatus(200);

        $json = json_decode($response->getContent());

        return $json->id;
    }

     /**
     * @depends test_ticket_created
     */
    public function test_ticket_get($id)
    {
        $response=$this->get("api/tickets/{$id}");
        $response->assertStatus(200);

    }
    //ACTUALIZAR
    /**
     * @depends test_task_created
     */
    public function test_task_update($id){
        $response=$this->put("api/task/{$id}",
        [
            'title'=>'Cañerias',
            'description'=>'ya se esta arreglando',



        ]);
        $response->assertStatus(200);
    }
    //BORRAR TICKETS
    /**
     * @depends test_task_created
     */
    public function test_task_deleted($id){
        $response=$this->delete("api/task/{$id}");
        $response->assertStatus(200);
    }





}
