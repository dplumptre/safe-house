<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }



    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [ 
            'idcard'=>      'required|image|mimes:jpeg,png,jpg,JPG|max:3500',  

   ];
    }





public function messages()
{

    return [
    'idcard.max'=>      'Id card should not be more than 3.5mb',  
    ];
}









}
