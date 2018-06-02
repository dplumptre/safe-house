@extends('layouts.app')
@section('content')

<div role="main" class="main">
    <div class="container">
        @include('layouts.home_menu')
       
        <div class="col-md-6">
          <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>
           <section class="toggle active">
              <label>Account Balance</label>
              <div class="toggle-content">
                <div class="box-typical">
   

                Available Balance: <span class="text-success"> <strong>₦  {{ $bal }}</strong></span>


                  </div></div>
            </section>

            <section class="toggle active">
              <label>Edit Picture</label>
              <div class="toggle-content">
                <div class="box-typical">
   
                <ul class="list-unstyled">
                    <li class="acctdetails"> <img src="img/team/arthur-isiko-managing-director.jpg" alt=""> </li>
                    <li> <i class="fa fa-cards"></i> <strong>Account Number:</strong> {{$user->username}}</li>
                    <li> <i class="fa fa-user"></i> <strong>Account Name:</strong> {{$user->name}}</li>
                    <li> <i class="fa fa-phone"></i> <strong>Phone:</strong> {{$user->details->mobile}}</li>
                    <li> <i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="#">{{$user->email}}</a> </li>
                  </ul>
                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
        </div>
        </div>
@endsection







