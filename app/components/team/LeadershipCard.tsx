import React from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import { Linkedin, Twitter, Github } from "lucide-react";

interface LeadershipCardProps {
    image: string;
    name: string;
    role: string;
    description: string;
    tags: string[];
    socials: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}

export default function LeadershipCard({
    image,
    name,
    role,
    description,
    tags,
    socials,
}: LeadershipCardProps) {
    return (
        <div className="bg-dark-medium border border-white-primary/5 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:border-green-secondary/20 transition-all duration-300 group">
            {/* Image Container */}
            <div className="relative w-full md:w-1/3 aspect-4/5 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                        <Badge variant="gradient" className="mb-2">FOUNDER & CEO</Badge>
                        <h3 className="text-2xl font-bold text-white-primary">{name}</h3>
                    </div>
                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {socials.linkedin && (
                            <a href={socials.linkedin} className="w-8 h-8 rounded-lg bg-dark-deep border border-white-primary/10 flex items-center justify-center text-white-primary/60 hover:text-green-secondary hover:border-green-secondary/50 transition-all">
                                <Linkedin size={16} />
                            </a>
                        )}
                        {socials.twitter && (
                            <a href={socials.twitter} className="w-8 h-8 rounded-lg bg-dark-deep border border-white-primary/10 flex items-center justify-center text-white-primary/60 hover:text-green-secondary hover:border-green-secondary/50 transition-all">
                                <Twitter size={16} />
                            </a>
                        )}
                        {socials.github && (
                            <a href={socials.github} className="w-8 h-8 rounded-lg bg-dark-deep border border-white-primary/10 flex items-center justify-center text-white-primary/60 hover:text-green-secondary hover:border-green-secondary/50 transition-all">
                                <Github size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-white-primary/60 text-sm md:text-base mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="filled">{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
