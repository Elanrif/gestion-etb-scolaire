<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$routes = [
    'home' => 'home',
    'news' => 'news',
    'about' => 'about',
    'contact' => 'contact',
    'history' => 'history',
    'team' => 'team',
    'facilities' => 'facilities',
    'formations' => 'formations',
];

foreach ($routes as $name => $page) {
    Route::get("/ux/$page", function () use ($page) {
        return Inertia::render("ux/$page");
    })->name("{$name}.ux");
}
