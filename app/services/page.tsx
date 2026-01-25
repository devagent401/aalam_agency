import SolutionsHero from "../components/SolutionsHero";
import ServiceDetailSection from "../components/ServiceDetailSection";
import DeliveryProcess from "../components/DeliveryProcess";
import WhyChooseSection from "../components/WhyChooseSection";
import BeforeAfterComparison from "../components/BeforeAfterComparison";
import CTASection from "../components/CTASection";
import SmartAIHelp from "../components/SmartAIHelp";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-dark-deep pt-16 md:pt-20">
            <SolutionsHero />

            {/* AI Bots & Intelligent Agents Section */}
            <ServiceDetailSection
                title="AI Bots & Intelligent Agents"
                description="Deploy autonomous AI agents that understand context, learn from interactions, and execute complex tasks with human-level comprehension."
                features={[
                    {
                        icon: "/files/service/2.png",
                        title: "Conversational AI",
                        description: "Natural language chatbots powered by GPT-4 that handle customer inquiries, sales, and support at scale.",
                    },
                    {
                        icon: "/files/service/3.png",
                        title: "Multi-Agent Systems",
                        description: "Coordinated AI agents that collaborate to solve complex problems and automate entire workflows.",
                    },
                    {
                        icon: "/files/service/15.png",
                        title: "Data Analysis Agents",
                        description: "AI that automatically analyzes data, generates reports, and provides actionable insights.",
                    },
                ]}
                gradientType="ai-bots"
                illustrationPath="/files/service/11.png"
            />

            {/* Crypto Trading & Blockchain Section */}
            <ServiceDetailSection
                title="Crypto Trading & Blockchain"
                description="Advanced algorithmic trading systems and blockchain solutions that maximize returns while minimizing risk exposure."
                features={[
                    {
                        icon: "/files/service/21.png",
                        title: "High-Frequency Trading",
                        description: "Sub-millisecond execution bots that capitalize on market inefficiencies across multiple exchanges.",
                    },
                    {
                        icon: "/files/service/22.png",
                        title: "Arbitrage Engines",
                        description: "Automated systems that identify and execute profitable arbitrage opportunities in real-time.",
                    },
                    {
                        icon: "/files/service/10.png",
                        title: "Smart Contracts",
                        description: "Secure, audited smart contracts for DeFi, NFTs, and decentralized applications.",
                    },
                ]}
                gradientType="crypto"
                illustrationPath="/files/service/16.png"
            />

            {/* Web & App Development Section */}
            <ServiceDetailSection
                title="Web & App Development"
                description="Modern, scalable web and mobile applications built with cutting-edge frameworks and best practices."
                features={[
                    {
                        icon: "/files/service/12.png",
                        title: "Full-Stack Development",
                        description: "End-to-end web applications with React, Next.js, Node.js, and modern cloud infrastructure.",
                    },
                    {
                        icon: "/files/service/18.png",
                        title: "Mobile Apps (iOS/Android)",
                        description: "Native and cross-platform mobile apps built with React Native and Flutter.",
                    },
                    {
                        icon: "/files/service/17.png",
                        title: "Progressive Web Apps",
                        description: "Fast, reliable, and engaging web apps that work offline and feel like native apps.",
                    },
                ]}
                gradientType="web-dev"
                illustrationPath="/files/service/20.png"
            />

            {/* AI Automation Solutions Section */}
            <ServiceDetailSection
                title="AI Automation Solutions"
                description="Streamline your operations with intelligent automation that reduces manual work and improves efficiency across your entire organization."
                features={[
                    {
                        icon: "/files/service/1.png",
                        title: "Predictive Analytics",
                        description: "Identify patterns and predict future trends to make data-driven decisions that grow your business.",
                    },
                    {
                        icon: "/files/service/9.png",
                        title: "Process Automation",
                        description: "Automate repetitive tasks and workflows to free up your team for more strategic initiatives.",
                    },
                ]}
                gradientType="ai-automation"
                illustrationPath="/files/service/7.png"
            />

            <DeliveryProcess />
            <WhyChooseSection />
            <BeforeAfterComparison />
            <SmartAIHelp />
            <CTASection />
        </main>
    );
}
