<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UpdateNoteRequest extends FormRequest
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
        Log::info('Matiere rules : ', ['matiere' => $this->all()]);
        return [
           'note' => 'required|string|max:255',
           'classe_id'=> 'nullable|integer|max:255|exists:classes,id', 
           'professor_id'=> 'nullable|integer|max:255|exists:professors,id',
           'matiere_id'=> 'nullable|integer|max:255|exists:professors,id',
           'student_id'=> 'nullable|integer|max:255|exists:professors,id',
           'trimestre' => 'required|string|max:255',
          
        ];
    }

    public function attributes(): array
    {
        return [
            'note' => 'nom',
            'class_id' => 'classe',
            'professor_id' => 'responsable de la matière',
            'matiere_id' => 'nom de la matière de la matière',
            'student_id' => 'nom de l\'étudiant',
            'trimestre' => 'trimestre',
            
            
        ];
    }
     /* Custom messages */
     public function messages(): array
     {
         return [
             'note.required' => 'veillez saisir une note.',
             'classe_id.required' => 'La classe est obligatoire.',
             'professor_id.required' => 'Le professeur est obligatoire.',
             'matiere_id' => 'le nom de la matière de la matière',
             'student_id' => 'le nom de l\'étudiant',
             'trimestre' => 'le trimestre est obligatoire',
         ];
     }
}
