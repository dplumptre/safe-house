<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use Auth;
use App\User;
use App\Detail;
use App\Http\Requests\GalleryRequest;


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





// Store Edited Profile



    public function up()
    {
        $user = $this->loggedin_user();  
        // $user = Detail::where('user_id', $user)->first();
        return view('home.update_profile',compact('user'));
    }


    public function store_profile(Request $request) {
        $request->validate([
            'mobile' => 'required',
            'ssn' => 'required|Numeric',
            'dob' => 'required',
            'employment_status' => 'required',
            'address' => 'required',
        ]);

        $user = $this->loggedin_user();

        $profile = new Detail;
        $profile->user_id = $user->id;
        $profile->mobile = $request->mobile;
        $profile->ssn = $request->ssn;
        $profile->dob = $request->dob;
        $profile->employment_status = $request->employment_status;
        $profile->address = $request->address;

        if ($profile->save()) {
          $request->session()->flash('message.content', 'Profile Updated Successfully!');
          $request->session()->flash('message.level', 'success');

        // $user = Detail::where('user_id', $user_id)->first();
          
        // return view('home.update_profile', compact('user'));
        // }
        // else{
        //   return back();
        }


        return view('home.update_profile',compact('user'));
        // return view('home.update_profile',compact('user'));
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

/*
profile 

&

Pictures


*/


    public function e_i()
    {
      $user = $this->loggedin_user();
      return view('home.edit_idcard',compact('user'));
    }


    public function e_pic()
    {
      $user = $this->loggedin_user();  
      return view('home.edit_picture',compact('user'));
    }




    public function p_e_i()
    {
      return view('home.edit_idcard',compact('user'));
    }


    public function p_e_pic(GalleryRequest $request)
    {
   

return $image;

        $image = $request->file('passport');

       // return $type;


                    $filename = arrageImageName($image->getClientOriginalName());


                     /* inserting in database */


                    $photo  = Payment::create(array(
                    'receipt'=> $filename,
                    'paymenttype_id'=> $type,
                    'term_id'  => $term_id,
                    'class_id'  => $class_id,
                    'user_id'   => $this->CurrentUserId(),
                    ));

                     /*
                      * Declearing path
                      * make sure you chmod 777 the dir below
                      * or you will get error saying "Can't write image data to path "
                      *  */
                    $thumb_path = 'images/thumb/'.$filename;
                    $normal_path = 'images/pics/'.$filename;

             $thumb = Image::make($image->getRealPath())->resize(150, 60)->sharpen(15)->save($thumb_path);
              $normalimage = Image::make($image->getRealPath())->save( $normal_path);

                 return redirect('home.edit_picture',compact('user'));
    }













    public function p_e_pro()
    {
      return view('home.edit_profile',compact('user'));
    }



}   // END
