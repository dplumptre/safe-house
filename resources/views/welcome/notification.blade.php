@extends('layouts.app')

@section('title', 'Home page')



@section('content')
<div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">STATUS </div>

                <div class="panel-body" align="center" style="color: red">
                <div><img src="{{ asset('access_denied.jpg') }}"></div>
                Your registration was successful. Your acount will be activated after 24 hours.
                </div>
            </div>
</div>
@endsection


