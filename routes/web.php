<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\meController;
use App\Http\Controllers\SubjectsController;


Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth'], function() {
    
    Route::delete('/logout', [AuthController::class, 'logout']);
    Route::post('/me', [meController::class, 'me']);
    Route::post('/subjects', [SubjectsController::class, 'index']);

});

Route::view('/{any?}', 'welcome');
