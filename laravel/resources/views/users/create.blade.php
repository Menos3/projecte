@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Users') }}</div>
               <div class="card-body">
                <form role="form" method="post" enctype="multipart/form-data" action="{{route('users.store')}}" >
                    @csrf
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" class="form-control" name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="email">email</label>
                        <input type="text" class="form-control" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" name="password"/>
                    </div>
                    <div class="form-group">
                        <label for="repassword">Repite Contraseña</label>
                        <input type="password" class="form-control" name="repassword"/>
                    </div>
                    <div class="form-group">
                        <label for="role_id">Role Id</label>
                        <select name="role_id" value>
                            @foreach($roles as $role)
                            <option value={{$role->id}}>
                                {{$role->name}}
                            </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="avatar">Avatar Id</label>
                        <input type="file" class="form-control" name="avatar"/>
                    </div>
                    <button type="submit" >Envia</button>
                </form>
               </div>
           </div>
       </div>
   </div>
</div>
@endsection
