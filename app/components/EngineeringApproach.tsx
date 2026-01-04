import React from "react";
import EngineeringStepCard from "./ui/EngineeringStepCard";

const steps = [
    {
        stepNumber: "01",
        title: "Discovery & Architecture",
        description:
            "Deep-dive analysis of your infrastructure, requirements, and bottlenecks. We design system architecture with scalability in mind.",
        showArrow: true,
    },
    {
        stepNumber: "02",
        title: "Rapid Prototyping",
        description:
            "Build functional MVPs in weeks, not months. Validate core assumptions with real users and iterate based on feedback.",
        showArrow: true,
    },
    {
        stepNumber: "03",
        title: "Production Deployment",
        description:
            "Enterprise-grade deployment with CI/CD pipelines, monitoring, and automated testing. Zero-downtime releases.",
        showArrow: true,
    },
    {
        stepNumber: "04",
        title: "Optimization & Scale",
        description:
            "Continuous monitoring, performance tuning, and AI model refinement. We grow with your business demands.",
        showArrow: false,
    },
];

export default function EngineeringApproach() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
                    Our Engineering Approach
                </h2>

                {/* Subtitle */}
                <p className="text-white-primary text-base md:text-lg text-center opacity-90 max-w-3xl mx-auto mb-12 md:mb-16">
                    From concept to deployment, we follow a rigorous methodology that
                    ensures scalability, security, and performance.
                </p>

                {/* Steps - Horizontal Layout */}
                <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1">
                            <EngineeringStepCard
                                stepNumber={step.stepNumber}
                                title={step.title}
                                description={step.description}
                                showArrow={step.showArrow}
                                cardClassName="min-h-[300px] max-h-[300px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

