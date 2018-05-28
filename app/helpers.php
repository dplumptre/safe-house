<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Auth;
Use App\User;
Use App\Transaction;


function account_number($length) {
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}


// function account_balance($id) {
// 	$transactions = Transaction::where('user_id', $id)->orderBy('created_at', 'desc')->get();
// 	$total_credit = $transactions->sum('credit');
// 	$total_debit  = $transactions->sum('debit');
// 	$account_balance = $total_credit - $total_debit;
//     return $account_balance;
// }






















?>