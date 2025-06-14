<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/actuality', function () {
    return Inertia::render('actuality-page');
})->name('actuality');

Route::get('/installation', function () {
    return Inertia::render('installation-page');
})->name('installation');

Route::get('/formations', function () {
    return Inertia::render('formations-page');
})->name('formations');

Route::get('/about', function () {
    return Inertia::render('about-page');
})->name('about');

Route::get('/history', function () {
    return Inertia::render('history-page');
})->name('history');

Route::get('/team', function () {
    return Inertia::render('team-page');
})->name('team');