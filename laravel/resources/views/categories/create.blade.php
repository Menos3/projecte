@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Categories') }}</div>
                <div class="card-body">
                    <form role="form" method="POST" action="{{route('categories.store')}}">
                        @csrf
                        <label for="category-name">Introduzca el nombre de la categoria</label>
                        <input type="text" name="name"/>
                        <button type="submit" class="btn btn-primary">Crear</button>
                        <button type="reset" class="btn btn-secondary">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection