@extends('layouts.app')

@section('title', 'Home page')




<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>





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
                                        <th>Action</th>
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
                        <td>{{ $user->created_at }} </td>
                        <td> 
                            @if($user->isOnline())
                                <li class="text-success">Online</li>
                            @else
                                <li  class="text-danger">Offline</li>
                            @endif
	
</td>


<td>

<form>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="status" value="1"> On
</label>
<label class="radio-inline">
  <input type="radio" name="inlineRadioOptions" id="status" value="0" checked> Off
</label>
<button type="button" class="btn btn-primary btn-xs">Submit</button>
  </form>  
</td>


                    </tr>
                    
                </tbody>
            @endforeach
</table>



            </div>



            </div>
    </div>
</div>



<script>
	$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-primary').size()>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size()>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size()>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }
    
    $(this).find('.btn').toggleClass('btn-default');
       
});

$('form').submit(function(){
	alert($(this["options"]).val());
    return false;
});
</script>

@endsection


