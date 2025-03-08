import { ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/moving-border";

export default function BlogSection() {
    const featuredBlogs = [
        {
            category: "DEVELOPMENT",
            title: "The Catalyzer",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
            date: "12 Jun 2023",
            slug: "the-catalyzer",
        },
        {
            category: "DESIGN",
            title: "The 400 Blows",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
            date: "24 May 2023",
            slug: "the-400-blows",
        },
        {
            category: "TECHNOLOGY",
            title: "Shooting Stars",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
            date: "10 Apr 2023",
            slug: "shooting-stars",
        },
    ];

    return (
        <section className="w-full py-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="max-w-4xl mx-auto space-y-5">
                        <h2 className="text-3xl font-bold tracking-tighter  text-slate-800 md:text-4xl xl:text-5xl">
                            From Our Latest Blog Posts
                        </h2>
                        <p className="mt-4 text-base text-gray-700 sm:mt-8">
                            At KasukuTech, we're passionate about empowering
                            businesses through software innovation. Explore our
                            blog for practical advice, success stories, and
                            cutting-edge trends.
                        </p>
                    </div>
                </div>
                <div className="mt-12 w-full mx-auto grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center ">
                    {featuredBlogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            title={blog.title}
                            description={blog.description}
                            imgSrc={blog.imgSrc}
                            category={blog.category}
                            date={blog.date}
                            slug={blog.slug}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-16 flex justify-center">
                <Link
                    href="/blog"
                    className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-green-500 py-1 pl-6 pr-14 font-medium text-neutral-50"
                >
                    <span className="z-10 pr-2">See All Articles</span>
                    <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-green-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                        <div className="mr-3.5 flex items-center justify-center">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-neutral-50"
                            >
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
