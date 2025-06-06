<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Models\Classe;
use App\Models\Professor;
use App\Http\Requests\StoreCourRequest;
use App\Http\Requests\UpdateCourRequest;
use App\Models\Matiere;
use Illuminate\Http\Request;
use Inertia\Inertia;


class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $cours = Cour::with('professor.user','classe','matiere')->orderBy('id', 'DESC')->get();
         return Inertia::render('dashboard/cours/cour-index-page',['cours'=> $cours]);
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
         /* Get validated data */
         $validated_data = $request->validated();

         $classe = Classe::findOrFail($validated_data['classe_id']);
         $professor = Professor::findOrFail($validated_data['professor_id']);
         $matiere = Matiere::findOrFail($validated_data['matiere_id']);

         /* Create the matiere account */
         $cour = Cour::create([
             'name' => $validated_data['name']
            ]);

         // Association
         $cour->classe()->associate($classe);
         $cour->professor()->associate($professor);
         $cour->matiere()->associate($matiere);
         $cour->save();

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
        $classes = Classe::with('professors','matieres')->orderBy('id', 'DESC')->get();
        $cour_ = Cour::with(['classe','professor','matiere'])->find($cour->id);
        return Inertia::render('dashboard/cours/cour-edit-form-page', 
        [
         'cour' => $cour_,
         'classes' => $classes
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourRequest $request, Cour $cour)
    {
        /* Get validated data */
        $validated_data = $request->validated();

        $classe = Classe::findOrFail($validated_data['classe_id']);
        $professor = Professor::findOrFail($validated_data['professor_id']);
        $matiere = Matiere::findOrFail($validated_data['matiere_id']);

        /* Update the cour account */
        $cour->update([
            'name' => $validated_data['name']
            ]);

        // Association
        $cour->classe()->associate($classe);
        $cour->professor()->associate($professor);
        $cour->matiere()->associate($matiere);
        $cour->save();

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
