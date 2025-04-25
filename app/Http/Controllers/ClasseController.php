<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClasseRequest;
use App\Http\Requests\UpdateClasseRequest;
use App\Models\Classe;
use App\Models\Professor;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ClasseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $classes = Classe::with('professors')->orderBy('id', 'DESC')->get();
        $professors = Professor::with('user')->get();
        //Log::info($classes);
        return Inertia::render('dashboard/classe-page',
        ['classes' => $classes,  'professors'=> $professors]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClasseRequest $request): RedirectResponse
    {
        /* Get validated data */
        $validated_data = $request->validated();

        $classe = Classe::create([
            'name' => $validated_data['name']
        ]);

        if(isset($validated_data['profIds'])){
          $classe->professors()->attach($validated_data['profIds']);
        }
        return to_route('dashboard.classes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Classe $classe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClasseRequest $request, Classe $classe)
    {              
        /* Get validated data */
        $validated_data = $request->validated();

        $classe->update([
            'name' => $validated_data['name']
        ]);

        $classe->professors()->sync($validated_data['profIds']) ?? [];

        return to_route('dashboard.classes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classe $classe): RedirectResponse
    {
        Log::info('delete classe');
        $classe->professors()->detach();
        $classe->delete();
        return to_route('dashboard.classes.index');
    }
}
