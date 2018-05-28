@extends('layouts.app')

@section('content')


<div class="col-md-12">



<h3>PROFILE PAGE</h3>
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


</form>





</div>
@endsection
