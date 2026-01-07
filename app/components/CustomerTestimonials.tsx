"use client";
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
    {
        avatar: "/files/avatars/liam.png",
        quote:
            "The AI suggestions feel natural, fast, and creative. It makes my brainstorming process way more exciting and productive.",
        name: "Liam Carter",
        role: "Digital Marketer at BrightReach",
        rating: 5,
    },
    {
        avatar: "/files/avatars/alex.png",
        quote:
            "This tool helped me turn rough ideas into polished content all in minutes. It feels like having a creative partner that never sleeps.",
        name: "Alex Tan",
        role: "Freelance Content Creator",
        rating: 5,
    },
    {
        avatar: "/files/avatars/maria.png",
        quote:
            "As a small business owner, I never thought I could produce professional-level visuals or scripts. Now I can without hiring a full team.",
        name: "Maria Gonzalez",
        role: "Founder of Luna Studio",
        rating: 5,
    },
    {
        avatar: "/files/avatars/maria.png",
        quote:
            "As a small business owner, I never thought I could produce professional-level visuals or scripts. Now I can without hiring a full team.",
        name: "Maria Gonzalez",
        role: "Founder of Luna Studio",
        rating: 5,
    },
    {
        avatar: "/files/avatars/maria.png",
        quote:
            "As a small business owner, I never thought I could produce professional-level visuals or scripts. Now I can without hiring a full team.",
        name: "Maria Gonzalez",
        role: "Founder of Luna Studio",
        rating: 5,
    },
];

export default function CustomerTestimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.scrollWidth / testimonials.length;
            container.scrollTo({
                left: cardWidth * index,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const cardWidth = container.scrollWidth / testimonials.length;
                const scrollPosition = container.scrollLeft;
                const newIndex = Math.round(scrollPosition / cardWidth);
                setActiveIndex(newIndex);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Badge */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-medium border border-green-secondary/20">
                        <span className="w-2 h-2 bg-green-secondary rounded-full"></span>
                        <span className="text-green-secondary text-sm md:text-base font-medium">
                            Loved and trusted by millions of creators!
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-white-primary text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-center mb-12 md:mb-16 max-w-4xl mx-auto leading-tight">
                    What Our Customers Feel About Our Services!
                </h2>

                {/* Horizontal Slider */}
                <div className="relative mb-8 md:mb-12">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center transition-all duration-300"
                                style={{
                                    // transform:
                                    //     activeIndex === index
                                    //         ? "scale(1.05)"
                                    //         : "scale(0.95)",
                                    opacity: activeIndex === index ? 1 : 0.6,
                                }}
                            >
                                <TestimonialCard
                                    avatar={testimonial.avatar}
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    rating={testimonial.rating}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`transition-all duration-300 rounded-full ${activeIndex === index
                                ? "w-12 h-3 bg-white-primary"
                                : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}

