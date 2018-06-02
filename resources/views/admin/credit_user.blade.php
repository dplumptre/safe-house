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
                <div class="panel-heading">CREDIT ACCOUNT </div>
                
                <form method="post" action="/admin/store_credit"  name="myForm" onsubmit="return checkInp()" >
                  {{ csrf_field() }}

                    <div style="padding: 20px;">
                      
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Account ID*</label>
                            <input type="text" value="{{ $user->username }}" class="form-control" name="username" readonly>
                          </div>
                        </div>
                      </div>


                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Account Name*</label>
                            <input type="text" value="{{ $user->name }}" class="form-control" name="name" readonly>
                          </div>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="form-group">
                          <div class="col-md-12">
                            <label>Amount *</label>
                            <input type="number" value="" class="form-control" name="credit"id="credit" required  placeholder="₦ 1000">
                          </div>
                          @if ($errors->has('credit'))
                          <span class="invalid-feedback">
                            <strong>{{ $errors->first('credit') }}</strong>
                          </span>
                          @endif
                        </div>
                      </div>

  <script>
  function checkInp()
{
    var x=document.forms["myForm"]["credit"].value;
    if (isNaN(x)) 
    {
        alert("Invalid Amount. Please enter numbers only");
        return false;
    }
}
</script>

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
                          <input type="submit" value="Credit Account" class="btn btn-primary btn-sm pull-right">
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="user_id" value="{{ $user->id }}" readonly>

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


