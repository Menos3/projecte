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
    public function test_tickets_listed()
    {
        $response = $this->get('/api/tickets');

        $response->assertStatus(200);
    }
    public function test_ticket_created()
    {
        $ticket=[
            'title'=>'sexo en New TICKET',
            'description'=>'no se pudo rodar por falta de LOS FATALISIMOS TICKETSSSSSSS',
            'author_id'=>1,
            'assigned_id'=>0,
            'asset_id'=>2,

        ];

        $response=$this->postJson('api/tickets/', [$ticket]);
        $response->assertStatus(200);
    }
    //obtener un Ticket con un ID especifico
    public function test_ticket_get()
    {
        $response=$this->get('api/tickets/1');
        $response->assertStatus(200);

    }
    public function test_ticket_update(){
        $response=$this->put('api/tickets/1',
        [
            'title'=>'lo que no se grabó',
            'description'=>'nunca pasó controle',

        ]);
        $response->assertStatus(200);
    }
    public function test_ticket_deleted(){
        $response=$this->delete('api/tickets/1');
        $response->assertStatus(200);
    }
}
