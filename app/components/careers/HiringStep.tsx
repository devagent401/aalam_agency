import React from "react";

interface HiringStepProps {
    number: number;
    title: string;
    description: string;
    isLast?: boolean;
}

export default function HiringStep({
    number,
    title,
    description,
    isLast,
}: HiringStepProps) {
    return (
        <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-secondary flex items-center justify-center text-dark-deep font-bold text-lg shrink-0 z-10">
                    {number}
                </div>
                {!isLast && (
                    <div className="w-[2px] h-full bg-linear-to-b from-green-secondary to-transparent min-h-[60px]" />
                )}
            </div>
            <div className="bg-dark-medium/30 border border-white-primary/5 rounded-2xl p-6 md:p-8 flex-1 mb-8 hover:bg-dark-medium/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white-primary mb-3">{title}</h3>
                <p className="text-white-primary/60 text-sm md:text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
