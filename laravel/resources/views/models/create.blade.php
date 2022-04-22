@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Models') }}</div>
                <div class="card-body">
                    <form role="form" method="POST", action="{{route('models.store')}}" enctype="multipart/form-data">
                        @csrf

                        <div class="form-group">
                            <label for="manufacturer-name">Introduzca el nombre del fabricante:</label>
                            <input type="text" name="manufacturer"/>
                            <label for="model-name">Introduza el modelo:</label>
                            <input type="text" name="model"/>
                            <label for="price-number">Introduzca el precio:</label>
                            <input type="number" name="price"/>

                            <select name="categories" id="categories">

                                @foreach($categories as $category)
                                <option value="{{$category->id}}">{{$category->name}}</option>
                                @endforeach 
                                
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="upload">File:</label>
                            <input type="file" class= "form-control" name="upload"/>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Crear</button>
                            <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection