<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class StoreStudentRequest extends FormRequest
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
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone_number' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'student_id' => 'required|string|max:255',
            'level'=> 'required|string|max:255',
            'class'=> 'required|string|max:255',
            'relationship'=> 'required|string|max:255',
            'guardian_phone'=> 'required|string|max:255',
            'guardian_email'=> 'required|string|max:255',
            'guardian_last_name'=> 'required|string|max:255',
            'guardian_first_name'=> 'required|string|max:255',
            'birthday' => 'required|date',
            
        ];
    }
}
