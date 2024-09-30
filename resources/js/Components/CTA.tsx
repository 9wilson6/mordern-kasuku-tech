import { Link } from "@inertiajs/react";
import React from "react";

interface ContactSectionProps {
    title: string;
    description: string;
    buttonLabel?: string; // optional with a default value
    buttonLink?: string; // optional with a default value
}

const CallToAction: React.FC<ContactSectionProps> = ({
    title,
    description,
    buttonLabel = "Contact Us", // default value
    buttonLink = "#", // default value
}) => {
    return (
        <section className="mx-auto relative h-full">
            <div className="py-16 inset-0 -z-10 h-full w-full bg-totwhite bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-md md:max-w-3xl lg:flex-row">
                    <div className="text-center flex flex-col justify-center space-y-10 items-center tracking-widest">
                        <h2 className="bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent text-3xl font-extrabold md:text-5xl">
                            {title}
                        </h2>
                        <p className="bg-clip-text  font-extrabold text-gray-700 text-2xl md:text-4xl leading-snug tracking-widest ">
                            {description}
                        </p>

                        <Link
                            href={buttonLink}
                            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                        >
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-6 py-3 transition-all ease-out bg-transparent rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">
                                    {" "}
                                    {buttonLabel}
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;