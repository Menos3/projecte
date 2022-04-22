@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Models')}}</div>
                <div class="card-body">
                    <table class="table">
                        <h2>SHOW MODEL</h2>
                        <thead>
                            <tr>
                                <td scope="col">ID</td>
                                <td scope="col">Manufacturer</td>
                                <td scope="col">Model</td>
                                <td scope="col">Price</td>
                                <td scope="col">Category_ID</td>
                                <td scope="col">Photo_ID</td>
                                <td scope="col">Created</td>
                                <td scope="col">Updated</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ $model->id }}</td>
                                <td>{{ $model->manufacturer }}</td>
                                <td>{{ $model->model }}</td>
                                <td>{{ $model->price }}</td>
                                <td>{{ $model->category_id }}</td>
                                <td>{{ $model->photo_id }}</td>
                                <td>{{ $model->created_at }}</td>
                                <td>{{ $model->updated_at }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <a class="btn btn-primary" href="{{route('models.edit', $model->id)}}" role="button">Editar</a>
                    <form method="POST" action="{{route('models.destroy', $model)}}">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-secondary" type="submit" role="button">Borrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection