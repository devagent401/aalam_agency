import React from "react";
import SectionHeader from "../ui/SectionHeader";

export default function CareersHero() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionHeader
                    pillText="WE'RE HIRING"
                    title="Build the"
                    titleHighlight="Future"
                    titleSuffix=" with Us"
                    description="Join a world-class team of AI researchers, engineers, and innovators shaping how businesses leverage artificial intelligence. Work on cutting-edge projects that impact millions."
                />
            </div>
        </section>
    );
}
