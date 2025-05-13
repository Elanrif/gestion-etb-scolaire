<?php

namespace App\Http\Controllers;

use App\Models\Matiere;
use App\Http\Requests\StoreMatiereRequest;
use App\Http\Requests\UpdateMatiereRequest;
use App\Models\Classe;
use App\Models\Professor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatiereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $matieres = Matiere::with('professor.user','classe')->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/matieres/matiere-index-page',['matieres'=> $matieres]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classe::orderBy('id', 'DESC')->get();
        $professors = Professor::orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/matieres/matiere-create-form-page',['classes'=> $classes,'professors'=> $professors]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMatiereRequest $request)
    {
         /* Get validated data */
         $validated_data = $request->validated();

         $classe = Classe::findOrFail($validated_data['classe_id']);
         $professor = Professor::findOrFail($validated_data['professor_id']);

         /* Create the matiere account */
         $matiere = Matiere::create([
             'name' => $validated_data['name']
            ]);

         // Association
         $matiere->classe()->associate($classe);
         $matiere->professor()->associate($professor);
         $matiere->save();

         $request->session()->flash('success', 'Succès!');
         return to_route('dashboard.matieres.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Matiere $matiere)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Matiere $matiere)
    {
        $professors = Professor::all();
        $classes = Classe::all();
        $matiere_ = Matiere::with(['classe','professor'])->find($matiere->id);
        return Inertia::render('dashboard/matieres/matiere-edit-form-page',
        ['matiere'=> $matiere_, 'professors' => $professors ,'classes' => $classes]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMatiereRequest $request, Matiere $matiere)
    {
          /* Get validated data */
          $validated_data = $request->validated();

          $classe = Classe::findOrFail($validated_data['classe_id']);
          $professor = Professor::findOrFail($validated_data['professor_id']);
 
          /* Update the matiere account */
          $matiere->update([
              'name' => $validated_data['name']
             ]);
 
          // Association
          $matiere->classe()->associate($classe);
          $matiere->professor()->associate($professor);
          $matiere->save();
 
          $request->session()->flash('success', 'Succès!');
          return to_route('dashboard.matieres.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Matiere $matiere)
    {
        $matiere->delete();
        $request->session()->flash('success', 'Succès!');
        return to_route('dashboard.matieres.index');
    }
}
