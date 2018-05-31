 @if (Auth::user() && Auth::user()->status == "1" && Auth::user()->role_slug == "admin")
 <ul class="list-group">
	<li class="list-group-item"><a href="{{ route('dashboard')}}">Dashboard</a></li>
	<li class="list-group-item"><a href="{{ route('all_users')}}">All users</a></li>
	<li class="list-group-item"><a href="{{ route('online_users')}}" >Online Users</a></li>
	<li class="list-group-item"><a href="{{ route('transactions')}}" >Credit / Debit </a></li>
	<li class="list-group-item"><a href="{{ route('transfer')}}" >Quick Transfer</a></li>
</ul>
@endif