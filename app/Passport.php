<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Passport extends Model
{
    protected $fillable = [
         'passport','user_id'
    ];


    public function users()
    {
        return $this->belongsTo('App\User');
    }


    public function checkPassport($user_id)
    {
        return $this->where('user_id',$user_id)->get()->count();
    }

    public function getPassport($user_id)
    {
        return $this->where('user_id',$user_id)->first();
    }


}
