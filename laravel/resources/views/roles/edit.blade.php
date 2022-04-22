@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Roles') }}</div>
               <div class="card-body">
                {{-- <form method="POST" action={{ url('store')}} accept-charset="UTF-8" enctype="multipart/form-data"> --}}
                <form role="form" method="POST" action="{{route('roles.update', $role)}}">
                    @csrf
                    @method('PUT')
                    <label for='id'>Id</label>
                    <input name='id' readonly value={{$role->id}}>
                    <label for='role'>Nombre al Role</label>
                    <input type='text' name='role'>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                    <button type="reset" class="btn btn-secondary" >Reset</button>
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
