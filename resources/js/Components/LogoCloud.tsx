import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";

const sliderItems = [
    {
        href: "",
        src: "assets/diamondsFashion.png",
        alt: "diamonds fashion logo",
    },
    {
        href: "https://www.perfectgrader.com/",
        src: "assets/perfectgrader.png",
        alt: "perfect grader logo",
    },
    {
        href: "https://www.credibletutors.com/",
        src: "assets/credibletutors.png",
        alt: "credible tutors logo",
    },
    {
        href: "",
        src: "assets/perfect-experts.png",
        alt: "perfect experts logo",
    },
    {
        href: "https://www.african-realestate.com/",
        src: "assets/african-realestate.png",
        alt: "african realestate logo",
    },
];

const LogoCloud = () => {
    return (
        <section className="bg-green-100">
            {/* Container */}
            <div className="container sm:px-10 md:px-12 lg:px-5 px-5 font-inter mx-auto h-auto w-full py-12">
                {/* Title */}
                <h2 className="text-3xl font-bold tracking-tighter text-slate-800 md:text-4xl xl:text-5xl text-center pb-12">
                    Brands that have trusted us
                </h2>
                {/* Content */}
                <div className=" py-16">
                    <InfiniteSlider gap={24} reverse>
                        {sliderItems.map((item, index) => (
                            <a href={item.href} key={index} target="_blank">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-16 w-auto"
                                />
                            </a>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    );
};

export default LogoCloud;
