<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\AuthController;

Route::apiResource('tasks', TaskController::class);
Route::apiResource('tickets', TicketsController::class);
Route::apiResource('chats', ChatController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('chats/{cid}/messages', MessagesController::class);
Route::apiResource('tickets/{tid}/comments', CommentController::class);
Route::apiResource('status',StatusController::class);


/*cls

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

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/userinfo', [AuthController::class, 'infouser'])->middleware('auth:sanctum');