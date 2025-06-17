<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateStudentRequest;
use App\Models\Classe;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $validated_data = $request->validated();
        $classe_id = $validated_data['classe_id'];
        $classe = Classe::findOrFail($classe_id);
        $imageUrl_cin_photo = $student->cin_photo;
        $imageUrl_card_photo = $student->card_photo;
        /* CIN PHOTO */
        if ($request->hasFile('cin_photo')) {
            $cin_photo = $request->file('cin_photo');
            $times_cin_photo = Carbon::now()->format('Ymd_His'); // Format : AnnéeMoisJour_HeureMinuteSeconde
            $image_cin_photo = $times_cin_photo . '_' . Str::random(5) . '.' . $cin_photo->getClientOriginalExtension();
            $image_cin = $cin_photo->storeAs('images', $image_cin_photo, 'public');
            $imageUrl_cin_photo = Storage::url($image_cin);
        }
        /* CARD PHOTO */
        if ($request->hasFile('card_photo')) {
            $card_photo = $request->file('card_photo');
            $times_card_photo = Carbon::now()->format('Ymd_His'); // Format : AnnéeMoisJour_HeureMinuteSeconde
            $image_card_photo = $times_card_photo . '_' . Str::random(5) . '.' . $card_photo->getClientOriginalExtension();
            $image_card = $card_photo->storeAs('images', $image_card_photo, 'public');
            $imageUrl_card_photo = Storage::url($image_card);
        }

        // Mise à jour du compte utilisateur associé
        $student->user->update([
            'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'cin_photo' =>$imageUrl_cin_photo,
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
            'cin_photo' =>$imageUrl_cin_photo,
            'card_photo' =>$imageUrl_card_photo,
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
        return to_route('account.user.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
