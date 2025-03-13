<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

// Public Routes (accessible to everyone)
Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{slug}', [BlogController::class, 'show'])->name('blogs.show');
// Change to POST
Route::post('/blogs', [BlogController::class, 'search'])->name('blog.search');
// Dedicated route to filter blogs by category
Route::get('/blogs/category/{category}', [BlogController::class, 'filterByCategory'])->name('blogs.filter');

// Protected Routes (only accessible by authenticated, verified users with 'admin' role)
Route::middleware(['auth', 'role:admin'])->prefix('blog')->group(function () {

  //admin blogs list
  Route::get('/list', [BlogController::class, 'adminIndex'])->name('admin.blogs');
  // Show a form to create a new blog
  Route::get('/create', [BlogController::class, 'create'])->name('blogs.create');

  // Store the new blog
  Route::post('/create', [BlogController::class, 'store'])->name('blogs.store');

  // Show a form to edit a blog
  Route::get('/{slug}/edit', [BlogController::class, 'edit'])->name('blogs.edit');

  // Update a blog
  Route::post('/{slug}', [BlogController::class, 'update'])->name('blogs.update');
  // Update blog status only
  Route::post('/{slug}/status', [BlogController::class, 'updateStatus'])->name('blogs.status.update');

  // Delete a blog
  Route::delete('/{slug}', [BlogController::class, 'destroy'])->name('blogs.destroy');
});
