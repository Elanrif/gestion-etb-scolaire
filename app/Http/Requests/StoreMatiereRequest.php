<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;
class StoreMatiereRequest extends FormRequest
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
           'name' => 'required|string|max:255',
           'classe_id'=> 'nullable|string|max:255|exists:classes,id', 
           'professor_id'=> 'nullable|string|max:255|exists:professors,id',
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'nom',
            'class_id' => 'classe',
            'professor_id' => 'responsable de la matière',
        ];
    }
     /* Custom messages */
     public function messages(): array
     {
         return [
             'name.required' => 'Le prénom est obligatoire.',
             'classe_id.required' => 'La classe est obligatoire.',
             'professor_id.required' => 'Le professeur est obligatoire.',
         ];
     }
}
