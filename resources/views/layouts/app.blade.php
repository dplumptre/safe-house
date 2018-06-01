<!DOCTYPE html>
<html>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>

<!-- Basic -->
<meta charset="utf-8">
<title>{{ config('app.name', 'Acorn Bank ::. Home') }}</title>
<meta name="description" content="Ascorn Bank Nigeria , Canada">
<meta name="author" content="Ascorn Bank - Nogeria , Canada">
<link rel="shortcut icon" href="boa-favicon.png')}}" type="image/png" />

<!-- Mobile Metas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Facebook Metas -->
<meta property="og:title" content="As strong as a group, as close as a partner" />
<meta property="og:site_name" content="Bank of Africa Uganda"/>
<meta property="og:url" content="index-2.html" />
<meta property="og:description" content="Ascorn Bank Nigeria , Canada." />
<meta property="fb:app_id" content="419634918245424" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:image" content="facebook/boa-uganda-generic.jpg')}}" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="600" />

<!-- Web Fonts  -->
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

<!-- Vendor CSS -->
<link rel="stylesheet" href="{{ asset('vendor/bootstrap/bootstrap.css')}}">
<link rel="stylesheet" href="{{ asset('vendor/fontawesome/css/font-awesome.css')}}">
<link rel="stylesheet" href="{{ asset('vendor/owlcarousel/owl.carousel.css')}}" media="screen">
<link rel="stylesheet" href="{{ asset('vendor/owlcarousel/owl.theme.css')}}" media="screen">
<link rel="stylesheet" href="{{ asset('vendor/magnific-popup/magnific-popup.css')}}" media="screen">

<!-- Theme CSS -->
<link rel="stylesheet" href="{{ asset('css/theme.css')}}">
<link rel="stylesheet" href="{{ asset('css/theme-elements.css')}}">
<link rel="stylesheet" href="{{ asset('css/theme-blog.css')}}">
<link rel="stylesheet" href="{{ asset('css/theme-shop.css')}}">
<link rel="stylesheet" href="{{ asset('css/theme-animate.css')}}">

<!-- Current Page CSS -->
<link rel="stylesheet" href="{{ asset('vendor/rs-plugin/css/settings.css')}}" media="screen">

<!-- Skin CSS -->
<link rel="stylesheet" href="{{ asset('css/skins/default.css')}}">

<!-- Theme Custom CSS -->
<link rel="stylesheet" href="{{ asset('css/custom.css')}}">

<!-- Head Libs -->
<script src="{{ asset('vendor/modernizr/modernizr.js')}}"></script>

<!--[if IE]>
			<link rel="stylesheet" href="{{ asset('css/ie.css')}}">
		<![endif]-->

<!--[if lte IE 8]>
			<script src="{{ asset('vendor/respond/respond.js')}}"></script>
			<script src="{{ asset('vendor/excanvas/excanvas.js')}}"></script>
		<![endif]-->

</head>
<body class="home">
<div class="body">
  <header id="header" class="colored flat-menu darken-top-border">
    <div class="header-top">
      <div class="container">
        <p>Call Center <span><i class="fa fa-phone"></i><a href="#">+256 414 302 111</a></span> | Toll Free Number <span><i class="fa fa-phone"></i><a href="#">0800 100 140</a></span> | <a href="#">feedback@acornbank.com</a> | <a href="#">Contact Us</a></p>
        
        <div class="search">
        @if(Auth::user())
        <form action="{{ route('logout') }}" method="POST">
          {{ csrf_field() }}
          <button type="submit" style="background:none!important;
          color:#fff;
          border:none; 
          padding:0!important;
          font: inherit;
          cursor: pointer;">Logout</button>
        </form>
        @else
          <form id="searchForm" action="#" method="get">
            <div class="input-group">
              <input type="text" class="form-control search" name="q" id="q" placeholder="Search..." required>
              <span class="input-group-btn">
              <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
              </span> </div>
          </form>
        @endif
         
        </div>


      </div>
    </div>
    <div class="container"> <span class="logo"> <a href="{{ asset('/')}}"> <img alt="Acorn Bank" width="250" height="65" data-sticky-width="189" data-sticky-height="40" src="{{ asset('img/acornlogo.png')}}"> </a> </span>
      <button class="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse"> <i class="fa fa-bars"></i> </button>
    </div>
    <div class="navbar-collapse nav-main-collapse collapse">
      <div class="container">
        <nav class="nav-main mega-menu">
       
          <ul class="nav nav-pills nav-main" id="mainMenu">
         
            <li class="dropdown mega-menu-item mega-menu-fullwidth active"> <a class="dropdown-toggle" href="#"> Personal <i class="fa fa-angle-down"></i> </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="mega-menu-content">
                    <div class="row">
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">CURRENT ACCOUNTS</span>
                            <ul class="sub-menu">
                              <li><a href="#">Personal Current Account</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                     
                      <div class="clearfix clear"></div>
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">Acorn Packs</span>
                            <ul class="sub-menu">
                              <li><a href="#">Ambitions Savings Plan</a></li>
                              <li><a href="#">Salary Pack</a></li>
                              <li><a href="#">MY KIKAPU - My Business Pack</a></li>
                              <li><a href="#">Public Service Pack</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">PRIVATE BANKING</span>
                            <ul class="sub-menu">
                              <li><a href="#">Private Personal Banking</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">FOR YOU</span>
                            <ul class="sub-menu">
                              <li><a href="#">Acorn Downloads</a></li>
                              <li><a href="#" target="_blank">Account Opening Form</a></li>
                              <li><a href="#">Instant Loan Calculator</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown mega-menu-item mega-menu-fullwidth"> <a class="dropdown-toggle" href="#"> Business <i class="fa fa-angle-down"></i> </a>
         
              <ul class="dropdown-menu">
                <li>
                  <div class="mega-menu-content">
                    <div class="row">
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">CORPORATE DEPOSITS</span>
                            <ul class="sub-menu">
                              <li><a href="#">Terms Deposits</a></li>
                              <li><a href="#">Single Fee Business Account</a></li>
                              <li><a href="#">Remunerated Current Account</a></li>
                              <li><a href="#">BOA Business Current Account</a></li>
                              <li><a href="#">School Fees Collection Account</a></li>
                              <li><a href="#">Embassy/ NGO Current Account</a></li>
                              <li><a href="#">Embassy Staff Current Account</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">CORPORATE LOANS</span>
                            <ul class="sub-menu">
                              <li><a href="#">BOA Tax Loan</a></li>
                              <li><a href="#">Term Loans</a></li>
                              <li><a href="#">Working Capital</a></li>
                              <li><a href="#">Overdrafts</a></li>
                              <li><a href="#">Bonds &amp; Guarantees</a></li>
                              <li><a href="#">Invoice Discounting</a></li>
                              <li><a href="#">Contract Financing</a></li>
                              <li><a href="#">Trade Finance</a></li>
                              <li><a href="#">Insurance Premium Financing</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">SME DEPOSITS</span>
                            <ul class="sub-menu">
                              <li><a href="#">School Fees Collection Account</a></li>
                              <li><a href="#">Ascorn Business Current Account</a></li>
                              <li><a href="#">Terms Deposits</a></li>
                              <li><a href="#">Single Fee Business Account</a></li>
                              <li><a href="#">Remunerated Current Account</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3">
                        <ul class="sub-menu">
                          <li> <span class="mega-menu-sub-title">SME FINANCING</span>
                            <ul class="sub-menu">
                              <li><a href="#">Unsecured Bid Guarantee</a></li>
                              <li><a href="#">Business Finance Loan</a></li>
                              <li><a href="#">Asset Finance Loan</a></li>
                              <li><a href="#">School Bridge Finance loan</a></li>
                              <li><a href="#">Supplier Finance</a></li>
                              <li><a href="#">Trade Finance</a></li>
                              <li><a href="#">Overdrafts</a></li>
                              <li><a href="#">Commercial Loans</a></li>
                              <li><a href="#">Bonds &amp; Guarantees</a></li>
                              <li><a href="#">Insurance Premium Financing</a></li>
                          
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="#">Mobile Wallet</a></li>
            <li class="dropdown"> <a class="dropdown-toggle" href="#"> Other Services <i class="fa fa-angle-down"></i> </a>
              <ul class="dropdown-menu">
              @if(Auth::user() && Auth::user()->status == "1" && Auth::user()->role_slug == "admin")      
              <li><a href="{{ route('all_users')}}">View all users</a></li>
              <li><a href="{{ route('transactions')}}">Perform Transaction</a></li>
              <li><a href="{{ route('all_users')}}">View all users</a></li>
              <li><a href="{{ route('transactions')}}">Perform Transaction</a></li>
              <li><a href="{{ route('transfer')}}">Transfer Fund</a></li>
             @endif
              </ul>
            </li>
           
            <li><a href="{{ route('login')}}" ><i class="fa fa-lock"></i> <span class="long-word">Online Banking Login</span><span class="short-word">Login</span></a></li>
            <li><a href="{{ route('register')}}">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  


  @yield('content')






<footer id="footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <div class="feature-box">
          <h4 class="shorter">Personal</h4>
          <ul class="contact">
            <li><a href="#">Current Accounts</a></li>
            <li><a href="#">Savings Accounts</a></li>
            <li><a href="#">Proposition Accounts</a></li>
            <li><a href="#">Personal Loans</a></li>
            <li><a href="#">Private Banking</a></li>
            <li><a href="#">BOA Packs</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="feature-box">
          <h4 class="shorter">Business</h4>
          <ul class="contact">
            <li><a href="#">Corporate Deposits</a></li>
            <li><a href="#">Corporate Loans</a> </li>
            <li><a href="#">SME Deposits</a> </li>
            <li><a href="#">SME Loans</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="feature-box">
          <h4 class="shorter">Other Services</h4>
          <ul class="contact">
            <li><a href="#">Electronic Banking</a></li>
            <li><a href="#">Money Transfer Services</a></li>
            <li><a href="#">E-Collections</a></li>
            <li><a href="#">Trade Finance</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="contact-details">
          <h4 class="shorter">Contacts</h4>
          <ul class="contact">
            <li>Plot 45, Jinja Road</li>
            <li>P.O. Box 2750, Kampala</li>
            <li>Call Center: <a href="#">+256 414 302 111</a></li>
            <li>Toll Free Line: <a href="#">0800 100 140</a></li>
            <li>Whatsapp: <a href="#"> +256 717 800 508</a></li>
            <li>&nbsp;</li>
            <li><a href="#"><i class="fa fa-arrow-circle-o-right"></i>All Branches &amp; ATMs</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="feature-box">
          <h4 class="shorter">Instant Loan Calculator</h4>
          <img src="{{ asset('img/BOA-Uganda-calc.png')}}" class="img-responsive pull-left mascot" alt="Bank of Africa - Instant Loan Calculator"><br />
          <p class="tall">With this loan you can, improve your home, buy a car, pay medical bills, tuition fees and much more.<br />
            <br />
            <a href="#"><i class="fa fa-arrow-circle-o-right"></i> Find out more</a></p>
        </div>
      </div>
      <div class="clear"></div>
      <div class="col-sm-2">
        <div class="feature-box">
          <h4 class="shorter">About</h4>
          <ul class="contact">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Customer Feedback Policy</a></li>
            <li><a href="#">Fraud Tips</a></li>
            <li><a href="#">Branches &amp; ATM Locations</a></li>
            <li><a href="#" target="_blank">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="contact-details">
          <h4 class="shorter">Just for You</h4>
          <ul class="contact">
            <li></li>
            <li><a href="#" target="_blank">Account Opening Form</a></li>
            <li><a href="#">Instant Loan Calculator</a></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="newsletter">
          <h4>Newsletter Subscription</h4>
          <p>Keep updated with all developments from Bank of Africa Uganda.</p>
          <div class="alert alert-success hidden" id="newsletterSuccess"> <strong>Success!</strong> You've been added to our email list. </div>
          <div class="alert alert-danger hidden" id="newsletterError"></div>
          <form id="newsletterForm" action="#" method="POST">
            <div class="input-group">
              <input class="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text">
              <span class="input-group-btn">
              <button class="btn btn-default" type="submit">Go!</button>
              </span> </div>
          </form>
        </div>
      </div>
      <div class="col-md-3">
        <h4>Follow Us</h4>
        <div class="social-icons">
          <ul class="social-icons">
            <li class="facebook"><a href="#" target="_blank" data-placement="bottom" rel="tooltip" title="Facebook">Facebook</a></li>
            <li class="twitter"><a href="#" target="_blank" data-placement="bottom" rel="tooltip" title="Twitter">Twitter</a></li>
            <li class="linkedin"><a href="#" target="_blank" data-placement="bottom" rel="tooltip" title="LinkedIn">LinkedIn</a></li>
            <li class="youtube"><a href="#" target="_blank" data-placement="bottom" rel="tooltip" title="YouTube">YouTube</a></li>
            <li class="googleplus"><a href="#" target="_blank" data-placement="bottom" rel="tooltip" title="Google Plus">Google Plus</a></li>
          </ul>
        </div>
        <div class="clear clearfix"></div>
        <h4>Whatsapp</h4>
        <div class="social-icons">
          <ul class="social-icons">
            <li class="stumbleupon"><a data-placement="bottom" rel="tooltip" title="Whatsapp:  +256 717 800 508">Whatsapp:  +256 717 800 508</a></li>
            <li class="description"> +256 717 800 508</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p>2018 &copy; Acorn Bank Ltd. All Rights Reserved.<br />
        </div>
      </div>
    </div>
  </div>
</footer>
</div>

<!-- Vendor --> 
<script src="{{ asset('vendor/jquery/jquery.js')}}"></script> 
<script src="{{ asset('vendor/jquery.appear/jquery.appear.js')}}"></script> 
<script src="{{ asset('vendor/jquery.easing/jquery.easing.js')}}"></script> 
<script src="{{ asset('vendor/jquery-cookie/jquery-cookie.js')}}"></script> 
<script src="{{ asset('vendor/bootstrap/bootstrap.js')}}"></script> 
<script src="{{ asset('vendor/common/common.js')}}"></script> 
<script src="{{ asset('vendor/jquery.validation/jquery.validation.js')}}"></script> 
<script src="{{ asset('vendor/jquery.stellar/jquery.stellar.js')}}"></script> 
<script src="{{ asset('vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.js')}}"></script> 
<script src="{{ asset('vendor/jquery.gmap/jquery.gmap.js')}}"></script> 
<script src="{{ asset('vendor/twitterjs/twitter.js')}}"></script> 
<script src="{{ asset('vendor/isotope/jquery.isotope.js')}}"></script> 
<script src="{{ asset('vendor/owlcarousel/owl.carousel.js')}}"></script> 
<script src="{{ asset('vendor/jflickrfeed/jflickrfeed.js')}}"></script> 
<script src="{{ asset('vendor/magnific-popup/jquery.magnific-popup.js')}}"></script> 
<script src="{{ asset('vendor/vide/jquery.vide.js')}}"></script> 

<!-- Theme Base, Components and Settings --> 
<script src="{{ asset('js/theme.js')}}"></script> 

<!-- Specific Page Vendor and Views --> 
<script src="{{ asset('vendor/rs-plugin/js/jquery.themepunch.tools.min.js')}}"></script> 
<script src="{{ asset('vendor/rs-plugin/js/jquery.themepunch.revolution.min.js')}}"></script> 
<script src="{{ asset('vendor/circle-flip-slideshow/js/jquery.flipshow.js')}}"></script> 
<script src="{{ asset('js/views/view.home.js')}}"></script> 

<!-- Theme Custom --> 
<script src="{{ asset('js/custom.js')}}"></script> 

<!-- Theme Initialization Files --> 
<script src="{{ asset('js/theme.init.js')}}"></script> 
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','../www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61084072-1', 'auto');
  ga('send', 'pageview');

</script> 
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '419634918245424',
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "../connect.facebook.net/en_US/sdk.js')}}";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>





 <!-- DATATABLES    -->      
        <script type="text/javascript" charset="utf8" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js"></script>
        <script type="text/javascript" charset="utf8" src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/jquery.dataTables.min.js"></script>

        <script type="text/javascript">
        $(document).ready(function() {
        $('#myTable').DataTable( {
        "scrollX": true,
        "iDisplayLength": 25,
        "lengthMenu": [ [20, 25, 50, -1], [20, 25, 50, "All"] ]
        } );
        } );
        </script>


</body>

</html>