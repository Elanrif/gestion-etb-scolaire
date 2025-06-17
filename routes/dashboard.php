<?php

use App\Http\Controllers\ClasseController;
use App\Http\Controllers\MatiereController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CourController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'abort_role:USER,STUDENT'])->group(function () {
   
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
         
        Route::get('/home', [DashboardController::class, 'index'])->name('home');       

        /* COURS */
        Route::get('/cours', [CourController::class, 'index'])->name('cours.index');
        /* Middleware */
        Route::middleware(['abort_role:PROFESSOR'])->group(function () {
            Route::get('/cours/create', [CourController::class, 'create'])->name('cours.create');
            Route::post('/cours', [CourController::class, 'store'])->name('cours.store');
            Route::get('/cours/{cour}/edit', [CourController::class, 'edit'])->name('cours.edit');
            Route::put('/cours/{cour}', [CourController::class, 'update'])->name('cours.update');
            Route::delete('/cours/{cour}', [CourController::class, 'destroy'])->name('cours.destroy')->middleware('abort_role:SECRETARY');
        });
    
        /* CLASS */
        Route::get('/classes', [ClasseController::class, 'index'])->name('classes.index');
        /* Middleware */
        Route::middleware(['abort_role:PROFESSOR'])->group(function () {
            Route::post('/classes', [ClasseController::class, 'store'])->name('classes.store');
            Route::put('/classes/{classe}', [ClasseController::class, 'update'])->name('classes.update');
            Route::delete('/classes/{classe}', [ClasseController::class, 'destroy'])->name('classes.destroy')->middleware('abort_role:SECRETARY'); 
       });

        //PROFESSOR
        Route::get('/professors', [ProfessorController::class, 'index'])->name('professors.index');
        /* Middleware */
        Route::middleware(['abort_role:PROFESSOR'])->group(function () {
           Route::get('/professors/create', [ProfessorController::class, 'create'])->name('professors.create');
           Route::post('/professors', [ProfessorController::class, 'store'])->name('professors.store');
           Route::get('/professors/{professor}/edit', [ProfessorController::class, 'edit'])->name('professors.edit');
           Route::put('/professors/{professor}', [ProfessorController::class, 'update'])->name('professors.update');
           Route::delete('/professors/{professor}', [ProfessorController::class, 'destroy'])->name('professors.destroy')->middleware('abort_role:SECRETARY');
       });

        /* STUDENT */
        Route::get('/students', [StudentController::class, 'index'])->name('students.index');
        /* Middleware */
        Route::middleware(['abort_role:PROFESSOR'])->group(function () {
           Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');
           Route::post('/students', [StudentController::class, 'store'])->name('students.store');
           Route::get('/students/{student}/show', [StudentController::class, 'show'])->name('students.show');
           Route::get('/students/{student}/edit', [StudentController::class, 'edit'])->name('students.edit');
           Route::post('/students/{student}', [StudentController::class, 'update'])->name('students.update');
           Route::put('/students/{student}/validated', [StudentController::class, 'is_validated'])->name('students.is_validated');
           Route::post('/students/{student}/reject_account', [StudentController::class, 'reject_account'])->name('students.reject_account');
           Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destory')->middleware('abort_role:SECRETARY');
     });
        
        /* MATIERE */
        Route::get('/matieres', [MatiereController::class, 'index'])->name('matieres.index');
         /* Middleware */
        Route::middleware(['abort_role:PROFESSOR'])->group(function () {
            Route::get('/matieres/create', [MatiereController::class, 'create'])->name('matieres.create');
            Route::post('/matieres', [MatiereController::class, 'store'])->name('matieres.store');
            Route::get('/matieres/{matiere}/edit', [MatiereController::class, 'edit'])->name('matieres.edit');
            Route::put('/matieres/{matiere}', [MatiereController::class, 'update'])->name('matieres.update');
            Route::delete('/matieres/{matiere}', [MatiereController::class, 'destroy'])->name('matieres.destory')->middleware('abort_role:SECRETARY');
    }); 
        /* NOTE */
        Route::get('/notes', [NoteController::class, 'index'])->name('notes.index');
             /* Middleware */
        Route::middleware(['abort_role:PROFESSOR'])->group(function () {
            Route::get('/notes/create', [NoteController::class, 'create'])->name('notes.create');
            Route::post('/notes', [NoteController::class, 'store'])->name('notes.store');
            Route::get('/notes/{note}/edit', [NoteController::class, 'edit'])->name('notes.edit');
            Route::put('/notes/{note}', [NoteController::class, 'update'])->name('notes.update');
            Route::delete('/notes/{note}', [NoteController::class, 'destroy'])->name('notes.destory')->middleware('abort_role:SECRETARY');
    });
    }); 
});
