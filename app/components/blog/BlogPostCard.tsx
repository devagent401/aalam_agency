import React from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import { Clock } from "lucide-react";

interface BlogPostCardProps {
    image: string;
    category: string;
    date: string;
    readTime: string;
    title: string;
    description: string;
}

export default function BlogPostCard({
    image,
    category,
    date,
    readTime,
    title,
    description,
}: BlogPostCardProps) {
    return (
        <div className="bg-dark-medium border border-white-primary/5 rounded-2xl overflow-hidden hover:border-green-secondary/20 transition-all duration-300 group flex flex-col h-full">
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-[10px]">{category}</Badge>
                    <div className="flex items-center gap-2 text-white-primary/40 text-[10px]">
                        <span>{date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {readTime}
                        </span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white-primary mb-3 leading-tight group-hover:text-green-bright transition-colors line-clamp-2">
                    {title}
                </h3>

                <p className="text-white-primary/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto pt-4 border-t border-white-primary/5 group-hover:border-green-secondary/20 transition-colors">
                    <button className="text-green-secondary text-xs font-bold hover:underline">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
