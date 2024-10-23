import { Link } from "@inertiajs/react";
import React from "react";

const LogoCloud = () => {
    return (
        <section >
            {/*Container */}
            <div className="container sm:px-10 md:px-12 lg:px-5 px-5 font-inter mx-auto h-auto w-full py-16  ">
                {/*Title */}
                <h5 className=" text-center text-3xl font-bold text-slate-800 sm:text-4xl xl:text-5xl pb-12">
                    Brands that have trusted us
                </h5>
                {/*Content */}
                <div className="grid lg:grid-cols-3 items-center justify-center gap-8 rounded-md bg-gray-100  p-16 px-8 py-12  md:gap-16">
                    <a
                        href="https://perfectgrader.com/"
                        className="flex items-center justify-center"
                        target="_blank"
                    >
                        <img
                            src="https://www.perfectgrader.com/backend/assets/images/favicon.png"
                            alt=""
                            className="max-w-full items-center justify-center sm:max-w-[80%]"
                        />

                        <span className="text-3xl font-extrabold text-gray-400 font-mono">
                            {" "}
                            PerfectGrader
                        </span>
                    </a>
                    <a
                        href="https://www.credibletutors.com/"
                        className="flex items-center justify-center"
                        target="_blank"
                    >
                        <span className="flex">
                            <span className="w-3 h-6 rounded-l-full flex bg-cyan-500"></span>
                            <span className="w-3 h-6 rounded-r-full flex bg-cyan-700 mt-2"></span>
                        </span>

                        <span className="text-3xl font-thin text-gray-400 font-['Serif'] ms-3">
                            {" "}
                            CredibleTutors
                        </span>
                    </a>
                    <a
                        href="https://www.african-realestate.com/"
                        target="_blank"
                        className="flex items-center justify-center"
                    >
                        <img
                            src="https://www.african-realestate.com/_next/static/media/real-estate.0e913257.jpg"
                            alt=""
                            className="max-w-full sm:max-w-[80%]"
                        />
                        <span className="text-2xl font-extrabold text-gray-400 font-sans ms-3">
                            {" "}
                            African-Real-Estate
                        </span>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-gray-400 font-sans ms-3">
                            {" "}
                            PerfectExperts
                        </span>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-gray-400 font-['Lucida_Console'] ms-3">
                            {" "}
                            Gift Real Estate
                        </span>
                    </a>
                    <a href="#" className="flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-gray-400 font-['Arial'] ms-3">
                            {" "}
                            Diamonds Fashion
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
