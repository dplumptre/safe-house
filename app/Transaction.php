<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'transaction', 'credit', 'debit','user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    

    public function balance($user_id)
    {


        $crd =0;
        $drb =0;

       $data = $this->where('user_id',$user_id)->get();
       foreach($data as $d){
       $crd  +=   $d->credit;
       $drb  +=   $d->debit;
       }

       $total = $crd - $drb;

       return number_format($total);
        
    }





}
