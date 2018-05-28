@extends('layouts.app')

@section('content')


<div class="col-md-12"> 
<h3>ACCOUNT SUMMARY</h3>
<p>&nbsp;</p>
</div>



<div class="col-md-4">       
@include('layouts.admin_menu')
</div>



        <div class="col-md-8">
            <div class="card">
                

                <div class="card-body">


                <div class="col-md-8">
        @if (count($errors) > 0)
    <div class="error">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif       
@if(session()->has('message.level'))
    <div class="alert alert-{{ session('message.level') }}"> 
    {!! session('message.content') !!}
    </div>
@endif

<table class='table table-bordered  table-striped '>
<tr>
<td>Date</td>
<td>Transactions</td>
<td>Credit</td>
<td>Debit</td>
</tr>

@php 
$crd =0;
$drb =0;
@endphp
@foreach($data as $d)
<tr>
<td>{{$d->created_at}}</td>
<td>{{ $d->transaction}}</td>
<td>{{ number_format($d->credit)}}</td>
<td>{{ number_format($d->debit)}}</td>
</tr>

<?php
$crd +=   $d->credit;
  
$drb  +=   $d->debit;
  ?>
@endforeach



 

      <?php  
           
           $total = $crd - $drb;
          // echo $total ;
          // echo $drb;
           
           
           ?> 

</table>







<div class="well">
TOTAL : {{ number_format($total) }}
</div>


<form action="{{ route('logout')}}"  method='POST'>
{{ csrf_field() }}
<button type='submit'>Logout</button>

</form>





        </div>
    </div>
</div>
@endsection
