import { Check } from "lucide-react";

const withoutAI = [
    "Manual data entry and processing",
    "Slow customer response times",
    "High operational costs",
    "Human errors and inconsistencies",
    "Limited scalability",
    "Reactive decision making",
];

const withAI = [
    "Automated workflows and processing",
    "Instant, 24/7 customer support",
    "73% reduction in costs",
    "99.9% accuracy and consistency",
    "Infinite scalability",
    "Predictive analytics and insights",
];

export default function BeforeAfterComparison() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Container Card */}
                <div className="rounded-3xl border border-gray-800 bg-dark-medium/30 p-8 md:p-12 lg:p-16">
                    {/* Title */}
                    <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
                        Before vs After AI Implementation
                    </h2>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* Without AI - Red/Dark Card */}
                        <div className="rounded-2xl bg-gradient-to-br from-red-950/50 to-red-900/30 border border-red-900/50 p-6 md:p-8">
                            <h3 className="text-red-400 text-xl md:text-2xl font-bold mb-6">
                                Without AI
                            </h3>
                            <ul className="space-y-4">
                                {withoutAI.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span className="text-white-primary/80 text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* With AI - Green Card */}
                        <div className="rounded-2xl bg-gradient-to-br from-green-950/50 to-green-900/30 border border-green-900/50 p-6 md:p-8">
                            <h3 className="text-green-bright text-xl md:text-2xl font-bold mb-6">
                                With AI
                            </h3>
                            <ul className="space-y-4">
                                {withAI.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-bright shrink-0 mt-0.5" />
                                        <span className="text-white-primary/80 text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

