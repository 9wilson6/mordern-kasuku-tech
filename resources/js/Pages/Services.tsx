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
import { Head } from "@inertiajs/react";
import Services from "@/Components/Services";

function About() {
    return (
        <section>
            <Head>
                <link rel="canonical" href="https://kasukutech.com/services" />
                <title>
                    Our Services - Empowering Your Business with KasukuTech
                </title>
                <meta
                    name="description"
                    content="Discover KasukuTech's comprehensive services, including mobile app development, web applications, SEO, digital marketing, AI, cloud solutions, and more, designed to elevate your business."
                />
                <meta
                    name="keywords"
                    content="KasukuTech services, mobile app development, web applications, SEO, digital marketing, AI solutions, cloud solutions, cybersecurity, IT consulting"
                />
            </Head>

            <Navbar />
            <Services
                heading="Our Services"
                subheading="At Kasuku Tech, we provide a diverse range of digital solutions designed to empower businesses and individuals to succeed in the ever-evolving online landscape. With over five years of expertise, we are committed to delivering exceptional services that cater to your unique needs."
                services={servicesData}
                showMore={false}
            />
            <Footer />
        </section>
    );
}

export default About;

const servicesData = [
    {
        title: "Web Development",
        description:
            "We create custom web applications in a wide scope of frameworks and technologies that fit your needs.",
        icon: (
            <img src="assets/code.svg" loading="lazy" alt="web development" />
        ),
    },
    {
        title: "Search Engine Optimization",
        description:
            "We help you rank your website on the first page of Google and other search engines.",
        icon: <img src="assets/seo.svg" loading="lazy" alt="seo" />,
    },
    {
        title: "User Interface & User Experience",
        description:
            "We create intuitive and catchy web designs backed by cognitive user behaviour.",
        icon: (
            <img
                src="assets/uiux.svg"
                loading="lazy"
                alt="user interface & user experience"
            />
        ),
    },
    {
        title: "Fintech Solutions",
        description:
            "We build secure, scalable financial solutions for payments, lending, and digital banking.",
        icon: (
            <img
                src="assets/online-banking.svg"
                loading="lazy"
                alt="fintech solutions"
            />
        ),
    },
    {
        title: "AI Solutions",
        description:
            "Leverage AI to automate processes, enhance decision-making, and drive innovation.",
        icon: <img src="assets/ai.svg" loading="lazy" alt="ai solutions" />,
    },
    {
        title: "Blockchain Solutions",
        description:
            "We create blockchain-powered solutions for secure, transparent, and decentralized operations.",
        icon: (
            <img
                src="assets/bitcoin.svg"
                loading="lazy"
                alt="blockchain solutions"
            />
        ),
    },
    {
        title: "Mobile App Development",
        description:
            "We create high-performing mobile apps to engage users and achieve your business goals.",
        icon: (
            <img
                src="assets/mobile.svg"
                loading="lazy"
                alt="mobile app development"
            />
        ),
    },
    {
        title: "Cybersecurity Solutions",
        description:
            "Protect your digital assets with our advanced and robust cybersecurity solutions.",
        icon: (
            <img
                src="assets/seo.svg"
                loading="lazy"
                alt="cybersecurity solutions"
            />
        ),
    },
    {
        title: "Data Analysis and Insights",
        description:
            "Discover insights and make data-driven decisions with our advanced analysis services.",
        icon: (
            <img
                src="assets/uiux.svg"
                loading="lazy"
                alt="data analysis and insights"
            />
        ),
    },
    {
        title: "Social Media Business Page Creation",
        description:
            "We create engaging social media pages tailored to your brand and audience.",
        icon: (
            <img
                src="assets/social-creation.svg"
                loading="lazy"
                alt="social media business page creation"
            />
        ),
    },
    {
        title: "Social Media Advertising",
        description:
            "Run targeted ad campaigns to increase visibility, engagement, and return on investment.",
        icon: (
            <img
                src="assets/social-advertising.svg"
                loading="lazy"
                alt="social media advertising"
            />
        ),
    },
    {
        title: "IT Support and Managed Services",
        description:
            "Comprehensive IT support to keep your systems running smoothly and securely.",
        icon: (
            <img
                src="assets/support.svg"
                loading="lazy"
                alt="it support and managed services"
            />
        ),
    },
];
