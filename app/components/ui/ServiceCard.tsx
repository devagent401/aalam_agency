import clsx from "clsx";
import { Check } from "lucide-react";

export interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    className?: string;
}

export default function ServiceCard({
    title,
    description,
    features,
    className,
}: ServiceCardProps) {
    return (
        <div
            className={clsx(
                "rounded-lg border-2 border-green-secondary/30 bg-dark-medium p-6 md:p-8 flex flex-col space-y-4",
                "transition-all duration-300 hover:border-green-secondary hover:shadow-lg hover:shadow-green-secondary/20",
                className
            )}
        >
            {/* Title */}
            <h3 className="text-white-primary text-xl md:text-2xl font-bold">
                {title}
            </h3>

            {/* Description */}
            <p className="text-white-primary/70 text-sm md:text-base leading-relaxed">
                {description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 pt-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-white-primary/80 text-sm md:text-base">
                        <Check className="w-5 h-5 text-green-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

