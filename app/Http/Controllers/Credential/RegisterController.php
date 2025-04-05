<?php

namespace App\Http\Controllers\Credential;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSecretaryRequest;
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
            'password' => Hash::make($validated_data['password']),
        ]);

        /* Create secretary account */
        $user->secretary()->create([
            'first_name' => $validated_data['first_name'],
            'last_name' => $validated_data['last_name'],
            'email' => $validated_data['email'],
            'phone_number' => $validated_data['phone_number'],
            'address' => $validated_data['address'],
            'status' => $validated_data['status'],
            'experience_year' => $validated_data['experience_year'],
            'responsability_notes' => $validated_data['responsability_notes'],
            'birthday' => $validated_data['birthday'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard');
    }
}
