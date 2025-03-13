import { usePage, Link, Head } from "@inertiajs/react";
import BlogCard from "./BlogCard";
import TopBlogs from "@/Components/TopBlogs";
import { Input } from "@/Components/ui/input";
import { Search, Tag } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import Pagination from "@/Components/Pagination";
import Navbar from "@/Components/Navbar";
import { Card } from "@/Components/ui/card";

interface Blog {
    title: string;
    thumbnail?: string;
    category: Array<string>;
    slug: string;
    published_at: string;
    views?: number;
    content: string;
}

interface BlogsData {
    data: Blog[];
    links: any;
}

interface PaginationData {
    current_page: number;
    last_page: number;
    total: number;
    per_page: number;
    links: any;
}

interface BlogPageProps {
    blogs: BlogsData;
    topViewedBlogs: Blog[];
    pagination: PaginationData;
    categories: string[]; // Dynamic categories coming from the backend
    currentCategory?: string; // Optional, used when filtering by a category
}

export default function BlogPage() {
    const { blogs, topViewedBlogs, pagination, categories, currentCategory } =
        usePage().props as unknown as BlogPageProps;

    return (
        <div className="min-h-screen bg-background">
            <Head>
                <title>KasukuTech Blog</title>
                <meta
                    name="description"
                    content="At KasukuTech, we're passionate about empowering businesses through software innovation. Explore our blog for practical advice, success stories, and cutting-edge trends."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <div className="flex flex-col space-y-8">
                    {/* Header */}
                    <div className="flex  bg-linear-to-r/shorter from-indigo-500 to-teal-400 flex-col items-center space-y-4 py-14">
                        <div className="space-y-4 text-white">
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                                Welcome to our Blog
                            </h1>
                            <p className="max-w-[700px]  text-white md:text-xl">
                                At KasukuTech, we're passionate about empowering
                                businesses through software innovation. Explore
                                our blog for practical advice, success stories,
                                and cutting-edge trends.
                            </p>
                        </div>
                    </div>
                    {/* Search bar */}
                    {/* <div className="flex w-full max-w-md items-center space-x-2">
                        <Input
                            type="text"
                            placeholder="Search articles..."
                            className="flex-1"
                        />
                        <Button type="submit">
                            <Search className="h-4 w-4 mr-2" />
                            Search
                        </Button>
                    </div> */}

                    {/* Main content area with sidebar */}
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {/* Blog Listing */}
                        <div className="lg:col-span-2 md:col-span-2 ">
                            {/* Active Filter Header */}
                            {currentCategory && (
                                <div className="mb-4 flex items-center justify-center space-x-2">
                                    <h2 className="text-xl font-bold">
                                        Showing results for:{" "}
                                        <span className="text-blue-500">
                                            {currentCategory}
                                        </span>
                                    </h2>
                                    <Link
                                        href="/blogs"
                                        className="text-sm text-gray-500 underline"
                                    >
                                        Clear filter
                                    </Link>
                                </div>
                            )}

                            <div className="grid gap-4 sm:grid-cols-2">
                                {blogs.data.map((blog, index) => (
                                    <BlogCard
                                        key={index}
                                        title={blog.title}
                                        content={blog.content}
                                        imgSrc={
                                            blog.thumbnail
                                                ? `/storage/${blog.thumbnail}`
                                                : "/placeholder.png"
                                        }
                                        category={blog.category}
                                        date={blog.published_at}
                                        slug={blog.slug}
                                        views={blog.views}
                                        published_at={blog.published_at}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4 md:col-span-2 lg:col-span-1 bg-gray-50 p-3 rounded-lg">
                            <TopBlogs blogs={topViewedBlogs} />

                            {/* Dynamic Categories with clickable links */}
                            <Card className="rounded-lg  bg-card p-6 border border-gray-200">
                                <h3 className="text-lg font-semibold mb-4">
                                    Categories
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories && categories.length > 0 ? (
                                        categories.map((cat, index) => (
                                            <Link
                                                key={index}
                                                href={`/blogs/category/${encodeURIComponent(
                                                    cat
                                                )}`}
                                                className="cursor-pointer"
                                            >
                                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                                    <Tag
                                                        size={14}
                                                        className="mr-1"
                                                    />
                                                    {cat}
                                                </Badge>
                                            </Link>
                                        ))
                                    ) : (
                                        <p>No categories found</p>
                                    )}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex mx-auto justify-center items-center mt-14 w-full h-24 overflow-hidden overflow-x-auto">
                    <Pagination
                        pagination={{
                            current_page: pagination.current_page,
                            last_page: pagination.last_page,
                            links: blogs.links,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
