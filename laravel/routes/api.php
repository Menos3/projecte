<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ChatController;

Route::apiResource('tasks', TaskController::class);
Route::apiResource('tickets', TicketController::class);
Route::apiResource('chats', ChatController::class);

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource(name:'tasks', controller: App\Http\Controllers\TaskController::class);
Route::apiResource(name:'users', controller: App\Http\Controllers\UserController::class);
Route::apiResource(name:'tickets', controller: App\Http\Controllers\TicketsController::class);



Route::get('/test', function () {
    return "Hola Mundo";
});
