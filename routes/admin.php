<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::prefix('admin')->name('admin.')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard-page');
    })->name('dashboard');

});
