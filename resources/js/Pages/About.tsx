import { CardStackDemo } from "@/Components/CardStack";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TeamSection from "@/Components/TeamSection";
import Testimonials from "@/Components/Testimonials";
import { TransitionPanel } from "@/Components/TransitionPanel";
import { TabsTransitionPanel } from "@/Components/TabsTransitionPanel";
import React from "react";
import MetricsSection from "@/Components/Metrics";

function About() {
    return (
        <section>
            <Navbar />

            {/* Container */}
            <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                <h2 className="mb-8 text-3xl font-bold md:text-5xl">
                    About us
                </h2>
                {/* Component */}
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
                    {/* Content */}
                    <div className="flex flex-col gap-8 lg:w-5/5 w-full">
                        <TabsTransitionPanel />
                        {/* Divider */}{" "}
                        <div className="my-4 h-px w-full bg-black"></div>
                        <div className="flex justify-center">
                            <h2 className="mb-14 text-3xl font-bold md:text-5xl">
                                What our clients are saying
                            </h2>
                        </div>
                        {/* Testimonials */}
                        {/* <Testimonials /> */}
                        <CardStackDemo />
                    </div>

                    {/* Image */}
                    {/* <div className="w-full rounded-md bg-gray-100  lg:w-2/5">
                        <ContactForm />
                    </div> */}
                </div>
            </div>

            <TeamSection />
            <MetricsSection />
            <Footer />
        </section>
    );
}

export default About;
