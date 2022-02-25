<?php

namespace Tests\Feature;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TicketTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    //LISTAR
    public function test_tickets_listed()
    {
        $response = $this->get('/api/tickets');

        $response->assertStatus(200);
    }
    //CREACION
    public function test_ticket_created()
    {
        $ticket=[
            'title'=>'sexo en New TICKET',
            'description'=>'no se pudo rodar por falta de LOS FATALISIMOS TICKETSSSSSSS',
            'assigned_id'=>2,
            'asset_id'=>2,
            'created_at'=>"2022-02-17 17:49:56",
            'updated_at'=>"2022-02-17 17:49:56",
            'author_id'=>1,
            'status_id'=>1


        ];

        $response=$this->postJson('api/tickets/', $ticket);
        $response->assertStatus(200);

        $json = json_decode($response->getContent());

        return $json->id;
    }
    //obtener un Ticket con un ID especifico
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
     * @depends test_ticket_created
     */
    public function test_ticket_update($id){
        $response=$this->put("api/tickets/{$id}",
        [
            'title'=>'lo que no se grabó',
            'description'=>'nunca pasó controle',



        ]);
        $response->assertStatus(200);
    }
    //BORRAR TICKETS
    /**
     * @depends test_ticket_created
     */
    public function test_ticket_deleted($id){
        $response=$this->delete("api/tickets/{$id}");
        $response->assertStatus(200);
    }
}
