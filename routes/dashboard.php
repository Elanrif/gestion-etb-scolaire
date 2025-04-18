<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('dashboard')->name('dashboard.')->group(function () {
    
    Route::get('/home', function () {
        return Inertia::render('dashboard/home-page');
    })->name('home');

    Route::get('/teachers', function () {
        return Inertia::render('dashboard/teacher-page');
    })->name('teachers');

});