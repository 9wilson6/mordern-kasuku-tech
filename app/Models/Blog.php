<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $casts = [
        'category' => 'array',
        'meta_keywords' => 'array',
    ];

    protected $fillable = ['title', 'slug', 'content', 'meta', 'category', 'thumbnail', 'status', 'views', 'published_at'];
}
