import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { Search } from "lucide-react";

export default function BlogHero() {
    return (
        <section className="pt-32 pb-12 px-6">
            <div className="container mx-auto">
                <SectionHeader
                    pillText="OUR WORK"
                    title="The"
                    titleHighlight="Aalam"
                    titleSuffix=" Blog"
                    description="Expert insights on AI automation, blockchain development, trading algorithms, and the future of business technology."
                />

                <div className="max-w-xl mx-auto relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white-primary/40 group-focus-within:text-green-secondary transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full bg-dark-medium/50 border border-white-primary/10 rounded-full py-4 pl-12 pr-6 text-white-primary placeholder:text-white-primary/30 focus:outline-none focus:border-green-secondary/50 transition-all font-medium text-sm md:text-base"
                    />
                </div>
            </div>
        </section>
    );
}
