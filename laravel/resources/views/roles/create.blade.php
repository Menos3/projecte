@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Roles') }}</div>
               <div class="card-body">
                <form role="form" method="post" action="{{route('roles.store')}}" >
                    @csrf
                  <input name="createRole" type="text" placeholder="nombre del nuevo rol"/>
                  <button type="submit" class="btn btn-primary">Create</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
