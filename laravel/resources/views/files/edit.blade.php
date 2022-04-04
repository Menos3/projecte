@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Files') }}</div>
               <div class="card-body">
                {{-- <form method="POST" action={{ url('store')}} accept-charset="UTF-8" enctype="multipart/form-data"> --}}
                <form role="form" method="POST" action="{{route('files.update', $file->id)}}" enctype="multipart/form-data">

                    @csrf
                    @method('PUT')
                    <label for='id'>Id</label>
                    <input name='id' readonly value={{$file->id}}>
                    <label for='foto'>Selecciona un archivo</label>
                    <input type='file' name='foto'>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                    <button type="reset" class="btn btn-secondary" >Reset</button>
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
