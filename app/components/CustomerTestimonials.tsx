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
];

export default function CustomerTestimonials() {
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
                <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 max-w-4xl mx-auto leading-tight">
                    What Our Customers Feel About Our Services!
                </h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            avatar={testimonial.avatar}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            role={testimonial.role}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    <div className="w-12 h-3 rounded-full bg-white-primary"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                </div>
            </div>
        </section>
    );
}

