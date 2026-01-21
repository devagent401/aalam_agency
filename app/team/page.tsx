import React from "react";
import TeamHero from "../components/team/TeamHero";
import LeadershipCard from "../components/team/LeadershipCard";
import MemberCard from "../components/team/MemberCard";
import CoreValueCard from "../components/team/CoreValueCard";
import BenefitCard from "../components/team/BenefitCard";
import SectionHeader from "../components/ui/SectionHeader";
import { Rocket, Shield, BookOpen, Target, Globe, Zap } from "lucide-react";

const TEAM_MEMBERS = [
    {
        name: "Parvej Hossain",
        role: "Senior Full-Stack Engineer",
        description: "10+ years building web applications with React, Node.js, and Python.",
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_member_eng_1_1769021128054.png",
    },
    {
        name: "Parvej Hossain",
        role: "AI Research Scientist",
        description: "Specializing in LLMs and multi-agent systems.",
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_member_ai_1_1769021145526.png",
    },
    // Adding duplicates for grid demonstration as in screenshot
    {
        name: "Parvej Hossain",
        role: "Senior Full-Stack Engineer",
        description: "10+ years building web applications with React, Node.js, and Python.",
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_member_eng_1_1769021128054.png",
    },
    {
        name: "Parvej Hossain",
        role: "AI Research Scientist",
        description: "Specializing in LLMs and multi-agent systems.",
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_member_ai_1_1769021145526.png",
    },
    {
        name: "Parvej Hossain",
        role: "Senior Full-Stack Engineer",
        description: "10+ years building web applications with React, Node.js, and Python.",
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_member_eng_1_1769021128054.png",
    }
];

export default function TeamPage() {
    return (
        <div className="bg-dark-deep pb-20">
            <TeamHero />

            {/* Leadership Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-white-primary">Our Leadership</h2>
                        <p className="text-white-primary/60">Visionaries leading the AI revolution</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <LeadershipCard
                            image="/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_leader_parvej_1769021080440.png"
                            name="Parvej Hossain"
                            role="Founder & CEO"
                            description="Former ML Lead at OpenAI with a PhD in Computer Science from MIT. 10+ years pioneering AI research and leading teams that built systems serving millions. Passionate about democratizing AI."
                            tags={["Machine Learning", "Leadership"]}
                            socials={{ linkedin: "#", twitter: "#", github: "#" }}
                        />
                        <LeadershipCard
                            image="/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/team_leader_parvej_1769021080440.png"
                            name="Parvej Hossain"
                            role="Founder & CEO"
                            description="Former ML Lead at OpenAI with a PhD in Computer Science from MIT. 10+ years pioneering AI research and leading teams that built systems serving millions. Passionate about democratizing AI."
                            tags={["Machine Learning", "Leadership"]}
                            socials={{ linkedin: "#", twitter: "#", github: "#" }}
                        />
                    </div>
                </div>
            </section>

            {/* Our Team Grid */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-white-primary">Our Team</h2>
                        <p className="text-white-primary/60">Building scalable, production-ready AI solutions</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {TEAM_MEMBERS.map((member, i) => (
                            <MemberCard key={i} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* What Drives Us */}
            <section className="py-20 px-6 bg-dark-deep/50">
                <div className="container mx-auto">
                    <SectionHeader
                        pillText="VALUES"
                        title="What"
                        titleHighlight="Drives"
                        titleSuffix=" Us"
                        description="The values that unite our global team"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <CoreValueCard
                            icon={Rocket}
                            title="Innovation First"
                            description="We're constantly experimenting with new technologies, frameworks, and approaches to stay at the cutting edge."
                        />
                        <CoreValueCard
                            icon={Shield}
                            title="Collaboration"
                            description="Our best work happens when diverse minds come together. We value open communication and teamwork."
                        />
                        <CoreValueCard
                            icon={BookOpen}
                            title="Continuous Learning"
                            description="The AI field evolves rapidly. We dedicate time to learning, sharing knowledge, and growing together."
                        />
                        <CoreValueCard
                            icon={Target}
                            title="Impact-Driven"
                            description="We measure success by the real-world impact our solutions have on businesses and their customers."
                        />
                        <CoreValueCard
                            icon={Globe}
                            title="Global Mindset"
                            description="With team members across 15 countries, we bring diverse perspectives to every challenge we tackle."
                        />
                        <CoreValueCard
                            icon={Zap}
                            title="Move Fast"
                            description="We ship quickly, iterate based on feedback, and aren't afraid to fail fast and learn faster."
                        />
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <SectionHeader
                        pillText="BENEFITS"
                        title="Perks &"
                        titleHighlight="Benefits"
                        description="We take care of our team so they can do their best work"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <BenefitCard
                            icon="/files/icons/list_icon.png"
                            title="Competitive Salary"
                            description="Top-tier compensation packages with equity options for all team members. We pay at or above market rates."
                        />
                        <BenefitCard
                            icon="/files/icons/list_icon.png"
                            title="Remote-First"
                            description="Work from anywhere with flexible hours. We have team members in 15 countries and 3 continents."
                        />
                        <BenefitCard
                            icon="/files/icons/list_icon.png"
                            title="Unlimited PTO"
                            description="Take the time you need to recharge. We trust our team to manage their own schedules responsibly."
                        />
                        <BenefitCard
                            icon="/files/icons/list_icon.png"
                            title="Learning Budget"
                            description="$5,000 annual budget for courses, conferences, books, and professional development."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
