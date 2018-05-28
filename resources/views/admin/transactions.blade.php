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
                                        <th>Account No</th>
                                        <th>Name</th>
                                        <th>View History</th>
                                        <th>Credit</th>
                                        <th>Debit</th>
                                    </tr>
                                </thead>
                                  <?php $rows = 0; ?> 
                <tbody>
            @foreach($users as $user)
                    <tr>
                        <td>{{$rows = $rows + 1 }}</td>
                        <td> <a href="/admin/transaction_history/{{$user->id}}"> {{ $user->username }}</a></td>
                        <td>{{ $user->name }} </td>
                        <td>₦ </td>
                        <td><a href="/admin/credit_user/{{$user->id}}">Credit</a></td>
                        <td><a href="/admin/debit_user/{{$user->id}}">Debit</a></td>
                        

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


