import { Link } from "@inertiajs/react";
import { Card, CardContent } from "./ui/card";
import { CiCalendarDate } from "react-icons/ci";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { Eye } from "lucide-react";
import truncateHtml from "truncate-html";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Blog {
    title: string;
    thumbnail?: string;
    category: Array<string>;
    slug: string;
    published_at?: string;
    views?: number;
    content?: string;
  
  }

interface TopBlogsProps {
    blogs: Blog[];
}

export default function TopBlogs({ blogs }: TopBlogsProps) {
    const previewComponents = {
        img: () => null,
    };

    return (
        <Card className="border border-gray-200">
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                    {window.location.pathname.includes('/blogs/') ? 'Related Articles' : 'Top Viewed Blogs'}
                </h3>
                <div className="space-y-4">
                    {blogs.map((blog, index) => {
                        const truncated = truncateHtml(blog.content || "", {
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
                            <Link key={index} href={`/blogs/${blog.slug}`}>
                               
                                    <div >
                                        <h4 className="font-medium group-hover:underline text-totblue-light line-clamp-2">
                                            {blog.title}
                                        </h4>
                                        <div className="mt-1 text-xs text-gray-500 mb-2">
                                            <ReactMarkdown
                                                children={previewContent}
                                                remarkPlugins={[remarkGfm]}
                                                rehypePlugins={[rehypeRaw]}
                                                components={previewComponents}
                                            />
                                        </div>
                                    </div>
                             
                                <div className="flex items-center text-xs text-gray-500 gap-3 mb-4">
                                    <span className="text-gray-400 font-thin inline-flex items-center leading-none text-xs">
                                        <CiCalendarDate className="w-4 h-4 mr-1" />
                                        {moment(blog.published_at).fromNow()}
                                    </span>
                                    <span className="flex items-center text-xs">
                                        <Eye size={12} className="mr-1" />
                                        {blog.views}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
