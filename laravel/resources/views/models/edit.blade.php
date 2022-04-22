@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Models') }}</div>
                <div class="card-body">
                    <form role="form" method="POST" action="{{route('models.update', $model->id)}}">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="id">ID</label>
                            <input name="id" readonly value={{$model->id}}/>
                            <input type="text" name="manufacturer" value={{$model->manufacturer}}/>
                            <input type="text" name="model" value={{$model->model}}/>
                            <input type="text" name="price" value="{{$model->price}}"/>
                            <select name="categories" id="categories">
                                <option value="{{$category->id}}">{{$category->name}}</option>

                                    @foreach ($categories as $item)
                                        <option value="{{$item->id}}">{{$item->name}}</option>
                                    @endforeach
                                    
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="file">Selecciona un archivo:</label>
                            <img width="200px" height="200px" src="{{ asset("storage/{$file->filepath}") }}"/>
                            <input type="file" name="upload"/>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Guardar</button>
                            <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection