<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    protected $fillable = [
        'address', 'dob','mobile','ssn','employment_status','user_id'
    ];


    public function user()
    {
        return $this->belongsTo('App\User');
    }


    public function isProfileUpdated($user_id)
    {
        return $this->where('user_id',$user_id)->get()->count();
    }


}
