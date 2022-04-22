@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Roles') }}</div>
               <div class="card-body">
                   <table class="table">
                       <thead>
                           <tr>
                               <td scope="col">ID</td>
                               <td scope="col">Name Rol</td>
                               <td scope="col">Created</td>
                               <td scope="col">Updated</td>
                           </tr>
                       </thead>
                       <tbody>
                           @foreach ($roles as $role)
                           <tr>
                               <td>{{ $role->id }}</td>
                               <td>{{ $role->name }}</td>
                               <td>{{ $role->created_at }}</td>
                               <td>{{ $role->updated_at }}</td>
                           </tr>
                           @endforeach
                       </tbody>
                   </table>
                   <a class="btn btn-primary" href="{{route('roles.create')}}" role="button">Add new role</a>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
