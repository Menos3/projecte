@extends('layouts.app')
@section('content')
<div class="container">
   <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Users') }}</div>
               <div class="card-body">
                <table class="table">
                    <h2>SHOW Users</h2>
                    <thead>
                        <tr>
                            <td scope="col">ID</td>
                            <td scope="col">email</td>
                            <td scope="col">Name</td>
                            <td scope="col">avatar id</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->avatar_id }}</td>
                            {{-- <td><img width="300" height="300" src="{{ asset("storage/{$file->filepath}")}}"/></td> --}}
                        </tr>
                    </tbody>
                </table>
                <a class="btn btn-primary" href="{{route('users.edit',$user->id)}}" role="button">Editar</a>
                <form method="post" action="{{route('users.destroy', $user)}}">
                    @csrf
                    @method('delete')
                    <button class="btn btn-sencondary" type="submit"  role="button">Borrar</button>
                </form>
            </div>
        </div>
   </div>
</div>

@endsection




