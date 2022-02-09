<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class meController extends Controller
{
    public function me() 
    {
        return response()->json(Auth::user());
    }
}
