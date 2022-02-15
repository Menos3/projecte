<?php

namespace App\Http\Controllers;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Task;


class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     //listar tickets
    public function index()
    {
        $ticket=DB::table('tickets')
        ->select('id','title','assigned_id')
        ->get();
        return \response($ticket);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required|max:50',
            'description'=>'required|max:255',
            'author_id'=>'required',
            'assigned_id'=>'required',
            'asset_id'=>'required'
        ]);

        $ticket=Ticket::create($request->all());
        return \response($ticket);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ticket=Ticket::findOrFail($id);
        return response($ticket);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ticket=Ticket::findOrFail($id)
            ->update($request->all());
        return response($ticket);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Ticket::destroy($id);
        return response(content:" La tarea ${id}ha sido eliminada con exito");
    }
}
