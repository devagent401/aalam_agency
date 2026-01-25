import React from "react";
import IndustryTransformCard from "./ui/IndustryTransformCard";

const industries = [
  {
    title: "Finance & Banking",
    description:
      "Real-time fraud detection, algorithmic trading systems, and intelligent risk assessment powered by machine learning.",
    features: [
      "Instant Fraud Detection",
      "Smart Risk Analysis",
      "Algorithmic Trading Bots",
    ],
    robotImage: "/files/object/robot1.png",
    flashImage: "/files/flash/flash-deep-green.png",
    gradientType: "green" as const,
    checkmarkColor: "green" as const,
    buttonColor: "#0d4f3c", // dark teal-green
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Conversational AI assistants, dynamic pricing algorithms, and predictive inventory management systems.",
    features: [
      "24/7 Support Bots",
      "Smart Inventory Tracking",
      "Hyper-Personalized Offers",
    ],
    robotImage: "/files/object/robot2.png",
    flashImage: "/files/flash/flash-lue.png",
    gradientType: "purple" as const,
    checkmarkColor: "purple" as const,
    buttonColor: "#4a1a66", // dark purple
  },
  {
    title: "Fintech & Banking",
    description:
      "AI-powered fraud detection, risk assessment, and automated trading systems for financial institutions.",
    features: [
      "Real-time Fraud Detection",
      "Smart Risk Analysis",
      "Algorithmic Trading Bots",
    ],
    robotImage: "/files/object/robot3.png",
    flashImage: "/files/flash/flash-deep-green.png",
    gradientType: "green" as const,
    checkmarkColor: "purple" as const,
    buttonColor: "#4a1a66", // dark purple
  },
  {
    title: "Crypto & Trading",
    description:
      "Secure, data-driven financial ecosystems powered by autonomous machine learning.",
    features: [
      "Automated Trade Execution",
      "Smart Sentiment Analysis",
      "Real-time Portfolio Tracking",
    ],
    robotImage: "/files/object/robot4.png",
    flashImage: "/files/flash/flash-yellow.png",
    gradientType: "bronze" as const,
    checkmarkColor: "orange" as const,
    buttonColor: "#663300", // dark bronze/orange
  },
];

export default function IndustriesWeTransform() {
  return (
    <section className="py-12 md:py-16 lg:pb-60 bg-dark-deep"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-white-primary text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-center mb-4 md:mb-6">
          Industries We <span className="text-green-secondary">Transform</span>
        </h2>

        {/* Subtitle */}
        <p className="text-white-primary text-base md:text-base lg:text-xl text-center opacity-90 max-w-3xl mx-auto mb-12 md:mb-16">
          Deploying cutting-edge AI and automation across high-impact sectors.
        </p>

        {/* Industry Cards - Stacked Vertically */}
        <div className="flex flex-col gap-8 md:gap-12">
          {industries.map((industry, index) => (
            <IndustryTransformCard
              key={index}
              title={industry.title}
              description={industry.description}
              features={industry.features}
              robotImage={industry.robotImage}
              flashImage={industry.flashImage}
              gradientType={industry.gradientType}
              checkmarkColor={industry.checkmarkColor}
              buttonColor={industry.buttonColor}
              cardIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

