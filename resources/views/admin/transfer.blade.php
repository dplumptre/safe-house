@extends('layouts.app')

@section('title', 'Home page')
<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">



@section('content')
<div class="container">

    	@include('layouts.partials.errors')

    <div class="panel panel-default">
        <div class="panel-heading">TRANSFER FUND</div>
            <div class="panel-body" align="center">


  <form method="post" action="/admin/verify_account">
    {{ csrf_field() }}

    <div class="form-group row">
      <label>Account No</label>
      <input id="account_no" type="text" name="account_no" value="" >
      <button type="submit" class="btn btn-primary btn-xs">Verify Account</button>
    </div>
    
  </form>





                </div>

            </div>



    </div>
</div>



@endsection


