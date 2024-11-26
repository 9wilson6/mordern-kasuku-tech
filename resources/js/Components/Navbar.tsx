import { useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/moving-border";
import { Link } from "@inertiajs/react";

const navItems = [
    {
        id: 1,
        isActive: true,
        text: "Home",
        link: "#",
    },
    {
        id: 2,
        isActive: false,
        text: "Portfolio",
        link: "#",
    },
    {
        id: 3,
        isActive: false,
        text: "Blog",
        link: "#",
    },
    {
        id: 4,
        isActive: false,
        text: "About",
        link: "#",
    },
];
const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const toggleNavbar = () => {
        setOpenNavbar((openNavbar) => !openNavbar);
    };
    const closeNavbar = () => {
        setOpenNavbar(false);
    };
    return (
        <>
            <div
                onClick={() => {
                    closeNavbar();
                }}
                aria-hidden="true"
                className={`fixed bg-gray-800/40 inset-0 z-30 ${
                    openNavbar ? "flex lg:hidden" : "hidden"
                }`}
            />
            <header className="relative left-0 top-10 w-full flex items-center h-20 bg-white border-b border-b-gray-200  z-40">
                <div className="fixed top-0 z-50 left-0 right-0 bg-totblue-light text-white">
                    <div className="flex text-xs md:text-base items-center justify-end py-2 max-w-5xl mx-auto px-6 space-x-1 md:space-x-6">
                        <a href="mailto: contact@kasukutech.com">
                            email: contact@kasukutech.com
                        </a>
                        <a href="tel:+254757306102"> tel: +254 757 306 102</a>
                    </div>
                </div>
                <nav className="relative  mx-auto lg:max-w-5xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                    <div className="w-full flex items-center lg:hidden">
                        <button
                            onClick={() => toggleNavbar()}
                            aria-label="toggle navbar"
                            className="outline-none border-r border-r-gray-200 pr-3 relative py-3 flex flex-col justify-center items-center gap-1"
                        >
                            {/* Top line */}
                            <span
                                aria-hidden="true"
                                className={`h-0.5 w-6 rounded bg-gray-800 transition-all duration-300 ${
                                    openNavbar ? "rotate-45 translate-y-2" : ""
                                }`}
                            />
                            {/* Middle line */}
                            <span
                                aria-hidden="true"
                                className={`h-0.5 w-6 rounded bg-gray-800 transition-all duration-300 ${
                                    openNavbar ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            {/* Bottom line */}
                            <span
                                aria-hidden="true"
                                className={`h-0.5 w-6 rounded bg-gray-800 transition-all duration-300 ${
                                    openNavbar
                                        ? "-rotate-45 -translate-y-2"
                                        : ""
                                }`}
                            />
                        </button>
                    </div>

                    <div
                        className={`
                    top-full absolute left-0 bg-white 
                     lg:flex w-full ease-linear duration-300
                    lg:relative lg:bg-transparent border-b border-b-gray-200  lg:border-b-0
                    ${
                        openNavbar
                            ? ""
                            : "invisible opacity-0 lg:visible lg:opacity-100"
                    }
                `}
                    >
                        <ul className=" px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-x-5 text-gray-700  py-4 lg:py-0">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.link}
                                        className={`
                                        relative py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                                        ${
                                            item.isActive
                                                ? "after:bg-gray-600 after:w-4"
                                                : ""
                                        }
                                    `}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center flex-1">
                        <a
                            href="#"
                            className="flex items-center gap-x-0.5 text-gray-800 "
                        >
                            <Logo />
                        </a>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5 sm:gap-x-2 w-full text-gray-700 ">
                        <div className="flex space-x-3 justify-center align-middle items-center">
                            {" "}
                            <div className="inline-block">
                                <Link href={route("register")}>
                                    <Button className="group flex h-8  items-center justify-center rounded-md  font-light bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]">
                                        <span className="inline-block  text-xs md:text-sm group-active:[transform:translate3d(0,1px,0)]">
                                            Hire Us <span className="hidden md:inline">Now</span>
                                        </span>
                                    </Button>{" "}
                                </Link>
                            </div>
                            <Link href={route("login")}>
                                <button className="cursor-pointer hidden md:inline-block  z-50 rounded-[8px] bg-totblue-light px-3 py-1 lg:my-4 font-inter  text-sm text-totwhite transition-colors hover:bg-neutral-100 hover:text-totblue active:bg-neutral-50">
                                    Login
                                </button>
                            </Link>{" "}
                            <div></div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
export default Navbar;
