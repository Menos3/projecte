<?php

namespace App\Http\Controllers;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        // $status=Status::where('ticket_id','=',$tid);
        $statu = DB::table('status')
        ->select('id','name')
        ->get();
        return \response($statu);
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
            'name'=>'required|max:30'
        ]);
        $status=Status::create($request->all());
        return \response($status);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show ($id){
        $status=Status::find($id);

        return \response($status);
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
        Status::findOrFail($id)
            ->update($request->all());
        return response("se ha actualizado");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Status::destroy($id);
        return response(content:" La tarea ${id} ha sido eliminada con exito");
    }
}
