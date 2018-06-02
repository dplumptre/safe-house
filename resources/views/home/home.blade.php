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
              <label>Account Balance</label>
              <div class="toggle-content">
                <div class="box-typical">
   

                BALANCE: <span class="text-danger"> N {{ $bal }}</span>


                  </div></div>
            </section>

            <section class="toggle active">
              <label>Profile</label>
              <div class="toggle-content">
                <div class="box-typical">
   
                <ul class="list-unstyled">
                    <li class="acctdetails"> 
                    @if($passport->checkPassport($user->id) > 0)
                    <?php   $p = $passport->getPassport($user->id); ?>
                       <img src="{{ asset('images/thumb/'.$p->passport) }}" alt="">
                   @else
                        <img src="img/profile.png" alt=""> 
                   @endif
                  </li>

                    <li class="acctdetails"> 
                    <h4>ID CARD</h4>
                    @if($card->checkIdcard($user->id) > 0)
                    <?php   $p = $card->getIdcard($user->id); ?>
                       <img src="{{ asset('images/thumb/'.$p->idcard) }}" alt="">
                   @else
                        <img src="img/idcard.jpeg" alt=""> 
                   @endif
               
               
               
                  </li>
                    <li> <i class="fa fa-map-marker"></i> <strong>Account Name:</strong> Will Keane</li>
                    <li> <i class="fa fa-phone"></i> <strong>Phone:</strong> +256 414 302 001</li>
                    <li> <i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="#">willkeane@you.com</a> </li>
                    <li> <i class="fa fa-envelope"></i> <strong>Nationality:</strong> <a href="#">willkeane@you.com</a> </li>
                  </ul>
                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
        </div>
        </div>
@endsection







