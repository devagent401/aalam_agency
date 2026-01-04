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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                    {/* AI & Automation - Left column, row 1, spans 2 rows */}
                    <div className="md:row-span-1 border">
                        <Card
                            icon={pillars[0].icon}
                            title={pillars[0].title}
                            description={pillars[0].description}
                            showButton={pillars[0].showButton}
                            className="h-full"
                        />
                    </div>
                    <div className="col-span-3 space-y-8">
                        {/* WEB3 & Blockchain - Right column, row 1 */}
                        <Card
                            icon={pillars[1].icon}
                            title={pillars[1].title}
                            description={pillars[1].description}
                            showButton={pillars[1].showButton}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* Algorithmic Trading - Left column, row 2 (below AI & Automation) */}
                            <Card
                                icon={pillars[2].icon}
                                title={pillars[2].title}
                                description={pillars[2].description}
                                showButton={pillars[2].showButton}
                            />

                            {/* Fintech & Banking - Right column, row 2 */}
                            <Card
                                icon={pillars[3].icon}
                                title={pillars[3].title}
                                description={pillars[3].description}
                                showButton={pillars[3].showButton}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

