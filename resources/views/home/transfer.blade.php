@extends('layouts.app')
@section('content')

<div role="main" class="main">
    <div class="container">
      <div class="row acct-intro m-t-5">
        <div class="col-lg-12">
          <p> <strong>Welcome, {{ $user->name}}</strong> <span class="color-red">Last Login: 03/10/2017 9:05pm EST</span> </p>
        </div>
      </div>
      <div class="row m-t-2 m-b-5">
        <div class="col-md-3">
        @include('layouts.admin_menu')
        @include('layouts.home_menu')
        </div>
        <div class="col-md-6">
          <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>
           <section class="toggle active">
              <label>Transfer</label>
              <div class="toggle-content">
                <div class="box-typical">




                @if (count($errors) > 0)
    <div class="error">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif       
@if(session()->has('message.level'))
    <div class="alert alert-{{ session('message.level') }}"> 
    {!! session('message.content') !!}
    </div>
@endif

<form method="POST" action="{{ route('home.posttransfer') }}">
@csrf



<div class="well">
<label for="">Beneficiary</label>
<p>{{ $users->name}}</p>
<p>{{ $users->username}}</p>
</div>

<input type="hidden" class="form-control" value="{{ $users->id}}" name="beneficiary">
 <label for="">Amount</label>
 <input type="text" class="form-control" name="amount">

 <label for="">Transaction</label>
 <textarea class="form-control" name="transaction" id="" cols="30" rows="10"></textarea>
<p>&nbsp;</p>
 <input type="submit" value="Transfer" class="btn btn-danger" />

</form>



                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
          </div>
        </div>
        </div>
@endsection















