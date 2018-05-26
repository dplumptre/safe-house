<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Activated
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

      

        $user = $request->user();


        dd($user);

        if($user->status == 0){

            return redirect('wooo');

        }

        return $next($request);
    }
}
