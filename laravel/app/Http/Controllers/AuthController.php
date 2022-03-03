<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {

        $validateData = $request->validate([
            "name" => 'required|string|max:255',
            "email" => 'required|string|email|max:255|unique:users',
            "password" => 'required|string|min:8'
        ]);

        $user = User::create([
            "name" => $validatorData['name'],
            "email" => $validatorData['email'],
            "password" => Hash::make($validatorData['password'])
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            "access_token" => $token,
            "token_type" => 'Bearer'
        ]);
 
    }

    public function login(Request $request) {

        if (!Auth::attempt($request->only('email', 'password'))) {

            return response()->json([

                'message' => "Invalid login details"

            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            "access_token" => $token,
            "token_type" => 'Bearer'
        ]);
    }

    public function infoUser(Request $request) {

        return $request->user();
    }
}
