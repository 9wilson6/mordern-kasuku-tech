import React from "react";

function Hero() {
    return (
        <div>
            <header>
                {/* Hero Container */}
                <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
                    {/* Component */}
                    <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
                        {/* Hero Title */}
                        <h1 className="mb-4 text-3xl font-bold md:text-5xl tracking-widest">
                            <span className="text-totred block leading-loose text-6xl">
                                {" "}
                                Go Online!{" "}
                            </span>
                            <span className="inline-block leading-snug">
                                {" "}
                                Showcase your Products or Services to your
                                Customers
                            </span>
                        </h1>
                        <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
                            Let us build you a customized attractive website
                        </p>
                        {/* Hero Button */}
                        <div className="flex items-stretch justify-center">
                            <a
                                href="#_"
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
        </div>
    );
}

export default Hero;
