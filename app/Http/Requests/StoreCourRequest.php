<?php

namespace App\Http\Requests;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Http\FormRequest;

class StoreCourRequest extends FormRequest
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
        Log::info('Cour rules : ', ['cour' => $this->all()]);
        return [
           'name' => 'required|string|max:255',
           'classe_id'=> 'nullable|integer|max:255|exists:classes,id', 
           'professor_id'=> 'nullable|integer|max:255|exists:professors,id',
           'matiere_id'=> 'nullable|integer|max:255|exists:matieres,id',
        ];
    }

     public function attributes(): array
    {
        return [
            'name' => 'nom',
            'class_id' => 'classe',
            'professor_id' => 'responsable de la matière',
            'matiere_id' => 'nom de la matière',
        ];
    }
     /* Custom messages */
     public function messages(): array
     {
         return [
             'name.required' => 'Le prénom est obligatoire.',
             'classe_id.required' => 'La classe est obligatoire.',
             'professor_id.required' => 'Le professeur est obligatoire.',
             'matiere_id.required' => 'La matière est obligatoire.',
         ];
     }
}
