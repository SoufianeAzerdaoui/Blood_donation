<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BonatebloodRequest extends FormRequest
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
            'full_name' => 'required|string',
            'city' => 'required|string',
            'age' => 'required|int',
            'phone' => 'required',
            'email'=> 'required|email|string|unique:offers,email',
            'description' => 'nullable|string',
            'type' => 'required|array',
        ];
    }
}
