<?php

namespace App\Http\Controllers;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Ticket;



class CommentController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function index($tid){
         $comment= Comment::where('ticket_id','=',$tid)->get();

    //    $comments=Comment::all();
       return \response($comment);

     }
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($tid,Request $request)
    {
        $request->validate([
            'msg'=>'required|max:255',
            'author_id'=>'required',
            'ticket_id'=>'required'
        ]);
        $all=$request->all();
        $all["ticket_id"]=$tid;
        $comment=Comment::create($all);
        return \response($comment);
    }
     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($tid,$id)
    {
        $comments = Comment::where('ticket_id','=',$tid)
        ->findOrFail($id);
        return \response($comments);
        }
        // $comment=Comment::find($id);
        // return response($comment);

     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $comment=Comment::findOrFail($id)
        ->update ($request->all());
        return response($comment);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id,$tid)
    {
        Comment::where('ticket_id','=',$tid);
        Comment::destroy($id);
        return response(content:" La tarea ${id} ha sido eliminada con exito");
    }
}
