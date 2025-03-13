<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{

    public function index()
    {
        // Get all blogs ordered by creation date
        $blogs = Blog::where('status', 'published')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        // Get top 10 most viewed blogs
        $topViewedBlogs = Blog::where('status', 'published')
            ->orderBy('views', 'desc')
            ->limit(10)
            ->get();

        // Get unique categories from all published blogs.
        // Each blog's 'category' field is cast to an array, so we flatten them and then remove duplicates.
        $categories = Blog::where('status', 'published')
            ->get()
            ->pluck('category')  // Get the category arrays from each blog
            ->flatten()          // Flatten them into one collection
            ->unique()           // Remove duplicates
            ->values();          // Reset keys

        return Inertia::render('Blog/BlogPage', [
            'blogs' => $blogs,
            'topViewedBlogs' => $topViewedBlogs,
            'pagination' => [
                'current_page' => $blogs->currentPage(),
                'last_page'    => $blogs->lastPage(),
                'total'        => $blogs->total(),
                'per_page'     => $blogs->perPage(),
                'links'        => $blogs->links(),
            ],
            'categories' => $categories,
        ]);
    }

    public function show($slug)
    {
        // Fetch the current blog
        $blog = Blog::where('slug', $slug)->firstOrFail();

        // Determine a related category to filter by (using the first category in the array, if exists)
        $firstCategory = (count($blog->category) > 0) ? $blog->category[0] : null;

        // Fetch related blogs by filtering on the first category, excluding the current blog
        if ($firstCategory) {
            $relatedBlogs = Blog::whereJsonContains('category', $firstCategory)
                ->where('slug', '!=', $slug)
                ->where('status', 'published')
                ->take(5)
                ->get();
        } else {
            $relatedBlogs = collect();
        }

        // If there are fewer than 5 related blogs, fetch the most viewed blogs to supplement
        if ($relatedBlogs->count() < 5) {
            $remainingCount = 5 - $relatedBlogs->count();

            $mostViewedBlogs = Blog::where('slug', '!=', $slug)
                ->where('status', 'published')
                ->orderBy('views', 'desc')
                ->take($remainingCount)
                ->get();

            $relatedBlogs = $relatedBlogs->merge($mostViewedBlogs);
        }

        // Return admin view if the authenticated user is an admin
        if (Auth::check() && Auth::user()->role === "admin") {

            return Inertia::render('Blog/AdminShow', [
                'blog' => $blog,
            ]);
        }

        // Increment the views count for non-admin users
        $blog->increment('views');

        // Fetch unique categories from all published blogs
        $categories = Blog::where('status', 'published')
            ->get()
            ->pluck('category')  // Returns a collection of arrays
            ->flatten()          // Flatten into a single collection
            ->unique()           // Remove duplicate categories
            ->values();          // Reset the keys

        return Inertia::render('Blog/Blog', [
            'blog'         => $blog,
            'relatedBlogs' => $relatedBlogs,
            'categories'   => $categories,
        ]);
    }


    public function  create()
    {
        return Inertia::render('Blog/Create');
    }

    // Store a newly created blog in storage
    public function store(Request $request)
    {

        $request->validate([
            'title'         => 'required|string|max:70',
            'meta'          => 'required|string|max:70',
            'content'       => 'required|string',
            'status'        => 'required|in:draft,published',
            'categories'    => 'required|array',       // Categories submitted as an array
            'meta_keywords' => 'required|array',       // Meta keywords submitted as an array
            'thumbnail'     => 'nullable|image|mimes:jpeg,png,jpg,gif', // Thumbnail is optional
        ]);



        $Blog = new Blog();
        $Blog->title = $request->title;
        $Blog->meta = $request->meta;
        $Blog->slug = Str::slug($request->title);
        $Blog->content = $request->content;
        $Blog->status = $request->status;
        $Blog->published_at = ($request->status == 'published') ? now() : null;

        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');
            $thumbnailPath = $thumbnail->store('thumbnails/Blogs', 'public');
            $Blog->thumbnail = $thumbnailPath;
        }

        // Save categories directly in the JSON column
        $Blog->category = $request->categories;

        // Save meta keywords directly in the JSON column
        $Blog->meta_keywords = $request->meta_keywords;


        $Blog->save();

        $notification = [
            'message'    => 'Blog created successfully',
            'alert-type' => 'success'
        ];

        return Redirect::route('admin.blogs')->with('message', 'Blog created successfully.');
    }

    public function adminIndex()
    {
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('Blog/AdminIndex', [
            'blogs' => $blogs,
            'pagination' => [
                'current_page' => $blogs->currentPage(),
                'last_page'    => $blogs->lastPage(),
                'links'        => $blogs->toArray()['links'],
            ],
        ]);
    }

    public function filterByCategory($category)
    {
        // Query published blogs that contain the selected category
        $blogsQuery = Blog::where('status', 'published')
            ->whereJsonContains('category', $category);

        // Paginate the filtered results
        $blogs = $blogsQuery->orderBy('created_at', 'desc')->paginate(20);

        // Get top 10 most viewed blogs (you may choose to filter these as well, if desired)
        $topViewedBlogs = Blog::where('status', 'published')
            ->orderBy('views', 'desc')
            ->limit(10)
            ->get();

        // Get unique categories from all published blogs
        $categories = Blog::where('status', 'published')
            ->get()
            ->pluck('category')  // This returns arrays
            ->flatten()          // Flatten into one collection
            ->unique()           // Remove duplicates
            ->values();

        return Inertia::render('Blog/BlogPage', [
            'blogs'          => $blogs,
            'topViewedBlogs' => $topViewedBlogs,
            'pagination'     => [
                'current_page' => $blogs->currentPage(),
                'last_page'    => $blogs->lastPage(),
                'total'        => $blogs->total(),
                'per_page'     => $blogs->perPage(),
                'links'        => $blogs->links(),
            ],
            'categories'     => $categories,
            'currentCategory' => $category, // optional: useful for highlighting the active category in the view
        ]);
    }



    public function updateStatus(Request $request, $slug)
    {
        $request->validate([
            'status' => 'required|in:draft,published',
        ]);

        $blog = Blog::where('slug', $slug)->firstOrFail();

        $blog->status = $request->status;
        $blog->published_at = $request->status === 'published' ? now() : null;

        $blog->save();

        return redirect()->back()->with('message', 'Blog status updated successfully.');
    }

    // Show the form for editing the specified blog
    public function edit($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        return Inertia::render('Blog/EditBlog', [
            'blog' => $blog,
        ]);
    }

    // Update the specified blog in storage
    public function update(Request $request, $slug)
    {

        $blog = Blog::where('slug', $slug)->firstOrFail();

        $request->validate([
            'title'         => 'required|string|max:70',
            'meta'          => 'required|string|max:70',
            'content'       => 'required|string',
            'status'        => 'required|in:draft,published',
            'categories'    => 'required|array',
            'meta_keywords' => 'required|array',
            'thumbnail'     => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);



        // Update slug if title has changed
        if ($request->title !== $blog->title) {
            $newSlug = Str::slug($request->title);
            $i = 1;
            while (Blog::where('slug', $newSlug)->where('id', '!=', $blog->id)->exists()) {
                $newSlug = Str::slug($request->title) . '-' . $i;
                $i++;
            }
            $blog->slug = $newSlug;
        }

        $blog->title = $request->title;
        $blog->meta = $request->meta;
        $blog->content = $request->content;
        $blog->status = $request->status;
        $blog->published_at = ($request->status == 'published') ? now() : null;

        // Handle thumbnail update using unlink
        if ($request->hasFile('thumbnail')) {
            // Delete old thumbnail if it exists
            if ($blog->thumbnail && file_exists(public_path("storage/{$blog->thumbnail}"))) {
                unlink(public_path("storage/{$blog->thumbnail}"));
            }
            $thumbnailPath = $request->file('thumbnail')->store('thumbnails/Blogs', 'public');
            $blog->thumbnail = $thumbnailPath;
        }

        // Save categories and meta keywords directly in the JSON columns
        $blog->category = $request->categories;
        $blog->meta_keywords = $request->meta_keywords;

        $blog->save();

        return redirect()->route('admin.blogs')->with('message', 'Blog updated successfully.');
    }





    // Remove the specified blog from storage
    public function destroy($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();

        // Delete the image from storage if it exists
        if ($blog->image_path && file_exists(public_path($blog->image_path))) {
            unlink(public_path($blog->image_path)); // Delete the image
        }

        // Delete the blog
        $blog->delete();

        return redirect()->route('admin.blogs')->with('message', 'Blog deleted successfully.');
    }
}
