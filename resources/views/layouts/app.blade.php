
<!DOCTYPE html>
<!-- Template by Quackit.com -->
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Bootstrap Core CSS -->
    <link href="{{ asset('css/bootstrap.css')}}" rel="stylesheet">

    <!-- Custom CSS: You can use this stylesheet to override any Bootstrap styles and/or apply your own styles -->
    <link href="{{ asset('css/custom.css')}}" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Logo and responsive toggle -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                	<span class="glyphicon glyphicon-fire"></span> 
                	<img src="{{ asset('img/acornlogo.png')}}" alt="">
                </a>
            </div>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="/home">Dashboard</a>
                    </li>

                @if (Auth::user() && Auth::user()->status == "1" && Auth::user()->role_slug == "admin")
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions + <span class="caret"></span></a>
						<ul class="dropdown-menu" aria-labelledby="about-us">
                    <li><a href="{{ route('all_users')}}">View all users</a></li>
					<li><a href="{{ route('transactions')}}">Perform Transaction</a></li>
							
						</ul>
					</li>
                    <li><a href="{{ route('all_users')}}">View all users</a></li>
                    <li><a href="{{ route('transactions')}}">Perform Transaction</a></li>
                    <li><a href="{{ route('transfer')}}">Transfer Fund</a></li>
                @endif
                </ul>

				<!-- Right Menu -->
				<div class="navbar-form navbar-right" role="search">
					<div class="form-group">
						<a href="{{ route('login')}}"> Login </a> | <a href="{{ route('register')}}">Register</a>
					</div>






<div class="form-group">
<form action="{{ route('logout')}}"  method='POST'>
{{ csrf_field() }}
<button type='submit'>Logout</button>

</form>
</div>

                    
				</div>
                <!-- Right Menu End -->

            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

	

    <!-- Content Start-->
    <div class="container">

        <!-- Heading -->
        <div class="row">
            <div style='margin-top:30px'></div>
        @yield('content')
        </div>
        <!-- /.row -->
    </div>
    <!-- /.Content End -->
	













 <!-- Footer Start -->

	<footer>
        <div class="small-print">
        	<div class="container">
                <hr>
        		<p><a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Contact</a></p>
        		<p>Copyright &copy; Example.com 2015 </p>
        	</div>
        </div>
	</footer>


 <!-- Footer End -->
	
    <!-- jQuery -->
    <script src="{{ asset('js/jquery-1.11.3.min.js')}}"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
	
	<!-- IE10 viewport bug workaround -->
	<script src="{{asset('js/ie10-viewport-bug-workaround.js')}}"></script>
	
	<!-- Placeholder Images -->
	<script src="{{ asset('js/holder.min.js')}}"></script>



    <!-- JavaScripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<script type="text/javascript" src="{{ URL::asset('assets/js/jquery.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('assets/js/bootstrap.min.js') }}"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}




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
