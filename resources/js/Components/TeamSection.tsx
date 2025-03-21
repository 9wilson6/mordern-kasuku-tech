import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import icons
import { BorderTrail } from "./ui/border-trail";

// Define a type for team members
interface TeamMember {
    name: string;
    role: string;
    image: string;
    socialLinks: {
        facebook: string;
        twitter: string;
        linkedin: string;
    };
}

const teamData: TeamMember[] = [
    {
        name: "Gerald Magu",
        role: " Lead Data Engineer",
        image: "assets/gerald.jpg",
        socialLinks: {
            facebook: "https://www.facebook.com/kasukutech",
            twitter: "https://twitter.com/markadair",
            linkedin: "https://linkedin.com/in/markadair",
        },
    },
    {
        name: "Wilson Muteru",
        role: "Lead Software Engineer",
        image: "assets/wilson.png",
        socialLinks: {
            facebook: "https://www.facebook.com/kasukutech",
            twitter: "https://x.com/FinchTechs",
            linkedin: "https://www.linkedin.com/in/wilson-gm-034495120/",
        },
    },

    {
        name: "Simon Konecki",
        role: "Web Designer",
        image: "https://readymadeui.com/team-3.webp",
        socialLinks: {
            facebook: "https://www.facebook.com/kasukutech",
            twitter: "https://twitter.com/simonkonecki",
            linkedin: "https://linkedin.com/in/simonkonecki",
        },
    },
];

const IconButton = ({
    icon: Icon,
    link,
    label,
}: {
    icon: React.ElementType; // This is expecting a React component (like FaFacebook)
    link: string;
    label: string;
}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <button
            type="button"
            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none bg-gray-100 hover:bg-gray-200"
        >
            <Icon className="w-5 h-5 text-gray-800" />
        </button>
    </a>
);

const TeamSection: React.FC = () => {
    return (
        <div className="font-sans mb-20">
            {/* Header with gradient background */}
            <div className="h-60 w-full bg-linear-to-r from-green-300 via-red-500 to-blue-600"></div>

            {/* Team section */}
            <div className="max-w-5xl mx-auto -mt-48 px-6">
                <h2 className="text-4xl text-center font-extrabold text-white mb-12">
                    Meet Our Professional Team
                </h2>

                {/* Team grid */}
                <div className=" grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500"
                        >
                            <BorderTrail
                                size={120}
                                className="bg-linear-to-l from-blue-500 via-green-500 to-red-500"
                            ></BorderTrail>
                            <div className="lg:min-h-[250px]">
                                <img
                                    src={member.image}
                                    className="w-full rounded-lg inline-block"
                                    alt={member.name}
                                />
                            </div>
                            <div className="mt-6">
                                <h4 className="text-green-500 text-lg font-bold">
                                    {member.name}
                                </h4>
                                <p className="text-sm text-totblue mt-1">
                                    {member.role}
                                </p>
                                <div className="space-x-4 mt-6">
                                    <IconButton
                                        icon={FaFacebook}
                                        link={member.socialLinks.facebook}
                                        label="Facebook"
                                    />
                                    <IconButton
                                        icon={FaTwitter}
                                        link={member.socialLinks.twitter}
                                        label="Twitter"
                                    />
                                    <IconButton
                                        icon={FaLinkedin}
                                        link={member.socialLinks.linkedin}
                                        label="LinkedIn"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
