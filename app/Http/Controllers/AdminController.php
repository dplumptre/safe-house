<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Auth;
Use App\User;
Use App\Transaction;




class AdminController extends Controller
{
	  public function __construct()
    {
         $this->middleware('admin');
		// $this->middleware('admin', ['except' => ['page1', 'page1']]);
    }
    


    public function all_users()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        return view('admin/all_users', compact('users'));
    }



    public function transactions()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        // 
        // $transactions = Transaction::with('user')->orderBy('user_id')->groupBy('user_id')->get();
        return view('admin/transactions', compact('users'));
    }


    public function transaction_history($id)
    {
        
$transactions = Transaction::where('user_id', $id)->orderBy('created_at', 'desc')->get();
$total_credit = $transactions->sum('credit');
$total_debit  = $transactions->sum('debit');
$account_balance = $total_credit - $total_debit;


        return view('admin/transaction_history', compact('transactions', 'total_credit', 'total_debit', 'account_balance'));
    }




// TRANSFER START

    public function transfer() {
        return view('admin/transfer');
    }


    public function verify_account(Request $request) {
        $account_no = $request->account_no;
        $users = User::where('username', '=', $account_no)->first();
        // 
        // $verify_account = Transaction::with('user')->orderBy('user_id')->groupBy('user_id')->get();
        return view('admin/make_transfer', compact('users'));
    }


public function store_transfer(Request $request)
{
       
       // CHECK IF AMOUNT HAS BEEN ENTERED
        $amount = $request->amount;
    if ($amount == "" || $amount == "NULL") {

        $request->Session()->flash('message.content', 'Please enter amount');
        $request->session()->flash('message.level', 'danger');

        $account_no = $request->username;
        $users = User::where('username', '=', $account_no)->first();
        return view('admin/make_transfer', compact('users'));

    }

// CHECK USER ACCOUNT BALANCE
$user_transactions = Transaction::where('user_id', Auth::user()->id)->get();
$total_credit = $user_transactions->sum('credit');
$total_debit  = $user_transactions->sum('debit');
$account_balance = $total_credit - $total_debit;



  if ($account_balance < $amount) {

        $request->Session()->flash('message.content', 'Your account balance is not sufficient for this transfer');
        $request->session()->flash('message.level', 'danger');

        $account_no = $request->username;
        $users = User::where('username', '=', $account_no)->first();
        return view('admin/make_transfer', compact('users'));

    }



            $transferFrom = new Transaction;
            $transferFrom->user_id = Auth::user()->id;
            $transferFrom->debit = $request->amount;
            $transferFrom->transaction = $request->transaction;

        if ($transferFrom->save()) {
        
            $request->Session()->flash('message.content', 'Your transfer was successful!');
            $request->session()->flash('message.level', 'success');


            $transferTo = new Transaction;
            $transferTo->user_id = $request->user_id;
            $transferTo->credit = $request->amount;
            $transferTo->transaction = $request->transaction;

            $transferTo->save();
        
        }


           return view('admin/transfer');
        }


// TRANSFER END





// CREDIT USERS ACCOUNT
    public function credit_user($id)
    {
        $user = User::find($id);
        return view('admin/credit_user', compact('user'));
    }


    public function store_credit(Request $request, Transaction $credit, User $user)
    {

        $this->validate($request, [
            'credit' => 'required|digits_between:4,9',
            'transaction' => 'required|string|max:30',
            ]);

        $credit = new Transaction;
        $credit->user_id = $request->user_id;
        $credit->credit = $request->credit;
        $credit->transaction = $request->transaction;

        if ($credit->save()) {
        
            $request->Session()->flash('message.content', 'Account was successfully credited!');
            $request->session()->flash('message.level', 'success');
        
        }


        return back();
    }



// DEBIT USERS ACCOUNT
    public function debit_user($id)
    {
        $user = User::find($id);
        return view('admin/debit_user', compact('user'));
    }



    public function store_debit(Request $request, Transaction $debit)
    {

        $this->validate($request, [
            'debit' => 'required|digits_between:4,9',
            'transaction' => 'required|string|max:30',
            ]);

        $debit = new Transaction;
        $debit->user_id = $request->user_id;
        $debit->debit = $request->debit;
        $debit->transaction = $request->transaction;

        if ($debit->save()) {
        
            $request->Session()->flash('message.content', 'Account was successfully debited!');
            $request->session()->flash('message.level', 'success');
        
        }


        return back();
    }






    // public function search(Request $request)
    // {
    //     $account_number = $request->username;

    //     $users = User::where('username', '=', $account_number)->first();

    //     $check = User::where('username', '=', $account_number)->count();

    //     if ($check > 0 ) {
    //         return view('admin/credit_user', compact('users'));
    //     }
    //    else{
        
    //         $request->Session()->flash('message.content', 'Account number does not exist!');
    //         $request->session()->flash('message.level', 'danger');
    //         return redirect('admin/credit_user');
    //    }
    // }


// public function store_loan(Request $request, Transaction $credit, User $user)
//     {


//         $this->validate($request, [
//             'account' => 'required|integer',
//             'credit' => 'required|digits_between:4,9',
//             'transaction' => 'required|string',
//             ]);





//         $credit = new Transaction;
//         $credit->account = $request->account;
//         $credit->credit = $request->credit;
//         $credit->transaction = $request->transaction;
                
//         $credit->user_id = $request->user()->id;
//         //$leave->save();

//         if ($credit->save()) {
        
//             $request->Session()->flash('message.content', 'Your credit application was successful!');
//             $request->session()->flash('message.level', 'success');

//                 #SEND EMAIL
            

//              //    $users = User::where('id', '=', $request->user_id)->first();
                
//              // $applicant_name =  $users->name;
//              // $applicant_email =  $users->email;


            

//              //        $hremails = User::where('role', '=', 'admin')
//              //        ->where('department', '=', 'HR & Admin Team')->first();


//              //        $supervisor_email = $hremails->email;
                 


//              //     Mail::send('mail.firstloan', array('applicant_name'=> $applicant_name), function($message) use ($supervisor_email) 
//              //     {
//              //        $message->to($supervisor_email,'TFOLC LEAVE APP')->subject('Loan Request has been sent to you');
//              //     });            
            
        
//         }


//         return back();
//     }








    // public function debit_user()
    // {
    //     $users = User::All();
    //     return view('admin/debit_user', compact('users'));
    // }


    public function verify(Request $request, User $account_status)
    {

        $this->validate($request, [
            'status' => 'required',
        ]);

        $account_status->status = $request->status;
        
        $account_status->update();
        $request->Session()->flash('message.content', 'Users account status was successfully updated!');
        $request->session()->flash('message.level', 'success');
        return back();

    }







}	//End
