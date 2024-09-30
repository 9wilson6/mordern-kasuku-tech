import Contact from "@/Components/Contact";
import CallToAction from "@/Components/CTA";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import LogoCloud from "@/Components/LogoCloud";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import WhyUs from "@/Components/WhyUs";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { FaLaptopCode } from "react-icons/fa";
import { GiMeshNetwork } from "react-icons/gi";
import { MdOutlineViewInAr } from "react-icons/md";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <div className="h-full w-full">
            <Head title="Welcome" />
            <Navbar />
            <Hero />
            <CallToAction
                title="Let us bring your Vision to Reality"
                description="As a team of professional web developers, we strive to see your Vision into Reality."
                buttonLink={route("register")}
                buttonLabel="Contact Us"
            />

            <Services
                heading="Our Services"
                subheading="We design digital experiences that matter."
                services={servicesData}
            />

            <LogoCloud />
            <WhyUs />
            <Contact/>
            <Footer/>
        </div>
    );
}

const servicesData = [
    {
        title: "User Interface & User Experience",
        description:
            "We create intuitive and catchy web designs backed by cognitive user behaviour",
        icon: (
            <img
                src="assets/uiux.svg"
                loading="lazy"
                alt="user interface & user experience"
            />
        ),
    },
    {
        title: "Web Development",
        description:
            "We create custom web applications in a wide scope of frameworks and technologies that fit your needs.",
        icon: (
            <img
                src="assets/code.svg"
                loading="lazy"
                alt="user interface & user experience"
            />
        ),
    },
    {
        title: "Search Engine Optimization",
        description:
            "We help you rank your website on the first page of Google and other search engines",

        icon: <img src="assets/seo.svg" loading="lazy" alt="seo" />,
    },
    {
        title: "User Interface & User Experience",
        description:
            "We create intuitive and catchy web designs backed by cognitive user behaviour",
        icon: (
            <img
                src="assets/uiux.svg"
                loading="lazy"
                alt="user interface & user experience"
            />
        ),
    },
    {
        title: "Web Development",
        description:
            "We create custom web applications in a wide scope of frameworks and technologies that fit your needs.",
        icon: (
            <img
                src="assets/code.svg"
                loading="lazy"
                alt="user interface & user experience"
            />
        ),
    },
    {
        title: "Search Engine Optimization",
        description:
            "We help you rank your website on the first page of Google and other search engines",

        icon: <img src="assets/seo.svg" loading="lazy" alt="seo" />,
    },
    // Add more services here...
];
