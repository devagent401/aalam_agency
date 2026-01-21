import React from "react";

interface SectionHeaderProps {
    pillText: string;
    title: string;
    description?: string;
    align?: "center" | "left";
    titleHighlight?: string;
    titleSuffix?: string;
}

export default function SectionHeader({
    pillText,
    title,
    description,
    align = "center",
    titleHighlight,
    titleSuffix,
}: SectionHeaderProps) {
    const isCenter = align === "center";

    return (
        <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} mb-12`}>
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-secondary/30 bg-green-secondary/5 text-green-secondary text-xs font-semibold mb-6 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-green-secondary animate-pulse" />
                {pillText.toUpperCase()}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white-primary max-w-4xl leading-tight">
                {title}{" "}
                {titleHighlight && (
                    <span className="text-gradient-green">{titleHighlight}</span>
                )}
                {titleSuffix}
            </h2>

            {/* Description */}
            {description && (
                <p className="mt-6 text-sm md:text-lg text-white-primary/60 max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
