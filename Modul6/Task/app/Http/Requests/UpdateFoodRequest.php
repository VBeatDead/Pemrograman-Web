<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFoodRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'string|max:255',
            'category' => 'string|max:255',
            'price' => 'numeric|between:0.01,9999999.99',
        ];
    }
}
