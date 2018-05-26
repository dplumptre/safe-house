<?php

namespace App\Http\Middleware;

use Closure;

class MustBeAdmin
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

        if ($user && $user->status == "1" && $user->role_slug == "admin") {
           
            return $next($request);
        }

        return redirect('access_denied');
    }
}
