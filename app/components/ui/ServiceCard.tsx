import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";

export interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    icon?: string;
    className?: string;
}

export default function ServiceCard({
    title,
    description,
    features,
    icon,
    className,
}: ServiceCardProps) {
    return (
        <div
            className={clsx(
                "rounded-lg border border-green-secondary/20 bg-dark-medium/50 p-6 md:p-8 flex flex-col space-y-4",
                "transition-all duration-300 hover:border-green-secondary hover:shadow-lg hover:shadow-green-secondary/20",
                className
            )}
        >
            {/* Icon */}
            {icon && (
                <div className="w-12 h-12 mb-2">
                    <Image
                        src={icon}
                        alt={title}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain text-green-bright"
                    />
                </div>
            )}

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
                        <Check className="w-4 h-4 text-green-secondary shrink-0 mt-1" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

