<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Log;

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
        Log::info('Student rules : ', ['student' => $this->all()]);
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone_number' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'level'=> 'required|string|max:255',
            'class'=> 'required|string|max:255',
            'relationship'=> 'required|string|max:255',
            'guardian_phone_number'=> 'required|string|max:255',
            'guardian_email'=> 'required|string|max:255',
            'guardian_last_name'=> 'required|string|max:255',
            'guardian_first_name'=> 'required|string|max:255',
            'matricule'=> 'required|string|max:255',
            'birthday' => 'required|date',
            
        ];
    }
}
