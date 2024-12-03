import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";

const sliderItems = [
    {
        href: "",
        src: "assets/diamondsFashion.png",
        alt: "diamonds fashion logo",
    },
    {
        href: "",
        src: "assets/perfectgrader.png",
        alt: "perfect grader logo",
    },
    {
        href: "",
        src: "assets/credibletutors.png",
        alt: "credible tutors logo",
    },
    {
        href: "",
        src: "assets/perfect-experts.png",
        alt: "perfect experts logo",
    },
    {
        href: "",
        src: "assets/african-realestate.png",
        alt: "african realestate logo",
    },
];

const LogoCloud = () => {
    return (
        <section>
            {/* Container */}
            <div className="container sm:px-10 md:px-12 lg:px-5 px-5 font-inter mx-auto h-auto w-full py-12">
                {/* Title */}
                <h5 className="text-center text-3xl font-bold text-slate-800 sm:text-4xl xl:text-5xl pb-12">
                    Brands that have trusted us
                </h5>
                {/* Content */}
                <div className="bg-gray-50 py-16">
                    <InfiniteSlider gap={24} reverse>
                        {sliderItems.map((item, index) => (
                            <a href={item.href} key={index}>
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
