"use client";
import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

export interface IndustryTransformCardProps {
    title: string;
    description: string;
    features: string[];
    robotImage: string;
    flashImage: string;
    gradientType: "green" | "purple";
    checkmarkColor: "green" | "purple";
    buttonColor: string;
    cardIndex?: number;
    className?: string;
}

export default function IndustryTransformCard({
    title,
    description,
    features,
    robotImage,
    flashImage,
    gradientType,
    checkmarkColor,
    buttonColor,
    cardIndex = 0,
    className,
}: IndustryTransformCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const gradientClass =
        gradientType === "green" ? "bg-finance-gradient" : "bg-healthcare-gradient";
    const checkmarkFilter =
        checkmarkColor === "green"
            ? "brightness(0) saturate(100%) invert(58%) sepia(98%) saturate(1352%) hue-rotate(89deg) brightness(97%) contrast(85%)"
            : "brightness(0) saturate(100%) invert(58%) sepia(98%) saturate(1352%) hue-rotate(250deg) brightness(97%) contrast(85%)";

    const zIndex = cardIndex !== undefined ? cardIndex + 1 : 1;

    const stackOffset = cardIndex !== undefined ? cardIndex * 75 : 0;

    return (
        <div
            ref={cardRef}
            className={clsx(
                "sticky rounded-lg p-6 md:p-8 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8",
                gradientClass,
                className
            )}
            style={{
                top: "20vh",
                transform: `translateY(${stackOffset}px)`,
                zIndex: zIndex,
            }}
        >

            <Image
                src={flashImage}
                alt="Flash effect"
                width={800}
                height={800}
                className=" absolute -right-96 -top-96 opacity-30"
            />

            <div className="flex-1 flex flex-col space-y-4 md:space-y-6 relative z-10">
                <h3 className="text-white-primary text-2xl md:text-3xl lg:text-4xl font-bold">
                    {title}
                </h3>

                <p className="text-white-primary text-base md:text-lg opacity-90 leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 text-white-primary text-base md:text-lg"
                        >
                            <Image
                                src="/files/icons/checkIcon.png"
                                alt="check"
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain shrink-0"
                                style={{ filter: checkmarkFilter }}
                            />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-2 w-80">
                    <div
                        className="h-12 w-full rounded-lg"
                        style={{ backgroundColor: buttonColor }}
                    />
                </div>
            </div>

            <div className="shrink-0 w-full md:w-auto md:max-w-md relative z-10">
                <Image
                    src={robotImage}
                    alt={`${title} illustration`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
}

