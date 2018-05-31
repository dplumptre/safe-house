@extends('layouts.app')

@section('content')
<div class="col-md-12">

@if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                   <h3> You are logged in!</h3>

<div class="card-header">Dashboard : </div>
</div>



<div class="col-md-4">       
@include('layouts.admin_menu')
</div>

<div class="col-md-8">
@include('layouts.partials.errors')
<div class="panel panel-default">
        <div class="panel-heading">TRANSFER FUND</div>
            <div class="panel-body" align="center">


  <form method="post" action="{{ route('home.post_v_a')}}">
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
@endsection















