import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import moment from "moment";
import Swal from "sweetalert2";
import { FaRegEye } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import Pagination from "@/Components/Pagination";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";

interface AdminIndexProps {
    blogs: any; // Paginated blogs object (blogs.data holds blog records)
    pagination: any[]; // Array of pagination link objects
}

// A simple helper to truncate markdown content by word count
const truncateMarkdown = (content: string, wordLimit = 30) => {
    if (!content) return "";
    const words = content.split(" ");
    if (words.length <= wordLimit) return content;
    return words.slice(0, wordLimit).join(" ") + "...";
};

// Custom ReactMarkdown components for preview rendering
// We override the img element so that images within the preview excerpt are not rendered.
const previewComponents = {
    img: () => null,
};

const AdminIndex = ({ blogs, pagination }: AdminIndexProps) => {
    // State to track processing for status toggle and deletion on individual blogs
    const [statusProcessing, setStatusProcessing] = useState<{
        [key: string]: boolean;
    }>({});
    const [deleteProcessing, setDeleteProcessing] = useState<{
        [key: string]: boolean;
    }>({});

    // Handler for toggling blog status using a dedicated route
    const toggleStatus = (blog: any) => {
        setStatusProcessing((prev) => ({ ...prev, [blog.slug]: true }));
        const newStatus = blog.status === "published" ? "draft" : "published";
        router.post(
            route("blogs.status.update", { slug: blog.slug }),
            { status: newStatus },
            {
                onFinish: () =>
                    setStatusProcessing((prev) => ({
                        ...prev,
                        [blog.slug]: false,
                    })),
            }
        );
    };

    // Handler for deleting a blog using SweetAlert2 and the router
    const handleDelete = (slug: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                setDeleteProcessing((prev) => ({ ...prev, [slug]: true }));
                router.delete(route("blogs.destroy", { slug }), {
                    onFinish: () =>
                        setDeleteProcessing((prev) => ({
                            ...prev,
                            [slug]: false,
                        })),
                });
            }
        });
    };

    return (
        <Authenticated>
            {/* Grid layout with 3 columns on large screens, 2 on medium, 1 on small */}
            <div className="container mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb24">
                {blogs.data.map((blog: any) => {
                    const imageURL = blog.thumbnail
                        ? `/storage/${blog.thumbnail}`
                        : "/placeholder.png";
                    const category = Array.isArray(blog.category)
                        ? blog.category.join(", ")
                        : blog.category;
                    const created_at = blog.created_at;
                    const views = blog.views || 0;

                    // Create a truncated version of the markdown content for preview
                    const previewContent = truncateMarkdown(blog.content);

                    return (
                        <div
                            key={blog.id}
                            className="border border-gray-200 rounded shadow-sm flex flex-col hover:shadow-md transition-shadow p-4"
                        >
                            {/* Clickable preview linking to show page */}
                            <Link
                                href={route("blogs.show", { slug: blog.slug })}
                                className="block grow"
                            >
                                <div className="shrink-0 mb-4 w-full">
                                    <img
                                        className="h-24 w-full object-cover object-center rounded-sm"
                                        src={imageURL}
                                        alt={blog.title}
                                    />
                                </div>
                                <div>
                                    <div className="mb-1 flex flex-wrap gap-1">
                                        {category
                                            .split(", ")
                                            .map(
                                                (
                                                    cat: string,
                                                    index: number
                                                ) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs bg-indigo-400 text-white px-2 py-1 rounded-full"
                                                    >
                                                        {cat}
                                                    </span>
                                                )
                                            )}
                                    </div>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        {blog.title}
                                    </h2>
                                    {/* Render truncated Markdown content without images.
                                        Both markdown and HTML are processed for proper formatting. */}
                                    <div className="mt-1 prose prose-sm text-gray-500 mb-6">
                                        <ReactMarkdown
                                            components={previewComponents}
                                        >
                                            {previewContent}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="text-gray-400 font-thin inline-flex items-center leading-none text-sm">
                                        <FaRegEye className="w-4 h-4 mr-1" />
                                        {views}
                                    </span>
                                    <span className="text-gray-400 font-thin inline-flex items-center leading-none text-sm">
                                        <CiCalendarDate className="w-4 h-4 mr-1" />
                                        {moment(created_at).fromNow()}
                                    </span>
                                </div>
                            </Link>

                            {/* Admin actions */}
                            <div className="mt-4 flex justify-between">
                                <Link
                                    href={route("blogs.edit", {
                                        slug: blog.slug,
                                    })}
                                    className="text-blue-600 hover:underline"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(blog.slug)}
                                    disabled={deleteProcessing[blog.slug]}
                                    className="text-red-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Delete
                                </button>
                            </div>
                            {/* Toggle Status Button at the bottom */}
                            <button
                                onClick={() => toggleStatus(blog)}
                                disabled={statusProcessing[blog.slug]}
                                className="mt-auto w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {blog.status === "published"
                                    ? "Roll back to Draft"
                                    : "Update to Published"}
                            </button>
                        </div>
                    );
                })}
            </div>

            <Pagination
                pagination={{
                    current_page: blogs.current_page,
                    last_page: blogs.last_page,
                    links: blogs.links,
                }}
            />
        </Authenticated>
    );
};

export default AdminIndex;
