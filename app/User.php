<?php

namespace App;
use Cache;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','username','role_slug','status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function roles()
    {
        return $this->belongsTo('App\Role');
    }


    public function details()
    {
        return $this->hasOne('App\Detail');
    }

    public function transactions()
    {
        return $this->hasMany('App\Transaction');
    }




    //Check if User is online
    public function isOnline(){
        return Cache::has('user-is-online-' . $this->id);
    }


}   //END
