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
              <label>Profile</label>
              <div class="toggle-content">
                <div class="box-typical">
   
                <ul class="list-unstyled">
                   
                    @if($passport->checkPassport($user->id) > 0)
                    <?php   $p = $passport->getPassport($user->id); ?>
                       <img src="{{ asset('images/thumb/'.$p->passport) }}" alt="">
                   @else
                        <img src="img/profile.png" alt=""> 
                   @endif
                  </li>
<hr>
                    <li class="acctdetails"> 
                    <h4>ID CARD</h4>
                    @if($card->checkIdcard($user->id) > 0)
                    <?php   $p = $card->getIdcard($user->id); ?>
                       <img src="{{ asset('images/thumb/'.$p->idcard) }}" alt="">
                   @else
                        <img src="img/idcard.jpeg" alt=""> 
                   @endif

                  <li class="acctdetails"> </li>
                    <li> <i class="fa fa-cards"></i> <strong>Account Number:</strong> {{$user->username}}</li>
                    <li> <i class="fa fa-user"></i> <strong>Account Name:</strong> {{$user->name}}</li>
                   
                    <li> <i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="#">{{$user->email}}</a> </li>
                    <li class="acctdetails"> 
                  </ul>
                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
        </div>
        </div>
@endsection







