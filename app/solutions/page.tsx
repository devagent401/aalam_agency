import SolutionsHero from "../components/SolutionsHero";
import ServiceDetailSection from "../components/ServiceDetailSection";
import DeliveryProcess from "../components/DeliveryProcess";
import WhyChooseSection from "../components/WhyChooseSection";
import BeforeAfterComparison from "../components/BeforeAfterComparison";
import CTASection from "../components/CTASection";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-dark-deep">
            <SolutionsHero />

            {/* AI Bots & Intelligent Agents Section */}
            <ServiceDetailSection
                title="AI Bots & Intelligent Agents"
                description="Deploy autonomous AI agents that understand context, learn from interactions, and execute complex tasks with human-level comprehension."
                features={[
                    {
                        icon: "/files/icons/ue.png",
                        title: "Conversational AI",
                        description: "Natural language chatbots powered by GPT-4 that handle customer inquiries, sales, and support at scale.",
                    },
                    {
                        icon: "/files/icons/zt.png",
                        title: "Multi-Agent Systems",
                        description: "Coordinated AI agents that collaborate to solve complex problems and automate entire workflows.",
                    },
                    {
                        icon: "/files/icons/fc.png",
                        title: "Data Analysis Agents",
                        description: "AI that automatically analyzes data, generates reports, and provides actionable insights.",
                    },
                ]}
                gradientType="ai-bots"
                illustrationIcon="/files/icons/triangel.png"
            />

            {/* Crypto Trading & Blockchain Section */}
            <ServiceDetailSection
                title="Crypto Trading & Blockchain"
                description="Advanced algorithmic trading systems and blockchain solutions that maximize returns while minimizing risk exposure."
                features={[
                    {
                        icon: "/files/icons/upchart.png",
                        title: "High-Frequency Trading",
                        description: "Sub-millisecond execution bots that capitalize on market inefficiencies across multiple exchanges.",
                    },
                    {
                        icon: "/files/icons/rounded.png",
                        title: "Arbitrage Engines",
                        description: "Automated systems that identify and execute profitable arbitrage opportunities in real-time.",
                    },
                    {
                        icon: "/files/icons/cicon.svg",
                        title: "Smart Contracts",
                        description: "Secure, audited smart contracts for DeFi, NFTs, and decentralized applications.",
                    },
                ]}
                gradientType="crypto"
                illustrationIcon="/files/icons/ractangular.png"
            />

            {/* Web & App Development Section */}
            <ServiceDetailSection
                title="Web & App Development"
                description="Modern, scalable web and mobile applications built with cutting-edge frameworks and best practices."
                features={[
                    {
                        icon: "/files/icons/fc.png",
                        title: "Full-Stack Development",
                        description: "End-to-end web applications with React, Next.js, Node.js, and modern cloud infrastructure.",
                    },
                    {
                        icon: "/files/icons/is.png",
                        title: "Mobile Apps (iOS/Android)",
                        description: "Native and cross-platform mobile apps built with React Native and Flutter.",
                    },
                    {
                        icon: "/files/icons/ue.png",
                        title: "Progressive Web Apps",
                        description: "Fast, reliable, and engaging web apps that work offline and feel like native apps.",
                    },
                ]}
                gradientType="web-dev"
                illustrationIcon="/files/icons/rounded.png"
            />

            <DeliveryProcess />
            <WhyChooseSection />
            <BeforeAfterComparison />
            <CTASection />
        </main>
    );
}
