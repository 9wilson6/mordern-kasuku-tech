import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
    // Define form state and form submission
    const { data, setData, post, reset, processing, errors } = useForm({
        name: "",
        email: "",
        message: "",
        subject: "",
    });

    // Handle success feedback state
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Submit form data to the /contact route using Inertia
            await post("/contact", {
                onSuccess: () => {
                    // Set success message and reset form
                    setSuccessMessage(
                        "Your message has been sent successfully!"
                    );
                    reset();
                },
                onError: () => {
                    setSuccessMessage(""); // Clear any previous success message on error
                },
                preserveScroll: true,
            });
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };
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
                        <div className="mx-auto max-w-xl bg-gray-100 p-8 text-center">
                            <h3 className="text-2xl font-bold md:text-3xl">
                                Get a free quote
                            </h3>
                            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
                                Get a free quote today! Our expert team is ready
                                to help you bring your project to life, offering
                                tailored solutions and exceptional service.
                            </p>
                            {/* Success Message */}
                            {successMessage && (
                                <p className="mb-4 text-green-500">
                                    {successMessage}
                                </p>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className="mx-auto mb-4 max-w-sm text-left"
                            >
                                <div className="mb-2">
                                    <label
                                        htmlFor="name"
                                        className="mb-1 font-medium"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="mb-1 font-medium"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label
                                        htmlFor="subject"
                                        className="mb-1 font-medium"
                                    >
                                         Project Title
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData("subject", e.target.value)
                                        }
                                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-black"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>
                                <div className="mb-5 md:mb-6 lg:mb-8">
                                    <label
                                        htmlFor="message"
                                        className="mb-1 font-medium"
                                    >
                                        Project Brief
                                    </label>
                                    <textarea
                                        id="message"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                                >
                                    {processing
                                        ? "Sending..."
                                        : "Get free quote"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
