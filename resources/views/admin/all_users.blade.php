@extends('layouts.app')

@section('title', 'Home page')



@section('content')
<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">ALL USERS </div>
            <div class="panel-body" align="center">

                <div class="bs-example" data-example-id="hoverable-table"> 
                	

<table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Name</th>
                                        <th>Account No</th>
                                        <th>Email</th>
                                        <th>Reg Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                  <?php $rows = 0; ?> 
            @foreach($users as $user)
                <tbody>
                    <tr>
                        <td>{{$rows = $rows + 1 }}</td>
                        <td>{{ $user->name }} </td>
                           <td> {{ $user->username }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->created_at }}</td>
                        <td> 
                            @if($user->isOnline())
                                <li class="text-success">Online</li>
                            @else
                                <li  class="text-danger">Offline</li>
                            @endif
                        </td>
                    </tr>
                    
                </tbody>
            @endforeach
</table>



            </div>



            </div>
    </div>
</div>
@endsection


