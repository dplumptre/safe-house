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
              <label>Edit Profile</label>
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
                <div class="form-group row" style="padding:10px;">


 <label for="">Mobile</label>
 <input type="text" class="form-control" name="mobile">

 <label for="">SSN</label>
 <input type="text" class="form-control" name="ssn">

 <label for="">Date of Birth</label>
 <input type="text" class="form-control" name="dob">

 <label for="">Employment Status</label>
 <input type="text" class="form-control" name="employment_status">

 <label for="">Address</label>
<textarea name="address" id="" class="form-control" cols="30" rows="10"></textarea>

                  <button type="submit" class="btn btn-primary btn-xs">Edit Profile</button>
                </div>
                
              </form>
                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
@endsection







