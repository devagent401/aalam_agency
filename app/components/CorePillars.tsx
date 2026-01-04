import React from "react";
import Card from "./ui/Card";

const pillars = [
    {
        icon: "/files/icons/rounded.png",
        title: "AI & Automation",
        description: "Custom Agents, LLM Chatbots & Workflow Automation",
        showButton: true,
    },
    {
        icon: "/files/icons/ractangular.png",
        title: "WEB3 & Blockchain",
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
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-white-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
                    Our Core Pillars
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-5 gap-6 md:gap-6">
                    {/* AI & Automation - Left column, row 1, spans 2 rows */}
                    <div className="col-span-2">
                        <Card
                            icon={pillars[0].icon}
                            title={pillars[0].title}
                            description={pillars[0].description}
                            showButton={pillars[0].showButton}
                            className="h-[621px]"
                            imageClassName="w-[16.875rem] h-[16.875rem]"
                            imageContainerClassName="justify-center my-10"
                        />
                    </div>
                    <div className="col-span-3 space-y-6">
                        <Card
                            icon={pillars[1].icon}
                            title={pillars[1].title}
                            description={pillars[1].description}
                            showButton={pillars[1].showButton}
                            info={pillars[1].info}
                            imageClassName="w-60 md:h-60"
                            className="h-[300px]"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <Card
                                icon={pillars[2].icon}
                                title={pillars[2].title}
                                description={pillars[2].description}
                                showButton={pillars[2].showButton}
                                imageClassName="w-[12.545rem] h-[12.545rem] rotate-[20deg] -mt-14"
                                className="h-[305px]"
                            />

                            <Card
                                icon={pillars[3].icon}
                                title={pillars[3].title}
                                description={pillars[3].description}
                                showButton={pillars[3].showButton}
                                imageClassName="w-[9.601rem] h-[9.601rem] "
                                className="h-[305px]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

