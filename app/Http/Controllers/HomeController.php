<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use Auth;
use App\User;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */




    public function loggedin_user(){
       return    Auth::user(); 
    }



    public function index()
    {
      
        $user_id =$this->loggedin_user()->id;
        $user = $this->loggedin_user();
        $t = new  Transaction();
        $bal = $t->balance($user_id);
        return view('home.home', compact('bal','user'));
    }


    public function ac()
    {
      
        $user_id = $this->loggedin_user()->id;
        $user = $this->loggedin_user();
        $data = Transaction::where('user_id',$user_id)->orderBy('id','Desc')->get();
        return view('home.accountsummary', compact('data','user'));
    }


    public function transfer()
    {

      $authid = $this->loggedin_user()->id;
      $user = $this->loggedin_user();
      $users= User::all();  
      return view('home.transfer',compact('users','authid','user'));
    }


    public function v_a() {
        $user = $this->loggedin_user();
        return view('home.verify_account',compact('user'));
    }



    public function post_v_a(Request $request) {

        $user = $this->loggedin_user();
        $request->validate([
            'account_no' => 'required|Numeric',
        ]);
        $account_no = $request->account_no;
        $users = User::where('username', '=', $account_no)->first();
        return view('home/transfer', compact('users','user'));
    }


    public function posttransfer(Request $request)
    {

       //   return $this->loggedin_user()->id;


       
        $request->validate([
            'transaction' => 'required',
            'amount' => 'required|Numeric',
            'beneficiary' => 'required',
        ]);


  //

     $user = Transaction::create([

        'transaction'=>'Debit: '.$request->transaction,
        'debit'=> $request->amount,
        'credit'=>'0',
        'user_id'=> $this->loggedin_user()->id,
     ]);



     $user = Transaction::create([

        'transaction'=>'Credit: '.$request->transaction,
        'credit'=> $request->amount,
        'debit'=>'0',
        'user_id'=> $request->beneficiary,
     ]);

     $request->session()->flash('message.content', 'Transfer Successful');
     $request->session()->flash('message.level', 'success');
return redirect('home/accountsummary');


    }




    public function profile()
    {
     
      return view('home.profile');
    }







}   // END
