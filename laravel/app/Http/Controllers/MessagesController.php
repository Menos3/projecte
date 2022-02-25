<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Messages;
use Illuminate\Support\Facades\DB;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($cid)
    {

        $messages = Messages::where('chat_id', "=", $cid);

        return response($messages);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($cid, Request $request)
    {
        $request->validate([
            'message'=> 'required|max:255',
            'author_id'=> 'required',
            'chat_id'=> 'required'
        ]);

        $message = Messages::create($request->all());

        return response($message);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($cid, $mid)
    {
        $message = Messages::findOrFail($mid);

        return response($message);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($cid, Request $request, $mid)
    {
        $message = Messages::findOrFail($mid)
        ->update($request->all());

        return response($message);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($cid, $mid)
    {
        Messages::destroy($mid);
        return response(content: "El mensaje ${mid} ha sido eliminado con exito");
    }
}