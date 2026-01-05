import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
    avatar: string;
    quote: string;
    name: string;
    role: string;
    rating?: number;
    className?: string;
}

export default function TestimonialCard({
    avatar,
    quote,
    name,
    role,
    rating = 5,
    className,
}: TestimonialCardProps) {
    return (
        <div
            className={clsx(
                "group relative overflow-hidden rounded-lg p-6 md:p-8 flex flex-col items-center space-y-6",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-2 hover:shadow-2xl",
                "bg-dark-medium text-white-primary",
                className
            )}
        >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center">
                <Image
                    src={avatar}
                    alt={name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="text-sm md:text-base leading-relaxed text-center opacity-90">
                "{quote}"
            </p>
            <div className="border-b border-gray-700 w-full" />
            <h4 className="text-lg md:text-xl font-bold text-center">
                {name}
            </h4>

            <p className="text-sm md:text-base text-center opacity-80">
                {role}
            </p>

            <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className={clsx(
                            "w-5 h-5",
                            index < rating
                                ? "fill-green-secondary text-green-secondary"
                                : "fill-gray-600 text-gray-600"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}

