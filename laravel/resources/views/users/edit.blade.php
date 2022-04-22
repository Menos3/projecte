@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Users') }}</div>
                <div class="card-body">
                    <form method="post" action="{{ route('users.update',$user) }}" enctype="multipart/form-data" >
                        @csrf
                        @method('PUT')
                    <div class="form-group">
                        <label>Nombre </label>
                        <input name="name"  type="text" value="{{$user->name}}"/>
                    </div>
                    <div class="form-group">
                        <label>Password </label>
                        <input name="password"  type="text" value="{{$user->password}}"/>
                    </div>
                    <div class="form-group">
                        <label>Role ID </label>
                        <select name="role_id" value>
                            @foreach($roles as $role)
                            <option value={{$role->id}}>
                                {{$role->name}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for='file'>Avatar: </label>
                        <img  width="200px" height="200px" src="{{ asset("storage/{$file->filepath}") }}" />
                        <input type="file" name="avatar" />
                    </div>
                        <button type="submit">Actualiza</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
