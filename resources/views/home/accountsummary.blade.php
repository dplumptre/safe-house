<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')
@section('content')

<div role="main" class="main">
    <div class="container">
        @include('layouts.home_menu')
       
        <div class="col-md-8">
          <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>

@include('layouts.partials.errors') 


           <section class="toggle active">
              <label>Account Summary</label>
              <div class="toggle-content">
                <div class="box-typical">

<table id="myTable" class="table table-bordered  table-striped table-hover ">
<tr>
<td>Date</td>
<td>Transactions</td>
<td>Credit</td>
<td>Debit</td>
<td>Status</td>
</tr>

@php 
$crd =0;
$drb =0;
@endphp
@foreach($data as $d)
<tr>
<td><small>{{$d->created_at}}</small></td>
<td>{{ $d->transaction}}</td>
<td class="text-success">   {{ number_format($d->credit, 2)}}</td>
<td class="text-danger"> -  {{ number_format($d->debit, 2)}}</td>
<td> 
  @if($d->status == "Successful")
    <span class="text-success"> {{ $d->status}} </span>
  @else
    <span class="text-danger"> {{ $d->status}} </span>

  @endif


  </td>
</tr>
<?php
$crd +=   $d->credit;
$drb  +=   $d->debit;
?>
@endforeach
<?php   $total = $crd - $drb;?> 
</table>


<div class="well">
TOTAL : <strong class="text-success">  {{ number_format($total, 2) }}</strong>
</div>
<form action="{{ route('logout')}}"  method='POST'>
{{ csrf_field() }}
<button type='submit'>Logout</button>
</form>







                </div>
              </div>
            </section>
           
          </div>
          <div class="clear clearfix"></div>
          </div>
        </div>
        </div>



<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>


@endsection













