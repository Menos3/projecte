<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class provaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_prova_created()
    {
        $prova=[

            'name'=>'sexo en New TICKET'

        ];

        $response=$this->postJson('api/provas/', $prova);
        $response->assertStatus(201);

        $json = json_decode($response->getContent());

        return $json->id;
    }



}
