<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'transaction', 'amount', 'password','username','role_id','status'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    

}
