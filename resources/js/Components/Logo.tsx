import React from "react";

const Logo = () => {
    return (
        <>
            <a href="#" className="font-extrabold text-2xl md:text-3xl text-totblue">
                <div className="flex flex-row">
                    <div>Kasuku </div>
                    <svg
                        width="42px"
                        height="px"
                        viewBox="-2.4 -2.4 28.80 28.80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(45)matrix(1, 0, 0, -1, 0, 0)"
                    >
                        <g
                            id="SVGRepo_bgCarrier"
                            stroke-width="0"
                            transform="translate(6.96,6.96), scale(0.42)"
                        >
                            <path
                                transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
                                fill="#EC1C24"
                                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                                strokeWidth="0"
                            ></path>
                        </g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <circle
                                cx="12"
                                cy="4"
                                r="2"
                                fill="#132257"
                            ></circle>{" "}
                            <circle
                                cx="12"
                                cy="12"
                                r="2"
                                fill="#FEDD44"
                            ></circle>{" "}
                            <circle
                                cx="12"
                                cy="20"
                                r="2"
                                fill="#132257"
                            ></circle>{" "}
                        </g>
                    </svg>
                    <div className="text-green-500">Tech</div>
                </div>
                {/* 
                        <div className="absolute left-10 top-[3px] h-full w-full font-extrabold  text-3xl text-totblue">
                           
                            
                        </div> */}
            </a>
        </>
    );
};

export default Logo;
