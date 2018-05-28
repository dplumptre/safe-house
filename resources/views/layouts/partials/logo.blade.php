        
<!--logo -->
<div class="row">
<div class="col-sm-6" style='padding-bottom: 10px;'>
<img src="{{ asset('images/buk_logo.png') }}" alt="Bukmot">     
</div> 
<div class="col-sm-6 " >
<span class='topmenu'>
  <a href=" https://web.facebook.com/MonClubTours/"><i class="fab fa-facebook-square"></i> </a>  &nbsp;<a href=""><i class="fab fa-twitter"></i> </a>  &nbsp; <a href=""> <i class="fab fa-instagram"></i></a> &nbsp; |&nbsp; <i class="fas fa-envelope-square"></i> info@monclub-yobe.org | <i class="fas fa-phone-volume"></i> +2348096868035  | 


  @if (Auth::guest())
  	<a href="{{ url('/login') }}">Login</a>
  @else
<form action="{{ route('logout') }}" method="POST">
    {{ csrf_field() }}
    <button type="submit" style="background:none!important;
     color:inherit;
     border:none; 
     padding:0!important;
     font: inherit;
     cursor: pointer;">Logout</button>
</form>
  @endif

</span>  

  </div>  
  
  </div>     
<!--logo -->  




