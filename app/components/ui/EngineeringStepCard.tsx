import React from "react";
import Image from "next/image";
import clsx from "clsx";

export interface EngineeringStepCardProps {
    stepNumber: string;
    title: string;
    description: string;
    showArrow?: boolean;
    className?: string;
    cardClassName?: string;
}

export default function EngineeringStepCard({
    stepNumber,
    title,
    description,
    showArrow = false,
    className,
    cardClassName,
}: EngineeringStepCardProps) {
    return (
        <div className={clsx("relative flex items-center w-62", className)}>
            {/* Step Card */}
            <div className={clsx("relative  rounded-2xl p-6 border border-green-secondary flex flex-col space-y-2 md:space-y-3 xl:space-y-6", cardClassName)}>
                <div className="text-green-secondary text-base md:text-lg xl:text-xl font-light">
                    {stepNumber}
                </div>
                <h3 className="text-white-primary text-xl md:text-2xl font-bold">
                    {title}
                </h3>
                <p className="text-white-primary text-sm md:text-[15px] font-light opacity-90 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Arrow - Right Side */}
            {showArrow && (
                <div className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10">
                    <Image
                        src="/files/icons/Arrow.png"
                        alt="Arrow"
                        width={24}
                        height={24}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                </div>
            )}
        </div>
    );
}

