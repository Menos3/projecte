@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Files') }}</div>
               <div class="card-body">
                <form role="form" method="POST" action="{{route('files.store')}}" enctype="multipart/form-data">
                    @csrf
                  <label for='foto'>Selecciona un archivo</label>
                  <input type='file' name='file'>
                  <input type='submit' />Crear
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
