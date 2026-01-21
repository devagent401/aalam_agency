import React from "react";
import SectionHeader from "../components/ui/SectionHeader";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: "1. Introduction",
            content: "Welcome to Aalam AI. Your privacy matters to us. Learn how we collect, use, and protect your personal information. Important: By using our products or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our terms, please do not use our services.",
        },
        {
            title: "2. Information We Collect",
            subsections: [
                {
                    title: "2.1 Personal Information",
                    content: "We may collect personal information that you voluntarily provide to us when you: Register for an account or subscribe to our services, fill out forms on our website, apply for job positions through our careers page, contact us for support or inquiries, subscribe to our newsletter or marketing communications, participate in surveys, contests, or promotions.",
                },
                {
                    title: "2.2 Automatically Collected Information",
                    content: "When you access our website, we automatically collect certain information about your device and usage patterns, including: IP Address and geographic location, browser type and version, operating system, pages visited and time spent on pages.",
                },
            ],
        },
        {
            title: "3. Cookies and Tracking Technologies",
            content: "We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze trends, and monitor demographic information. You can control cookie preferences through your browser settings.",
        },
        {
            title: "4. How We Use Your Information",
            content: "We use the information we collect for various purposes, including: Service Delivery (To provide, maintain, and improve our AI solutions and services), Communication (To respond to your inquiries, send updates, and provide customer support), Recruitment (To process job applications and evaluate candidates), Marketing (To send promotional materials, newsletters, and information about our services with your consent), Analytics (To analyze website usage, improve user experience, and optimize our services), Security (To detect, prevent, and address technical issues and fraudulent activities), Legal Compliance (To comply with legal obligations and enforce our terms and policies).",
        }
    ];

    return (
        <div className="bg-dark-deep pb-20 pt-32 px-6">
            <div className="container mx-auto max-w-4xl">
                <SectionHeader
                    pillText="PRIVACY"
                    title="Privacy Policy"
                    description="Your privacy matters to us. Learn how we collect, use, and protect your personal information."
                />

                <p className="text-white-primary/40 text-sm text-center mb-16">Last Updated: January 21, 2025</p>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <div key={i} className="bg-dark-medium/20 border border-white-primary/5 rounded-2xl p-8 hover:bg-dark-medium/30 transition-all">
                            <h2 className="text-2xl font-bold text-green-secondary mb-6">{section.title}</h2>
                            {section.content && (
                                <p className="text-white-primary/70 leading-relaxed">{section.content}</p>
                            )}
                            {section.subsections && (
                                <div className="space-y-8 mt-6">
                                    {section.subsections.map((sub, j) => (
                                        <div key={j}>
                                            <h3 className="text-lg font-bold text-white-primary mb-3">{sub.title}</h3>
                                            <p className="text-white-primary/70 leading-relaxed italic">{sub.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-gradient-btn text-dark-deep text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
                    <p className="font-medium opacity-80 mb-8 max-w-xl mx-auto">Let's discuss how we can empower intelligent solutions for your most ambitious challenges.</p>
                    <button className="bg-dark-deep text-white-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
}
