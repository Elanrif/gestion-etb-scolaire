<?php

namespace App\Http\Requests;

use App\Models\Professor;
use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class StoreProfessorRequest extends FormRequest
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
        Log::info('Professor rules : ', ['professor' => $this->all()]);
        return [
            'first_name' =>'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone_number' => 'required|string|max:255|unique:'.User::class,
            'employee_number' => 'required|string|max:255|unique:'.Professor::class,
            'status' => 'required|string|max:255',
            'discipline' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'experience_years' => 'required|integer|min:0|max:50',
            'level_taught' => 'required|string|max:255',
            'additional_info' => 'nullable|string|max:255',
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
            'discipline' => 'discipline principale',
            'address' => 'addresse',
            'employee_number' => 'numéro d\'employé',
            'experience_years' => 'années d\'expérience',
            'birthday' => 'date de naissance',
            'level_taught' => 'niveau enseigné',
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
            'employee_number.required' => 'Le numéro d\'employé est obligatoire.',
            'employee_number.unique' => 'Ce numéro est déjà utilisé.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.confirmed' => 'La confirmation du mot de passe ne correspond pas.',
            'phone_number.required' => 'Le numéro de téléphone est obligatoire.',
            'phone_number.unique' => 'Le numéro de téléphone est déjà utilisé.',
            'address.required' => 'L\'adresse est obligatoire.',
            'status.required' => 'Le statut est obligatoire.',
            'discipline.required' => 'La discipline est obligatoire.',
            'level_taught.required' => 'Le niveau enseigné est obligatoire.',
            'experience_years.required' => 'Le nombre d\'années d\'expérience est obligatoire.',
            'experience_years.integer' => 'Le nombre d\'années d\'expérience doit être un entier.',
            'experience_years.max' => 'Le nombre d\'années d\'expérience ne doit pas dépasser 50.',
            'birthday.before_or_equal' => 'La date de naissance doit indiquer un âge d\'au plus 12 ans.',
        ];
     }
}
