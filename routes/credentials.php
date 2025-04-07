<?php
use App\Http\Controllers\Credential\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->prefix('credentials')->group(function () {
    
    /* Secretary routes */
    Route::prefix('secretary')->name('credentials.secretary')->group(function () {
        //Route::get('register', [RegisteredUserController::class, 'create'])->name('.register');
        Route::post('register', [RegisterController::class, 'storeSecretary']);
    });

     /* Students routes */
     Route::prefix('students')->name('credentials.students')->group(function () {
        //Route::get('register', [RegisteredUserController::class, 'create'])->name('.register');
        Route::post('register', [RegisterController::class, 'storeStudent']);
    });
    

});