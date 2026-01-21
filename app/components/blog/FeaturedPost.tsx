import React from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import { ArrowRight } from "lucide-react";

interface FeaturedPostProps {
    image: string;
    title: string;
    description: string;
    category: string;
    date: string;
}

export default function FeaturedPost({
    image,
    title,
    description,
    category,
    date,
}: FeaturedPostProps) {
    return (
        <div className="bg-dark-medium border border-white-primary/5 rounded-3xl overflow-hidden hover:border-green-secondary/20 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                        <Badge variant="gradient">FEATURED</Badge>
                        <span className="text-white-primary/40 text-sm">{date}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-primary mb-6 leading-tight group-hover:text-green-bright transition-colors">
                        {title}
                    </h2>

                    <p className="text-white-primary/60 text-lg mb-8 leading-relaxed max-w-xl">
                        {description}
                    </p>

                    <button className="flex items-center gap-2 text-green-secondary font-bold hover:gap-4 transition-all w-fit group/btn">
                        Read Full Article
                        <div className="w-8 h-8 rounded-full border border-green-secondary flex items-center justify-center group-hover/btn:bg-green-secondary group-hover/btn:text-dark-deep transition-all">
                            <ArrowRight size={16} />
                        </div>
                    </button>
                </div>

                <div className="flex-1 relative aspect-video lg:aspect-auto min-h-[300px] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );
}
