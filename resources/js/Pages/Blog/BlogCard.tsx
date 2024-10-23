import React from "react";

interface BlogCardProps {
    title: string;
    description: string;
    imgSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
            {/* Page1 */}
            <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
                <img className="h-4/6 w-full object-cover" src={imgSrc} alt={title} />
                <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                    {title}
                </h1>
                <p className="mt-1 px-4 text-center text-gray-600">{description}</p>
            </div>
            {/* /Page1 */}

            {/* Page2 */}
            <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
                <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
                    {title}
                </h1>
                <p className="px-8 text-center">{description}</p>
            </div>
            {/* /Page2 */}
        </div>
    );
};

export default BlogCard;
