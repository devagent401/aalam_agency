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
        "px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center";

    const variantStyles = {
        primary:
            "bg-gradient-btn text-dark-deep hover:opacity-90 active:scale-95",
        secondary:
            "bg-transparent text-white-primary hover:opacity-80 active:scale-95 relative",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    if (variant === "secondary") {
        return (
            <button
                className={`${baseStyles} ${className}`.trim()}
                style={{
                    background: "linear-gradient(270deg, #D4FE1A 0%, #39EEBE 100%)",
                    padding: "1px",
                }}
                {...props}
            >
                <span
                    className="block w-full h-full bg-transparent rounded-lg text-white-primary hover:opacity-80 active:scale-95 transition-all duration-200 flex items-center justify-center"
                >
                    {children}
                </span>
            </button>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}

