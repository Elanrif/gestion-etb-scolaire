<?php

use App\Http\Controllers\ClasseController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('dashboard')->name('dashboard.')->group(function () {
    
    Route::get('/home', function () {
        return Inertia::render('dashboard/home-page');
    })->name('home');

    Route::get('/teachers', function () {
        return Inertia::render('dashboard/teacher-page');
    })->name('teachers');

    Route::get('/classes', [ClasseController::class, 'index'])->name('classes.index');
    Route::post('/classes', [ClasseController::class, 'store'])->name('classes.store');
    Route::put('/classes/{classe}', [ClasseController::class, 'update'])->name('classes.update');
    Route::delete('/classes/{classe}', [ClasseController::class, 'destroy'])->name('classes.destroy');

});