<?php

namespace App\Http\Controllers\Credential;

use App\Enums\RoleUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSecretaryRequest;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\StoreProfessorRequest;
use App\Models\Classe;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;


class RegisterController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeSecretary(StoreSecretaryRequest $request): RedirectResponse
    {
     
       /* Get validated data */
        $validated_data = $request->validated();
       
        /* Create the user account */
        $user = User::create([
            'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'address' => $validated_data['address'],
            'phone_number' => $validated_data['phone_number'],
            'password' => Hash::make($validated_data['password']),
            'birthday' => $validated_data['birthday'],
            'role' =>  RoleUser::SECRETARY->value,
        ]);

        /* Create secretary account */
        $user->secretary()->create([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'status' => $validated_data['status'],
            'secratary_id' => $validated_data['secratary_id'],
            'experience_years' => $validated_data['experience_years'],
            'responsability_notes' => $validated_data['responsability_notes'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        $request->session()->flash('success', 'Compte créer avec succès!');
        return to_route('dashboard.home');
    }


    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function storeStudent(StoreStudentRequest $request): RedirectResponse
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
        ]);

        $student->classe()->associate($classe);
        $student->save();

        event(new Registered($user));

        Auth::login($user);
        $request->session()->flash('success', 'Compte créer avec succès!');
        return to_route('account.user.index');
    }

    public function storeProfessor(StoreProfessorRequest $request): RedirectResponse
    {
     
       /* Get validated data */
        $validated_data = $request->validated();
       
        /* Create the user account */
        $user = User::create([
            'name' => $validated_data['first_name'] . ' ' . $validated_data['last_name'],
            'email' => $validated_data['email'],
            'address' => $validated_data['address'],
            'phone_number' => $validated_data['phone_number'],
            'password' => Hash::make($validated_data['password']),
            'birthday' => $validated_data['birthday'],
            'role' =>  RoleUser::PROFESSOR->value,
        ]);

        /* Create professor account */
        $user->professor()->create([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'employee_number' => $validated_data['employee_number'],
            'status' => $validated_data['status'],
            'discipline' => $validated_data['discipline'],
            'level_taught' => $validated_data['level_taught'],
            'additional_info' => $validated_data['additional_info'],
            'experience_years' => $validated_data['experience_years'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        $request->session()->flash('success', 'Compte créer avec succès!');
        return to_route('dashboard.home');
    }
}
