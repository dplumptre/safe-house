<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transaction;
use Auth;
use App\User;
use App\Detail;
use App\Passport;
use App\Idcard;
use App\Http\Requests\GalleryRequest;
use App\Http\Requests\CardRequest;
use Intervention\Image\Facades\Image;


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
        $passport = new Passport();
        $card = new Idcard();
        $user_id =$this->loggedin_user()->id;
        $user = $this->loggedin_user();
        $t = new  Transaction();
        $bal = $t->balance($user_id);
        return view('home.home', compact('bal','user','passport','card'));
    }





// Store Edited Profile



    public function edit_profile()
    {

          $user_id = $this->loggedin_user()->id;  
          $user = Detail::where('user_id', $user_id)->first();
          $check = Detail::where('user_id', $user_id)->count();
          
          if ($check > 0) {
            return redirect('home/update_profile');
          }
          else{
            return view('home.edit_profile');
          }
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
          return redirect('home/update_profile');

          $user = Detail::where('user_id', $user->id)->first();
          return view('home.update_profile', compact('user'));
        }

        else{

          return view('home.edit_profile');
        }

    }




    public function update_profile()
    {
        $user_id = $this->loggedin_user()->id;  
        $user = Detail::where('user_id', $user_id)->first();
       
        return view('home.update_profile',compact('user'));
    }


    public function store_updated_profile(Request $request, Detail $profile) {
        $request->validate([
            'mobile' => 'required',
            'ssn' => 'required|Numeric',
            'dob' => 'required',
            'employment_status' => 'required',
            'address' => 'required',
        ]);

        $user = $this->loggedin_user();

        // $profile = new Detail;
        $profile->user_id = $user->id;
        $profile->mobile = $request->mobile;
        $profile->ssn = $request->ssn;
        $profile->dob = $request->dob;
        $profile->employment_status = $request->employment_status;
        $profile->address = $request->address;

        $profile->update();

        
          $request->session()->flash('message.content', 'Profile Updated Successfully!');
          $request->session()->flash('message.level', 'success');
          return back();

         
    }













    public function ac()
    {
      
        $user_id = $this->loggedin_user()->id;
        $user = $this->loggedin_user();
        $data = Transaction::where('user_id',$user_id)->orderBy('id','Desc')->get();
        return view('home.accountsummary', compact('data','user'));
    }


//     public function transfer()
//     {

//       $authid = $this->loggedin_user()->id;
//       $user = $this->loggedin_user();
//       $users= User::all();  
//       return view('home.transfer',compact('users','authid','user'));
//     }


//     public function v_a() {
//         $user = $this->loggedin_user();
//         return view('home.verify_account',compact('user'));
//     }



//     public function post_v_a(Request $request) {

//         $user = $this->loggedin_user();
//         $request->validate([
//             'account_no' => 'required|Numeric',
//         ]);
//         $account_no = $request->account_no;
//         $users = User::where('username', '=', $account_no)->first();
//         return view('home/transfer', compact('users','user'));
//     }


//     public function posttransfer(Request $request)
//     {

//         $request->validate([
//             'transaction' => 'required',
//             'amount' => 'required|Numeric',
//             'beneficiary' => 'required',
//         ]);

//         $amount = $request->amount;

//  // CHECK USER ACCOUNT BALANCE
//   $user_transactions = Transaction::where('user_id', Auth::user()->id)->get();
//   $total_credit = $user_transactions->sum('credit');
//   $total_debit  = $user_transactions->sum('debit');
//   $account_balance = $total_credit - $total_debit;

        
// if ($amount > $account_balance) {
//       $request->Session()->flash('message.content', 'Your account balance is not sufficient for this transfer');
//       $request->session()->flash('message.level', 'danger');

//       return back();

//         $users = User::where('username', '=', $account_no)->first();
//         return view('admin/make_transfer', compact('users'));
//     }
//     elseif ($amount == "" || $amount == NULL){
//         $users = User::where('username', '=', $account_no)->first();
//         $request->Session()->flash('message.content', 'Please enter amount');
//         $request->session()->flash('message.level', 'danger');
//         return view('admin/make_transfer', compact('users'));
//     }
//     elseif ($transaction == "" || $transaction == NULL){
//         $users = User::where('username', '=', $account_no)->first();
//         $request->Session()->flash('message.content', 'Please enter a narration for this transfer');
//         $request->session()->flash('message.level', 'danger');
//         return view('admin/make_transfer', compact('users'));
//     }
//     else{
       
//             $transferFrom = new Transaction;
//             $transferFrom->user_id = Auth::user()->id;
//             $transferFrom->debit = $amount;
//             $transferFrom->transaction = $request->transaction;

//         if ($transferFrom->save()) {
        
//             $request->Session()->flash('message.content', 'Your transfer was successful!');
//             $request->session()->flash('message.level', 'success');

//             $transferTo = new Transaction;
//             $transferTo->user_id = $request->beneficiary;
//             $transferTo->credit = $request->amount;
//             $transferTo->transaction = $request->transaction;

//             $transferTo->save();
//         }

//     }

//      $request->session()->flash('message.content', 'Transfer Successful');
//      $request->session()->flash('message.level', 'success');
// return redirect('home/accountsummary');


//     }










// TRANSFER START

    public function transfer() {
        return view('home/transfer');
    }


    public function verify_acct(Request $request) {

        $this->validate($request, [
            'account_no' => 'required|integer:10'
            ]);

        $account_no = $request->account_no;
        $users = User::where('username', '=', $account_no)->first();

        if ($users) {
            $request->Session()->flash('message.content', 'Account number ok!');
            $request->session()->flash('message.level', 'success');
            return view('home/make_tranzfer', compact('users'));
        }
        else{
                $request->Session()->flash('message.content', 'The account number is invalid');
                $request->session()->flash('message.level', 'danger');
                return view('home/transfer');
        }
        
    }


public function store_tranzfer(Request $request)
{
  
        // CHECK USER ACCOUNT BALANCE
        $user_transactions = Transaction::where('user_id', Auth::user()->id)->get();
        $total_credit = $user_transactions->sum('credit');
        $total_debit  = $user_transactions->sum('debit');
        $account_balance = $total_credit - $total_debit;
       
        $amount = $request->amount;
      
        $transaction = $request->transaction;
        $account_no = $request->username;

    if ($amount > $account_balance) {
        $users = User::where('username', '=', $account_no)->first();
        $request->Session()->flash('message.content', 'Your account balance is not sufficient for this transfer');
        $request->session()->flash('message.level', 'danger');
        return view('home/make_tranzfer', compact('users'));
    }
    elseif ($amount == "" || $amount == NULL){
        $users = User::where('username', '=', $account_no)->first();
        $request->Session()->flash('message.content', 'Please enter amount');
        $request->session()->flash('message.level', 'danger');
        return view('home/make_tranzfer', compact('users'));
    }
    elseif ($transaction == "" || $transaction == NULL){
        $users = User::where('username', '=', $account_no)->first();
        $request->Session()->flash('message.content', 'Please enter a narration for this transfer');
        $request->session()->flash('message.level', 'danger');
        return view('home/make_tranzfer', compact('users'));
    }
    else{
       
            $transferFrom = new Transaction;
            $transferFrom->user_id = Auth::user()->id;
            $transferFrom->debit = $amount;
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

    }
     return redirect('home/accountsummary');
         
} // TRANSFER END
















































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




    public function p_e_i(CardRequest $request)
    {
        $user = $this->loggedin_user();
        $image = $request->file('idcard');
        $filename = arrageImageName($image->getClientOriginalName());
        $t = new  Transaction();
        $bal = $t->balance($user->id);
        $card = new Idcard();
        $passport = new Passport();


    if($card->checkIdcard($user->id) < 1){
//insert
                     /* inserting in database */

                     $photo  = Idcard::create(array(
                        'user_id'   => $user->id,
                        'idcard'  => $filename,
                        ));
            
    }else{

  //update     
  
  $data = $card->getIdcard($user->id);
  $path1 = "images/thumb/" .$data->idcard;
  $path2 = "images/pics/" .$data->idcard;
  // remove the pics from the folder
  unlink($path1);
  unlink($path2);

  $data->idcard = $filename;
  $data->save();

  //return redirect()->back();

    }
                         /*
                          * Declearing path
                          * make sure you chmod 777 the dir below
                          * or you will get error saying "Can't write image data to path "
                          *  */
                          $thumb_path = 'images/thumb/'.$filename;
                          $normal_path = 'images/pics/'.$filename;
      
                    $thumb = Image::make($image->getRealPath())->resize(150, 150)->sharpen(15)->save($thumb_path);
                    $normalimage = Image::make($image->getRealPath())->save( $normal_path);

   

                    return view('home.home', compact('user','bal','passport','card'));
    }


    public function p_e_pic(GalleryRequest $request)
    {
        $user = $this->loggedin_user();
        $image = $request->file('passport');
        $filename = arrageImageName($image->getClientOriginalName());
        $card = new Idcard();
        $passport = new Passport();
        $t = new  Transaction();
        $bal = $t->balance($user->id);
    


    if($passport->checkPassport($user->id) < 1){
//insert
                     /* inserting in database */

                     $photo  = Passport::create(array(
                        'user_id'   => $user->id,
                        'passport'  => $filename,
                        ));
            
    }else{

  //update     
  
  $data = $passport->getPassport($user->id);
  $path1 = "images/thumb/" .$data->passport;
  $path2 = "images/pics/" .$data->passport;
  // remove the pics from the folder
  unlink($path1);
  unlink($path2);

  $data->passport = $filename;
  $data->save();

  //return redirect()->back();

    }



                         /*
                          * Declearing path
                          * make sure you chmod 777 the dir below
                          * or you will get error saying "Can't write image data to path "
                          *  */
                          $thumb_path = 'images/thumb/'.$filename;
                          $normal_path = 'images/pics/'.$filename;
      
                    $thumb = Image::make($image->getRealPath())->resize(150, 150)->sharpen(15)->save($thumb_path);
                    $normalimage = Image::make($image->getRealPath())->save( $normal_path);

   

                    return view('home.home', compact('user','bal','passport','card'));
    }













    public function p_e_pro()
    {
      return view('home.edit_profile',compact('user'));
    }



}   // END
