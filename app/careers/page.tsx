import React from "react";
import CareersHero from "../components/careers/CareersHero";
import JobCard from "../components/careers/JobCard";
import HiringStep from "../components/careers/HiringStep";
import CoreValueCard from "../components/team/CoreValueCard"; // Reused for Quick Actions
import { Briefcase, MapPin, Zap, Globe, Heart, Rocket } from "lucide-react";

const STATS = [
    { label: "Team Members", value: "50+" },
    { label: "Places", value: "15" },
    { label: "Open Positions", value: "12" },
];

const JOBS = [
    {
        title: "Senior Full-Stack Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-Time",
        experience: "5+ years",
        description: "Build scalable AI-powered applications using React, Node.js, and Python. Work on cutting-edge infra that serves millions of requests per day.",
        skills: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
        salary: "$140K - $180K",
        isNew: true,
    },
    {
        title: "Senior Full-Stack Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-Time",
        experience: "5+ years",
        description: "Build scalable AI-powered applications using React, Node.js, and Python. Work on cutting-edge infra that serves millions of requests per day.",
        skills: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
        salary: "$140K - $180K",
        isNew: true,
    },
    {
        title: "Senior Full-Stack Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-Time",
        experience: "5+ years",
        description: "Build scalable AI-powered applications using React, Node.js, and Python. Work on cutting-edge infra that serves millions of requests per day.",
        skills: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
        salary: "$140K - $180K",
        isNew: true,
    }
];

const HIRING_PROCESS = [
    {
        title: "Application",
        description: "Submit your resume and tell us why you're interested. We review every application carefully and respond within 2 business days.",
    },
    {
        title: "Recruiter Call",
        description: "30-minute conversation to learn about your background, discuss the role, and answer your questions about Aalam.",
    },
    {
        title: "Technical Interview",
        description: "For technical roles, coding challenge or system design discussion. For non-technical roles, case study or portfolio review.",
    },
    {
        title: "Team Interviews",
        description: "Meet with 2-3 team members to discuss your experience, problem-solving approach, and how you work with others.",
    },
    {
        title: "Offer & Onboarding",
        description: "If it's a mutual fit, we'll extend an offer within 24 hours. Onboarding starts with meeting the team and setting you up for success.",
    },
];

export default function CareersPage() {
    return (
        <div className="bg-dark-deep pb-20">
            <CareersHero />

            {/* Stats Section */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        {STATS.map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-white-primary text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
                                <p className="text-white-primary/60 text-sm md:text-base uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Actions / Values */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white-primary mb-4">
                            Quick <span className="text-gradient-green">Actions</span>
                        </h2>
                        <p className="text-white-primary/60 max-w-2xl mx-auto">
                            Choose the best way to connect with us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CoreValueCard icon={Briefcase} title="Cutting-Edge Work" description="Work on real-world AI problems that push the boundaries of what's possible." />
                        <CoreValueCard icon={MapPin} title="Remote-First" description="Work from anywhere. We value results over time spent in an office." />
                        <CoreValueCard icon={Zap} title="Continuous Learning" description="We invest in your growth with a generous learning budget and time for research." />
                        <CoreValueCard icon={Globe} title="Competitive Pay" description="We offer top-tier compensation and equity packages for all roles." />
                        <CoreValueCard icon={Heart} title="Amazing Team" description="Join a group of kind, brilliant people who are passionate about their work." />
                        <CoreValueCard icon={Rocket} title="Fast Growth" description="We're growing quickly and want you to grow with us as we scale." />
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 px-6 bg-dark-deep/50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white-primary mb-4">
                            Open <span className="text-gradient-green">Positions</span>
                        </h2>
                        <p className="text-white-primary/60 mb-8">Find your next role</p>

                        <div className="flex flex-wrap justify-center gap-3">
                            {["All Roles", "Engineering", "AI Research", "Design", "Product", "Sales"].map((cat) => (
                                <button key={cat} className="px-6 py-2 rounded-full border border-white-primary/10 text-white-primary/60 hover:border-green-secondary hover:text-green-secondary transition-all text-sm font-medium">
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                        {JOBS.map((job, i) => (
                            <JobCard key={i} {...job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white-primary mb-4">
                            Our <span className="text-gradient-green">Hiring Process</span>
                        </h2>
                        <p className="text-white-primary/60">What to expect when you apply</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {HIRING_PROCESS.map((step, i) => (
                            <HiringStep
                                key={i}
                                number={i + 1}
                                {...step}
                                isLast={i === HIRING_PROCESS.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
