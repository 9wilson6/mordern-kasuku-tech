import React from "react";
import { Button } from "./ui/moving-border";
import { Link } from "@inertiajs/react";

// Define the type for a single service
interface Service {
    title: string;
    description: string;
    icon: React.ReactNode; // Icon as JSX
}

interface ServicesProps {
    services: Service[];
    heading: string;
    subheading: string;
    showMore: boolean;
}

const Services: React.FC<ServicesProps> = ({
    services,
    heading,
    subheading,
    showMore,
}) => {
    return (
        <section className="bg-white py-10">
            <div className="relative">
                <div className="container mx-auto sm:px-10 md:px-12 lg:px-5 px-5 w-full bg-white">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            {showMore ? (
                                <>
                                    <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl xl:text-5xl">
                                        {heading}
                                    </h2>
                                    <p className="mt-4 text-base text-gray-700 sm:mt-8">
                                        {subheading}
                                    </p>
                                </>
                            ) : (
                                <div className=" py-10 ">
                                    <h2 className="text-3xl font-bold text-green-800 sm:text-4xl xl:text-5xl">
                                        {heading}
                                    </h2>
                                    <p className="mt-4 text-base text-gray-700 sm:mt-8 w-full mx-auto max-w-4xl">
                                        {subheading}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="sm:col-gap-12 row-gap-12 md:gap mt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 ">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="md:border-b-2 border-sky-500 md:shadow-lg m-2 md:p-8 lg:p-12"
                                >
                                    <div
                                        className="mx-auto block align-middle text-5xl text-sky-400"
                                        style={{
                                            height: "64px",
                                            width: "64px",
                                        }}
                                    >
                                        {service.icon}
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-slate-800">
                                        {service.title}
                                    </h3>
                                    <p className="mt-5 text-base text-gray-700">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center w-full mx-auto pt-10">
                            {" "}
                            {showMore && (
                                <Link
                                    href="/services"
                                    className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-green-500 py-1 pl-6 pr-14 font-medium text-neutral-50"
                                >
                                    <span className="z-10 pr-2">
                                        See All Services
                                    </span>
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:col-gap-12 row-gap-12 md:gap mt-10  ">
                <section className="relative bg-green-200 py-14 text-blue-900 ">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="mb-4 inline-flex h-12 w-12 text-blue-700">
                                <svg
                                    viewBox="0 0 136 217"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M30.6632 105.436C27.6632 105.636 24.8632 105.836 21.9632 105.936C17.4632 106.236 12.8632 106.536 8.36322 106.736C7.36322 106.836 6.46322 106.836 5.46322 106.736C1.56322 106.336 -0.636777 103.236 0.163223 99.4361C0.263223 99.0361 0.363223 98.6361 0.563223 98.3361C5.06322 86.5361 8.26322 74.4361 11.2632 62.2361C14.6632 48.7361 18.1632 35.2361 21.6632 21.8361C22.3632 19.2361 23.1632 16.6361 23.8632 14.0361C24.8632 10.5361 26.8632 8.23607 30.6632 7.83607C34.6632 7.43607 38.5632 6.73607 42.5632 6.43607C60.5632 5.33607 78.5632 3.33607 96.4632 1.23607C100.963 0.736068 105.563 0.336068 110.063 0.036068C111.663 -0.063932 113.263 0.036068 114.763 0.436068C118.563 1.33607 120.163 4.93607 118.663 8.43607C118.163 9.53607 117.463 10.5361 116.763 11.5361C114.963 14.3361 113.163 17.0361 111.463 19.8361C106.863 27.6361 102.363 35.4361 97.6632 43.1361C92.9632 50.8361 88.1632 58.5361 83.3632 66.2361C81.9632 68.4361 80.5632 70.5361 79.1632 72.6361C78.7632 73.2361 78.3632 73.9361 77.7632 74.9361C78.7632 74.9361 79.3632 74.9361 79.9632 74.9361C88.2632 75.0361 96.5632 75.0361 104.863 75.1361C105.463 75.1361 106.163 75.2361 106.763 75.3361C110.563 76.1361 112.463 79.6361 111.063 83.2361C110.563 84.5361 109.663 85.7361 108.763 86.8361C104.663 92.2361 100.463 97.5361 96.4632 103.036C94.5632 105.636 92.8632 108.536 91.3632 111.436C83.2632 126.836 75.2632 142.136 67.3632 157.636C59.1632 173.536 51.1632 189.636 43.0632 205.536C42.4632 206.736 41.7632 207.936 40.7632 208.936C38.3632 211.436 35.1632 211.236 32.6632 208.936C30.8632 207.236 29.8632 205.236 29.7632 202.836C29.4632 198.336 29.0632 193.736 29.1632 189.136C29.4632 172.736 30.0632 156.336 30.3632 139.936C30.5632 128.836 30.5632 117.736 30.6632 106.636C30.8632 106.336 30.7632 105.936 30.6632 105.436Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                Now Free for Early Birds
                            </h2>
                            <p className="mt-4 text-xl font-medium">
                                Get in touch for a free consultation and quote
                                for your website now
                            </p>

                            <div className="sm mt-8 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
                                <button className="mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Services;
