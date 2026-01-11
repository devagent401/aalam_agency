import React from "react";
import { Mail, Phone } from "lucide-react";

const ContractContactSection = () => {
    return (
        <section className="width-full relative z-10 py-16 md:py-24 bg-dark-deep text-white-primary overflow-hidden">
            {/* Background glow effects could go here */}

            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-bright"></span>
                        <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Get in touch</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Let&apos;s Build Something <span className="text-green-bright">Amazing</span> <br className="hidden md:block" />
                        Together
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? We&apos;d love to hear about it. Our team is ready to bring your
                        vision to life with cutting-edge AI and automation solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Contact Info Cards */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Email Card */}
                        <div className="p-8 rounded-2xl bg-dark-medium border border-white/5 hover:border-green-secondary/30 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-green-secondary/10 flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-green-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Email Us</h3>
                            <p className="text-gray-400 mb-4">Our team typically responds within 24 hours</p>
                            <a href="mailto:hello@aalamagency.com" className="text-green-bright text-xl font-medium hover:underline">
                                hello@aalamagency.com
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="p-8 rounded-2xl bg-dark-medium border border-white/5 hover:border-green-secondary/30 transition-colors duration-300">
                            <div className="w-12 h-12 rounded-lg bg-green-secondary/10 flex items-center justify-center mb-6">
                                <Phone className="w-6 h-6 text-green-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                            <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm EST</p>
                            <a href="tel:+15551234567" className="text-green-bright text-xl font-medium hover:underline">
                                +1 (555) 123-4567
                            </a>
                        </div>

                        {/* Empty space filler or decoration if needed */}
                        <div className="hidden lg:block h-32 w-full rounded-2xl bg-dark-medium/30 border border-white/5"></div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-dark-medium p-6 md:p-10 rounded-2xl border border-white/5">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h3>
                            <p className="text-gray-400 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-white/90">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="John..."
                                            className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-secondary/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-white/90">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="Doe..."
                                            className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-secondary/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/90">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email..."
                                        className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-secondary/50 transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-white/90">What service are you interested in?</label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-green-secondary/50 transition-colors cursor-pointer"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select a service</option>
                                                <option value="web-dev">Web Development</option>
                                                <option value="ai-integration">AI Integration</option>
                                                <option value="automation">Automation</option>
                                                <option value="consulting">Consulting</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="budget" className="text-sm font-medium text-white/90">Last Project Budget</label>
                                        <div className="relative">
                                            <select
                                                id="budget"
                                                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-green-secondary/50 transition-colors cursor-pointer"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select Budget Range</option>
                                                <option value="5k-10k">$5k - $10k</option>
                                                <option value="10k-25k">$10k - $25k</option>
                                                <option value="25k-50k">$25k - $50k</option>
                                                <option value="50k+">$50k+</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/90">Tell us about your project</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Describe your project, goals, and timeline..."
                                        className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-secondary/50 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-green-bright hover:bg-green-500 text-dark-deep font-bold text-lg rounded-lg transition-colors duration-200"
                                    >
                                        Submit Request
                                    </button>
                                    {/* Alternatively use the existing Button component if it fits, but the design shows a big block button */}
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContractContactSection;
