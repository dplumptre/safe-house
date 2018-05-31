@extends('layouts.app')

@section('content')


<div class="container">
<div id="video-demo" class="row">
          <div class="col-md-6">
            <h2>Enjoy World Class Banking</h2>
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
            <h4 class="short">User Registration</h4>

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

            <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-12">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-12">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-12 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
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
