import Card from "./ui/Card";

const pillars = [
    {
        icon: "/files/icons/rounded.png",
        title: "AI & Automation",
        description: "Custom Agents, LLM Chatbots & Workflow Automation",
        showButton: false,
    },

    {
        icon: "/files/icons/ractangular.png",
        title: "WEB3 & Blockchain",
        description: "DApps, Smart Contracts, NFT & DeFi Protocols",
        info: ["Layer 2 Solutions & Scaling", "Decenstizlized Exchanges (DEX)", "Oracles & Data Feeds"],
        showButton: false,
    },
    {
        icon: "/files/icons/business.png",
        title: "Business Process Automation",
        description: "DApps, Smart Contracts, NFT & DeFi Protocols",
        info: ["Layer 2 Solutions & Scaling", "Decenstizlized Exchanges (DEX)", "Oracles & Data Feeds"],
        showButton: false,
    },
    {
        icon: "/files/icons/upchart.png",
        title: "Algorithmic Trading",
        description: "High-Frequency Bots, Arbitrage & Strategy",
        showButton: false,
    },
    {
        icon: "/files/icons/triangel.png",
        title: "Fintech & Banking",
        description: "Payment Gateways, Core Banking & Security",
        showButton: false,
    },
];

export default function CorePillars() {
    return (
        <section className="py-12 bg-dark-deep">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-white-primary text-2xl md:text-3xl lg:text-[40px] font-semibold mb-8 md:mb-12">
                    Our Expertise
                </h2>

                {/* Cards Grid */}
                <div className=" grid grid-cols-1 md:grid-cols-5 gap-6">
                    {/* AI & Automation - Large Card */}
                    <div className="md:col-span-2">
                        <Card
                            icon={pillars[0].icon}
                            title={pillars[0].title}
                            description={pillars[0].description}
                            showButton={true}
                            className="h-[626px]"
                            imageClassName="w-[18rem] h-[18rem]"
                            imageContainerClassName="justify-center mt-12 mb-8"
                        />
                    </div>

                    {/* Small Cards Grid */}
                    <div className="md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card
                                icon={pillars[1].icon}
                                title={pillars[1].title}
                                description={pillars[1].description}
                                showButton={false}
                                className="h-[300px]"
                                imageClassName="w-40 h-40"
                                imageContainerClassName="justify-start -mr-4 -mt-4"
                            />
                            <Card
                                icon={pillars[2].icon}
                                title={pillars[2].title}
                                description={pillars[2].description}
                                showButton={false}
                                className="h-[300px]"
                                imageClassName="w-32 h-32"
                                imageContainerClassName="justify-start -mr-4 -mt-4"
                            />
                            <Card
                                icon={pillars[3].icon}
                                title={pillars[3].title}
                                description={pillars[3].description}
                                showButton={false}
                                className="h-[300px]"
                                imageClassName="w-44 h-44"
                                imageContainerClassName="justify-start  -mt-6"
                            />
                            <Card
                                icon={pillars[4].icon}
                                title={pillars[4].title}
                                description={pillars[4].description}
                                showButton={false}
                                className="h-[300px]"
                                imageClassName="w-40 h-40"
                                imageContainerClassName="justify-start -mt-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

