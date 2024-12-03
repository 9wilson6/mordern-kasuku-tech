import React from "react";
import BlogCard from "./BlogCard"; // Import the new BlogCard component
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const BlogPage: React.FC = () => {
    const blogs = [
        {
            category: "CATEGORY",
            title: "The Catalyzer",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imgSrc: "https://dummyimage.com/720x400",
            views: "1.2K",
            comments: "6",
        },
        {
            category: "CATEGORY",
            title: "The 400 Blows",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imgSrc: "https://dummyimage.com/721x401",
            views: "1.2K",
            comments: "6",
        },
        {
            category: "CATEGORY",
            title: "Shooting Stars",
            description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
            imgSrc: "https://dummyimage.com/722x402",
            views: "1.2K",
            comments: "6",
        },
    ];

    return (
        <section className="text-gray-600 body-font bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_0.1px,transparent_1px)] bg-[size:14px_24px]">
            <Navbar />
            <div className="container px-5 py-24 mx-auto">
                {/* Title and description section */}
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="flex justify-center items-center text-heading text-2xl lg:text-4xl font-bold text-blue">
                        From our latest Blog Post
                    </h2>
                    <hr className="my-8 h-0.3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-green">
                        At KasukuTech, we’re passionate about empowering
                        businesses through software innovation. Explore our blog
                        for practical advice, success stories, and cutting-edge
                        trends in creating impactful software solutions for
                        businesses of all sizes.
                    </p>
                </div>

                {/* Blog listing section */}
                <div className="flex flex-wrap -m-4">
                    {blogs.map((blog, index) => (
                        <div className="p-4 md:w-1/3" key={index}>
                            <BlogCard
                                title={blog.title}
                                description={blog.description}
                                imgSrc={blog.imgSrc}
                            />
                        </div>
                    ))}
                </div>

                {/* Button to go to all blogs */}
                <div className="flex w-full items-center justify-center pt-16">
                    <a
                        href="#_"
                        className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
                        data-primary="green-400"
                        data-rounded="rounded-2xl"
                        data-primary-reset="{}"
                    >
                        See all articles
                        <svg
                            className="w-4 h-4 ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default BlogPage;
