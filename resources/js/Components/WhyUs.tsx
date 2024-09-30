import React from "react";

interface WhyUsItemProps {
    number: string;
    title: string;
    description: string;
    imageUrl: string;
}

const WhyUsItem: React.FC<WhyUsItemProps> = ({
    number,
    title,
    description,
    imageUrl,
}) => {
    return (
        <div className="sticky flex flex-col mx-auto max-w-6xl top-0 h-[500px] mb-24 rounded-t-[46px] border-t border-black bg-white px-5 py-10 sm:px-20">
            <div className="mb-14 flex gap-8  font-bold text-totblue text-xl md:text-3xl ">
                <p className="text-totred">{number}</p>
                <p className="">{title}</p>
            </div>
            <div className="flex flex-col-reverse gap-8 sm:gap-20 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="max-w-2xl">
                    <h2 className="mb-4 text-2xl font-bold text-totblue-light md:text-3xl">
                        {title}
                    </h2>
                    <p className="text-sm text-[#636262] sm:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const WhyUs: React.FC = () => {
    const reasons = [
        {
            number: "01",
            title: "We are professional and reliable",
            description:
                "KasukuTech is the one-place solution provider excelling in Web Design, Development, and Marketing your products or services to reach customers everywhere in the world.",
            imageUrl: "assets/whyus1.webp",
        },
        {
            number: "02",
            title: "We are Organized and Dedicated",
            description:
                "We regularly schedule meetings, ensure strategic workflow management, and client-friendly interactions, coupled with advanced QA, timely bug testing & timely deployments of working prototypes. We are always prepared to deliver a seamless working experience.",
            imageUrl: "assets/whyus3.webp",
        },
        {
            number: "03",
            title: "We are scalable and reliable",
            description:
                "We are planned and cautious about the amount of work we take up and make sure we have enough space for additional workload at all times to meet our client needs. We always deliver as agreed and on time.",
            imageUrl: "assets/whyus2.webp",
        },
    ];

    return (
        <section className="py-10">
            <div className="">
                <h2 className="bg-gradient-to-r text-center pb-10 from-pink-500  to-indigo-500 bg-clip-text text-transparent text-3xl font-extrabold md:text-5xl">
                    Why KasukuTech?
                </h2>
                <div className="relative py-10">
                    {reasons.map((reason, index) => (
                        <WhyUsItem
                            key={index}
                            number={reason.number}
                            title={reason.title}
                            description={reason.description}
                            imageUrl={reason.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
