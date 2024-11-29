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
                        Explore the principles of motion aesthetics that enhance
                        the visual appeal of interfaces. Learn to balance
                        timing, easing, and the flow of motion to create
                        seamless user experiences.
                    </p>
                    <p className="mb-4">
                        In this course, we will explore how animations can add
                        depth and interactivity, guiding users through an
                        intuitive and dynamic interface. The application of
                        these principles in real-world projects will make a
                        significant impact on your designs.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
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
                        Delve into how motion can be used as an artistic tool to
                        tell stories and evoke emotions, making digital
                        interactions feel more human and expressive.
                    </p>
                    <p className="mb-4">
                        Learn how motion design can transform user interactions
                        into memorable experiences. By exploring the emotional
                        connection between animation and storytelling, we’ll
                        uncover how each frame has the power to communicate a
                        deeper meaning.
                    </p>
                    <p className="mb-4">
                        Whether subtle or dramatic, the language of motion can
                        transcend functional design and become a tool for
                        emotional expression, creating immersive experiences for
                        users.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
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
                        Gain proficiency in advanced techniques such as
                        physics-based animations, 3D transformations, and
                        complex sequencing to elevate your design skills and
                        implementation.
                    </p>
                    <p className="mb-4">
                        Learn to harness the power of motion design tools to
                        create seamless, captivating animations that serve both
                        aesthetic and functional purposes in modern interfaces.
                    </p>
                    <p className="mb-4">
                        Advanced tools like timeline-based animations and motion
                        paths will help you create fluid, natural transitions
                        that enhance the overall experience, making your designs
                        more engaging and interactive.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
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
                        Gain proficiency in advanced techniques such as
                        physics-based animations, 3D transformations, and
                        complex sequencing to elevate your design skills and
                        implementation.
                    </p>
                    <p className="mb-4">
                        Our focus will be on improving the technical execution
                        of motion graphics, pushing the boundaries of what’s
                        possible with the right tools and techniques.
                    </p>
                    <p className="mb-4">
                        We will explore the intersection of creativity and
                        technology, teaching you how to apply the latest motion
                        design principles in practical, real-world scenarios.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
                    </p>
                    <p className="mb-4">
                        Motion not only attracts attention but also helps users
                        navigate through content, improving usability and user
                        engagement. It can convey emotions, inform actions, and
                        provide feedback all through simple visual cues.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div>
            <div className="mb-4 flex space-x-2 justify-end items-end">
                {ITEMS.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-md px-3 py-1 text-sm font-medium ${
                            activeIndex === index
                                ? "text-white bg-totblue "
                                : "text-blue-100 bg-totblue-light  "
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
