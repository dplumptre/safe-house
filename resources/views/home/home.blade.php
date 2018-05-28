@extends('layouts.app')

@section('content')



<div class="col-md-12">

@if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                   <h3> You are logged in!</h3>

<div class="card-header">Dashboard : </div>
</div>



<div class="col-md-4">       
@include('layouts.admin_menu')
</div>

<div class="col-md-8">
  
   <strong>Account Balance: N {{ $bal}}</strong>
           </div>
@endsection
