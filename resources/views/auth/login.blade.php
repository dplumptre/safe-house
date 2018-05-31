@extends('layouts.app')

@section('content')





<div class="container">
<div id="video-demo" class="row">
          <div class="col-md-6">
            <h2>Welcome to Acorn Mobile Banking</h2>
            <p> <span>Acorn Mobile Wallet is a mobile banking solution that allows you to access banking services from your mobile phone
              anywhere anytime. You have several options at your finger tips to choose from. You can:</span> </p>
            <ul>
              <li>Manage Your Account(s)</li>
              <li>Send Money</li>
              <li>Withdraw Cash</li>
              <li>Buy Airtime</li>
              <li>Pay Bills</li>
              <li>Other Services</li>
            </ul>
            <a data-hash="" href="#" class="btn btn-sm btn-primary">Find Out More</a> </div>
          <div class="col-md-6">
            <h4 class="short">Online Banking Login</h4>

            @if(session()->has('message.level'))
                <div class="alert alert-{{ session('message.level') }}"> 
               
                <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            <li> {!! session('message.content') !!}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form method="POST" action="{{ route('login') }}">
                        @csrf
              <div class="row">
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Account ID</label>
                    <input type="username" value="{{ old('username') }}" data-msg-required="Please enter your name." maxlength="10" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" id="username" required autofocus>



                <h4 class="short">Online Banking Login</h4>
     <form method="POST" action="{{ route('login') }}">
                        @csrf

              <div class="row">
                <div class="form-group">
                  <div class="col-md-6">
                    <label>Account ID</label>
                    <input type="username" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="username" value="{{ old('username') }}" required autofocus>
                                @if ($errors->has('username'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('username') }}</strong>
                                    </span>
                                @endif

                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <div class="col-md-12">
                    <label>Password</label>
                    <input type="password" value="" data-msg-required="Please enter your password." class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif

                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-12">
                  <hr>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <input type="submit" value="Login" class="btn btn-primary btn-sm pull-left">
                </div>
              </div>
            </form>
          </div>
        </div>




                </div>
            </div>
        </div>
    </div>
</div>
@endsection

