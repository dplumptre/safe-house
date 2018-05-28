@extends('layouts.app')

@section('content')


<div class="col-md-12">



<h3>TRANSFER FUNDS</h3>
<p>&nbsp;</p>



</div>





<div class="col-md-4">       
@include('layouts.admin_menu')
</div>



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

<form method="POST" action="{{ route('home.posttransfer') }}">
@csrf

<label for="">Beneficiary</label>
<select class="form-control" name="beneficiary" id="">
<option value=""></option>
@foreach ($users as $user)
@if($user->id == $authid)
@else
<option value="{{ $user->id}}"> {{ $user->name}}</option>
@endif
@endforeach
</select>

 <label for="">Amount</label>
 <input type="text" class="form-control" name="amount">

 <label for="">Transaction</label>
 <textarea class="form-control" name="transaction" id="" cols="30" rows="10"></textarea>
<p>&nbsp;</p>
 <input type="submit" value="Transfer" class="btn btn-danger" />

</form>





</div>
@endsection
