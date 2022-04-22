@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Models') }}</div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <td scope="col">ID</td>
                                <td scope="col">Manufacturer</td>
                                <td scope="col">Model</td>
                                <td scope="col">Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($models as $model)
                            <tr>
                                <td>{{ $model->id }}</td>
                                <td>{{ $model->manufacturer }}</td>
                                <td>{{ $model->model }}</td>
                                <td>{{ $model->price }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <a class="btn btn-primary" href="{{route('models.create')}}" role="button">Add new Model</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection