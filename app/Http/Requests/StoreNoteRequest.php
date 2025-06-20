<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class StoreNoteRequest extends FormRequest
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
        Log::info('Note rules : ', ['note' => $this->all()]);
        return [
           'note' => 'required|string|max:255',
           'classe_id'=> 'nullable|integer|max:255|exists:classes,id', 
           'matiere_id'=> 'nullable|integer|max:255|exists:matieres,id',
           'student_id'=> 'nullable|integer|max:255|exists:students,id',
           'trimestre' => 'required|string|max:255',
          
        ];
    }

    public function attributes(): array
    {
        return [
            'note' => 'nom',
            'class_id' => 'classe',
            'matiere_id' => 'nom de la matière',
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
             'matiere_id.required' => 'le nom de la matière est obligatoire',
             'student_id.required' => 'le nom de l\'étudiant est obligatoire',
             'trimestre.required' => 'le trimestre est obligatoire',
         ];
     }
}
