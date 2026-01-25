import FAQAccordionItem from "./ui/FAQAccordionItem";

const faqs = [
    {
        question: "What's the cost of AI automation services?",
        answer:
            "Pricing depends on your needs we offer flexible solutions for every size and budget.",
        defaultOpen: true,
    },
    {
        question: "What's the cost of AI automation services?",
        answer:
            "Pricing depends on your needs we offer flexible solutions for every size and budget.",
        defaultOpen: false,
    },
    {
        question: "What tasks can AI help automate?",
        answer:
            "AI can automate customer support, data entry, content generation, scheduling, analytics, and much more.",
        defaultOpen: false,
    },
    {
        question: "Is AI automation right for me?",
        answer:
            "If you're looking to scale operations, reduce manual work, and increase efficiency, AI automation is perfect for you.",
        defaultOpen: false,
    },
];

export default function SmartAIHelp() {
    return (
        <section className="py-12 md:py-20 lg:py-28 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-12 lg:mb-16">
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-medium border border-green-secondary/20">
                        <span className="w-2 h-2 bg-green-secondary rounded-full"></span>
                        <span className="text-green-secondary text-sm md:text-base font-medium">
                            Answers You Need, When You Need Them
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-white-primary text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Step Into the World of <span className="text-green-bright">Smarter AI</span>
                    </h2>

                    {/* Description */}
                    <p className="text-white-primary/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        We do not support the generation of violent, explicit, political,
                        or otherwise restricted content. Human and automated monitoring
                        help enforce these guidelines.
                    </p>
                </div>

                {/* FAQ Accordion - Centered and max-width */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQAccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            defaultOpen={faq.defaultOpen}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

