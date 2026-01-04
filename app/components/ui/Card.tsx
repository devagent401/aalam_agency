import React from "react";
import Image from "next/image";

export interface CardProps {
    icon: string;
    title: string;
    description: string;
    showButton?: boolean;
    className?: string;
    info?: string[];
    imageClassName?: string;
    imageContainerClassName?: string;
}

export default function Card({
    icon,
    title,
    description,
    showButton = false,
    className = "",
    info = [],
    imageClassName = "",
    imageContainerClassName = "",
}: CardProps) {

    return (
        <div
            className={`bg-card-gradient rounded-lg p-6 md:p-8 overflow-hidden flex ${info.length > 0 ? "flex-row-reverse justify-between" : "flex-col"}  ${className}`}
        >
            {/* Icon with Gradient Glow Effect */}
            <div className={`relative flex items-center ${imageContainerClassName}`}>
                {/* <div className="absolute inset-0 bg-gradient-btn opacity-20 blur-xl rounded-full" /> */}
                <div className="relative z-10">
                    <Image
                        src={icon}
                        alt={title}
                        width={80}
                        height={80}
                        className={`object-contain filter drop-shadow-[0_0_10px_rgba(212,254,26,0.5)] ${imageClassName}`}
                    />
                </div>
            </div>

            <div className="space-y-4 md:space-y-6">
                {/* Title */}
                <h3 className="text-white-primary text-xl md:text-2xl font-bold">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-white-primary text-sm md:text-[18px] opacity-90 -leading-[0.43px]">
                    {description}
                </p>
                <div>
                    {info.length > 0 && info.map((item, index) => (
                        <p key={index} className="text-white-primary text-sm md:text-[18px] opacity-90 leading-relaxed flex items-center gap-2">
                            <Image src="/files/icons/list_icon.png" alt="check" width={16} height={16} />
                            {item}
                        </p>
                    ))}
                </div>
            </div>
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

