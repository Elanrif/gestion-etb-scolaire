<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Professor;
use App\Models\Cour;
use App\Models\Matiere;
use App\Models\Classe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $students = Student::with('classe')->take(5)->get();
         $professors = Professor::all();
         $classes = Classe::with('students')->take(5)->get();
         $matieres = Matiere::take(5)->get();
         $cours = Cour::take(5)->get();
         return Inertia::render('dashboard/home-page', 
         ['students' => $students, 
         'professors' => $professors,
         'classes' => $classes,
         'matieres' => $matieres,
         'cours' => $cours
         ]
        );    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
