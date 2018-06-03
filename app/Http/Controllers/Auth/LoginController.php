<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\User;
use Auth;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = 'home/update_profile';

    protected $toAdmin ='admin/dashboard';

    protected $toHome ='home';
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function validateLogin(Request $request)
    {
        $this->validate($request, [
            $this->username() => 'required|string|exists:users,username,status,1',
            //$this->username() => 'required|string|exists:users,username',
            'password' => 'required|string',
        ]);
    }


    protected function authenticated($request, $user)
    {

        // if ($user->status === 0) {
        //     auth()->logout();
        // $request->Session()->flash('message.content', 'This account has not been verified');
        // $request->session()->flash('message.level', 'danger');
        // return back();
        // }
        

        if($user->role_slug === 'admin') {
            return redirect()->intended($this->toAdmin);
        }

        return redirect()->intended($this->toHome);
    }



    public function username()
    {
        return 'username';
    }


  


}
