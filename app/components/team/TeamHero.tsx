import React from "react";
import SectionHeader from "../ui/SectionHeader";

export default function TeamHero() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <SectionHeader
                    pillText="MEET THE TEAM"
                    title="The Minds Behind the"
                    titleHighlight="Innovation"
                    description="We're a global team of AI researchers, engineers, and innovators building the future of business automation. Join us in shaping how companies leverage artificial intelligence."
                />
            </div>
        </section>
    );
}
