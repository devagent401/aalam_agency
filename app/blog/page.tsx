import React from "react";
import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogPostCard from "../components/blog/BlogPostCard";

const BLOG_POSTS = [
    {
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/blog_ai_systems_1769021101132.png",
        category: "CRYPTO",
        date: "Jan 7, 2025",
        readTime: "8 min read",
        title: "How to Build a Profitable Trading Bot in 2025",
        description: "A step-by-step guide to developing algorithmic trading systems with backtesting, risk management, and live deployment.",
    },
    {
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/blog_ai_systems_1769021101132.png",
        category: "WEB DEV",
        date: "Jan 7, 2025",
        readTime: "5 min read",
        title: "Next.js 15: What's New and Why It Matters",
        description: "Exploring the latest features in Next.js 15 including improved performance, new APIs, and better developer experience.",
    },
    {
        image: "/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/blog_ai_systems_1769021101132.png",
        category: "AI",
        date: "Jan 7, 2025",
        readTime: "6 min read",
        title: "GPT-4 vs Claude: Which LLM is Best for Your Business?",
        description: "A comprehensive comparison of the leading large language models for enterprise applications and automation.",
    }
];

export default function BlogPage() {
    return (
        <div className="bg-dark-deep pb-20">
            <BlogHero />

            {/* Categories */}
            <section className="py-8 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {["All Posts", "AI & Automation", "Crypto & Trading", "Web Development", "Blockchain", "Case Studies"].map((cat) => (
                            <button key={cat} className="px-5 py-2 rounded-full border border-white-primary/10 text-white-primary/60 hover:border-green-secondary hover:text-green-secondary transition-all text-xs font-medium bg-dark-medium/30">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <FeaturedPost
                        image="/brain/f57d30b0-d151-4150-9dc8-288f80d869bc/blog_ai_systems_1769021101132.png"
                        category="FEATURED"
                        date="Jan 7, 2025"
                        title="Building Multi-Agent AI Systems: A Complete Guide"
                        description="Learn how to architect and deploy coordinated AI agents that collaborate to solve complex business problems. We cover framework selection, agent communication patterns, and production deployment strategies."
                    />
                </div>
            </section>

            {/* Success Stories / Latest Posts */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white-primary mb-4">
                            Success <span className="text-gradient-green">Stories</span>
                        </h2>
                        <p className="text-white-primary/60">Real projects. Real results. Real impact.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, i) => (
                            <BlogPostCard key={i} {...post} />
                        ))}
                        {/* Repeat for grid demo */}
                        {BLOG_POSTS.map((post, i) => (
                            <BlogPostCard key={i + 3} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
