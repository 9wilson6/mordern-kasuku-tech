<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    // Fetch the latest 3 published blogs
    $latestBlogs = Blog::where('status', 'published')
        ->orderBy('created_at', 'desc')
        ->take(3)
        ->get();

    // Render the welcome page and pass the latest blogs
    return Inertia::render('Welcome', [

        'latestBlogs' => $latestBlogs,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');
Route::get('/services', function () {
    return Inertia::render('Services');
});


Route::post('/contact', [MailController::class, 'contact'])->name('contact.send');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'role:admin'])->name('admin.dashboard');
Route::get('/staff/dashboard', function () {
    return Inertia::render('Staff/Dashboard');
})->middleware(['auth', 'role:staff'])->name('staff.dashboard');
Route::get('/client/dashboard', function () {
    return Inertia::render('Client/Dashboard');
})->middleware(['auth', 'role:client'])->name('client.dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__ . '/auth.php';
require __DIR__ . '/blog.php';

Route::fallback(function () {
    return Inertia::render('NotFound');
});
