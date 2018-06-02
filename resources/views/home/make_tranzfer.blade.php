@extends('layouts.app')

@section('title', 'Home page')
<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">



@section('content')


<div role="main" class="main">
  <div class="container">
    @include('layouts.home_menu')
    
    <div class="col-md-6">
      <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>
            @include('layouts.partials.errors')   
            
       <section class="toggle active">
        <label>Transfer</label>
        <div class="toggle-content">
          <div class="box-typical">

            <form method="post" action="/home/store_tranzfer">
          {{ csrf_field() }}
          <div style="padding: 20px;">

                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Account ID*</label>
                            <input type="text" value="{{$users->username}}" class="form-control" name="username" readonly>
                          </div>
                        </div>
                      </div>


                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Account Name*</label>
                            <input type="text" value="{{ $users->name }}" class="form-control" name="name" readonly>
                          </div>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Amount *</label>
                            <input type="text"  value="{{old('amount')}}"  class="form-control" name="amount"  placeholder="₦ 1000">
                          </div>
                          @if ($errors->has('credit'))
                          <span class="invalid-feedback">
                            <strong>{{ $errors->first('credit') }}</strong>
                          </span>
                          @endif
                        </div>
                      </div>

                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Naration *</label>
                            <textarea class="input-md  textinput textInput form-control"  name="transaction" type="text" value="{{old('transaction')}}" required></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <input type="submit" value="Make Transfer" class="btn btn-primary btn-sm pull-right">
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="user_id" value="{{ $users->id }}" readonly>
</div>
  </form>

          </div></div>
        </section>
      </div>
      <div class="clear clearfix"></div>
    </div>
  </div>
</div>






@endsection


