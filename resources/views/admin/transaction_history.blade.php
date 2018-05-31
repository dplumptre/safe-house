<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables.css">
<link rel="stylesheet" type="text/css" href="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.0/css/jquery.dataTables_themeroller.css">

@extends('layouts.app')

@section('title', 'Home page')




@section('content')
<div class="container" style="padding-top:50px;">

   <div class="col-md-3">
    @include('layouts.admin_menu')
</div>

@if($history == 0)
<div class="col-md-9">
<div class="panel panel-default">
    <div class="panel-heading">  TRANSACTION HISTORY </div>
        <div class="panel-body" align="center">
            No Transaction history for the selected user
        </div>
    </div>
</div>
</div>

@else

<div class="col-md-9">
 @include('layouts.partials.errors')
    <div class="panel panel-default">
        <div class="panel-heading"> <?php echo strToUpper($transactions[0]->user->name) ;?> TRANSACTION HISTORY <h4 class="text-success" style="float: right"> Balance: ₦ <?php echo number_format($account_balance, 2); ?></div>
        <div class="panel-body" align="center">

            <table  id="myTable"  class="table table-hover" width="100%">
                                <thead>

                                    <tr>
                                        <th>S/N</th>
                                        <th>Debit </th>
                                        <th>Credit</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                  <?php $rows = 0; ?> 
                <tbody>
            @foreach($transactions as $transaction)
                    <tr>
                        <td>{{$rows = $rows + 1 }}</td>
                        <td class="text-danger">  - ₦ <?php echo number_format($transaction->debit, 2); ?></td>
                        <td class="text-success">  ₦ <?php echo number_format($transaction->credit, 2); ?></td>
                        <td>{{ $transaction->transaction }} </td>
    <td> <small>{{ date('d-M-Y m:s', strtotime($transaction->created_at)) }} </small></td>

    </tr>
@endforeach

                                     <tr>
                                        <th>Total</th>
                                        <th><h6 class="text-danger"> ₦ <?php echo number_format($total_debit, 2); ?></h6></th>
                                        <th><h6 class="text-success"> ₦ <?php echo number_format($total_credit, 2); ?></h6></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
    
</tbody>
</table>


      </div>
  </div>
</div>



@endif

</div> 
<!-- Container End -->




<script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>

@endsection


