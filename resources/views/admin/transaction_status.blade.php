<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
      <link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')

@section('title', 'Transactions')




@section('content')
<div class="container" style="padding-top:50px;">
<div class="container">

    	@include('layouts.partials.errors')



        <div class="col-md-3">
            @include('layouts.admin_menu')
        </div>

        <div class="col-md-9">
            <div class="panel panel-default">
                <div class="panel-heading">ALL TRANSACTIONS </div>
                <div class="panel-body" align="center">

                
        <table  id="myTable"  class="table table-hover" width="100%">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Account No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Transaction Action</th>
                </tr>
            </thead>
            
            <?php $rows = 0; ?>
            <tbody>
                @foreach($transactions as $transaction)
                <tr>
                    <td>{{$rows = $rows + 1 }}</td>
                    <td> <a href="/admin/transaction_history/{{$transaction->user->username}}"> {{ $transaction->user->username }}</a></td>
                    <td>{{ $transaction->user->name }} </td>
                     <td> <small>{{ date('d-M-Y m:s', strtotime($transaction->created_at)) }} </small></td>
                    <td>
                        @if($transaction->status == "Successful")
                        <span class="text-success"> {{ $transaction->status}} </span>
                        @else
                        <span class="text-danger"> {{ $transaction->status}} </span>

                        @endif
                    </td>


<td>
 @if($transaction->status == "Successful")
    <span class="fa fa-icon fa-check-circle" style="color: green">
</td>

    @else($transaction->status != "1")
 <form class="form-inline" method="post" action="/admin/activate/{{$transaction->id}}">
        {{ csrf_field() }}
        {{ method_field('PATCH') }}

        <div class="col-md-6">
            <small>
              <div class="input-select">
                <select name="status">
                  <option selected="" value="">-- Select --</option>
                    <option value="Successful">Activate</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
        </small>
        </div>
        <div class="col-md-4">
      <button type="submit" class="btn btn-primary btn-xs">Activate</button>
        </div>
    </form>
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
<!-- Container End -->




<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>

@endsection


