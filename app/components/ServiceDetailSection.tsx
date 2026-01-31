import clsx from "clsx";
import Image from "next/image";

export interface ServiceDetailSectionProps {
    title: string;
    description: string;
    features: Array<{ icon: string; title: string; description: string }>;
    gradientType: "ai-bots" | "crypto" | "web-dev" | "ai-automation";
    illustrationPath: string;
    className?: string;
}

export default function ServiceDetailSection({
    title,
    description,
    features,
    gradientType,
    illustrationPath,
    className,
}: ServiceDetailSectionProps) {
    const gradientClass =
        gradientType === "ai-bots"
            ? "bg-ai-bots-gradient"
            : gradientType === "crypto"
                ? "bg-crypto-gradient"
                : gradientType === "web-dev"
                    ? "bg-web-dev-gradient"
                    : "bg-finance-gradient"; // Default or automation

    return (
        <section className={clsx("py-12 md:py-20 lg:py-28 overflow-hidden", gradientClass, className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6 md:space-y-10">
                        <h2 className="text-white-primary text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            {title}
                        </h2>
                        <p className="text-white-primary/70 text-lg md:text-xl leading-relaxed">
                            {description}
                        </p>
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-5 group">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-green-secondary/50 group-hover:bg-green-secondary/5">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            width={32}
                                            height={32}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-white-primary text-xl md:text-2xl font-bold">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white-primary/60 text-sm md:text-lg leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="relative bg-dark-deep/50">
                        {/* Background Glow */}
                        <div className="absolute -inset-10 bg-green-secondary/20 blur-[100px] opacity-50 rounded-2xl overflow-hidden" />

                        <div className="relative w-full aspect-square flex items-center justify-center">
                            <Image
                                src={illustrationPath}
                                alt={title}
                                width={600}
                                height={600}
                                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(5,202,60,0.3)] animate-pulse-slow p-14"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const pulseSlow = {
    animation: "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
};

