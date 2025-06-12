<?php

namespace App\Http\Controllers;

use App\Enums\RoleUser;
use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use Illuminate\Support\Carbon;
use App\Models\Classe;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
            /* Validate classe_id */
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
 
         Log::info('Student controller', ['card photo' => $imageUrl_card_photo, 'request card photo' => $request->file('card_photo')]);
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
        $student_ = Student::with(['user','classe'])->find($student->id);
        return Inertia::render('dashboard/students/student-show-page',['student'=> $student_]);
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
        //$student = Student::with(['user'])->find($student->id);
        Log::info('Je suis dans la méthode update', ['student' => $student]);
        $validated_data = $request->validated();
        $imageIdPhotoUrl = null;
        $imageCardPhotoUrl = null;
        $classe_id = $validated_data['classe_id'];
        $classe = Classe::findOrFail($classe_id);

        /* ID PHOTO */
        if ($request->hasFile('id_photo')) {
            /* Delete old images on udate */
            if ($student->user->id_photo) {                  
                $oldImagePath = str_replace('/storage', '', $student->user->id_photo);
                Storage::disk('public')->delete($oldImagePath);
            }
            /* Manage Images  */
            $image = $request->file('id_photo');
            $timestamp = Carbon::now()->format('Ymd_His');
            $imageName = $timestamp . '_' . Str::random(5) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $imageIdPhotoUrl = Storage::url($imagePath);
        }

        /* CARD PHOTO */
        if ($request->hasFile('card_photo')) {
            if ($student->card_photo) {                  
                $oldImagePath = str_replace('/storage', '', $student->card_photo);
                Storage::disk('public')->delete($oldImagePath);
            }
            /* Manage Images  */
            $image = $request->file('card_photo');
            $timestamp = Carbon::now()->format('Ymd_His');
            $imageName = $timestamp . '_' . Str::random(5) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images', $imageName, 'public');
            $imageCardPhotoUrl = Storage::url($imagePath);
        }

        // Mise à jour du compte utilisateur associé
        $student->user->update([
            'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'id_photo' => $imageIdPhotoUrl,
            'address' => $validated_data['address'],
            'phone_number' => $validated_data['phone_number'],
            'birthday' => $validated_data['birthday'],
        ]);
    
        // Mise à jour des informations de l'étudiant
        $student->update([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'card_photo' => $imageCardPhotoUrl,
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

    /**
     * Show the form for validated the specified resource.
     */
    public function is_validated(Student $student)
    {
        $is_validated_ = !$student->is_validated;
        $student->update([
            'is_validated' => $is_validated_,
            'activation_status' => $is_validated_ ? 'approved' : 'deactivated',
        ]);

        return to_route('dashboard.students.show', $student->id); 
    }

     /**
     * Show the form for message the specified resource.
     */
    public function reject_account(Request $request, Student $student)
    {
        $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $student->update([
            'message' => $request->message,
            'is_validated' => false,
            'activation_status' => 'rejected',
        ]);

        $request->session()->flash('success', 'Message envoyé avec succès!');
        return to_route('dashboard.students.show', $student->id); 
    }
}