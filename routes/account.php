<?php

use App\Http\Controllers\AccountUser;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
   
    Route::prefix('account')->name('account.')->group(function () {
        Route::get('/users', [AccountUser::class, 'index'])->name('user.index');

        
        Route::post('/users/student/{student}', [AccountUser::class, 'update'])->name('user.update');  
        Route::get('/users/student/{student}/index_student', [AccountUser::class, 'index_student'])->name('user.index_student');
   /* Middleware */
    Route::middleware(['activation_status'])->group(function () {
        Route::get('/users/cours', [AccountUser::class, 'index_cour'])->name('user.index_cour');
        Route::get('/users/matieres', [AccountUser::class, 'index_matiere'])->name('user.index_matiere');
        Route::get('/users/notes', [AccountUser::class, 'index_note'])->name('user.index_note');
        
    });
    });
});



        
            