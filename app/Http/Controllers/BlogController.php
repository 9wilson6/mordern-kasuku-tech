<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function show($slug)
    {
        // Fetch blog post data from your database or API
         $blogPost = Blog::where('slug', $slug)->first();
         dd($blogPost);
        return Inertia::render('Blog/Blog', [
            'blogPost' => $blogPost,
        ]);
    }
}
