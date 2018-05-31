<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')
@section('content')
<div class="container">


<div class="row acct-intro m-t-5">
        <div class="col-lg-12" style="padding-left:25px;">
          <p> <strong>You are logged in!</strong> 
          	<span class="color-red"><?php echo date("D M m Y m:s"); ; ?> </span> </p>
        </div>
      </div>


        <div class="col-md-3">
            @include('layouts.admin_menu')
        </div>

        <div class="col-md-7">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome, {{Auth::user()->name}}</div>

               <div style="padding: 40px;  "> </div>

            </div>
        </div>





</div> 
<!-- Container End -->




<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>

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

                <strong class=" text-danger" >Account Balance: N {{ $bal}}</strong>
                  
                </div>
              </div>
            </section>
            <section class="toggle active">
          
          <label>Account Details</label>
          <div class="toggle-content">
            <div class="box-typical">
              <ul class="list-unstyled">
                <li class="acctdetails"> <img src="img/team/arthur-isiko-managing-director.jpg" alt=""> </li>
                <li> <i class="fa fa-map-marker"></i> <strong>Account Name:</strong> Will Keane</li>
                <li> <i class="fa fa-phone"></i> <strong>Phone:</strong> +256 414 302 001</li>
                <li> <i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="#">willkeane@you.com</a> </li>
                <li> <i class="fa fa-envelope"></i> <strong>Nationality:</strong> <a href="#">willkeane@you.com</a> </li>
              </ul>
            </div>
          </div>
        </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
@endsection


