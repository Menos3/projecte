@extends('layouts.app')

@section('content')
<div class="container">
   <div class="row justify-content-center">
       <div class="col-md-8">
           <div class="card">
               <div class="card-header">{{ __('Files') }}</div>
               <div class="card-body">
                   <table class="table">
                       <h2>SHOW FILE</h2>
                       <thead>
                           <tr>
                               <td scope="col">ID</td>
                               <td scope="col">Filepath</td>
                               <td scope="col">Filesize</td>
                               <td scope="col">Created</td>
                               <td scope="col">Updated</td>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>{{ $file->id }}</td>
                               <td>{{ $file->filepath }}</td>
                               <td>{{ $file->filesize }}</td>
                               <td>{{ $file->created_at }}</td>
                               <td>{{ $file->updated_at }}</td>
                               <td><img width="300" height="300" src="{{ asset("storage/{$file->filepath}")}}"/></td>
                           </tr>
                       </tbody>
                   </table>

                   {{-- <button>Editar</button> --}}
                   <a class="btn btn-primary" href="{{route('files.edit',$file->id)}}" role="button">Editar</a>
                   <form method="post" action="{{route('files.destroy', $file)}}">
                    @csrf
                    @method('delete')
                    <button class="btn btn-sencondary" type="submit"  role="button">Borrar</button>
                   </form>

               </div>
           </div>
       </div>
   </div>
</div>
@endsection
