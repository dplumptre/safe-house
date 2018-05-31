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
              <label>Edit Picture</label>
              <div class="toggle-content">
                <div class="box-typical">
                @if (count($errors) > 0)
     <div class="alert alert-danger"> 
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif       


<form class="form-horizontal"  enctype="multipart/form-data" method="post" action="">
 {{ csrf_field() }}

<div class="form-group">
    <label class="control-label col-md-2">Picture</label>
          <div class="col-sm-5">
          <input  class="form-control" name="picture" type="file" id="file">
        </div>
    </div>



    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
         <input type="submit" name="create" value="Upload Picture" class="btn btn-primary btn-xs" />
     </div>
    </div>
</form>




                  </div></div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
@endsection







