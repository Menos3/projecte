@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Users') }}</div>
               <div class="card-body">
                   <table class="table">
                       <thead>
                           <tr>
                               <td scope="col">ID</td>
                               <td scope="col">Name</td>
                               <td scope="col">email</td>
                               <td scope="col">role_id</td>
                               <td scope="col">avatar id</td>
                           </tr>
                       </thead>
                       <tbody>
                           @foreach ($users as $user)
                           <tr>
                               <td>{{ $user->id }}</td>
                               <td>{{ $user->name }}</td>
                               <td>{{ $user->email }}</td>
                               <td>{{ $user->role_id }}</td>
                               <td>{{ $user->avatar_id}}</td>
                           </tr>
                           @endforeach
                       </tbody>
                   </table>
                   <a class="btn btn-primary" href="{{route('users.create')}}" role="button">Add new user</a>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection


