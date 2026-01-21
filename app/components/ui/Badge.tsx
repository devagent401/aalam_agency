import React from "react";
import clsx from "clsx";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "outline" | "filled" | "gradient";
}

export default function Badge({
    children,
    className,
    variant = "outline",
}: BadgeProps) {
    const variants = {
        outline: "border border-green-secondary/30 text-green-secondary bg-transparent",
        filled: "bg-green-secondary/10 text-green-secondary border-none",
        gradient: "bg-gradient-btn text-dark-deep border-none font-bold",
    };

    return (
        <span
            className={clsx(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
