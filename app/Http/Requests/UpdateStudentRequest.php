<?php

namespace App\Http\Requests;

use App\Models\Student;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateStudentRequest extends FormRequest
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
        $student = $this->route('student');
        Log::info('Upload student rules : ', ['student' => $this->all()]);
        return [
            'cin_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'card_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255',Rule::unique(User::class)->ignore($student->user_id)],
            'phone_number' => [
                'required', 'string', 'max:255',
                Rule::unique(User::class)->ignore($student->user_id),
            ],
            'address' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'level'=> 'required|string|max:255',
            'classe_id'=> 'required|integer|max:255|exists:classes,id',
            'relationship'=> 'required|string|max:255',
            'guardian_phone_number'=> 'required|string|max:255',
            'guardian_email'=> 'required|string|max:255',
            'guardian_last_name'=> 'required|string|max:255',
            'guardian_first_name'=> 'required|string|max:255',
            'matricule' => [
                'required', 'string', 'max:255',
                Rule::unique(Student::class)->ignore($student->id),
            ],
            'birthday' => 'required|date|before_or_equal:'.Carbon::now()->subYears(12)->format('Y-m-d'), 
    ];
}

public function attributes(): array
{
    return [
        'cin_photo'  => 'photo d\'identité',
        'card_photo'  =>'photo de la carte d\'étudiant',
        'first_name' => 'prénom',
        'last_name' => 'nom',
        'email' => 'adresse e-mail',
        'phone_number' => 'numéro de téléphone',
        'address' => 'addresse',
        'gender' => "le genre de l'etudiant",
        'level' => 'le niveau de l\'etudiant',
        'classe_id' => 'classe de l\'etudiant',
        'relationship' => 'lieu de parenté de l\'etudiant',
        'guardian_phone_number' => 'le telephone du responsable l\'etudiant',
        'guardian_email' => 'l\'Email du responsable de l\'etudiant',
        'guardian_last_name' => 'nom du responsable de l\'etudiant',
        'guardian_firs_name' => 'prénom du responsable de l\'etudiant',
        'matricule' => 'matricule de l\'etudiant',
        'birthday' => 'date de naissance',
    ];
}
    /* Custom messages */
    public function messages(): array
    {
        return [
            'cin_photo.image'  => 'La photo d\'identité doit être de type image',
            'card_photo.image'  =>'La carte d\'étudiant doit être de type image',
            'first_name.required' => 'Le prénom est obligatoire.',
            'last_name.required' => 'Le nom est obligatoire.',
            'email.required' => 'L\'adresse e-mail est obligatoire.',
            'email.email' => 'L\'adresse e-mail n\'est pas valide.',
            'email.unique' => 'Cet e-mail est déjà utilisé.',
            'phone_number.required' => 'Le numéro de téléphone est obligatoire.',
            'phone_number.unique' => 'Le numéro de téléphone est déjà utilisé.',
            'address.required' => 'L\'adresse est obligatoire.',
            'gender.required' => 'Le genre est obligatoire.',
            'level.required' => 'Le niveau est obligatoire.',
            'classe_id.required' => 'La classe est obligatoire.',
            'relationship.required' => 'Le lien de parenté est obligatoire.',
            'guardian_phone_number.required' => 'Le 
            numéro du responsable obligatoire.',
            'guardian_email.required' => "L'Email est obligatoire.",
            'guardian_last_name.required' => 'Le nom est obligatoire.',
            'guardian_first_name.required' => 'Le prénom est obligatoire.',
            'matricule.required' => 'Le matricule est obligatoire.',
            'birthday.before_or_equal' => 'La date de naissance doit indiquer un âge d\'au plus 12 ans.',
        ];
    }
}
