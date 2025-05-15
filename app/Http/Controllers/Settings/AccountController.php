<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Classe;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class AccountController extends Controller
{
    /**
     * Show the user's profile settings page.
     */
    public function edit(Student $student): Response
    {   
        Log::info($student);
        $classes = Classe::all();
        $student_ = Student::with(['user','classe'])->find($student->id);
        return Inertia::render('settings/student-edit',
        ['student'=> $student_, 'classes' => $classes]);
    }

    /**
     * Update the user's profile settings.
     */
    public function update(Request $request): RedirectResponse
    {
        return to_route('profile.edit');
    }
}
