<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\UpdateNoteRequest;
use Illuminate\Http\Request;
use App\Models\Classe;
use App\Models\Matiere;
use App\Models\Student;
use Inertia\Inertia;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $notes = Note::with(['student.user','matiere','matiere.classe'])->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/notes/note-index-page',['notes'=> $notes]);
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
            /* Get validated data */
         $validated_data = $request->validated();

         $student = Student::findOrFail($validated_data['student_id']);
         $matiere = Matiere::findOrFail($validated_data['matiere_id']);

         /* Create the matiere account */
         $note = Note::create([
             'note' => $validated_data['note'],
             'trimestre' => $validated_data['trimestre']
            ]);

         // Association
         $note->student()->associate($student);
         $note->matiere()->associate($matiere);
         $note->save();

         $request->session()->flash('success', 'Succès!');
         return to_route('dashboard.notes.index');
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
        $classes = Classe::with('students', 'matieres')->orderBy('id', 'DESC')->get();
        $note_ = Note::with(['student', 'matiere.classe','matiere'])->findOrFail($note->id);
        return Inertia::render('dashboard/notes/note-edit-form-page',[
            'note'=> $note_ ,
            'classes' => $classes
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNoteRequest $request, Note $note)
    {        
    /* Get validated data */
    $validated_data = $request->validated();

    $classe = Classe::findOrFail($validated_data['classe_id']);
    $student = Student::findOrFail($validated_data['student_id']);
    $matiere = Matiere::findOrFail($validated_data['matiere_id']);
    
    /* Update the note */
    $note->update([
        'note' => $validated_data['note'],
        'trimestre' => $validated_data['trimestre']
    ]);

    // Associations
    $note->classe()->associate($classe);
    $note->student()->associate($student);
    $note->matiere()->associate($matiere);
    /* $note->classe()->associate($classe); */
    $note->save();

    $request->session()->flash('success', 'Note mise à jour avec succès !');
    return to_route('dashboard.notes.index');
  }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy(Request $request, Note $note)
    {
        $note->delete();
        $request->session()->flash('success', 'Succès!');
        return to_route('dashboard.notes.index');
    }
}
