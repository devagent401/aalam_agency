import clsx from "clsx";
import Image from "next/image";

export interface ServiceDetailSectionProps {
    title: string;
    description: string;
    features: Array<{ icon: string; title: string; description: string }>;
    gradientType: "ai-bots" | "crypto" | "web-dev";
    illustrationIcon: string;
    className?: string;
}

export default function ServiceDetailSection({
    title,
    description,
    features,
    gradientType,
    illustrationIcon,
    className,
}: ServiceDetailSectionProps) {
    const gradientClass =
        gradientType === "ai-bots"
            ? "bg-ai-bots-gradient"
            : gradientType === "crypto"
                ? "bg-crypto-gradient"
                : "bg-web-dev-gradient";

    return (
        <section className={clsx("py-12 md:py-16 lg:py-20", gradientClass, className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Title */}
                        <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {title}
                        </h2>

                        {/* Description */}
                        <p className="text-white-primary/70 text-base md:text-lg leading-relaxed">
                            {description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-green-secondary/10 flex items-center justify-center">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-1">
                                        <h3 className="text-white-primary text-lg md:text-xl font-bold">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white-primary/60 text-sm md:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md aspect-square bg-dark-deep/50 rounded-2xl flex items-center justify-center border border-gray-800">
                            <Image
                                src={illustrationIcon}
                                alt={title}
                                width={200}
                                height={200}
                                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

