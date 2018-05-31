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
              <label>Account Summary</label>
              <div class="toggle-content">
                <div class="box-typical">
  
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
<?php   $total = $crd - $drb;?> 
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
            </section>
           
          </div>
          <div class="clear clearfix"></div>
        </div>
@endsection













