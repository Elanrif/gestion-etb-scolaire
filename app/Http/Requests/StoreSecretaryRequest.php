<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class StoreSecretaryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        Log::info('Secretary rules : ', ['secretary' => $this->all()]);
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone_number' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'experience_year' => 'required|integer|min:0|max:50',
            'responsability_notes' => 'nullable|string|max:255',
            'birthday' => 'required|date|before_or_equal:' . Carbon::now()->subYears(12)->format('Y-m-d'),
        ];
    }

    /* Custom attributes names */

    public function attributes(): array
    {
        return [
            'first_name' => 'prénom',
            'last_name' => 'nom',
            'email' => 'adresse e-mail',
            'password' => 'mot de passe',
            'phone_number' => 'numéro de téléphone',
            'experience_year' => 'années d\'expérience',
            'birthday' => 'date de naissance',
        ];
    }


    /* Custom messages */
    public function messages(): array
    {
        return [
            'first_name.required' => 'Le prénom est obligatoire.',
            'last_name.required' => 'Le nom est obligatoire.',
            'email.required' => 'L\'adresse e-mail est obligatoire.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'email.unique' => 'Cet e-mail est déjà utilisé.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
            'phone_number.required' => 'Le numéro de téléphone est obligatoire.',
            'address.required' => 'L\'adresse est obligatoire.',
            'status.required' => 'Le statut est obligatoire.',
            'experience_year.required' => 'Le nombre d\'années d\'expérience est obligatoire.',
            'experience_year.integer' => 'Le nombre d\'années d\'expérience doit être un entier.',
            'experience_year.max' => 'Le nombre d\'années d\'expérience ne doit pas dépasser 50.',
            'birthday.before_or_equal' => 'La date de naissance doit indiquer un âge d\'au moins 12 ans.',
        ];
    }

}
