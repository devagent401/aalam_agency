"use client";

import React, { useState } from "react";
import {
    Bot,
    Link as LinkIcon,
    Zap,
    Code2,
    Flame,
    Globe,
    Atom,
    Terminal,
    Palette,
    Activity,
    Cpu,
    FileJson,
    Box,
    Database,
    Layers,
    TreePine,
    Cloud,
    CheckCircle,
    Eye,
    MousePointer,
    PenTool,
    Layout,
    Image as ImageIcon,
    Bug,
    Search,
    BarChart,
    ArrowUpRight,
    Container,
    Network
} from "lucide-react";
import { cn } from "@/lib/utils";

type TechItem = {
    name: string;
    icon: React.ElementType;
};

const technologyData: Record<string, TechItem[]> = {
    AI: [
        { name: "Chat GPT", icon: Bot },
        { name: "Lang Chain", icon: LinkIcon },
        { name: "Llama Index", icon: Zap },
        { name: "Prompt Engineering", icon: Code2 },
        { name: "Firebase Genkit", icon: Flame },
    ],
    Frontend: [
        { name: "Next.js", icon: Globe },
        { name: "React", icon: Atom },
        { name: "TypeScript", icon: Terminal },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Motion", icon: Activity },
    ],
    Backend: [
        { name: "Node.js", icon: Cpu },
        { name: "Python", icon: FileJson },
        { name: "Go", icon: Box },
        { name: "PostgreSQL", icon: Database },
        { name: "Redis", icon: Layers },
    ],
    Databases: [
        { name: "MongoDB", icon: Database },
        { name: "Pinecone", icon: TreePine },
        { name: "Supabase", icon: Cloud },
        { name: "Firebase", icon: Flame },
    ],
    QA: [
        { name: "Jest", icon: CheckCircle },
        { name: "Cypress", icon: Eye },
        { name: "Playwright", icon: MousePointer },
    ],
    Design: [
        { name: "Figma", icon: PenTool },
        { name: "Adobe XD", icon: Layout },
        { name: "Canva", icon: ImageIcon },
    ],
    "Monitoring tools": [
        { name: "Sentry", icon: Bug },
        { name: "Datadog", icon: Search },
        { name: "New Relic", icon: BarChart },
    ],
    Deployment: [
        { name: "Vercel", icon: ArrowUpRight },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Network },
    ],
    "Cloud Services": [
        { name: "AWS", icon: Cloud },
        { name: "GCP", icon: Cloud },
        { name: "Azure", icon: Cloud },
    ],
};

const categories = Object.keys(technologyData);

export default function TechnologyEcosystem() {
    const [activeCategory, setActiveCategory] = useState("AI");

    return (
        <section className="py-20 bg-dark-deep text-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="bg-linear-to-r from-green-secondary to-green-bright bg-clip-text text-transparent">
                            Technologies
                        </span>{" "}
                        We Use
                    </h2>
                    <p className="max-w-5xl mx-auto text-gray-400 text-lg leading-relaxed">
                        Our development and design teams bring the best blend of industry
                        experience and update knowledge to the table. Focus on finding solutions
                        for your business needs while we handle the technical aspect, end-to-end.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center gap-2 md:gap-8 border-b border-gray-800 pb-px overflow-x-auto no-scrollbar w-full sm:w-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "relative py-4 text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap px-2 cursor-pointer",
                                    activeCategory === category
                                        ? "text-green-secondary"
                                        : "text-gray-400 hover:text-white"
                                )}
                            >
                                {category}
                                {activeCategory === category && (
                                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-secondary rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {technologyData[activeCategory].map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={tech.name}
                                className="group relative bg-[#111111] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-green-secondary/50 hover:bg-[#161616] hover:-translate-y-1 cursor-default"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 group-hover:bg-green-secondary/10 transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-green-secondary transition-colors duration-300" />
                                </div>
                                <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white text-center">
                                    {tech.name}
                                </span>

                                {/* Subtle highlight effect */}
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-green-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
