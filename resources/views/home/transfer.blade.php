@extends('layouts.app')
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

            <form method="post" action="/home/verify_acct">
              {{ csrf_field() }}

              <div class="form-group row" style="padding-left: 20px;">
                <label>Account Number</label>
                <input id="account_no" type="number" name="account_no" placeholder="Enter account no">
                <button type="submit" class="btn btn-primary btn-xs">Verify Account</button>
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







