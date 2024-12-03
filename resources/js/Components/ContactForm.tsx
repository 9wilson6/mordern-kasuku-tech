import { useForm } from "@inertiajs/react";
import React, { useState } from "react";


function ContactForm() {
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
        <div className="mx-auto max-w-xl bg-white border rounded-lg border-blue-50 border-b-8 border-b-blue-100 p-8 text-center">
            <h3 className="text-2xl font-bold md:text-3xl">Get a free quote</h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
                Get a free quote today! Our expert team is ready to help you
                bring your project to life, offering tailored solutions and
                exceptional service.
            </p>
            {/* Success Message */}
            {successMessage && (
                <p className="mb-4 text-green-500">{successMessage}</p>
            )}

            <form
                onSubmit={handleSubmit}
                className="mx-auto mb-4 max-w-sm text-left"
            >
                <div className="mb-2">
                    <label htmlFor="name" className="mb-1 text-sm font-light">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-3 pl-4 text-sm text-black" 
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="mb-1 text-sm font-light">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-3 pl-4 text-sm text-black"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>

                <div className="mb-2">
                    <label htmlFor="subject" className="mb-1 text-sm font-light">  
                        Project Title
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={data.subject}
                        onChange={(e) => setData("subject", e.target.value)}
                        className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-3 pl-4 text-sm text-black"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.subject}</p>
                    )}
                </div>
                <div className="mb-5 md:mb-6 lg:mb-8">
                    <label htmlFor="message" className="mb-1 text-sm font-light">Project Brief</label>
                    <textarea
                        id="message"
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid border-black p-3 text-sm text-black"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="inline-block w-full cursor-pointer rounded-md bg-totblue-light px-6 py-3 text-center font-semibold text-white"
                >
                    {processing ? "Sending..." : "Get free quote"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
