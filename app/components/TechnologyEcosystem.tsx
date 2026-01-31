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
import Image from "next/image";

type TechItem = {
    name: string;
    icon: React.ReactNode;
};

const technologyData: Record<string, TechItem[]> = {
    AI: [
        { name: "Chat GPT", icon: <Image src="/files/technology/1.png" alt="Chat GPT" width={24} height={24} /> },
        { name: "Lang Chain", icon: <Image src="/files/technology/2.png" alt="Lang Chain" width={24} height={24} /> },
        { name: "Llama Index", icon: <Image src="/files/technology/3.png" alt="Llama Index" width={24} height={24} /> },
        { name: "Prompt Engineering", icon: <Image src="/files/technology/4.png" alt="Prompt Engineering" width={24} height={24} /> },
        { name: "Firebase Genkit", icon: <Image src="/files/technology/5.png" alt="Firebase Genkit" width={24} height={24} /> },
    ],
    Frontend: [
        { name: "Next.js", icon: <Image src="/files/technology/next.png" alt="Next.js" width={24} height={24} /> },
        { name: "React", icon: <Image src="/files/technology/react.png" alt="React" width={24} height={24} /> },
        { name: "TypeScript", icon: <Image src="/files/technology/8.png" alt="TypeScript" width={24} height={24} /> },
        { name: "Tailwind CSS", icon: <Image src="/files/technology/9.png" alt="Tailwind CSS" width={24} height={24} /> },
        { name: "Motion", icon: <Image src="/files/technology/10.png" alt="Motion" width={24} height={24} /> },
    ],
    Backend: [
        { name: "Node.js", icon: <Image src="/files/technology/nodejs.svg" alt="Node.js" width={24} height={24} /> },
        { name: "Python", icon: <Image src="/files/technology/python.svg" alt="Python" width={24} height={24} /> },
        { name: "Go", icon: <Image src="/files/technology/go.svg" alt="Go" width={24} height={24} /> },
        { name: "PostgreSQL", icon: <Image src="/files/technology/postgresql.svg" alt="PostgreSQL" width={24} height={24} /> },
        { name: "Redis", icon: <Image src="/files/technology/redis.svg" alt="Redis" width={24} height={24} /> },
    ],
    Databases: [
        { name: "MongoDB", icon: <Image src="/files/technology/mongodb.svg" alt="MongoDB" width={24} height={24} /> },
        { name: "Pinecone", icon: <Image src="/files/technology/pinecone.png" alt="Pinecone" width={24} height={24} /> },
        { name: "Supabase", icon: <Image src="/files/technology/supabase.svg" alt="Supabase" width={24} height={24} /> },
        { name: "Firebase", icon: <Image src="/files/technology/firebase.svg" alt="Firebase" width={24} height={24} /> },
    ],
    QA: [
        { name: "Jest", icon: <Image src="/files/technology/jest.svg" alt="Jest" width={24} height={24} /> },
        { name: "Cypress", icon: <Image src="/files/technology/cypress.svg" alt="Cypress" width={24} height={24} /> },
        { name: "Playwright", icon: <Image src="/files/technology/playwright.svg" alt="Playwright" width={24} height={24} /> },
    ],
    Design: [
        { name: "Figma", icon: <Image src="/files/technology/figma.svg" alt="Figma" width={24} height={24} /> },
        { name: "Adobe XD", icon: <Image src="/files/technology/adobexd.svg" alt="Adobe XD" width={24} height={24} /> },
        { name: "Canva", icon: <Image src="/files/technology/canva.svg" alt="Canva" width={24} height={24} /> },
    ],
    "Monitoring tools": [
        { name: "Sentry", icon: <Image src="/files/technology/sentry.svg" alt="Sentry" width={24} height={24} /> },
        { name: "Datadog", icon: <Image src="/files/technology/datadog.svg" alt="Datadog" width={24} height={24} /> },
        { name: "New Relic", icon: <Image src="/files/technology/newrelic.svg" alt="New Relic" width={24} height={24} /> },
    ],
    Deployment: [
        { name: "Vercel", icon: <Image src="/files/technology/vercel.svg" alt="Vercel" width={24} height={24} /> },
        { name: "Docker", icon: <Image src="/files/technology/docker.svg" alt="Docker" width={24} height={24} /> },
        { name: "Kubernetes", icon: <Image src="/files/technology/kubernetes.svg" alt="Kubernetes" width={24} height={24} /> },
    ],
    "Cloud Services": [
        { name: "AWS", icon: <Image src="/files/technology/aws.svg" alt="AWS" width={24} height={24} /> },
        { name: "GCP", icon: <Image src="/files/technology/gcp.svg" alt="GCP" width={24} height={24} /> },
        { name: "Azure", icon: <Image src="/files/technology/azure.svg" alt="Azure" width={24} height={24} /> },
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
                                    {tech.icon}
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
