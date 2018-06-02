<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Idcard extends Model
{
    protected $fillable = [
         'idcard','user_id'
    ];


    public function users()
    {
        return $this->belongsTo('App\User');
    }

    public function checkIdcard($user_id)
    {
        return $this->where('user_id',$user_id)->get()->count();
    }

    public function getIdcard($user_id)
    {
        return $this->where('user_id',$user_id)->first();
    }


}
