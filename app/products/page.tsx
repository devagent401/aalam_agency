import Link from "next/link";
import Image from "next/image";
import {
    Users,
    Mail,
    BarChart3,
    Smartphone,
    PieChart,
    Link as LinkIcon,
    Target,
    Zap,
    TrendingUp
} from "lucide-react";
import SectionHeader from "@/app/components/ui/SectionHeader";
import Button from "@/app/components/ui/Button";

// Product Nav Icon
const ProductNavIcon = ({ name, icon, active = false }: { name: string, icon: string, active?: boolean }) => (
    <div className={`flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer ${active
        ? "bg-green-secondary/10 border-green-secondary/50 text-white-primary"
        : "bg-dark-medium/40 border-white-primary/5 text-white-primary/60 hover:border-white-primary/20"
        }`}>
        <div className="relative w-10 h-10">
            <Image src={icon} alt={name} fill className="object-contain" />
        </div>
        <span className="text-xs font-medium uppercase tracking-wider">{name}</span>
    </div>
);

// Feature Card for Product Details
const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="flex gap-4 group">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-green-secondary/10 border border-green-secondary/20 flex items-center justify-center text-green-bright group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="text-white-primary font-bold mb-1">{title}</h4>
            <p className="text-white-primary/60 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

// Grid Feature Card
const GridFeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="bg-dark-medium/40 border border-white-primary/5 rounded-2xl p-6 hover:border-green-secondary/30 transition-all group">
        <div className="w-10 h-10 rounded-lg bg-green-secondary/10 text-green-bright flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
            <Icon size={20} />
        </div>
        <h4 className="text-white-primary font-bold mb-2">{title}</h4>
        <p className="text-white-primary/60 text-xs leading-relaxed">{description}</p>
    </div>
);

export default function ProductsPage() {
    const productIcons = [
        { name: "AalamCRM", icon: "/files/product/1.png", active: true },
        { name: "AalamHR", icon: "/files/product/5.png" },
        { name: "AalamProject", icon: "/files/product/6.png" },
        { name: "AalamERP", icon: "/files/product/9.png" },
    ];

    const crmFeatures = [
        {
            icon: Target,
            title: "AI Lead Scoring",
            description: "Automatically ranks leads by conversion probability so your team focuses on the best opportunities."
        },
        {
            icon: Zap,
            title: "Sales Automation",
            description: "Automate follow-ups, emails, and routine tasks to free up your team for actual selling."
        },
        {
            icon: BarChart3,
            title: "Revenue Forecasting",
            description: "Predictive analytics provide accurate revenue forecasts based on pipeline data."
        },
    ];

    const gridFeatures = [
        { icon: Users, title: "Contact Management", description: "Centralized database with full contact history, notes, and interactions." },
        { icon: Mail, title: "Email Integration", description: "Sync Gmail, Outlook, and track all email conversations automatically." },
        { icon: TrendingUp, title: "Pipeline Management", description: "Visual pipeline with drag-and-drop stages and customizable workflows." },
        { icon: Smartphone, title: "Mobile Apps", description: "Full-featured iOS and Android apps for managing deals on-the-go." },
        { icon: PieChart, title: "Advanced Analytics", description: "Real-time dashboards, custom reports, and performance metrics." },
        { icon: LinkIcon, title: "Integrations", description: "Connect with 100+ tools including Slack, Zapier, and Stripe." },
    ];

    return (
        <main className="min-h-screen bg-dark-deep pt-32 pb-20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-secondary/30 bg-green-secondary/5 text-green-secondary text-xs font-semibold tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-secondary animate-pulse" />
                        OUR WORK
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white-primary max-w-4xl mx-auto leading-tight">
                        AI-Powered Tools for <span className="text-gradient-green">Modern Business</span>
                    </h1>
                    <p className="text-white-primary/60 text-lg max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade software solutions designed to automate workflows, boost productivity, and drive growth. Built by engineers who understand what businesses actually need.
                    </p>
                </div>

                {/* Product Selector */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {productIcons.map((product, i) => (
                        <ProductNavIcon key={i} {...product} />
                    ))}
                </div>
            </section>

            {/* Feature Product Section (Aalam CRM) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-secondary/30 bg-green-secondary/5 text-green-secondary text-[10px] font-bold tracking-widest">
                        MOST POPULAR
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white-primary">Aalam CRM</h2>
                    <p className="text-white-primary/60">The smartest way to manage customer relationships</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <p className="text-white-primary/70 text-base leading-relaxed">
                                AxiomCRM is an AI-powered customer relationship management platform that helps sales teams close more deals, faster. With intelligent lead scoring, automated workflows, and predictive analytics, you'll never miss an opportunity again.
                            </p>
                        </div>
                        <div className="space-y-8">
                            {crmFeatures.map((feature, i) => (
                                <FeatureItem key={i} {...feature} />
                            ))}
                        </div>
                        <div className="pt-4">
                            <Button variant="primary" className="px-10 py-4 text-base font-bold bg-gradient-btn">
                                Book a Free Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white-primary/10 bg-dark-medium/30 group">
                        <Image
                            src="/files/product/7.png"
                            alt="Aalam CRM Dashboard"
                            fill
                            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-dark-deep/80 to-transparent md:hidden" />
                    </div>
                </div>
            </section>

            {/* Everything You Need Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white-primary max-w-2xl mx-auto leading-tight">
                        Everything You Need to <br />
                        <span className="text-gradient-green">Close More Deals</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridFeatures.map((feature, i) => (
                        <GridFeatureCard key={i} {...feature} />
                    ))}
                </div>
            </section>

            {/* Ready to Transform Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-dark-medium/40 border border-white-primary/5 rounded-[2.5rem] p-8 md:p-20 text-center space-y-10 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-secondary/20 blur-[120px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-6xl font-bold text-white-primary relative z-10">
                        Ready to Transform <br />
                        Your Business?
                    </h2>
                    <p className="text-white-primary/60 text-lg max-w-2xl mx-auto relative z-10 leading-relaxed">
                        Let's discuss how we can engineer intelligent solutions for your most ambitious challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-base font-bold bg-gradient-btn">
                            Schedule Strategy Call
                        </Button>
                        <Button variant="secondary" className="w-full sm:w-auto px-10 py-5 text-base font-bold bg-white-primary/5">
                            Book a Free Demo
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
