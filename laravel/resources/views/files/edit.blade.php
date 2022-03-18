@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Files') }}</div>
               <div class="card-body">
                <form method="POST" action="http://localhost:8000/files/" accept-charset="UTF-8" enctype="multipart/form-data">
                    <label for='id'>Id</label>
                    <input name='id' readonly>
                    <label for='foto'>Selecciona un archivo</label>
                    <input type='file' name='foto'>
                    <input type='submit' >Guardar<input>
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
