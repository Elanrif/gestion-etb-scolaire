<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AccountUser extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $data = User::with([
            'student', 
            'professor', 
            'secretary'
        ])->find($user->id);
        
        return Inertia::render('account/home',['data' => $data]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index_cour()
    {
        $user = Auth::user();
        $data = User::with([
            'student.classe.cours.professor.user',
            'student.classe.cours.classe',
            'student.classe.cours.matiere',
        ])->find($user->id);

        if (!$data || !$data->student || !$data->student->classe || !$data->student->classe->cours) {
            return Inertia::render('account/cour-index-page', ['cours' => []]);
        }

        $cours = $data->student->classe->cours;
        return Inertia::render('account/cour-index-page',['cours' => $cours]);
    }

     /**
     * Display a listing of the resource.
     */
    public function index_matiere()
    {
        $user = Auth::user();
        $data = User::with([
            'student.classe.matieres.professor.user',
            'student.classe.matieres.classe',
        ])->find($user->id);

        if (!$data || !$data->student || !$data->student->classe || !$data->student->classe->matieres) {
            return Inertia::render('account/matiere-index-page', ['matieres' => []]);
        }

        $matieres = $data->student->classe->matieres;
        return Inertia::render('account/matiere-index-page',['matieres' => $matieres]);
    }
    public function index_note()
    {
        $user = Auth::user();
        $data = User::with([
            'student.notes.student.user',
            'student.notes.matiere',
            'student.notes.classe',
        ])->find($user->id);

        if (!$data || !$data->student || !$data->student->notes) {
            return Inertia::render('account/note-index-page', ['notes' => []]);
        }

        $notes = $data->student->notes;
        return Inertia::render('account/note-index-page',['notes' => $notes]);
    }
   
    public function index_student(Student $student)
    {
        $classes = Classe::all();
        $student_ = Student::with(['user','classe'])->find($student->id);
        return Inertia::render('account/student-edit-form-page',
        ['student'=> $student_, 'classes' => $classes]);
        
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
