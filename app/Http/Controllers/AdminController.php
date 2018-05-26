<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\User;




class AdminController extends Controller
{
	  public function __construct()
    {
         $this->middleware('admin');
		// $this->middleware('admin', ['except' => ['page1', 'page1']]);
    }
    


    public function all_users()
    {
    	$users = User::All();
        return view('admin/all_users', compact('users'));
    }








}	//End
