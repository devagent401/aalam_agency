import Link from "next/link";
import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
    ArrowUpRight
} from "lucide-react";
import SectionHeader from "@/app/components/ui/SectionHeader";
import Button from "@/app/components/ui/Button";

// Project Filter Tab
const FilterTab = ({ label, active = false }: { label: string, active?: boolean }) => (
    <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${active
        ? "bg-white-primary/10 text-white-primary border border-white-primary/20"
        : "text-white-primary/40 hover:text-white-primary/70"
        }`}>
        {label}
    </button>
);

// Featured Project Card
const FeaturedProject = () => (
    <div className="bg-dark-medium/30 border border-white-primary/5 rounded-[2.5rem] p-8 md:p-12 mb-20 overflow-hidden relative group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-green-secondary/20 text-green-bright text-[10px] font-bold tracking-widest uppercase">Featured Project</span>
                        <span className="text-green-bright/60 text-xs font-semibold">AI Automation</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white-primary">RetailMax AI Assistant</h3>
                    <p className="text-white-primary/60 text-lg leading-relaxed">
                        Built an enterprise-scale conversational AI system that handles 50,000+ daily customer interactions with 96% resolution rate, reducing support costs by 73% for a Fortune 500 retail company.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white-primary">50K+</div>
                        <div className="text-white-primary/40 text-xs uppercase tracking-wider">Daily Conversations</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white-primary">96%</div>
                        <div className="text-white-primary/40 text-xs uppercase tracking-wider">Resolution Rate</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-green-bright">-73%</div>
                        <div className="text-white-primary/40 text-xs uppercase tracking-wider">Support Costs</div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button variant="secondary" className="border-green-secondary/50 text-green-bright hover:bg-green-secondary/10 px-8 py-4">
                        View Full Case Study
                    </Button>
                </div>
            </div>

            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src="/files/project/11.png"
                    alt="RetailMax AI Assistant"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
        </div>
    </div>
);

// Success Story Card
const ProjectCard = ({ title, category, description, stats, image, color }: {
    title: string,
    category: string,
    description: string,
    stats: { label: string, value: string }[],
    image: string,
    color: string
}) => (
    <div className="bg-dark-medium/30 border border-white-primary/5 rounded-3xl overflow-hidden hover:border-white-primary/20 transition-all group">
        <div className="relative aspect-video overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
        </div>
        <div className="p-8 space-y-6">
            <div className="space-y-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${color}`}>
                    {category}
                </span>
                <h4 className="text-2xl font-bold text-white-primary group-hover:text-green-bright transition-colors">
                    {title}
                </h4>
                <p className="text-white-primary/60 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-white-primary/5">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-lg font-bold text-green-bright">{stat.value}</div>
                        <div className="text-white-primary/40 text-[10px] uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const TechIcon = ({ name, icon }: { name: string, icon: string }) => (
    <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-pointer p-4 rounded-xl hover:bg-white-primary/5 border border-transparent hover:border-white-primary/10">
        <div className="relative w-8 h-8">
            <Image src={icon} alt={name} fill className="object-contain" />
        </div>
        <span className="text-[10px] font-medium text-white-primary/60 uppercase tracking-widest">{name}</span>
    </div>
);

export default function ProjectsPage() {
    const stats = [
        { value: "150+", label: "Projects Delivered" },
        { value: "$50M+", label: "Client Revenue Generated" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "40+", label: "Countries Served" },
    ];

    const filters = ["All Projects", "AI & Automation", "Crypto & Trading", "Web & Mobile", "SaaS", "Blockchain"];

    const projects = [
        {
            title: "Quantum Trading Bot",
            category: "FINTECH & TRADING",
            description: "High-frequency arbitrage trading system with sub-millisecond execution across 15 exchanges, generating consistent profits with 88% success rate.",
            image: "/files/project/3.png",
            color: "bg-blue-500/20 text-blue-400",
            stats: [{ label: "Latency", value: "0.4ms" }, { label: "Monthly Volume", value: "$12.4M" }]
        },
        {
            title: "LendVault Platform",
            category: "DEFI PROTOCOL",
            description: "Decentralized lending protocol with smart contract infrastructure processing $120M+ in total value locked with zero security incidents.",
            image: "/files/project/4.png",
            color: "bg-purple-500/20 text-purple-400",
            stats: [{ label: "TVL", value: "$120M+" }, { label: "Active Users", value: "15K+" }]
        },
        {
            title: "Medicare Assistant",
            category: "HEALTHCARE AI",
            description: "AI-powered patient scheduling and triage system that reduced wait times by 67% and increased patient satisfaction to 94%.",
            image: "/files/project/20.png",
            color: "bg-cyan-500/20 text-cyan-400",
            stats: [{ label: "Wait Times", value: "-67%" }, { label: "Satisfaction", value: "94%" }]
        },
        {
            title: "WorkFlow CRM",
            category: "SAAS PLATFORM",
            description: "Enterprise CRM and automation platform serving 500+ companies with advanced analytics, integrations, and workflow automation.",
            image: "/files/project/19.png",
            color: "bg-emerald-500/20 text-emerald-400",
            stats: [{ label: "Companies", value: "500+" }, { label: "Uptime", value: "99.9%" }]
        },
        {
            title: "ShopSmart AI",
            category: "E-COMMERCE",
            description: "Personalized recommendation engine and chatbot that increased conversion rates by 142% and average order value by 28%.",
            image: "/files/project/13.png",
            color: "bg-indigo-500/20 text-indigo-400",
            stats: [{ label: "Conversions", value: "+142%" }, { label: "AOV", value: "+28%" }]
        },
        {
            title: "FitTrack Pro",
            category: "MOBILE APP",
            description: "AI-powered fitness tracking app with personalized workout plans, achieving 250K+ downloads and 4.8 star rating in 6 months.",
            image: "/files/project/16.png",
            color: "bg-orange-500/20 text-orange-400",
            stats: [{ label: "Downloads", value: "250K+" }, { label: "Rating", value: "4.8★" }]
        }
    ];

    const techIcons = [
        { name: "ChatGPT", icon: "/files/project/24.png" },
        { name: "LangChain", icon: "/files/project/25.png" },
        { name: "Llama Index", icon: "/files/project/5.png" },
        { name: "Prompt", icon: "/files/project/6.png" },
        { name: "Firebase", icon: "/files/project/10.png" },
    ];

    return (
        <main className="min-h-screen bg-dark-deep pt-32 pb-20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <div className="space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-secondary/30 bg-green-secondary/5 text-green-secondary text-xs font-semibold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-secondary animate-pulse" />
                        OUR WORK
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white-primary max-w-4xl mx-auto leading-tight">
                        Building <span className="text-gradient-green">Innovation</span> One <br />
                        Project at a Time
                    </h1>
                    <p className="text-white-primary/60 text-lg max-w-3xl mx-auto leading-relaxed">
                        From AI-powered chatbots to high-frequency trading systems—explore how we've transformed businesses across industries with cutting-edge technology.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
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

                {/* Filters */}
                <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
                    {filters.map((f, i) => (
                        <FilterTab key={f} label={f} active={i === 0} />
                    ))}
                </div>
            </section>

            {/* Featured Project */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FeaturedProject />
            </section>

            {/* Success Stories Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white-primary">
                        Success <span className="text-gradient-green">Stories</span>
                    </h2>
                    <p className="text-white-primary/60 mt-4 underline underline-offset-8 decoration-green-secondary/30">
                        Real projects. Real results. Real impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-4">
                    <button className="w-10 h-10 rounded-lg border border-white-primary/10 flex items-center justify-center text-white-primary/40 hover:text-white-primary hover:border-white-primary/30 transition-all">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white-primary/10 border border-white-primary/20 flex items-center justify-center text-white-primary text-sm font-bold">1</button>
                    <button className="w-10 h-10 rounded-lg border border-white-primary/10 flex items-center justify-center text-white-primary/40 text-sm font-bold hover:bg-white-primary/5 transition-all">2</button>
                    <button className="w-10 h-10 rounded-lg border border-white-primary/10 flex items-center justify-center text-white-primary/40 text-sm font-bold hover:bg-white-primary/5 transition-all">3</button>
                    <button className="w-10 h-10 rounded-lg border border-white-primary/10 flex items-center justify-center text-white-primary/40 hover:text-white-primary hover:border-white-primary/30 transition-all">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </section>

            {/* Technologies We Use Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white-primary/5">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white-primary">
                        <span className="text-gradient-green">Technologies</span> We Use
                    </h2>
                    <p className="text-white-primary/60 text-base max-w-3xl mx-auto leading-relaxed">
                        Our development and design teams bring the best blend of industry experience and update knowledge to the table. Focus on finding solutions for your business needs while we handle the technical aspect, end-to-end.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-8 mb-16 overflow-x-auto pb-4">
                    {["AI", "Frontend", "Backend", "Databases", "QA", "Design", "Monitoring tools", "Deployment", "Cloud Services"].map((cat, i) => (
                        <span key={i} className={`text-sm font-semibold cursor-pointer whitespace-nowrap ${i === 0 ? "text-white-primary" : "text-white-primary/40 hover:text-white-primary/60"}`}>
                            {cat}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12">
                    {techIcons.map((icon, i) => (
                        <TechIcon key={i} {...icon} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 text-green-secondary/60 text-xs font-semibold uppercase tracking-[0.3em]">
                        <span className="w-1 h-1 rounded-full bg-green-secondary" />
                        LOVED BY TWENTY+ MILLIONS OF PERSON
                        <span className="w-1 h-1 rounded-full bg-green-secondary" />
                    </div>
                </div>
            </section>
        </main>
    );
}
