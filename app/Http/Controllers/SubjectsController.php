<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class SubjectsController extends Controller
{
    public function index() 
    {
        return Auth::user()->subjects;
    }
}
