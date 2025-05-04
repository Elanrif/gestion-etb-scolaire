<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use App\Models\Form;
use App\Http\Requests\StoreProfessorRequest;
use App\Http\Requests\UpdateProfessorRequest;
use Inertia\Inertia;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $professors = Professor::with('classes','matieres')->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/professor/professor-page',['professors'=> $professors]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/professor/professor-form-page',);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfessorRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Professor $professor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Professor $professor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfessorRequest $request, Professor $professor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Professor $professor)
    {
        //
    }
}
