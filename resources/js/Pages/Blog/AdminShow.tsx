import Navbar from "@/Components/Navbar";

import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Calendar, User, Eye, Tag } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import Swal from "sweetalert2";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface BlogProps {
    blog: {
        title: string;
        slug: string;
        thumbnail: string;
        category: string[];
        created_at: string;
        views: number;
        content: string;
        keywords: string;
        description: string;
    };
    relatedBlogs: any[]; // Replace 'any' with the appropriate type if known
}

export default function Blogblog({ blog, relatedBlogs }: BlogProps) {
    if (!blog) {
        return (
            <div>
                blog not found.{" "}
                <a href="/blogs" className="text-blue-500">
                    Go back to blogs
                </a>
            </div>
        );
    }

    // State to track processing for deletion on individual blogs
    const [deleteProcessing, setDeleteProcessing] = useState<DeleteProcessingState>({});

    // Handler for deleting a blog using SweetAlert2 and the router
    interface DeleteProcessingState {
      [key: string]: boolean;
    }

    interface SwalResult {
      isConfirmed: boolean;
    }

    const handleDelete = (slug: string) => {
      Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result: SwalResult) => {
        if (result.isConfirmed) {
          setDeleteProcessing((prev: DeleteProcessingState) => ({ ...prev, [slug]: true }));
          router.delete(route("blogs.destroy", { slug }), {
            onFinish: () =>
              setDeleteProcessing((prev: DeleteProcessingState) => ({
                ...prev,
                [slug]: false,
              })),
          });
        }
      });
    };

    // Custom renderer for Markdown elements
    const components = {
        // Render images with the desired Tailwind classes
        img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
            <img
                className="h-96 w-full object-cover object-center"
                {...props}
                alt={props.alt || "blog image"}
            />
        ),
    };

    return (
        <Authenticated>
            <Head>
                <title>{blog.title}</title>
                <meta
                    name="description"
                    content="Stay updated with the latest articles and insights from PerfectGrader. Explore topics on education, grading, and more."
                />
                <meta name="keywords" content={blog.keywords} />
                <meta property="og:title" content="PerfectGrader Blog" />
                <meta property="og:description" content={blog.description} />
                <meta
                    property="og:url"
                    content="https://www.perfectgrader.com/blog"
                />
            </Head>

            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
                {/* Admin actions */}
                <div className="mt-4 flex justify-center gap-8 mb-8">
                    <Button
                        variant="outline"
                        className="bg-indigo-500 text-white"
                        asChild
                    >
                        <Link
                            href={route("blogs.edit", { slug: blog.slug })}
                            className="text-blue-600"
                        >
                            Edit
                        </Link>
                    </Button>
                    <Button
                        onClick={() => handleDelete(blog.slug)}
                        disabled={deleteProcessing[blog.slug]}
                        variant="destructive"
                    >
                        Delete
                    </Button>
                </div>
                <article className="w-full">
                    <h1 className="text-3xl font-bold mb-4 pb-6 text-center">
                        {blog.title}
                    </h1>
                    <div className="mb-4 bg-white">
                        <img
                            src={
                                blog.thumbnail
                                    ? `/storage/${blog.thumbnail}`
                                    : "/placeholder.png"
                            }
                            alt={blog.title}
                            width={800}
                            height={400}
                            className="h-96 w-full object-cover object-center rounded-sm"
                        />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {blog.category.map((cat, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                            >
                                <Tag size={14} className="mr-1" />
                                {cat}
                            </span>
                        ))}
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
                    {/* Render Markdown content using ReactMarkdown */}
                    <div className="prose max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={components}
                        >
                            {blog.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </div>
        </Authenticated>
    );
}
