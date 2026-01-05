"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Email submitted:", email);
    };

    return (
        <footer className="bg-black text-white-primary py-12 md:py-16 lg:py-20 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand & Newsletter Section */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-bright rounded-full"></div>
                            <span className="text-2xl font-bold">Aalam</span>
                        </div>

                        {/* Tagline */}
                        <p className="text-white-primary/70 text-sm leading-relaxed">
                            Experience what's next with artificial intelligence
                        </p>

                        {/* Newsletter */}
                        <div className="space-y-4 pt-4">
                            <p className="text-green-bright text-base leading-relaxed">
                                Subscribe now for fresh updates, offers, and AI insights.
                            </p>

                            <form onSubmit={handleSubmit} className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email"
                                    className="w-full bg-transparent border-2 border-green-bright rounded-full px-6 py-3 pr-14 text-white-primary placeholder:text-white-primary/50 focus:outline-none focus:border-green-secondary transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-bright rounded-full p-3 hover:bg-green-secondary transition-colors"
                                >
                                    <ArrowRight className="w-5 h-5 text-dark-deep" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Menu Column */}
                    <div>
                        <h3 className="text-white-primary text-lg font-semibold mb-4">
                            Menu
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Leadership Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white-primary text-lg font-semibold mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    AI Model Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    AI Integration
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Machine Learning
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    AI Strategy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Neural Networks
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Data Monitoring
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-white-primary text-lg font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Help & Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    AI Guides
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Machine Learning
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Support Library
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Getting Started
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white-primary/70 hover:text-green-bright transition-colors"
                                >
                                    Knowledge Hub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white-primary/50 text-sm">
                        Copyright@aalam.io - All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-white-primary/50 hover:text-white-primary text-sm transition-colors"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="text-white-primary/50 hover:text-white-primary text-sm transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="text-white-primary/50 hover:text-white-primary text-sm transition-colors"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

