<?php

use App\Http\Controllers\AccountUser;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
   
    Route::prefix('account')->name('account.')->group(function () {
        Route::get('/users', [AccountUser::class, 'index'])->name('user.index');
    });
    
});
