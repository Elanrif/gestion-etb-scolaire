<?php

namespace App\Http\Controllers;

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
