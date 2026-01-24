import Link from "next/link";
import Image from "next/image";
import {
    Zap,
    TrendingUp,
    Lightbulb,
    Users,
    ShieldCheck,
    Globe,
    CheckCircle2,
    Mail
} from "lucide-react";
import SectionHeader from "@/app/components/ui/SectionHeader";
import StatCard from "@/app/components/ui/StatCard";
import Button from "@/app/components/ui/Button";

// Impact Card Component
const ImpactCard = ({ title, subTitle, description, stats }: {
    title: string,
    subTitle: string,
    description: string,
    stats: { label: string, value: string }[]
}) => (
    <div className="bg-dark-medium/40 border border-white-primary/10 rounded-2xl p-6 md:p-8 hover:border-green-secondary/30 transition-all group">
        <div className="text-4xl md:text-5xl font-bold text-green-bright mb-2">{title}</div>
        <h3 className="text-xl md:text-2xl font-bold text-white-primary mb-4">{subTitle}</h3>
        <p className="text-white-primary/60 text-sm md:text-base mb-8 leading-relaxed">
            {description}
        </p>
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white-primary/10">
            {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                    <div className="text-green-bright font-bold text-lg md:text-xl">{stat.value}</div>
                    <div className="text-white-primary/40 text-[10px] md:text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
    </div>
);

// Value Card Component
const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="bg-dark-medium/40 border border-white-primary/10 rounded-2xl p-8 hover:border-green-secondary/30 transition-all text-center group">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-secondary/10 text-green-bright mb-6 group-hover:scale-110 transition-transform">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-white-primary mb-4">{title}</h3>
        <p className="text-white-primary/60 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

// Leadership Card Component
const LeadershipMemberCard = ({ name, role, email, image }: { name: string, role: string, email: string, image: string }) => (
    <div className="bg-dark-medium/60 border border-white-primary/10 rounded-2xl p-4 text-center hover:border-green-secondary/30 transition-all group">
        <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-dark-deep">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
        </div>
        <h3 className="text-lg font-bold text-white-primary">{name}</h3>
        <p className="text-green-secondary text-sm mb-3">{role}</p>
        <div className="flex items-center justify-center gap-2 text-white-primary/40 text-xs">
            <Mail size={12} />
            <span className="hover:text-green-secondary transition-colors cursor-pointer">{email}</span>
        </div>
    </div>
);

// Product Small Card
const ProductSmallCard = ({ title, description, image, link }: { title: string, description: string, image: string, link: string }) => (
    <div className="bg-dark-medium/40 border border-white-primary/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center hover:border-green-secondary/30 transition-all">
        <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
            <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white-primary mb-2">{title}</h3>
            <p className="text-white-primary/60 text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
                {description}
            </p>
            <Link href={link} className="text-green-bright text-sm font-semibold flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all">
                Learn More <span>→</span>
            </Link>
        </div>
    </div>
);

export default function AboutPage() {
    const stats = [
        { value: "150+", label: "Projects Delivered" },
        { value: "$50M+", label: "Client Revenue Generated" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "40+", label: "Countries Served" },
    ];

    const impactCards = [
        {
            title: "150+",
            subTitle: "Operational Cost Reduction",
            description: "Our AI chatbots and automation systems helped a Fortune 500 retail chain reduce customer service costs while improving response times by 30x.",
            stats: [
                { label: "Availability", value: "24/7" },
                { label: "Daily Queries", value: "10K+" },
                { label: "Accuracy", value: "94%" },
            ]
        },
        {
            title: "150+",
            subTitle: "Operational Cost Reduction",
            description: "Our AI chatbots and automation systems helped a Fortune 500 retail chain reduce customer service costs while improving response times by 30x.",
            stats: [
                { label: "Availability", value: "24/7" },
                { label: "Daily Queries", value: "10K+" },
                { label: "Accuracy", value: "94%" },
            ]
        },
        {
            title: "150+",
            subTitle: "Operational Cost Reduction",
            description: "Our AI chatbots and automation systems helped a Fortune 500 retail chain reduce customer service costs while improving response times by 30x.",
            stats: [
                { label: "Availability", value: "24/7" },
                { label: "Daily Queries", value: "10K+" },
                { label: "Accuracy", value: "94%" },
            ]
        }
    ];

    const values = [
        { icon: Zap, title: "Speed & Agility", description: "We move fast, iterate quickly, and deliver production-ready solutions in weeks, not months. Agile development is in our DNA." },
        { icon: TrendingUp, title: "Results-Driven", description: "Every project has clear KPIs and success metrics. We're not satisfied until we've delivered measurable business impact." },
        { icon: Lightbulb, title: "Innovation First", description: "We stay at the cutting edge of AI and automation. Our team constantly experiments with new models, frameworks, and techniques." },
        { icon: Users, title: "Client Partnership", description: "Your success is our success. We become an extension of your team, invested in your long-term growth and vision." },
        { icon: ShieldCheck, title: "Security & Trust", description: "Enterprise-grade security, SOC2 compliance, and rigorous testing on every project. Your data and IP are sacred to us." },
        { icon: Globe, title: "Global Excellence", description: "World-class engineering standards applied across every project, regardless of size or budget. Quality is non-negotiable." },
    ];

    const leadership = [
        { name: "Parvej Hossain", role: "Founder @Aalam", email: "hello@aalamagency.com", image: "/files/aboutus/2.png" },
        { name: "Parvej Hossain", role: "Founder @Aalam", email: "hello@aalamagency.com", image: "/files/aboutus/2.png" },
        { name: "Parvej Hossain", role: "Founder @Aalam", email: "hello@aalamagency.com", image: "/files/aboutus/2.png" },
        { name: "Parvej Hossain", role: "Founder @Aalam", email: "hello@aalamagency.com", image: "/files/aboutus/2.png" },
        { name: "Parvej Hossain", role: "Founder @Aalam", email: "hello@aalamagency.com", image: "/files/aboutus/2.png" },
    ];

    return (
        <main className="min-h-screen bg-dark-deep pt-32 pb-20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-secondary/30 bg-green-secondary/5 text-green-secondary text-xs font-semibold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-secondary animate-pulse" />
                        OVERVIEW
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white-primary max-w-5xl mx-auto leading-[1.1]">
                        We're <span className="text-gradient-green">Building the Future</span> of Business Automation
                    </h1>
                    <p className="text-white-primary/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Aalam is a global AI automation agency dedicated to transforming businesses through intelligent technology. We combine cutting-edge AI, blockchain expertise, and world-class engineering to deliver solutions that scale.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white-primary">Our Mission</h2>
                        <div className="space-y-6 text-white-primary/70 text-base md:text-lg leading-relaxed">
                            <p>
                                We exist to democratize artificial intelligence and automation for businesses of all sizes. Our mission is to make advanced AI technology accessible, practical, and profitable for every organization.
                            </p>
                            <p>
                                We believe that intelligent automation shouldn't be reserved for tech giants. Every business deserves a tool that learns, adapts, and optimizes—helping teams focus on what matters most: growth and innovation.
                            </p>
                            <p>
                                Through our agency services and software products, we're empowering companies worldwide to compete in the AI era.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { title: "Vision", desc: "A world where every business leverages AI to unlock exponential growth and efficiency." },
                            { title: "Innovation", desc: "Pioneering new approaches to automation, from neuroscience-led AI to algorithmic learning." },
                            { title: "Partnership", desc: "Building long-term relationships with clients, becoming trusted technology advisors." },
                        ].map((item, i) => (
                            <div key={i} className="bg-dark-medium/40 border border-white-primary/5 rounded-2xl p-6 hover:border-green-secondary/20 transition-all">
                                <h3 className="text-xl font-bold text-white-primary mb-2">{item.title}</h3>
                                <p className="text-white-primary/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-dark-medium/40 border border-white-primary/10 rounded-2xl p-6 md:p-10 text-center hover:border-green-secondary/30 transition-all group">
                            <div className="text-3xl md:text-5xl font-bold text-green-bright mb-2 group-hover:scale-110 transition-transform duration-500">
                                {stat.value}
                            </div>
                            <div className="text-white-primary/40 text-xs md:text-sm uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Real Impact Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <SectionHeader
                    pillText="CASE STUDIES"
                    title="Real Impact, "
                    titleHighlight="Real Results"
                    description="See how we're transforming businesses across industries with AI automation"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactCards.map((card, i) => (
                        <ImpactCard key={i} {...card} />
                    ))}
                </div>
            </section>

            {/* Core Values Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <SectionHeader
                    pillText="OUR VALUES"
                    title="Our Core "
                    titleHighlight="Values"
                    description="The principles that guide everything we do"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, i) => (
                        <ValueCard key={i} {...value} />
                    ))}
                </div>
            </section>

            {/* Leadership Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <SectionHeader
                    pillText="OUR TEAM"
                    title="Meet Our "
                    titleHighlight="Leadership"
                    description="Experts in AI, blockchain, and enterprise software"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {leadership.map((member, i) => (
                        <LeadershipMemberCard key={i} {...member} />
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    pillText="SOLUTIONS"
                    title="Our "
                    titleHighlight="Products"
                    description="AI-powered software solutions we've built for businesses like yours"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProductSmallCard
                        title="AalamCRM"
                        description="Smart customer relationship management with AI-powered lead scoring, sales automation, and predictive analytics."
                        image="/files/aboutus/5.png"
                        link="/products/crm"
                    />
                    <ProductSmallCard
                        title="AalamHRM"
                        description="Smart customer relationship management with AI-powered lead scoring, sales automation, and predictive analytics."
                        image="/files/aboutus/6.png"
                        link="/products/hrm"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="bg-gradient-btn p-px rounded-4xl">
                    <div className="bg-dark-deep rounded-4xl p-8 md:p-16 text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white-primary">
                            Ready to Building the Future Together?
                        </h2>
                        <p className="text-white-primary/60 text-lg max-w-2xl mx-auto">
                            Join 20+ forward-thinking founders who have already transformed their businesses with Aalam.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="primary" className="w-full sm:w-auto px-10 py-4 bg-gradient-btn">Get Started Now</Button>
                            <Button variant="secondary" className="w-full sm:w-auto px-10 py-4">Book a Demo</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
