<div class="row acct-intro m-t-5">
        <div class="col-lg-12">
          <p> <strong>Welcome, {{ ucwords(Auth::user()->name)}}</strong> 
<span class="color-red"><?php echo date("l jS \of F Y h:i:s A"); ; ?> </span> </p>
          </p>
        </div>
      </div>
      <div class="row m-t-2 m-b-5">
<div class="col-md-3">
 <aside class="sidebar">
            <div>
              <div class="tabs">
                <ul class="nav nav-tabs">
                  <li class="active"> <a href="#" data-toggle="tab"> <i class="fa fa-check-circle"></i> Quick Links</a> </li>
                 
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="popularPosts">
                    <p> <a href="{{ route('home')}}"><i class="fa fa-binoculars"></i>  Dashboard</a> </p>
                    <p> <a href="{{ route('ac')}}"><i class="fa fa-cloud-download"></i> Account summany </a> </p>
                    <p> <a href="/home/transfer" > <i class="fa fa-cloud-download"></i> Transfer Funds</a> </p>
                    <p> <a href="{{ route('home.edit_profile')}}"> <i class="fa fa-binoculars"></i> Edit Profile</a> </p>
                    <p> <a href="{{ route('home.e_i')}}"> <i class="fa fa-binoculars"></i> Edit Id Card</a></p>
                    <p> <a href="{{ route('home.e_pic')}}"> <i class="fa fa-binoculars"></i> Edit Passport</a> </p>
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
