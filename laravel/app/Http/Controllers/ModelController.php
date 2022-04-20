<?php

namespace App\Http\Controllers;

use App\Models\Models;
use Illuminate\Http\Request;

class ModelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("models.index", [
            "models"=>Models::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("models.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function show(Models $model)
    {
        return view("models.show", [
            "model"=>$model
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function edit(Models $model)
    {
        return view("models.edit", [
            "model"=>$model
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Models $model)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Models  $models
     * @return \Illuminate\Http\Response
     */
    public function destroy(Models $model)
    {
        $foto = File::find($model->photo_id);
        Storage::disk('public')->delete($foto->filepath);
        $model->delete();
    }
}