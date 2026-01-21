import React from "react";
import Image from "next/image";

interface BenefitCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function BenefitCard({
    icon,
    title,
    description,
}: BenefitCardProps) {
    return (
        <div className="bg-dark-medium/30 border border-white-primary/5 rounded-2xl p-6 flex items-start gap-6 hover:bg-dark-medium/50 hover:border-green-secondary/20 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white-primary/10">
                <Image
                    src={icon}
                    alt={title}
                    width={48}
                    height={48}
                    className="object-cover"
                />
            </div>
            <div>
                <h3 className="text-lg font-bold text-white-primary mb-2">{title}</h3>
                <p className="text-white-primary/60 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
