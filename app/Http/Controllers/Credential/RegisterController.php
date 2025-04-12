<?php

namespace App\Http\Controllers\Credential;

use App\Enums\RoleUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSecretaryRequest;
use App\Http\Requests\StoreStudentRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

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
            'experience_year' => $validated_data['experience_year'],
            'responsability_notes' => $validated_data['responsability_notes'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        $request->session()->flash('success', 'Compte créer avec succès!');
        return to_route('dashboard');
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
        $user->student()->create([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'gender' => $validated_data['gender'],
            'level' => $validated_data['level'],
            'class' => $validated_data['class'],
            'relationship' => $validated_data['relationship'],
            'guardian_phone_number' => $validated_data['guardian_phone_number'],
            'guardian_email' => $validated_data['guardian_email'],
            'guardian_last_name' => $validated_data['guardian_last_name'],
            'guardian_first_name' => $validated_data['guardian_first_name'],
            'matricule' => $validated_data['matricule'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        $request->session()->flash('success', 'Compte créer avec succès!');
        return to_route('dashboard');
    }
}
