<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) 
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) 
        {
            $request->session()->regenerate();
            return response()->json(200);
        }

        abort(401, "Something went wrong! You are not authenticated!");
    }

    public function logout(Request $request) 
    {
        Auth::logout();
 
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(200);
    }
}
