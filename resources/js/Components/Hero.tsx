import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { TextLoop } from "./ui/textloop";

function Hero() {
    const sentences = [
        "Transform your mobile experience with apps.",
        "Empower business with scalable web applications.",
        "Supercharge your online presence with SEO.",
        "Drive results with tailored marketing tactics.",
        "Elevate your brand with creative design.",
        "Unlock data potential with advanced solutions.",
        "Revolutionize business with AI and ML.",
        "Fortify your security with robust cybersecurity.",
        "Streamline operations with seamless cloud solutions.",
        "Stay ahead with expert IT consulting.",
    ];

    const colors = [
        "text-red-500",
        "text-yellow-500",
        "text-green-500",
        "text-blue-500",
        "text-teal-500",
        "text-purple-500",
        "text-pink-500",
        "text-indigo-500",
        "text-orange-500",
        "text-rose-500",
    ];

    return (
        <div>
            {/* <BackgroundLines> */}
            <header>
                {/* Hero Container */}
                <div className="container sm:px-10 md:px-12 lg:px-5 px-5 font-inter mx-auto h-auto w-full py-16 md:py-24">
                    {/* Component */}
                    <div className="mx-auto mb-8 w-full max-w-7xl text-center md:mb-12 lg:mb-16">
                        {/* Hero Title */}
                        <h1 className="mb-4 text-3xl font-bold md:text-5xl tracking-widest">
                            <span className="text-green-500 block leading-loose text-6xl">
                                {" "}
                                Go Online!{" "}
                            </span>
                            <span className="inline-block leading-snug">
                                {" "}
                                Showcase your brand to the world
                            </span>
                        </h1>
                        <p className="mx-auto mb-5 max-w-lg text-sm  text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
                            <TextLoop interval={5} className="text-base">
                                {sentences.map((sentence, index) => (
                                    <span
                                        key={index}
                                        className={
                                            colors[
                                                Math.floor(
                                                    Math.random() *
                                                        colors.length
                                                )
                                            ]
                                        }
                                    >
                                        {sentence}
                                    </span>
                                ))}
                            </TextLoop>
                        </p>
                        {/* Hero Button */}
                        <div className="flex items-stretch justify-center mb-4">
                            <a
                                href="#contact"
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span className="relative z-20 flex items-center text-sm">
                                    <svg
                                        className="relative w-5 h-5 mr-2 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        ></path>
                                    </svg>
                                    Get a Quote Today
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* Hero Image */}
                    <img
                        src="https://cdn.pixabay.com/photo/2016/07/29/10/45/graphic-1552416_1280.png"
                        alt=""
                        className="inline-block max-h-[312px] w-full object-cover"
                    />
                </div>
            </header>
            {/* </BackgroundLines> */}
        </div>
    );
}

export default Hero;
