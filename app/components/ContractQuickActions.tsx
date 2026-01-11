import React from "react";
import { Phone, FolderOpen, FileText, BookOpen, MoveRight } from "lucide-react";

// Quick Actions Component
const ContractQuickActions = () => {
    const actions = [
        {
            icon: <Phone className="w-8 h-8 text-green-secondary" />,
            title: "Book a Call",
            description: "Schedule a free 30-minute consultation with our team",
            actionText: "Schedule Now",
            link: "#"
        },
        {
            icon: <FolderOpen className="w-8 h-8 text-green-secondary" />,
            title: "View Portfolio",
            description: "Explore our past projects and case studies",
            actionText: "See Our Work",
            link: "#"
        },
        {
            icon: <FileText className="w-8 h-8 text-green-secondary" />,
            title: "Get a Quote",
            description: "Receive a detailed proposal for your project",
            actionText: "Request Quote",
            link: "#"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-green-secondary" />,
            title: "Resources",
            description: "Access our blog, guides, and documentation",
            actionText: "Learn More",
            link: "#"
        }
    ];

    return (
        <section className="width-full relative z-10 py-16 md:py-24 bg-dark-deep text-white-primary overflow-hidden">

            {/* Background map decoration (simplified representation) */}
            <div className="absolute inset-x-0 bottom-0 h-[600px] opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent"></div>
                {/* In a real scenario, we might use an SVG map image here */}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-bright"></span>
                        <span className="text-sm font-medium text-white/80 uppercase tracking-wider">How We Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Quick <span className="text-green-bright">Actions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Choose the best way to connect with us</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {actions.map((action, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-dark-medium/50 border border-white/5 hover:border-green-secondary/50 transition-all duration-300 flex flex-col items-center text-center hover:bg-dark-medium"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-green-secondary/5 group-hover:bg-green-secondary/10 transition-colors">
                                {action.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                {action.description}
                            </p>
                            <a
                                href={action.link}
                                className="mt-auto inline-flex items-center gap-2 text-green-secondary font-semibold text-sm hover:text-green-bright transition-colors"
                            >
                                {action.actionText}
                                <MoveRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Get in Touch Now for
                        <br />
                        <span className="text-green-bright">Business</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">Projects collaborations and queries.</p>

                    <div className="space-y-2">
                        <a href="mailto:hello@aalamagency.com" className="block text-2xl md:text-3xl hover:text-green-bright transition-colors">
                            hello@aalamagency.com
                        </a>
                        <a href="tel:+447777695731" className="block text-2xl md:text-3xl hover:text-green-bright transition-colors">
                            +44 7777 695731
                        </a>
                    </div>

                    {/* Location Pin Illustration - Approximate visual placement */}
                    <div className="mt-12 flex justify-center">
                        <div className="relative">
                            <div className="w-8 h-8 rounded-full bg-green-bright/20 animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-16 h-16 rounded-full bg-green-bright/10 animate-ping animation-delay-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                            {/* Simple map pin via SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="#00FF94"
                                stroke="#111"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="relative z-10"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" fill="#111" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContractQuickActions;
