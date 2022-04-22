@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Categories') }}</div>
                <div class="card-body">
                    <form role="form" method="POST" action="{{route('categories.update', $category->id)}}">

                        @csrf
                        @method('PUT')
                        <label for='id'>Id</label>
                        <input name='id' readonly value={{$category->id}}/>
                        <label for='name'>Cambie el nombre de la categoria</label>
                        <input type='text' name='category'/>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                        <button type="reset" class="bt btn-secondary">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection