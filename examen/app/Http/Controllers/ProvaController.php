<?php

namespace App\Http\Controllers;
use App\Models\Prova;
use Illuminate\Http\Request;

class ProvaController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|max:50'
        ]);

        $prova=Prova::create($request->all());
        return \response($prova,201);

        // return Response::json([
        //     'hello' => $value
        // ], 201); // Status code here
    }
     //listar tickets
     public function show($id)
    {
        $prova=Prova::find($id);
        return response($prova);
    }
}
