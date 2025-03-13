<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class UserRoleMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        // Check if the user is authenticated
        if (!Auth::check()) {
            return redirect('/login');
        }

        $user = Auth::user();

        // Check if the user has one of the required roles
        if (!in_array($user->role, $roles)) {
            // Redirect user to their respective dashboard based on their role
            return redirect($this->redirectUser($user->role));
        }

        return $next($request);
    }

    private function redirectUser($role)
    {


        switch ($role) {
            case 'admin':
                return '/admin/dashboard';
            case 'staff':
                return '/staff/dashboard';
            default:
                return '/client/dashboard';
        }
    }
}
