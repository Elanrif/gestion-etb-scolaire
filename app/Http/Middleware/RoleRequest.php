<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = Auth::user();

        // Adapte selon ta logique de rôle (ex: $user->role ou $user->roles)
        if (in_array($user->role, $roles)) {
            // Redirige ou abort selon ton besoin
            abort(403, "Accès refusé. Seul l'administrateur peut accéder à cette ressource.");
        }

        return $next($request);
    }
}
