import ServiceCard from "./ui/ServiceCard";

const services = [
    {
        title: "AI Bots & Agents",
        description: "Intelligent automation systems that work 24/7 to handle customer service, data processing, and complex workflows.",
        features: [
            "Custom LLM Chatbots",
            "Multi-Agent Systems",
            "Workflow Automation",
            "Voice AI Integration",
        ],
    },
    {
        title: "Crypto & Trading",
        description: "High-frequency trading bots, arbitrage engines, and blockchain solutions for maximum profit optimization.",
        features: [
            "HFT Trading Bots",
            "Arbitrage Systems",
            "Smart Contract Dev",
            "DeFi Protocols",
        ],
    },
    {
        title: "Web & App Development",
        description: "Modern, scalable web and mobile applications built with cutting-edge frameworks and best practices.",
        features: [
            "Full-Stack Development",
            "Mobile Apps (iOS/Android)",
            "Progressive Web Apps",
            "API Integration",
        ],
    },
    {
        title: "AI Bots & Agents",
        description: "Intelligent automation systems that work 24/7 to handle customer service, data processing, and complex workflows.",
        features: [
            "Custom LLM Chatbots",
            "Multi-Agent Systems",
            "Workflow Automation",
            "Voice AI Integration",
        ],
    },
    {
        title: "Crypto & Trading",
        description: "High-frequency trading bots, arbitrage engines, and blockchain solutions for maximum profit optimization.",
        features: [
            "HFT Trading Bots",
            "Arbitrage Systems",
            "Smart Contract Dev",
            "DeFi Protocols",
        ],
    },
    {
        title: "Web & App Development",
        description: "Modern, scalable web and mobile applications built with cutting-edge frameworks and best practices.",
        features: [
            "Full-Stack Development",
            "Mobile Apps (iOS/Android)",
            "Progressive Web Apps",
            "API Integration",
        ],
    },
];

export default function SolutionsHero() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-medium border border-green-secondary/20">
                        <span className="w-2 h-2 bg-green-secondary rounded-full"></span>
                        <span className="text-green-secondary text-sm md:text-base font-medium">
                            OUR SERVICES
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-white-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 md:mb-8 leading-tight">
                    AI-Powered Solutions for{" "}
                    <span className="text-green-bright">Modern Businesses</span>
                </h1>

                {/* Description */}
                <p className="text-white-primary/70 text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
                    From intelligent automation to blockchain innovation, we deliver
                    cutting-edge technology that transforms operations and drives
                    exponential growth.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

