import React from "react";
import Image from "next/image";

export interface CardProps {
    icon: string;
    title: string;
    description: string;
    showButton?: boolean;
    className?: string;
}

export default function Card({
    icon,
    title,
    description,
    showButton = false,
    className = "",
}: CardProps) {
    return (
        <div
            className={`bg-card-gradient rounded-lg p-6 md:p-8 flex flex-col space-y-4 md:space-y-6 ${className}`}
        >
            {/* Icon with Gradient Glow Effect */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-btn opacity-20 blur-xl rounded-full" />
                <div className="relative z-10">
                    <Image
                        src={icon}
                        alt={title}
                        width={80}
                        height={80}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain filter drop-shadow-[0_0_10px_rgba(212,254,26,0.5)]"
                    />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-white-primary text-xl md:text-2xl font-bold">
                {title}
            </h3>

            {/* Description */}
            <p className="text-white-primary text-sm md:text-base opacity-90 leading-relaxed">
                {description}
            </p>

            {/* Gradient Button/Accent */}
            {showButton && (
                <div className="pt-4 mt-auto">
                    <div
                        className="h-12 w-full rounded-lg flex items-center justify-center"
                        style={{
                            background: "linear-gradient(270deg, #D4FE1A 0%, #39EEBE 100%)"
                        }}
                    >
                    </div>
                </div>
            )}
        </div>
    );
}

