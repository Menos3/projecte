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
                            <input type="text" name="manufacturer"/>
                            <input type="text" name="model"/>
                            <input type="text" name="price"/>
                        
                        </div>

                        <div class="form-group">
                            <label for="file">Selecciona un archivo:</label>
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