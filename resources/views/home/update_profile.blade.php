@extends('layouts.app')
@section('content')

<div role="main" class="main">
    <div class="container">

        
        @include('layouts.home_menu')
      
        <div class="col-md-6">
          <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>

@include('layouts.partials.errors')
            
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

<form method="post" action="/home/update_profile/{{ $user->id}}">
  {{ csrf_field() }}
  {{ method_field('PATCH') }}
  <div class="form-group row" style="padding:10px;">

   <label for="">Mobile</label>
   <input type="text" class="form-control" value="{{ $user->mobile}}" name="mobile">

   <label for="">SSN</label>
   <input type="text" class="form-control" value="{{ $user->ssn}}" name="ssn">

   <label for="">Date of Birth</label>
   <input type="date" class="form-control" value="{{ $user->dob}}" name="dob">

   <label for="">Employment Status</label>
   <input type="text" class="form-control" value="{{ $user->employment_status}}" name="employment_status">

   <label for="">Address</label>
   <textarea name="address" id="" class="form-control" cols="30" rows="4">{{ $user->address}}</textarea>

   <div style="padding-top:10px;">
    <button type="submit" class="btn btn-primary btn-xs">Update Profile</button>
  </div>

 </div>

</form>
                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
@endsection







