import React from "react";
import Image from "next/image";

interface MemberCardProps {
    image: string;
    name: string;
    role: string;
    description: string;
}

export default function MemberCard({
    image,
    name,
    role,
    description,
}: MemberCardProps) {
    return (
        <div className="bg-dark-medium border border-white-primary/5 rounded-2xl p-4 md:p-5 flex flex-col gap-4 hover:border-green-secondary/20 transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-lg font-bold text-white-primary mb-1">{name}</h3>
                <p className="text-green-secondary text-xs font-medium mb-3">{role}</p>
                <p className="text-white-primary/60 text-xs leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}
