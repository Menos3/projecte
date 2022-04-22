<?php

namespace App\Http\Controllers;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;


class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("roles.index", [
            "roles"=>Role::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('roles.create');
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
            'createRole' => 'required|max:20'
        ]);
        $roleName = $request->createRole;
        $role = Role::create([
            'name'=> $roleName
        ]);

        // return view("roles.index",[
        //     "roles"=>Role::all()
        // ]);

        return redirect()->route('roles.show', $role)
        ->with('success', 'Rol creado correctamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        return view ("roles.show", [
            'role'=>$role
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        return view ("roles.edit", ["role"=>$role]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */

     //en el request es el nuevo role, y el $role es el antiguo.
    public function update(Request $request, Role $role)
    {
        //Solamente hace falta modificarlo en la base de datos.
        $validateData= $request->validate([
            'role'=>'required|max:20'
        ]);
        $upload=$request->role;
        $role->name=$upload;
        $role->save();



        Log::debug("Upload '{$upload}");
        return redirect()->route('roles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $role->delete();
        return redirect()->route('roles.index')->with('success', "Borrado");    }
}
