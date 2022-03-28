@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Files') }}</div>
               <div class="card-body">
                <form role="form" method="post" action="{{route('files.store')}}" enctype="multipart/form-data">
                    @csrf
                  <div class="form-group">
                      <label for="upload">File:</label>
                        <input type="file" class="form-control" name="cargar"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Create</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
