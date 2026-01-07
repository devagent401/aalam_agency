import React from "react";

interface TechnologyCategory {
    title: string;
    technologies: string[];
}

const categories: TechnologyCategory[] = [
    {
        title: "AI & Machine Learning",
        technologies: [
            "LangChain",
            "TensorFlow",
            "PyTorch",
            "Hugging Face",
            "Vector DBs",
        ],
    },
    {
        title: "Blockchain & Web3",
        technologies: [
            "Ethereum",
            "Solidity",
            "Polygon",
            "Hardhat",
            "IPFS",
            "Web3.js",
        ],
    },
    {
        title: "Backend & Infrastructure",
        technologies: [
            "Node.js",
            "Python",
            "Kubernetes",
            "AWS",
            "PostgreSQL",
            "Redis",
        ],
    },
    {
        title: "Trading & Finance",
        technologies: [
            "CCXT",
            "QuantConnect",
            "Backtrader",
            "WebSocket APIs",
            "FIX Protocol",
        ],
    },
];

export default function TechnologyEcosystem() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-dark-deep text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-center mb-4 md:mb-6 uppercase tracking-wide">
                    Technology Ecosystem
                </h2>

                {/* Subtitle */}
                <p className="text-dark-deep text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    We leverage cutting-edge tools and frameworks to build future-proof
                    solutions.
                </p>

                {/* Technology Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Category Title */}
                            <h3 className="text-dark-deep text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                                {category.title}
                            </h3>

                            {/* Technology Pills */}
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm md:text-base font-medium rounded-md hover:bg-green-200 transition-colors duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

