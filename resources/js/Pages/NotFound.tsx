import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Modern KasukuTech - Not Found</title>
                <meta
                    name="description"
                    content="Modern KasukuTech is a high-quality, innovative, and user-friendly K-12 education platform."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 bg-white">
                <div className="text-center max-w-2xl mx-auto">
                    {/* 404 Graphic */}
                    <div className="relative w-full h-48 mb-8 my-20">
                        <img
                            src="404-error.svg"
                            alt="404 Illustration"
                            className="object-contain"
                        />
                    </div>

                    <p className="text-gray-600 mb-8 text-lg pt-24">
                        Oops! The page you're looking for seems to have gone
                        offline. Let us help you get back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#4cd137] text-white font-medium rounded-md hover:bg-[#45bd31] transition-colors"
                        >
                            Return Home
                        </Link>

                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-6 py-3 border border-[#4cd137] text-[#4cd137] font-medium rounded-md hover:bg-[#4cd137]/10 transition-colors"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
