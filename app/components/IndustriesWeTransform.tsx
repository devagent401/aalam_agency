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
    title: "Healthcare & Life Sciences",
    description:
      "AI-powered diagnostic tools, patient care automation, and medical data analysis for faster, more accurate outcomes.",
    features: [
      "Rapid AI Diagnostics",
      "Automated Patient Care",
      "Precision Data Insights",
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
    robotImage: "/files/object/robot2.png",
    flashImage: "/files/flash/flash-deep-green.png",
    gradientType: "green" as const,
    checkmarkColor: "purple" as const,
    buttonColor: "#4a1a66", // dark purple
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "AI-powered fraud detection, risk assessment, and automated trading systems for financial institutions.",
    features: [
      "Rapid AI Diagnostics",
      "Automated Patient Care",
      "Precision Data Insights",
    ],
    robotImage: "/files/object/robot2.png",
    flashImage: "/files/flash/flash-lue.png",
    gradientType: "purple" as const,
    checkmarkColor: "purple" as const,
    buttonColor: "#4a1a66", // dark purple
  },
];

export default function IndustriesWeTransform() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
          Industries We Transform
        </h2>

        {/* Subtitle */}
        <p className="text-white-primary text-base md:text-lg text-center opacity-90 max-w-3xl mx-auto mb-12 md:mb-16">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

