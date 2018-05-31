<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')

@section('title', 'Home page')




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

@endsection


