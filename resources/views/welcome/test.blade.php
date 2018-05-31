@extends('layouts.app')

@section('title', 'Home page')



@section('content')
<div role="main" class="main">
    <div class="container">
      <div class="row acct-intro m-t-5">
        <div class="col-lg-12">
          <p> <strong>Welcome, Will Keane</strong> <span class="color-red">Last Login: 03/10/2017 9:05pm EST</span> </p>
        </div>
      </div>
      <div class="row m-t-2 m-b-5">
        <div class="col-md-3">
          <aside class="sidebar">
            <div>
              <div class="tabs">
                <ul class="nav nav-tabs">
                  <li class="active"> <a href="#" data-toggle="tab"> <i class="fa fa-check-circle"></i> Quick Links</a> </li>
                  <li> <a href="#" data-toggle="tab"> <i class="fa fa-bank"></i> Contacts</a> </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="popularPosts">
                    <p> <a href="#"> <i class="fa fa-binoculars"></i> Dashboard</a> </p>
                    <p> <a href="#" target="_blank"> <i class="fa fa-cloud-download"></i> Transaction History</a> </p>
                    <p> <a href="#" target="_blank"> <i class="fa fa-cloud-download"></i> Transfer Funds</a> </p>
                    <p> <a href="#" target="_blank"> <i class="fa fa-cloud-download"></i> User Management</a> </p>
                    <p> <a href="#"> <i class="fa fa-binoculars"></i> Find a branch near you</a> </p>
                    <p> <a href="#"> <i class="fa fa-binoculars"></i> Help Center</a> </p>
                  </div>
                  <div class="tab-pane" id="recentPosts">
                    <ul class="list-unstyled">
                      <li> <i class="fa fa-map-marker"></i> <strong>Address:</strong> Plot 45, Jinja Road. <br />
                        P.O. Box 2750, Kampala.</li>
                      <li> <i class="fa fa-phone"></i> <strong>Phone:</strong> +256 414 302 001</li>
                      <li> <i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="#">feedback@boauganda.com</a> </li>
                    </ul>
                    <hr />
                    <h4>Business <strong>Hours</strong> </h4>
                    <ul class="list-unstyled">
                      <li> <i class="fa fa-time"></i> Monday - Friday 8:30am to 5:00pm</li>
                      <li> <i class="fa fa-time"></i> Saturday - 9:00am to 2:00pm</li>
                      <li> <i class="fa fa-time"></i> Sunday - Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div class="col-md-6">
          <div class="toggle" data-plugin-toggle data-plugin-options='{ "isAccordion": true }'>
           <section class="toggle active">
              <label>Quick Transfer</label>
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
                            <option value="00495760 - Fegginvest Premier">00495760 - Fegginvest Premier</option>
                            <option value="(**** **** **** 9876) - Fegginvest Credit Card">(**** **** **** 9876) - Fegginvest Credit Card</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>Account ID*</label>
                          <input type="text" value="" class="form-control" name="name" required>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>Account Name*</label>
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
                      <div class="form-group">
                        <div class="col-md-12">
                          <label>fhegg private code *</label>
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
              <label>Accounts & Cards</label>
              <div class="toggle-content">
                <div class="box-typical">
                  <ul class="list-unstyled">
                    <li class="text-muted"> Bank Account </li>
                    <li> Credit Line <strong class="pull-right">35 000 000 USD</strong> </li>
                  </ul>
                  <hr class="short">
                  <ul class="list-unstyled">
                    <li class="text-muted"> Bank Account </li>
                    <li> Credit Line <strong class="pull-right">35 000 000 USD</strong> </li>
                  </ul>
                  <hr class="short">
                  <ul class="list-unstyled">
                    <li class="text-muted"> Bank Account </li>
                    <li> Credit Line <strong class="pull-right">35 000 000 USD</strong> </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class="toggle">
              <label>Account Details</label>
              <div class="toggle-content">
                <div class="box-typical">
                  <ul class="list-unstyled">
                    <li class="acctdetails"> <img src="img/team/arthur-isiko-managing-director.jpg" alt=""> </li>
                    <li> <i class="fa fa-map-marker"></i> <strong>Account Name:</strong> Will Keane</li>
                    <li> <i class="fa fa-phone"></i> <strong>Phone:</strong> +256 414 302 001</li>
                    <li> <i class="fa fa-envelope"></i> <strong>Email:</strong> <a href="#">willkeane@you.com</a> </li>
                    <li> <i class="fa fa-envelope"></i> <strong>Nationality:</strong> <a href="#">willkeane@you.com</a> </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div class="clear clearfix"></div>
        </div>
      </div>
    </div>
  </div>
@endsection


