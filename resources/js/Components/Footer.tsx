import { Link } from "@inertiajs/react";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer: React.FC = () => {
    return (
        <footer className="mt-24 bg-totblue font-sans tracking-wide relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-8 py-14 px-12 relative z-20">
                {/* Company */}
                <div>
                    <h2 className="text-lg text-gray-300 font-semibold mb-6">
                        Company
                    </h2>
                    <ul className="space-y-5">
                        <li>
                            <Link
                                href="/about"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                About
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#contact"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h2 className="text-lg text-gray-300 font-semibold mb-6">
                        Services
                    </h2>
                    <ul className="space-y-5">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Web Development
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                UI/UX Design
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                SEO Optimization
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Mobile Development
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Social Media Management
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                E-commerce Solutions
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="text-lg text-gray-300 font-semibold mb-6">
                        Resources
                    </h2>
                    <ul className="space-y-5">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h2 className="text-lg text-gray-300 font-semibold mb-6">
                        Connect
                    </h2>
                    <ul className="space-y-5">
                        <li>
                            <a
                                href="https://www.facebook.com/kasukutech"
                                target="_blank"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/kasukutech"
                                target="_blank"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ke.linkedin.com/company/kasukutech?trk=public_post_follow-view-profile"
                                target="_blank"
                                className="text-gray-300 hover:text-white text-base flex items-center transition-all"
                            >
                                {/* Placeholder SVG */}
                                <span className="inline mr-1.5 h-4 w-4 shrink-0 bg-gray-500"></span>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-600" />
            <div className="my-8 px-12 flex flex-wrap sm:justify-between gap-6 relative z-20">
                <div className="flex space-x-5">
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white text-base transition-all"
                    >
                        {/* Placeholder SVG */}
                        <span className="w-5 h-5 bg-gray-500"></span>
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white text-base transition-all"
                    >
                        {/* Placeholder SVG */}
                        <span className="w-5 h-5 bg-gray-500"></span>
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:text-white text-base transition-all"
                    >
                        {/* Placeholder SVG */}
                        <span className="w-5 h-5 bg-gray-500"></span>
                    </a>
                </div>
                <p className="text-gray-300 text-sm">
                    © kesukuTech. All rights reserved.
                </p>
            </div>
            <img
                src="https://readymadeui.com/bg-image.webp"
                className="absolute w-full inset-0 object-cover opacity-5 -z-0"
                alt="Footer background"
            />
            <FloatingWhatsApp
                phoneNumber="+254757306102"
                accountName="KasukuTech Support"
                avatar="assets/whatsapp-logo.png"
                chatMessage="Hi there! How can we assist you today?"
                placeholder="Type your message here..."
                statusMessage="Typically replies within an hour"
                notificationSound={true}
                allowClickAway={true}
                darkMode={false}
            />
        </footer>
    );
};

export default Footer;
