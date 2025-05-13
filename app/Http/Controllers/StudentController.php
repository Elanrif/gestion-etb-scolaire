<?php

namespace App\Http\Controllers;

use App\Enums\RoleUser;
use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Classe;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
   * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::with(['classe','user'])->orderBy('id', 'DESC')->get();
        //Log::info($students);
        return Inertia::render('dashboard/students/student-index-page',
        ['students' => $students]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classe::all();
        return Inertia::render('dashboard/students/student-create-form-page',['classes' => $classes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request): RedirectResponse
    {
         /* Get validated data */
         $validated_data = $request->validated();
         $classe_id = $validated_data['classe_id'];
         $classe = Classe::findOrFail($classe_id);
         /* Create the user account */
         $user = User::create([
             'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
             'email' => $validated_data['email'],
             'address' => $validated_data['address'],
             'phone_number' => $validated_data['phone_number'],
             'password' => Hash::make($validated_data['password']),
             'birthday' => $validated_data['birthday'],
             'role' =>  RoleUser::STUDENT->value,
         ]);
 
         /* Create student account */
         $student = $user->student()->create([
             'first_name' => $validated_data['first_name'],
             'last_name' => $validated_data['last_name'],
             'gender' => $validated_data['gender'],
             'level' => $validated_data['level'],
             'relationship' => $validated_data['relationship'],
             'guardian_phone_number' => $validated_data['guardian_phone_number'],
             'guardian_email' => $validated_data['guardian_email'],
             'guardian_last_name' => $validated_data['guardian_last_name'],
             'guardian_first_name' => $validated_data['guardian_first_name'],
             'matricule' => $validated_data['matricule'],
             //'classe_id' => $classe_id,
         ]);
 
        // Associer la classe via la relation
         $student->classe()->associate($classe);
         $student->save();

         $request->session()->flash('success', 'Succès!');
         return to_route('dashboard.students.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        $classes = Classe::all();
        $student_ = Student::with(['user','classe'])->find($student->id);
        return Inertia::render('dashboard/students/student-edit-form-page',
        ['student'=> $student_, 'classes' => $classes]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        // Récupérer les données validées
        $validated_data = $request->validated();
        $classe_id = $validated_data['classe_id'];
        $classe = Classe::findOrFail($classe_id);
        // Mise à jour du compte utilisateur associé
        $student->user->update([
            'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'address' => $validated_data['address'],
            'phone_number' => $validated_data['phone_number'],
            'birthday' => $validated_data['birthday'],
        ]);
    
        // Mise à jour des informations de l'étudiant
        $student->update([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'gender' => $validated_data['gender'],
            'level' => $validated_data['level'],
            'relationship' => $validated_data['relationship'],
            'guardian_phone_number' => $validated_data['guardian_phone_number'],
            'guardian_email' => $validated_data['guardian_email'],
            'guardian_last_name' => $validated_data['guardian_last_name'],
            'guardian_first_name' => $validated_data['guardian_first_name'],
            'matricule' => $validated_data['matricule'],
               //'classe_id' => $classe_id,
            ]);
 
        // Associer la classe via la relation
            $student->classe()->associate($classe);
            $student->save();
    
        $request->session()->flash('success', 'Succès!');
        return to_route('dashboard.students.index');
    }
        
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Student $student)
    {
        $student->delete();

        $request->session()->flash('success', 'Succès!');
        return to_route('dashboard.students.index'); 
    }
}