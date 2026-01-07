import { ChevronRight } from 'lucide-react';
import Button from "./ui/Button";
import SolutionCard from "./ui/SolutionCard";

const solutions = [
    {
        icon: "/files/icons/ue.png",
        title: "Unified Ecosystems",
        description:
            "Whether you need speed or top-tier quality, choose from multiple AI modes tailored to your specific needs.",
        variant: "normal" as const,
    },
    {
        icon: "/files/icons/zt.png",
        title: "Zero-Touch Execution",
        description:
            "Skip the complex typing—just select a style, pick a color angle, or use ready-made presets in seconds.",
        variant: "featured" as const,
    },
    {
        icon: "/files/icons/fc.png",
        title: "Flawless Consistency",
        description:
            "From faces to hands to text, every detail is sharp and accurate—no retouching or upscaling required.",
        variant: "normal" as const,
    },
    {
        icon: "/files/icons/is.png",
        title: "Infinite Scalability",
        description:
            "Train your AI model using your business data, and let custom AI chatbot handle delivery—efficient and scalable.",
        variant: "normal" as const,
    },
];

export default function SolutionsOverview() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Badge */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-medium border border-green-secondary/20">
                        <span className="w-2 h-2 bg-green-secondary rounded-full"></span>
                        <span className="text-green-secondary text-sm md:text-base font-medium">
                            Custom AI Workflows That Drive Real Revenue
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-white-primary text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 max-w-5xl mx-auto leading-tight">
                    Systematize your success and scale operations without the overhead.
                </h2>

                {/* Description */}
                <p className="text-white-primary text-base md:text-lg text-center opacity-90 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
                    We don't just write prompts; we build entire ecosystems. From intelligent
                    support bots to backend automation, we reclaim your time so you can focus on
                    high-level strategy. Secure, reliable, and tailored to your business.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
                    <Button variant="secondary">
                        <p className="flex items-center gap-2">
                            <span>Get Started</span>
                            <ChevronRight />
                        </p>
                    </Button>
                    <Button variant="primary" className="border text-white-primary ">
                        How it Works
                    </Button>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            icon={solution.icon}
                            title={solution.title}
                            description={solution.description}
                            variant={solution.variant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

