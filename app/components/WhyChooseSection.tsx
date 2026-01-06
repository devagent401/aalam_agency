import { Zap, Network, Shield, Clock } from "lucide-react";
import StatCard from "./ui/StatCard";
import { Gauge, TrendingDown, Target, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast Deployment",
        description: "Production-ready AI systems in weeks, not months, with rapid sprints and continuous delivery.",
    },
    {
        icon: Network,
        title: "Scalable Architecture",
        description: "Built to handle millions of interactions with cloud-native infrastructure and microservices.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption, SOC2 compliance, and rigorous security audits on all systems.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Dedicated support team with real-time monitoring, maintenance, and rapid issue resolution.",
    },
];

const stats = [
    {
        icon: Gauge,
        value: "0.3s",
        label: "Average Response Time",
    },
    {
        icon: TrendingDown,
        value: "89%",
        label: "Cost Reduction",
    },
    {
        icon: Target,
        value: "99.9%",
        label: "Uptime SLA",
    },
    {
        icon: TrendingUp,
        value: "10x",
        label: "Productivity Boost",
    },
];

export default function WhyChooseSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                    Why Choose Our AI Solutions?
                </h2>

                {/* Description */}
                <p className="text-white-primary/70 text-base md:text-lg mb-12 md:mb-16 max-w-3xl leading-relaxed">
                    We don't just build technology—we engineer intelligent systems that
                    learn, adapt, and deliver measurable results.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side - Features */}
                    <div className="space-y-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-green-secondary/10 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-green-secondary" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-white-primary text-lg md:text-xl font-bold">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white-primary/60 text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={index}
                                icon={stat.icon}
                                value={stat.value}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

