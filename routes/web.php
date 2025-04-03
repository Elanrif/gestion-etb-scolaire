<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/actuality', function () {
    return Inertia::render('actuality-page');
})->name('actuality');

Route::get('/formations', function () {
    return Inertia::render('formations-page');
})->name('formations');

Route::get('/about', function () {
    return Inertia::render('about-page');
})->name('about');

// resources/js/pages/....tsx
Route::get('/demo', function() {
    return Inertia::render('hello/demo');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
