@extends('layouts.app')
@section('content')

<div role="main" class="main">
  <div class="container">
    @include('layouts.home_menu')

    <div class="col-md-6">
      <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>
            @include('layouts.partials.errors')  
             
       <section class="toggle active">
        <label>Transfer To Acorn Bank</label>
  <div class="toggle-content">
          <div class="box-typical">


            <form method="post" action="/home/verify_acct">
              {{ csrf_field() }}

              <div class="" style="padding-left: 20px;">
              

          <div class="row">
           
             <div class="col-md-9">
              <input type="text" class="form-control search" name="account_no" id="account_no" placeholder="Enter account number..." required>
            </div>

            <div class="col-md-3">
              <button type="submit" value="Verify Account" class="btn btn-primary pull-right"><i class="fa fa-search"></i> Verify Account</button>
            </div>

          </div>

        
              
  </div>

            </form>
          </div></div>
        </section>
      

        <section class="toggle ">
              <label>International Transfer</label>
              <div class="toggle-content">
                <div class="box-typical">
                  <p>Make a one-off transfer between your accounts</p>
                  <form>
                    <input type="hidden" value="true" name="emailSent" id="emailSent">
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>From Account *</label>
                          <select class="form-control" name="subject" required>
                            <option value="Select Account">Select Account</option>
                            <option value="">{{Auth::user()->username}} - {{Auth::user()->name}}</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>Beneficiary Account ID*</label>
                          <input type="text" value="" class="form-control" name="name" required>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>Beneficiary Account Name*</label>
                          <input type="text" value="" class="form-control" name="name" required>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>Bank Name *</label>
                          <select class="form-control" name="subject" required>
                            <option value="Select Bank">Select Bank</option>
                            <option value="Ally Financial">Ally Financial</option>
                            <option value="American Express">American Express</option>
                            <option value="Bank Of America">Bank Of America</option>
                            <option value="Bank Of New York">Bank Of New York</option>
                            <option value="BB&T">BB&T</option>
                            <option value="Capital One">Capital One</option>
                            <option value="Charles Shwab Corporation">Charles Shwab Corporation</option>
                            <option value="Citigroup">Citigroup</option>
                            <option value="Citizens">Citizens</option>
                            <option value="Fifth Third Bank">Fifth Third Bank</option>
                            <option value="Goldman Sachs">Goldman Sachs</option>
                            <option value="HSBC Bank USA">HSBC Bank USA</option>
                            <option value="JP Morgan Chase">JP Morgan Chase</option>
                            <option value="Morgan Stanley">Morgan Stanley</option>
                            <option value="M&T Bank">M&T Bank</option>
                            <option value="PNC Financial Services">PNC Financial Services</option>
                            <option value="State Street Corporation">State Street Corporation</option>
                            <option value="Suntrust Banks">Suntrust Banks</option>
                            <option value="TD Bank">TD Bank</option>
                            <option value="U.S Bancorp">U.S Bancorp</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>Amount *</label>
                          <input type="text" value="" class="form-control" name="name" required>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-12">
                        <input type="submit" value="Transfer" class="btn btn-primary btn-sm pull-right">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            <section class="toggle">


      </div>
      <div class="clear clearfix"></div>
    </div>
  </div>
</div>
@endsection







