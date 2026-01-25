"use client";

import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-16 md:pt-20 bg-dark-deep overflow-hidden">
            {/* Background Light Flash - Top Right */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                <Image
                    src="/files/flash/Background_Light.png"
                    alt="Background light flash"
                    fill
                    className="object-cover object-top-right opacity-100"
                    priority
                    style={{ objectPosition: "top right" }}
                />
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute left-0 top-1/4 w-1 h-96 bg-green-secondary blur-3xl" />
                <div className="absolute right-0 top-1/3 w-1 h-80 bg-green-secondary blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto py-12 md:py-20 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5  items-center ">
                    {/* Left Section - Content */}
                    <div className=" col-span-3 space-y-6 md:space-y-8 w-full">
                        {/* Headline */}
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                            <span className="text-white-primary">BUILDING THE </span>
                            <span className="text-gradient-green">INTELLIGENT</span>
                            <br />
                            <span className="text-gradient-green">INFRASTRUCTURE OF</span>
                            <br />
                            <span className="text-gray-400">TOMORROW</span>
                        </h1>

                        {/* Description */}
                        <p className="text-white-primary text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed opacity-90">
                            From Enterprise ERPs To AI Agents And High-Frequency Trading —
                            Engineering Scalable Solutions For The Digital Economy.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Button variant="primary" className="text-base md:text-lg px-8 py-4">
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* Right Section - Character Image */}
                    <div className="relative flex justify-center lg:justify-end col-span-2">
                        <div className="relative w-full max-w-md lg:max-w-lg">
                            <Image
                                src="/files/object/person1.png"
                                alt="Person wearing VR headset"
                                width={600}
                                height={800}
                                className="w-full h-auto object-contain"
                                priority
                            />
                            {/* Social Proof Box */}
                            <div className=" flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 border border-white-primary rounded-2xl">
                                <div className="border border-dark-medium rounded-lg px-6 py-4 flex items-center gap-4 md:gap-6">
                                    {/* Overlapping Circles */}
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full bg-gradient-btn border-2 border-dark-medium"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-white-primary text-sm md:text-base">
                                        Loved by 20+ Founder
                                    </span>
                                </div>

                                {/* Clutch Rating */}
                                <div className=" border border-dark-medium rounded-lg px-6 py-4 flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Image src="/files/icons/cicon.svg" alt="CICON" width={20} height={20} className="min-w-5 min-h-5" />

                                    </div>
                                    <div>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className="w-3.5 h-3.5 text-red-500 fill-current"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-white-primary text-[12px] whitespace-nowrap">
                                            Rated 4.7 on Clutch
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Scroll Indicator */}
                {/* <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-2">
                    <span className="text-white-primary text-sm opacity-70">
                        Scroll Down
                    </span>
                    <svg
                        className="w-5 h-5 text-white-primary opacity-70 animate-bounce"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div> */}
            </div>
        </section>
    );
}

