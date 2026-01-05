"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

export interface FAQAccordionItemProps {
    question: string;
    answer: string;
    defaultOpen?: boolean;
    className?: string;
}

export default function FAQAccordionItem({
    question,
    answer,
    defaultOpen = false,
    className,
}: FAQAccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className={clsx(
                "rounded-lg border border-gray-700 bg-dark-medium overflow-hidden transition-all duration-300",
                className
            )}
        >
            {/* Question Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-dark-deep/50 transition-colors"
            >
                <span className="text-white-primary text-base md:text-lg font-medium pr-4">
                    {question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
                    {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-white-primary" />
                    ) : (
                        <ChevronDown className="w-4 h-4 text-white-primary" />
                    )}
                </div>
            </button>

            {/* Answer Content */}
            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                    <p className="text-white-primary/70 text-sm md:text-base leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

