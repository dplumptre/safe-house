@extends('layouts.app')

@section('title', 'Home page')



@section('content')
<div role="main" class="main">
  <div class="slider-container">
    <div class="slider" id="revolutionSlider" data-plugin-revolution-slider>
      <ul>
        <li data-transition="fade" data-slotamount="13" data-masterspeed="900" > <img src="img/slides/sme-slider1.jpg" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="60"
									 data-speed="300"
									 data-start="500"
									 data-easing="easeOutExpo">
            <h1>ACORN Financing</h1>
          </div>
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="140"
									 data-speed="300"
									 data-start="1500"
									 data-easing="easeOutExpo">
            <h3><strong>Quick</strong> financial solutions<br>
              for your business growth</h3>
            <ul>
              <li>Business Finance Loan</li>
              <li>Asset Finance Loan</li>
              <li>Unsecured Bid Gurantee</li>
              <li>Unsecured Invoice Discounting</li>
            </ul>
          </div>
          <div class="tp-caption sft stb"
									 data-x="75"
									 data-y="350"
									 data-speed="500"
									 data-start="1800"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">Find out more <i class="fa fa-arrow-circle-o-right"></i></a></div>
        </li>
        <li data-transition="fade" data-slotamount="13" data-masterspeed="300" > <img src="img/slides/1.png" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
          <div class="tp-caption sft stb white centered"
									 data-x="690"
									 data-y="60"
									 data-speed="300"
									 data-start="500"
									 data-easing="easeOutExpo">
            <h1>Save, Borrow and Transact<br />
              with any network</h1>
          </div>
          <div class="tp-caption sft stb green-color centered"
									 data-x="790"
									 data-y="180"
									 data-speed="300"
									 data-start="1000"
									 data-easing="easeOutExpo">
            <h3><strong>download</strong> the<br />
              <strong>Acorn Mobile Wallet</strong> App</h3>
          </div>
          <div class="tp-caption sft stb"
									 data-x="720"
									 data-y="330"
									 data-speed="500"
									 data-start="2000"
									 data-easing="easeOutExpo"><a target="_blank" title="Get it on GOOGLE PLAY" href="#"><img src="images/google-play-store.png" alt="Download on Google Play" /></a></div>
          <div class="tp-caption bottom-label sft stb"
									 data-x="970"
									 data-y="330"
									 data-speed="500"
									 data-start="2400"
									 data-easing="easeOutExpo"><a target="_blank" title="Get it at the Apple Store" href="#"><img src="images/apple-store.png" alt="Download on Apple Store" /></a></div>
          <div class="tp-caption sft stb"
									 data-x="860"
									 data-y="410"
									 data-speed="500"
									 data-start="3000"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">See all features <i class="fa fa-arrow-circle-o-right"></i></a></div>
        </li>
        <li data-transition="fade" data-slotamount="13" data-masterspeed="300" > <img src="img/slides/proxima-visa-web.jpg" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
          <div class="tp-caption sft stb green"
									 data-x="605"
									 data-y="60"
									 data-speed="300"
									 data-start="500"
									 data-easing="easeOutExpo">
            <h1>BREAK FREE TODAY!</h1>
          </div>
          <div class="tp-caption sft stb green"
									 data-x="605"
									 data-y="120"
									 data-speed="300"
									 data-start="1500"
									 data-easing="easeOutExpo">
            <h3>THE Acorn MASTER CARD comes with a<br />
              secure <strong>"Chip and PIN"</strong> allowing you to;</h3>
            <ul>
              <li>Make online payments</li>
              <li>Pay for goods and services</li>
              <li>Withdraw from any VISA ATM all over the world</li>
            </ul>
          </div>
          <div class="tp-caption sft stb"
									 data-x="605"
									 data-y="330"
									 data-speed="500"
									 data-start="1800"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">Find out more <i class="fa fa-arrow-circle-o-right"></i></a></div>
        </li>
        <li data-transition="fade" data-slotamount="13" data-masterspeed="300" > <img src="img/slides/salary-pack.jpg" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="60"
									 data-speed="300"
									 data-start="500"
									 data-easing="easeOutExpo">
            <h1>Acorn Salary Pack</h1>
          </div>
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="140"
									 data-speed="300"
									 data-start="1500"
									 data-easing="easeOutExpo">
            <h3>The Salary Pack is your affordable solution to<br />
              managing your monthly salary.</h3>
          </div>
          <div class="tp-caption sft stb"
									 data-x="75"
									 data-y="280"
									 data-speed="500"
									 data-start="1800"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">Find out more <i class="fa fa-arrow-circle-o-right"></i></a></div>
        </li>
        <li data-transition="fade" data-slotamount="13" data-masterspeed="300" > <img src="img/slides/tots-to-teenz-home-page.jpg" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="60"
									 data-speed="300"
									 data-start="500"
									 data-easing="easeOutExpo">
            <h1>Take The First Step and Start<br>
              Saving For your Business</h1>
          </div>
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="180"
									 data-speed="300"
									 data-start="1500"
									 data-easing="easeOutExpo">
            <h3>Saving for children below 18 with a <strong>Tots 2 Teenz</strong> Savings<br>
              Account is as easy as 123</h3>
            <ul>
              <li>Opening balance UGX 10,000</li>
              <li>Minimum balance UGX 10,000</li>
              <li>Minimum balance to qualify for life assurance UGX 500,000</li>
            </ul>
          </div>
          <div class="tp-caption sft stb"
									 data-x="75"
									 data-y="380"
									 data-speed="500"
									 data-start="1800"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">Find out more <i class="fa fa-arrow-circle-o-right"></i></a></div>
        </li>
        
        <!--<li data-transition="fade" data-slotamount="13" data-masterspeed="300" >
                            
                            	<img src="img/slides/funa-kyapa.jpg" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">>
				
								<div class="tp-caption sft stb white"
									 data-x="95"
									 data-y="160"
									 data-speed="300"
									 data-start="1500"
									 data-easing="easeOutExpo"><h3 style="text-shadow: 0 1px 3px #111;">Secure your land ownership with<br />our easy-to-process Land Title Loan.</h3></div>
				
								<div class="tp-caption sft stb"
									 data-x="95"
									 data-y="240"
									 data-speed="500"
									 data-start="1800"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">Find out more <i class="fa fa-arrow-circle-o-right"></i></a></div>
                                     
							</li>-->
        <li data-transition="fade" data-slotamount="13" data-masterspeed="300" > <img src="img/slides/forexave-account-home-page.jpg" data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat">
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="60"
									 data-speed="300"
									 data-start="500"
									 data-easing="easeOutExpo">
            <h1>Want To Save In A<br>
              Foreign Currency?</h1>
          </div>
          <div class="tp-caption sft stb green"
									 data-x="75"
									 data-y="180"
									 data-speed="300"
									 data-start="1500"
									 data-easing="easeOutExpo">
            <h3>A <strong>Forexave</strong> Savings account allows you to avoid forex risks. </h3>
            <ul>
              <li>Opening balance: USD 150, Euro 100, GBP 100, KES 5,000</li>
              <li>No ledger fees</li>
              <li>One withdrawal per month</li>
            </ul>
          </div>
          <div class="tp-caption sft stb"
									 data-x="75"
									 data-y="340"
									 data-speed="500"
									 data-start="1800"
									 data-easing="easeOutExpo"><a class="btn btn-lg btn-primary" href="#">Find out more <i class="fa fa-arrow-circle-o-right"></i></a></div>
        </li>
      </ul>
    </div>
  </div>
  <section class="home-intro white-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="feature-box feature-box-style-2"> <a title="Branches &amp; ATM Locations" href="#">
            <h4 class="mb-xs">Find an Acorn Branch or ATM</h4>
            <img alt="Bank of Africa - Branches &amp; ATM Locations" class="img-responsive" src="img/branches-and-atms.jpg"></a> </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="feature-box feature-box-style-2"> <a title="Young Mullah Savings Account" href="#">
            <h4 class="mb-xs">Young Acorn Savings Account</h4>
            <img alt="Bank of Africa - Young Mullah Savings Account" class="img-responsive" src="img/young-mullah-intro-thumb.jpg"></a> </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="feature-box feature-box-style-2"> <a title="Bank of Africa - BOA Salary Pack" href="#">
            <h4 class="mb-xs">Acorn Salary Pack</h4>
            <img alt="Bank of Africa - BOA Salary Pack" class="img-responsive" src="img/boa-salary-pack-intro-thumb.jpg"></a> </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <div class="home-intro">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p><strong>Instant Cash Salaried Loan</strong> <span>With this loan you can, improve your home, buy a car, pay medical bills, tuition fees and much more.</span> </p>
        </div>
        <div class="col-md-4">
          <div class="get-started"><a href="#" class="btn btn-lg btn-primary">Get Started Now!</a></div>
        </div>
      </div>
    </div>
  </div>
</div>







@endsection