<?php

use App\Http\Controllers\ClasseController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
   
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
    
        Route::get('/home', function () {
            return Inertia::render('dashboard/home-page');
        })->name('home');
    
        Route::get('/teachers', function () {
            return Inertia::render('dashboard/teacher-page');
        })->name('teachers');
    
    
        /* CLASS */
        Route::get('/classes', [ClasseController::class, 'index'])->name('classes.index');
        Route::post('/classes', [ClasseController::class, 'store'])->name('classes.store');
        Route::put('/classes/{classe}', [ClasseController::class, 'update'])->name('classes.update');
        Route::delete('/classes/{classe}', [ClasseController::class, 'destroy'])->name('classes.destroy');
    
        //PROFESSOR
    
        Route::get('/professors', [ProfessorController::class, 'index'])->name('professors.index');
        Route::get('/professors/create', [ProfessorController::class, 'create'])->name('professors.create');
        Route::post('/professor', [ProfessorController::class, 'store'])->name('professors.store');
        Route::get('/professors/{professor}/edit', [ProfessorController::class, 'edit'])->name('professors.edit');
        Route::put('/professor/{professor}', [ProfessorController::class, 'update'])->name('professors.update');
        Route::delete('/professor-forms/{professor}', [ProfessorController::class, 'destroy'])->name('professors.destroy');
    
        /* STUDENT */
        Route::get('/students', [StudentController::class, 'index'])->name('students.index');
        Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');
        Route::post('/students', [StudentController::class, 'store'])->name('students.store');
        Route::get('/students/{student}/edit', [StudentController::class, 'edit'])->name('students.edit');
        Route::put('/students/{student}', [StudentController::class, 'update'])->name('students.update');
        Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destory');
    });
    
});
