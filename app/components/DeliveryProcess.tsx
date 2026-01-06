import EngineeringStepCard from "./ui/EngineeringStepCard";

const processSteps = [
    {
        stepNumber: "01",
        title: "Discovery",
        description: "Deep dive into your requirements, challenges, and objectives to design the perfect solution.",
    },
    {
        stepNumber: "02",
        title: "Architecture",
        description: "Design scalable system architecture with security, performance, and maintainability in mind.",
    },
    {
        stepNumber: "03",
        title: "Development",
        description: "Agile development with weekly sprints, continuous testing, and regular client feedback.",
    },
    {
        stepNumber: "04",
        title: "Deployment",
        description: "Continuous monitoring, performance tuning, and AI model refinement. We grow with your business demands.",
    },
];

export default function DeliveryProcess() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-medium border border-green-secondary/20">
                        <span className="w-2 h-2 bg-green-secondary rounded-full"></span>
                        <span className="text-green-secondary text-sm md:text-base font-medium">
                            HOW WE WORK
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
                    Our Delivery <span className="text-green-bright">Process</span>
                </h2>

                {/* Description */}
                <p className="text-white-primary/70 text-base md:text-lg text-center max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
                    A proven methodology that ensures quality, speed, and alignment with
                    your business goals.
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {processSteps.map((step, index) => (
                        <EngineeringStepCard
                            key={index}
                            stepNumber={step.stepNumber}
                            title={step.title}
                            description={step.description}
                            showArrow={index < processSteps.length - 1}
                            cardClassName="min-h-[250px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

