@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Categories') }}</div>
                <div class="card-body">
                    <table class="table">
                        <h2>SHOW CATEGORY</h2>
                        <thead>
                            <tr>
                                <td scope="col">ID</td>
                                <td scope="col">Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ $category->id }}</td>
                                <td>{{ $category->name }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <a class="btn btn-primary" href="{{route('categories.edit', $category->id)}}" role="button">Editar</a>
                    <form method="POST" action="{{route('categories.destroy', $category)}}">
                        @csrf
                        @method('delete')
                        <button class="btn btn-secondary" type="submit" role="button">Borrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection