<?php

namespace App\Http\Middleware;

use Closure;

use App\Detail;

class makeSureDetailIsFilled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

    

      $user_id =  $request->user()->id;

         $user = new Detail();

        if($user->isProfileUpdated($user_id) < 1){

            $request->session()->flash('message.content', 'You need to update your profile first!');
            $request->session()->flash('message.level', 'danger');
            return redirect('home/edit_profile');
        }


        return $next($request);
    }
}
