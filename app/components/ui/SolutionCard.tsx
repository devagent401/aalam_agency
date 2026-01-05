import clsx from "clsx";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export interface SolutionCardProps {
    icon: string;
    title: string;
    description: string;
    variant?: "normal" | "featured";
    className?: string;
}

export default function SolutionCard({
    icon,
    title,
    description,
    variant = "normal",
    className,
}: SolutionCardProps) {
    const isFeatured = variant === "featured";

    return (
        <div
            className={clsx(
                "group relative overflow-hidden rounded-lg p-6 md:p-8 flex flex-col space-y-6",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-7 hover:shadow-2xl",
                "hover:bg-green-bright hover:text-dark-deep",
                "bg-dark-medium text-white-primary",
                className
            )}
        >
            {/* Icon Container */}
            <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-green-secondary text-dark-deep group-hover:bg-dark-deep group-hover:text-white-primary"
            >
                <Image
                    src={icon}
                    alt={title}
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold">
                {title}
            </h3>

            {/* Description */}
            <p
                className={clsx(
                    "text-sm md:text-base leading-relaxed flex-1",
                    isFeatured ? "opacity-90" : "opacity-80"
                )}
            >
                {description}
            </p>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-sm md:text-base font-medium group cursor-pointer">
                <span className="group-hover:underline">Read More</span>
                <MoveRight />
            </div>
        </div>
    );
}

