import { Badge } from "@/Components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import moment from "moment";
import ReactMarkdown from "react-markdown";

import truncateHtml from "truncate-html";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Calendar, Eye, Tag } from "lucide-react";
import { CiCalendarDate } from "react-icons/ci";

interface BlogCardProps {
    title: string;
    content: string;
    imgSrc: string;
    category: Array<string>;
    date: string;
    slug: string;
    views?: number;
    comments?: string;
    published_at: string;
}

export default function BlogCard({
    title,
    content,
    imgSrc,
    category,
    date,
    slug,
    views,
    comments,
    published_at,
}: BlogCardProps) {
    const previewComponents = {
        img: () => null,
    };
    const truncated = truncateHtml(content || "", {
        length: 30,
        byWords: true,
    });

    const previewContent: string =
        typeof truncated === "string"
            ? truncated
            : truncated && "html" in truncated
            ? truncated.html()
            : "";

    return (
        <Link href={`/blogs/${slug}`} className="w-full max-w-md">
            <Card className="overflow-hidden border border-gray-200 h-full transition-all duration-200 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        
                        className="object-cover h-48 w-full transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <CardHeader className="p-5 min:h-14">
                    <h3 className="text-xl font-bold tracking-tight text-totblue-light">
                        {title}
                    </h3>
                </CardHeader>
                <CardContent className="p-5 pt-0 min-h-16">
                    <div className="flex items-center justify-between text-xs text-gray-500 gap-3 mb-4">
                        <span className="text-gray-400 font-thin inline-flex items-center leading-none text-xs">
                            <CiCalendarDate className="w-4 h-4 mr-1" />
                            {moment(published_at).fromNow()}
                        </span>
                        <span className="flex items-center text-xs">
                            <Eye size={12} className="mr-1" />
                            {views}
                        </span>
                    </div>
                    <div className="text-sm">
                        <ReactMarkdown
                            children={previewContent}
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={previewComponents}
                        />
                    </div>
                </CardContent>

                <CardFooter className="min-h-30">
                    <div className="flex items-center space-x-4">
                        {/* Clickable categories for the current blog */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {category.map((cat, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        (window.location.href = `/blogs/category/${encodeURIComponent(
                                            cat
                                        )}`)
                                    }
                                    className="cursor-pointer"
                                >
                                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                        <Tag size={14} className="mr-1" />
                                        {cat}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
