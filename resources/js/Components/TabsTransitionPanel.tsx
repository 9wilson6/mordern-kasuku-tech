"use client";
import React, { useState } from "react";
import { TransitionPanel } from "./TransitionPanel";
import { ScrollProgressBasic } from "./ScrollProgressBasic";

export function TabsTransitionPanel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ITEMS = [
        {
            title: "About ",
            subtitle: "About KasukuTech",
            content: (
                <>
                    <p className="mb-4">
                        Welcome to Kasuku Tech, where technology meets
                        innovation to empower businesses and individuals to
                        thrive in the digital age.
                    </p>
                    <p className="mb-4">
                        We specialize in providing comprehensive technology
                        solutions tailored to meet your unique needs. From
                        website design and development to mobile app creation,
                        cybersecurity, SEO, data analysis & insights, and social
                        media business page creation, we are your trusted
                        partner in achieving digital success.
                    </p>
                    <p className="mb-4">
                        With over 5 years of expertise, our team of
                        professionals is dedicated to delivering top-notch
                        services that drive growth, enhance visibility, and
                        secure your digital assets.
                    </p>
                </>
            ),
        },
        {
            title: "Story ",
            subtitle: "Our story at KasukuTech",
            content: (
                <>
                    <p className="mb-4">
                        Over time, we’ve observed that both the Kenyan and
                        global online markets have lagged behind in online
                        presence. Many businesses with a strong physical
                        presence remain unaware of the transformative power of
                        digital platforms. Others recognize the value of going
                        online but lack the knowledge or resources to build a
                        professional website or mobile app to showcase their
                        offerings.
                    </p>
                    <p className="mb-4">
                        There’s also a common misconception that web and mobile
                        app development are prohibitively expensive. At Kasuku
                        Tech, we’ve taken it upon ourselves to demystify these
                        notions and make it simple, accessible, and affordable
                        for businesses to establish their online presence.
                    </p>
                    <p className="mb-4">
                        Our mission is to eliminate the hurdles and confusion
                        surrounding web and app development, ensuring the
                        process is seamless from start to finish. Whether it’s
                        creating a stunning website, developing an intuitive
                        mobile app, or enhancing your digital strategy, we are
                        the solution to your online challenges. At Kasuku Tech,
                        we measure our success by the success of your online
                        business.
                    </p>
                </>
            ),
        },
        {
            title: "Mission",
            subtitle: "Our Mission",
            content: (
                <>
                    <p className="mb-4">
                        To empower businesses and individuals with innovative
                        technology solutions that enhance growth, visibility,
                        and security in the digital world.
                    </p>
                </>
            ),
        },
        {
            title: "Vision",
            subtitle: "Our Vision",
            content: (
                <>
                    <p className="mb-4">
                        To be the leading provider of technology solutions,
                        enabling businesses to reach their full potential in an
                        ever-evolving digital landscape.
                    </p>
                </>
            ),
        },
        {
            title: "Values",
            subtitle: "Our Core Values",
            content: (
                <>
                    <p className="mb-4">
                        Innovation: Embracing creativity and innovation to
                        deliver exceptional solutions.
                    </p>
                    <p className="mb-4">
                        Integrity: Upholding honesty and transparency in every
                        interaction.
                    </p>
                    <p className="mb-4">
                        Excellence: Striving for excellence in every project we
                        undertake.
                    </p>
                    <p className="mb-4">
                        Collaboration: Fostering strong partnerships and
                        teamwork with our clients.
                    </p>
                    <p className="mb-4">
                        Customer Satisfaction: Your success is our
                        greatest achievement.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div>
            <div className="mb-4 flex space-x-2 justify-start items-end">
                {ITEMS.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-md px-3 py-1 text-sm font-medium ${
                            activeIndex === index
                                ? "text-white bg-green-700 "
                                : "text-yellow-200 bg-green-500  "
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="overflow-hidden border-t border-zinc-200 ">
                <TransitionPanel
                    activeIndex={activeIndex}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    variants={{
                        enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                        center: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: { opacity: 0, y: 50, filter: "blur(4px)" },
                    }}
                >
                    {ITEMS.map((item, index) => (
                        <div key={index} className="py-2">
                            <h3 className="mb-2 font-medium text-zinc-800 pt-2 ">
                                {item.subtitle}
                            </h3>
                            <p className="text-zinc-600">
                                <ScrollProgressBasic
                                    dummyContent={item.content}
                                />
                            </p>
                        </div>
                    ))}
                </TransitionPanel>
            </div>
        </div>
    );
}
