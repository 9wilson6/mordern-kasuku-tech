"use client";
import { useRef } from "react";
import { ScrollProgress } from "./ui/scroll-progress";

// Update the type to accept React.ReactNode (which can be a string or JSX)
interface ScrollProgressBasicProps {
    dummyContent: React.ReactNode;
}

export function ScrollProgressBasic({
    dummyContent,
}: ScrollProgressBasicProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="h-[350px] overflow-auto px-8 "
            ref={containerRef}
        >
            <div className="absolute left-0 top-0 z-10 h-1 w-full bg-green-500">
                <ScrollProgress
                    className="absolute top-0 h-1 bg-totblue-light "
                    containerRef={containerRef}
                />
            </div>
            {dummyContent} 
        </div>
    );
}
