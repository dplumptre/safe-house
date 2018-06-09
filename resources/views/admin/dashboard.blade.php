<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')

@section('title', 'Home page')




@section('content')
<div class="container">

    	@include('layouts.partials.errors')


<div class="row acct-intro m-t-5">
        <div class="col-lg-12" style="padding-left:25px;">
          <p> <strong>Welcome, {{Auth::user()->name}}</strong> 
            <span class="color-red"><?php echo date("D M m Y m:s"); ; ?> </span> </p>
        </div>
      </div>


        <div class="col-md-3">
            @include('layouts.admin_menu')
        </div>

        <div class="col-md-7">
            <div class="panel panel-default">
                <div class="panel-heading">BALANCE SHEET </div>

                <div style="padding: 20px;">
                  <ul class="list-unstyled">
                    <li class="text-muted"> Bank Account </li>
                    <li> Credit Line <strong class="pull-right  text-success"> <?php echo number_format($total_credit, 2); ?> 
                </strong> </li>
                  </ul>
                  <hr class="short">
                  <ul class="list-unstyled">
                    <li class="text-muted"> Bank Account </li>
                    <li> Debit Line <strong class="pull-right text-danger">-  <?php echo number_format($total_debit, 2); ?> </strong> </li>
                  </ul>
                  <hr class="short">
                  <ul class="list-unstyled">
                    <li class="text-muted"> Bank Account </li>
                    <li> Total Balance <strong class="pull-right"> <h4>  <?php echo number_format($balance_sheet, 2); ?></h4> </strong> </li>
                  </ul>
              </div>

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


