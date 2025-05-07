<?php

namespace App\Http\Controllers;
//use App\Enums\RoleUser;

use App\Enums\RoleUser;
use App\Models\Professor;
use App\Models\Form;
use App\Http\Requests\StoreProfessorRequest;
use App\Http\Requests\UpdateProfessorRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ProfessorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $professors = Professor::with('classes','matieres','user')->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/professors/professor-index-page',['professors'=> $professors]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/professors/professor-form-page',);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfessorRequest $request)
    {
        $validated_data = $request->validated();

        $user = User::create([
            'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'address' => $validated_data['address'],
            'phone_number' => $validated_data['phone_number'],
            'password' => Hash::make($validated_data['password']),
            'birthday' => $validated_data['birthday'],
           
        ]);

        $user->professor()->create([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'gender' => $validated_data['gender'],
            'employee_number' => $validated_data['employee_number'],
            'statut' => $validated_data['statut'],
            'discipline' => $validated_data['discipline'],
            'experience_years' => $validated_data['experience_years'],
            'level_taught' => $validated_data['level_taught'],
            'additionnal_info' => $validated_data['additionnal_info'],
            
           
        ]);

        return to_route('dashboard.professors.index');
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
        $professor_ = Professor::with('user')->find($professor->id);
        return Inertia::render('dashboard/professors/professor-edit-form-page', ['professor'=> $professor_]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProfessorRequest $request, Professor $professor)
    { 

    $validated_data = $request->validated();

    $professor->user->update([
        'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'address' => $validated_data['address'],
            'phone_number' => $validated_data['phone_number'],
            'password' => Hash::make($validated_data['password']),
            'birthday' => $validated_data['birthday'],
    ]);

    $professor->update([
        'first_name' => $validated_data['first_name'],
        'last_name' => $validated_data['last_name'],
        'gender' => $validated_data['gender'],
        'employee_number' => $validated_data['employee_number'],
        'statut' => $validated_data['statut'],
        'discipline' => $validated_data['discipline'],
        'experience_years' => $validated_data['experience_years'],
        'level_taught' => $validated_data['level_taught'],
        'additionnal_info' => $validated_data['additionnal_info'],
    ]);

    return to_route('dashboard.professors.index');
}
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Professor $professor)
    {
        $professor->delete();
        return to_route('dashboard.professors.index');
    }
}
