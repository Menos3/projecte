<?php

namespace App\Http\Controllers;
use App\Models\File;
use Illuminate\Http\Request;
use  Illuminate\Support\Facades\Log;
use  Illuminate\Support\Facades\Storage;

// use App\Http\Controller\Validator\Validator;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return view("files.index", [
            "files"=>File::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('files.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate ([
            'cargar' => 'required|mimes:gif,jpeg,jpg,png|max:2048'
        ]);
        $upload =$request->file('cargar');
        $fileName=$upload->getClientOriginalName();
        $fileSize=$upload->getSize();
        Log::debug("Upload '{$fileName}' ($fileSize).");

        //Subir el fichero al disco locales
        $uploadName= time()."_".$fileName;
        $filePath =$upload->storeAs(
            'cargar',
            $uploadName,
            'public'
        );
        if(Storage::disk('public')->exists($filePath)){
            Log::debug("Local storage esta todo bien");
            $fullPath = Storage::disk('public')->path($filePath);
            Log::debug("El archivo se ha guardo en {$fullPath}");
            $file=File::create([
                'filepath'=>$filePath,
                'filesize'=>$fileSize,
            ]);
            Log::debug("DB storage funciona");

            return redirect()->route('files.show',$file)
            ->with ('exito', 'Se ha guardado satisfactoriamente');


        }else{
        Log::debug("Fallo la carga en Localización");
        return redirect()->route("files.create")
            ->with('error', 'Error al subir el archivo');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function show(File $file)
    {
            return view("files.show", [
                "file"=>$file
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function edit(File $file)
    {
        return view("files.edit", ["file"=>$file]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, File $file)
    {
        $validatedData = $request->validate ([
            'foto' => 'required|mimes:gif,jpeg,jpg,png|max:2048'
        ]);
        $upload =$request->file('foto');
        $fileName=$upload->getClientOriginalName();
        $fileSize=$upload->getSize();
        Log::debug("Upload '{$fileName}' ($fileSize).");

        //Subir el fichero al disco locales
        $uploadName= time()."_".$fileName;
        $filePath =$upload->storeAs(
            'foto',
            $uploadName,
            'public'
        );
        if(Storage::disk('public')->exists($filePath)){
            Log::debug("Local storage esta todo bien");
            $fullPath = Storage::disk('public')->path($filePath);
            Log::debug("El archivo se ha guardo en {$fullPath}");
            $file->filepath = $filePath;
            $file->filesize = $fileSize;
            $file->save();
            Log::debug("DB storage funciona");

            return redirect()->route('files.show',$file)
            ->with ('exito', 'Se ha guardado satisfactoriamente');


        }else{
        Log::debug("Fallo la carga en Localización");
        return redirect()->route("files.edit")
            ->with('error', 'Error al subir el archivo');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\File  $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(File $file)
    {
        //
    }
}
