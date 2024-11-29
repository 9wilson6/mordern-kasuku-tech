"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
    return (
        <div className="flex items-center justify-center w-full  ">
          
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-green-200 text-green-500   px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARD = [
    {
        id: 0,
        name: "Manu Arora",
        designation: "Senior Software Engineer",
        content: (
            <p>
                These cards are amazing,{" "}
                <Highlight>I want to use them</Highlight> in my project. Framer
                motion is a godsend ngl tbh fam 🙏
            </p>
        ),
    },
    {
        id: 1,
        name: "Elon Musk",
        designation: "Senior Shitposter",
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo.
                Instead, I would like to call it <Highlight>X.com</Highlight> so
                that it can easily be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about
                fight club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about
                fight club.
            </p>
        ),
    },
];

const CARDS = [
    {
        id: 0,
        content: (
            <p>
                KasukuTech has been instrumental in transforming our{" "}
                <Highlight>digital presence</Highlight>. Their expertise in
                building helped us launch our platform ahead of schedule,
                significantly improving our{" "}
                <Highlight>
                    user engagement and operational efficiency
                </Highlight>
                .
            </p>
        ),
        name: "Sarah Johnson",
        designation: "CEO, EcoTech Innovations",
    },
    {
        id: 1,
        content: (
            <p>
                KasukuTech's development of PerfectGrader has revolutionized our
                approach to academic support. Their{" "}
                <Highlight>team's commitment</Highlight> to quality and timely
                delivery has not only improved our clients' satisfaction but
                also enhanced our reputation in the educational services sector.
                The <Highlight>scalable and user-friendly</Highlight> platform
                they built for us has been a game-changer.
            </p>
        ),
        name: "Samuel K Gachuki",
        designation: "CEO, PerfectGrader",
    },
    {
        id: 2,
        content: (
            <p>
                African Real Estate's <Highlight>innovative platform</Highlight>
                , developed by KasukuTech, has been a game-changer in the
                property market. Their development of our{" "}
                <Highlight>extensive catalogue </Highlight> and early access
                listings feature has given our clients a significant advantage,
                setting new standards in the real estate industry.
            </p>
        ),
        name: "Mungai Kihara",
        designation: "CEO, African Real Estate",
    },
    {
        id: 3,
        content: (
            <p>
                Working with KasukuTech has been a transformative experience for
                Credible Research. Their team's{" "}
                <Highlight> technical prowess</Highlight> and
                <Highlight> innovative solutions</Highlight> have not only
                streamlined our operations but also opened new avenues for
                growth. They truly understand the unique challenges of the
                academic research market.
            </p>
        ),
        name: "Gerald Magu",
        designation: "CEO, Credible Research",
    },
    {
        id: 4,
        content: (
            <p>
                KasukuTech's expertise in web development has significantly
                enhanced our <Highlight>online presence</Highlight>. Their
                ability to translate our vision into a{" "}
                <Highlight>user-friendly</Highlight>, efficient platform has
                been crucial in expanding our reach and improving client
                engagement.
            </p>
        ),
        name: "Dr. James M.",
        designation: "Director, TechInnovate Solutions",
    },
];
