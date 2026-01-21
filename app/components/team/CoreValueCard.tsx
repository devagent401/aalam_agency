import React from "react";
import { LucideIcon } from "lucide-react";

interface CoreValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function CoreValueCard({
    icon: Icon,
    title,
    description,
}: CoreValueCardProps) {
    return (
        <div className="bg-dark-medium/30 border border-white-primary/5 rounded-2xl p-8 hover:bg-dark-medium/50 hover:border-green-secondary/20 transition-all duration-300 group text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-dark-deep border border-green-secondary/20 flex items-center justify-center text-green-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-white-primary mb-4">{title}</h3>
            <p className="text-white-primary/60 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
