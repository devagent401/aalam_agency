import { ChevronRight, FolderOpen } from "lucide-react";
import FAQAccordionItem from "./ui/FAQAccordionItem";
import Button from "./ui/Button";

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
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-medium border border-green-secondary/20">
                            <span className="w-2 h-2 bg-green-secondary rounded-full"></span>
                            <span className="text-green-secondary text-sm md:text-base font-medium">
                                Answers You Need, When You Need Them
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Step Into the World of{" "}
                            <span className="text-green-bright">Smarter AI</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white-primary/70 text-base md:text-lg leading-relaxed">
                            We do not support the generation of violent, explicit, political,
                            or otherwise restricted content. Human and automated monitoring
                            help enforce these guidelines.
                        </p>

                        {/* FAQ Accordion */}
                        <div className="space-y-4">
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

                    {/* Right Side - Illustration & CTA */}
                    <div className="flex flex-col items-center justify-center space-y-8">
                        {/* Folder Icon */}
                        <div className="w-full max-w-md aspect-[4/3] bg-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
                            <FolderOpen className="w-32 h-32 md:w-40 md:h-40 text-gray-500 relative z-10" />
                        </div>

                        {/* Contact Button */}
                        <Button
                            variant="primary"
                            className="bg-green-bright text-dark-deep hover:bg-green-secondary transition-colors px-8 py-4 text-lg font-semibold"
                        >
                            <span className="flex items-center gap-2">
                                Need Help? Contact Us
                                <ChevronRight className="w-5 h-5" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

