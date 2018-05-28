@extends('layouts.app')

@section('title', 'Home page')
<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">



@section('content')
<div class="container">

    	@include('layouts.partials.errors')

    <div class="panel panel-default">
        <div class="panel-heading">CREDIT USERS ACCOUNT </div>
            <div class="panel-body" align="center">

                
				<div class="card-body col-md-6">


  <form method="post" action="/admin/verify_account">
    {{ csrf_field() }}

    <div class="form-group row">
      <label>Account No</label>
      <input id="account_no" type="text" name="account_no" value="" >
      <button type="submit" class="btn btn-primary btn-xs">Verify Account</button>
    </div>
    
  </form>





<form method="post" action="/admin/store_transfer">
          {{ csrf_field() }}

	<div class="form-group row">
        <label for="username" class="col-md-4 col-form-label text-md-right">{{ __('Account No') }}</label>


        <div class="col-md-6">
          <input type="text" name="user_id" value="{{$users->id}}" readonly>
            <input id="username" type="text" name="username" value="{{$users->username}}" readonly="">
        </div>
    </div>

	<div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Account Name') }}</label>


        <div class="col-md-6">
            <input id="name" type="text" name="name" value="{{$users->name}}" readonly="">
        </div>
    </div>

       <div class="form-group{{ $errors->has('leave_starts') ? ' has-error' : '' }}">
          <label class="control-label col-md-4"> Amount * </label>
          <div class="form-group col-md-6 ">

              <div class="input-group">
                <div class="input-group-addon">₦</div>
                <input type="text" class="form-control" name="amount" placeholder="1000">
                <div class="input-group-addon">.00</div>

                @if ($errors->has('amount'))
                    <span class="invalid-feedback">
                        <strong>{{ $errors->first('amount') }}</strong>
                    </span>
                @endif
            </div>
            <em style="color: #ccc">Please do not include a comma</em>
        </div>
      </div>


      
      <div class="form-group{{ $errors->has('purpose') ? ' has-error' : '' }}">
          <label class="control-label col-md-4"> Description * </label>
          <div class="controls col-md-8 ">  
          <textarea class="input-md  textinput textInput form-control"  name="transaction"placeholder="FT IFO" style="margin-bottom: 10px" type="text" value="{{old('transaction')}}" required></textarea>
              
              @if ($errors->has('transaction'))
                  <span class="help-block">
                      <strong>{{ $errors->first('transaction') }}</strong>
                  </span>
               @endif
          </div>
      </div>
      
      <div class="col-md-12" style="padding-left: 3px">
        <button type="submit" class="btn btn-primary btn-xs">Post Transaction</button>
      </div>
  </form>

                </div>

            </div>



    </div>
</div>



@endsection


