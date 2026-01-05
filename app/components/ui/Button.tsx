import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    children,
    className = "",

    ...props
}: ButtonProps) {
    const baseStyles =
        "px-4 py-2 md:px-6 md:py-3  font-medium transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center rounded-full";

    const variantStyles = {
        primary:
            "rounded-full text-dark-deep hover:opacity-90 active:scale-95",
        secondary:
            "bg-transparent text-white-primary text-base font-normal hover:opacity-80 active:scale-95",
    };

    if (variant === "secondary") {
        return (
            <button
                className={`border-gradient-btn inline-block rounded-full ${className}`.trim()}
                {...props}
            >
                <span
                    className={`block w-full h-full rounded-full ${variantStyles.secondary} transition-all duration-200 flex items-center justify-center px-4 py-2 md:px-6 md:py-3`}
                >
                    {children}
                </span>
            </button>
        );
    }

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}

