<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StatusTest extends TestCase
{
    const ticketId=1;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_status_listed()
    {
        $response = $this->get('/api/tickets/status');

        $response->assertStatus(200);
    }
    public function test_status_created()
    {
        $status=[
            'name'=>'acabado'
        ];

        $response=$this->postJson('api/status/', $status);
        $response->assertStatus(200);

        $json = json_decode($response->getContent());

        return $json->id;
    }
    //obtener un Ticket con un ID especifico
    /**
     * @depends test_status_created
     */
    public function test_status_get($id)
    {
        $response=$this->get("api/status/{$id}");
        $response->assertStatus(200);

    }
    //ACTUALIZAR
    /**
     * @depends test_status_created
     */
    public function test_status_update($id){
        $response=$this->put("api/status/{$id}",
        [
            'name'=>'gucci'
        ]);
        $response->assertStatus(200);
    }
    //BORRAR TICKETS
    /**
     * @depends test_status_created
     */
    public function test_status_deleted($id){
        $response=$this->delete("api/status/{$id}");
        $response->assertStatus(200);
    }
}



