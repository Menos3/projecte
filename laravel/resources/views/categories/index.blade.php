@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Categories') }}</div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <td scope="col">ID</td>
                                <td scope="col">Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($categories as $category)
                            <tr>
                                <td>{{ $category->id }}</td>
                                <td>{{ $category->name }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <a class="btn btn-primary" href="{{route('categories.create')}}" role="button">Add new Category</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection