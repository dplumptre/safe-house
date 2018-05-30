<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')

@section('title', 'Home page')




@section('content')
<div class="container">

    	@include('layouts.partials.errors')

    <div class="panel panel-default">
        <div class="panel-heading">ALL USERS </div>
            <div class="panel-body" align="center">



<table  id="myTable"  class="table table-hover" width="100%">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Account No</th>
                                        <th>Email</th>
                                        <th>Reg Date</th>
                                        <th>Account Status</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                  <?php $rows = 0; ?> 
                <tbody>
            @foreach($users as $user)
                    <tr>
                        <td>{{$rows = $rows + 1 }}</td>
                        <td>{{ $user->name }} </td>
                        <td> {{ $user->username }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->created_at }} </td>


<td>
 @if($user->status == "1")
    <span class="fa fa-icon fa-check-circle" style="color: green">
    	Activated
@else
 <form class="form-inline" method="post" action="/admin/verify/{{$user->id}}">
        {{ csrf_field() }}
        {{ method_field('PATCH') }}

        <div class="col-md-5">
            <small>
            	<div class="input-select">
		            <select name="status">
		            	<option selected="" value="">-- Select --</option>
		                <option value="1">Activate</option>
		                <option value="0">Pending</option>
		            </select>
		        </div>
		    </small>
        </div>
        <div class="col-md-4" style="padding-left: 3px">
			<button type="submit" class="btn btn-primary btn-xs">Save Changes</button>
        </div>
    </form>
@endif
</td>
                        <td> 
                            @if($user->isOnline())
                                <li class="text-success">Online</li>
                            @else
                                <li  class="text-danger">Offline</li>
                            @endif
	
						</td>


    </tr>
    
@endforeach
</tbody>
</table>



            </div>



            </div>
    </div>
</div>

<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>

@endsection


