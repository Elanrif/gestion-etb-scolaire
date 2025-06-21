<?php

namespace App\Http\Middleware;

use App\Models\Student;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class ActivatedStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $student = Student::where('user_id', $user->id)->first();
        if (!$student->is_validated || $student->activation_status !== 'approved') {
            // Redirige ou abort selon ton besoin
            abort(403, "Accès refusé. Votre compte n'a pas encore été activé");
        }

        return $next($request);
    }
}