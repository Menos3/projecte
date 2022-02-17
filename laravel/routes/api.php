<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\UserController;

Route::apiResource('tasks', TaskController::class);
Route::apiResource('tickets', TicketsController::class);
Route::apiResource('chats', ChatController::class);
Route::apiResource('users', UserController::class);

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

Route::get('/test', function () {
    return "Hola Mundo";
});
