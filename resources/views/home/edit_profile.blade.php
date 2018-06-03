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
                    

<form method="post" action="{{ route('home.store_profile')}}">
  {{ csrf_field() }}
  <!-- {{ method_field('PATCH') }} -->
  <div class="form-group row" style="padding:10px;">


   <label for="">Mobile</label>
   <input type="text" class="form-control" value="{{old('mobile')}}" name="mobile">

   <label for="">SSN</label>
   <input type="text" class="form-control" value="{{old('ssn')}}" name="ssn">

   <label for="">Date of Birth</label>
   <input type="date" class="form-control" value="{{old('dob')}}" name="dob">

   <label for="">Employment Status</label>
   <input type="text" class="form-control" value="{{old('employment_status')}}" name="employment_status">

   <label for="">Address</label>
   <textarea name="address" id="" class="form-control" cols="30" rows="4">{{old('address')}}</textarea>

   <div style="padding-top:10px;">
    <button type="submit" class="btn btn-primary btn-xs">Save Profile</button>
  </div>

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









