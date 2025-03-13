import { usePage, Link, Head } from "@inertiajs/react";
import TopBlogs from "@/Components/TopBlogs";
import { Badge } from "@/Components/ui/badge";
import { Calendar, Eye, Tag } from "lucide-react";
import { CiCalendarDate } from "react-icons/ci";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Navbar from "@/Components/Navbar";
import { Card } from "@/Components/ui/card";

interface Blog {
    title: string;
    slug: string;
    meta: string;
    meta_keywords: string;
    content: string;
    coverImage: string;
    category: Array<string>;
    author: string;
    authorImage: string;
    published_at: string;
    views: number;
    created_at: string;
}

interface RelatedBlog {
    title: string;
    thumbnail: string;
    published_at: string;
    slug: string;
}

interface BlogPageProps {
    blog: Blog;
    relatedBlogs: RelatedBlog[];
    categories: string[]; // All available categories for the sidebar
}

export default function BlogPostPage() {
    // Casting the page props to our defined interface
    const { blog, relatedBlogs, categories } = usePage()
        .props as unknown as BlogPageProps;

    const markdownComponents = {
        img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
            <img
                className="h-96 w-full object-cover object-center"
                {...props}
                alt={props.alt || "blog image"}
            />
        ),
    };

    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta
                    name="description"
                    content="Stay updated with the latest articles and insights from Kasukutech. Explore topics on education, grading, and more."
                />
                <meta name="keywords" content={blog.meta_keywords} />
                <meta property="og:title" content="Kasukutech Blog" />
                <meta property="og:description" content={blog.meta} />
                <meta
                    property="og:url"
                    content="https://www.kasukutech.com/blogs"
                />
            </Head>
            <Navbar />
            <div className="min-h-screen bg-background">
                <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
                        {/* Main content */}
                        <div className="lg:col-span-2">
                            {/* Cover image */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <img
                                    src={
                                        blog.coverImage
                                            ? `/storage/${blog.coverImage}`
                                            : "/placeholder.png"
                                    }
                                    alt={blog.title}
                                    width={800}
                                    height={400}
                                    className="h-96 w-full object-cover object-center rounded-sm"
                                />
                            </div>

                            {/* Post header */}
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
                                    {blog.title}
                                </h1>
                                <div className="flex items-center space-x-4">
                                    {/* Clickable categories for the current blog */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {blog.category.map((cat, index) => (
                                            <Link
                                                key={index}
                                                href={`/blogs/category/${encodeURIComponent(
                                                    cat
                                                )}`}
                                            >
                                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                                    <Tag
                                                        size={14}
                                                        className="mr-1"
                                                    />
                                                    {cat}
                                                </Badge>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 gap-4 py-6">
                                    <span className="text-gray-400 font-thin inline-flex items-center leading-none text-sm">
                                        <CiCalendarDate className="w-4 h-4 mr-1" />
                                        {moment(blog.created_at).fromNow()}
                                    </span>
                                    <span className="flex items-center">
                                        <Eye size={14} className="mr-1" />
                                        {blog.views}
                                    </span>
                                </div>
                            </div>

                            {/* Post content */}
                            <div className="prose prose-sm max-w-none dark:prose-invert">
                                <ReactMarkdown components={markdownComponents}>
                                    {blog.content}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4 md:col-span-2 lg:col-span-1 bg-gray-50 p-3 rounded-lg">
                            <TopBlogs
                                blogs={relatedBlogs.map((b) => ({
                                    title: b.title,
                                    slug: b.slug,
                                    content: blog.content,
                                    coverImage: blog.coverImage,
                                    category: blog.category,
                                    author: blog.author,
                                    published_at: b.published_at,
                                    views: blog.views,
                                    created_at: blog.created_at,
                                }))}
                            />

                            {/* Dynamic Categories section for non-admin users */}
                            <Card className="rounded-lg  border-gray-200 border bg-card p-6">
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
            </div>
        </>
    );
}
