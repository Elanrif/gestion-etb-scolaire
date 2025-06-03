<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use App\Models\Classe;
use App\Models\Professor;
use Inertia\Inertia;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {        
        return Inertia::render('dashboard/notes/note-index-page');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {  
        $classes = Classe::with('students', 'matieres')->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/notes/note-create-form-page',['classes'=> $classes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNoteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Note $note)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        $professors = Professor::all();
        $classes = Classe::all();
        $note_ = Note::with(['classe','professor'])->find($note->id);
        return Inertia::render('dashboard/matieres/matiere-edit-form-page',
        ['note'=> $note_, 'professors' => $professors ,'classes' => $classes]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {
        //
    }
}
