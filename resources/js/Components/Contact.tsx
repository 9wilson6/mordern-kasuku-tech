import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    // Define form state and form submission
  
    return (
        <section id="contact">
            <div className="container sm:px-10 md:px-12 lg:px-5 px-5 font-inter mx-auto h-auto w-full top-0 z-[-2]  bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl py-16 md:px-10 md:py-20">
                    {/* Component */}
                    <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
                        <div className="max-w-3xl">
                            {/* Title */}
                            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
                                Let's build something exciting together!
                            </h2>
                            <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
                                Join us in creating something amazing! We
                                collaborate to bring your ideas to life,
                                delivering innovative solutions that exceed
                                expectations.
                            </p>
                            {/* Testimonial */}
                            <div className="mb-4 flex items-center text-orange-500">
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                                    ></path>
                                </svg>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                                    ></path>
                                </svg>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                                    ></path>
                                </svg>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                                    ></path>
                                </svg>
                                <svg
                                    className="h-8 w-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                                    ></path>
                                </svg>
                            </div>
                            <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base">
                                Working with this team was a fantastic
                                experience! They brought my vision to life with
                                precision and creativity, exceeding all my
                                expectations.
                            </p>
                            <div className="flex">
                                <img
                                    src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
                                    alt=""
                                    className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <h6 className="text-base font-bold">
                                        Ken Smith
                                    </h6>
                                    <p className="text-sm text-gray-500">
                                        Realtor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
