<?php

namespace App\Http\Controllers;

use App\Models\Models;
use App\Models\Category;
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
        return view("models.create", [
            "categories"=>Category::all()
        ]);
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

            'manufacturer' => 'required|max:30',
            'model' => 'required|max:30',
            'price' => 'required|max:10',
            'category_id' => 'required',
            'photo_id' => 'required'
        ]);

        //Coger los datos de la Photo_id
        $foto = $request->file('upload');
        $fileName = $foto->getClientOriginalName();
        $fileSize = $foto->getSize();

        //Subir la imagen al disco duro
        $fotoName = time() . '_' . $fileName;
        $filePath = $foto->storeAs(
            'uploads',
            $fotoName,
            'public'
        );

        if(Storage::disk('public')->exists($filePath)) {

            $fullPath = Storage::disk('public')->path($filePath);

            //Guardar los datos del archivo a la BBDD
            $file = File::create([

                'filepath' => $filePath,
                'filesize' => $fileSize
            ]);

            $fileId = $file->id;

            $model = Models::create([

                'manufacturer' => $request->manufacturer,
                'model' => $request->model,
                'price' => $request->price,
                'category_id' => $request->categories,
                'photo_id' => $fileId
            ]);

            return redirect()->route('models.show', $model)
            ->with('success', 'Model creado correctamente');

        } else {

            return redirect()->route("models.create")
            ->with('error', 'ERROR al crear el modelo: el archivo ya existe');
        }
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
            "model"=>$model,
            "category"=>Category::find($model->category_id)
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

            "model"=>$model,
            "category"=>Category::find($model->category_id),
            "categories"=>Category::all(),
            "file"=>File::find($model->photo_id)
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
        $request->validate([

            'manufacturer' => 'required|max:30',
            'model' => 'required|max:30',
            'price' => 'required|max:10',
            'category_id' => 'required',
            'photo_id' => 'required'
        ]);

        //Coger los datos de la photo_id
        $foto = $request->file('upload');
        $fileName = $foto->getClientOriginalName();
        $fileSize = $foto->getSize();

        //Subir archivo al disco duro
        $fotoName = time() . '_' . $fileName;
        $filePath = $foto->storeAs(
            'uploads',
            $fotoName,
            'public'
        );

        if(Storage::disk('public')->exists($filePath)) {

            $fullPath = Storage::disk('public')->path($filePath);

            //Guardar datos del archivo en la BBDD
            $file = File::create([
                'filepath' => $filePath,
                'filesize' => $fileSize
            ]);

            $fileId = $file->id;

            $model->update([
                'manufacturer' => $request->manufacturer,
                'model' => $request->model,
                'price' => $request->price,
                'category_id' => $request->categories,
                'photo_id' => $fileId
            ]);

            return redirect()->route('models.show', $model)
            ->with('success', 'Model actualizado correctamente');

        } else {

            return redirect()->route('models.edit')
            ->with('error', 'ERROR actualizando el model: el archivo ya existe');
        }
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