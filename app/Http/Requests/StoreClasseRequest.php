<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClasseRequest extends FormRequest
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
            return [
            'name' => 'required|string|max:255',
            'profIds' => 'nullable|array',
            'profIds.*' => 'integer|exists:professors,id',
        ];
    }

    /* Custom attributes names */

    public function attributes(): array
    {
        return [
            'name' => 'nom',
            'profIds' => 'ID professeurs',
        ];
    }


    /* Custom messages */
    public function messages(): array
    {
        return [
            'name.required' => 'Le prénom est obligatoire.',
            'name.array' => 'Il manque le tableau.',
            'professorId.exists' => 'Vérifier les informations des professeurs.',
           
        ];
    }
}
