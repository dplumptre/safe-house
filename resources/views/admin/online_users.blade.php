<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')

@section('title', 'Home page')




@section('content')
<div class="container" style="padding-top:50px;">

    	@include('layouts.partials.errors')

<div class="row acct-intro m-t-5">
        <div class="col-lg-12">
          <p> <strong>Welcome, {{Auth::user()->name}}</strong> <span class="color-red">Last Login: 03/10/2017 9:05pm EST</span> </p>
        </div>
      </div>


        <div class="col-md-3">
            @include('layouts.admin_menu')
        </div>

        <div class="col-md-9">
            
            <div class="panel panel-default">
                <div class="panel-heading"> USERS ONLINE </div>
                <div class="panel-body" align="center">

                
       
<table  id="myTable"  class="table table-hover" width="100%">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Account No</th>
                                        <th>Reg Date</th>
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
                        <td>{{ $user->created_at }} </td>


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



            </div>
    </div>
</div>

<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>

@endsection


