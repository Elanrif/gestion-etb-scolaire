<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;
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
            'phone_number' => 'required|string|max:255',
            'employee_number' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'discipline' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'experience_year' => 'required|integer|min:0|max:50',
            'level_taught' => 'required|string|max:255',
            'additional_info' => 'nullable|required|string|max:255',
            'birthday' => 'required|date',
        ];
    }
}
