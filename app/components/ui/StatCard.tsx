import { LucideIcon } from "lucide-react";
import clsx from "clsx";

export interface StatCardProps {
    icon: LucideIcon;
    value: string;
    label: string;
    className?: string;
}

export default function StatCard({
    icon: Icon,
    value,
    label,
    className,
}: StatCardProps) {
    return (
        <div
            className={clsx(
                "rounded-xl border border-gray-800 bg-dark-medium/50 p-6 flex flex-col items-center justify-center space-y-4",
                "transition-all duration-300 hover:border-green-secondary/50",
                className
            )}
        >
            {/* Icon */}
            <Icon className="w-10 h-10 md:w-12 md:h-12 text-green-bright" />

            {/* Value */}
            <div className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold">
                {value}
            </div>

            {/* Label */}
            <p className="text-white-primary/70 text-sm md:text-base text-center">
                {label}
            </p>
        </div>
    );
}

