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
        @include('layouts.home_menu')
        </div>
        <div class="col-md-6">
          <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>
           <section class="toggle active">
              <label>Transfer</label>
              <div class="toggle-content">
                <div class="box-typical">
                @if (count($errors) > 0)
     <div class="alert alert-danger"> 
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif       

                <form method="post" action="{{ route('home.post_v_a')}}">
                {{ csrf_field() }}
            
                <div class="form-group row">
                  <label>&nbsp;Account No</label>
                  <input id="account_no" type="text" name="account_no" value="" >
                  <button type="submit" class="btn btn-primary btn-xs"> Verify Account</button>
                </div>
                
              </form>
                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
          </div>
        </div>
        </div>
@endsection







