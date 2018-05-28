<ul class="breadcrumb">
	<li class="breadcrumb-item active"><a href="{{ route('welcome') }}">Home </a></li>
	
	<li class="breadcrumb-item active" ><a href="{{ route('about') }}">About The Vacation &nbsp; </a></li>

	<li class="breadcrumb-item active" ><a href="{{ route('vacations') }}">Upcoming Vacations &nbsp; </a></li>
	
	<li class="breadcrumb-item active" ><a href="{{ route('registration') }}">Registration&nbsp; </a></li>
	

<li class="breadcrumb-item active"><a href="{{ route('contact') }}" > &nbsp;Contact Us</a></li>

@if(Auth::user() && (Auth::user()->is_admin == "1"))
<li class="breadcrumb-item active"><a href="{{ route('applications') }}" > &nbsp;View All Applications</a></li>
<li class="breadcrumb-item active"><a href="{{ route('messages') }}" > &nbsp; Messages</a></li>
<li class="breadcrumb-item active"><a href="{{ route('participants') }}" > &nbsp; Participants</a></li>
@endif

@if(Auth::user() && (Auth::user()->is_admin == 2))
<li class="breadcrumb-item active"><a href="{{ route('participants') }}" > &nbsp; View Participants </a></li>
@endif



</ul> 