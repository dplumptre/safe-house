@extends('layouts.app')

@section('title', 'Home page')
<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">



@section('content')
<div class="container" style="padding-top:50px;">

    	@include('layouts.partials.errors')



        <div class="col-md-3">
           @include('layouts.admin_menu')
        </div>

        <div class="col-md-9">
            <div class="panel panel-default">
                <div class="panel-heading">TRANSFER FUND </div>



<form method="post" action="/admin/store_transfer">
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
                            <input type="text" value="" class="form-control" name="amount"  placeholder="₦ 1000">
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

                    <input type="texts" name="user_id" value="{{ $users->id }}" readonly>
</div>
  </form>


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


