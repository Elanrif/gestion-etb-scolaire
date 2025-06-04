<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Models\Classe;
use App\Models\Professor;
use App\Http\Requests\StoreCourRequest;
use App\Http\Requests\UpdateCourRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return Inertia::render('dashboard/cours/cour-index-page',);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {    
        $classes = Classe::with('professors','matieres')->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/cours/cour-create-form-page',['classes'=> $classes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourRequest $request)
    {
         $request->session()->flash('success', 'Succès!');
         return to_route('dashboard.cours.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cour $cour)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cour $cour)
    {
         return Inertia::render('dashboard/cours/cour-edit-form-page',);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourRequest $request, Cour $cour)
    {
         $request->session()->flash('success', 'Succès!');
          return to_route('dashboard.cours.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Cour $cour)
    {
        $cour->delete();
        $request->session()->flash('success', 'Succès!');
        return to_route('dashboard.cours.index');
    }
}
