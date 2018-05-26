<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    //


    public function index()
    {
        return view('welcome.index');
    }

    public function notification()
    {
        return view('welcome/notification');
    }


    public function access_denied()
    {
        return view('welcome/access_denied');
    }

   




   
}
