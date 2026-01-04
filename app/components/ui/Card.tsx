import Image from "next/image";
import clsx from "clsx";

export interface CardProps {
    icon: string;
    title: string;
    description: string;
    showButton?: boolean;
    className?: string;
    info?: string[];
    imageClassName?: string;
    imageContainerClassName?: string;
}

export default function Card({
    icon,
    title,
    description,
    showButton = false,
    info = [],
    className,
    imageClassName,
    imageContainerClassName,
}: CardProps) {
    const hasInfo = info.length > 0;

    return (
        <div
            className={clsx(
                "relative overflow-hidden rounded-lg p-6 md:p-8 bg-card-gradient flex",
                hasInfo ? "flex-row-reverse justify-between" : "flex-col",
                className
            )}
        >
            {/* Top Border */}
            <span className="absolute top-0 left-0 h-[2px] w-1/2 bg-[linear-gradient(90deg,#05CA3C_0%,rgba(5,202,60,0)_100%)] blur-[1px]" />

            {/* Left Border */}
            <span className="absolute top-0 left-0 w-[2px] h-1/2 bg-[linear-gradient(180deg,#05CA3C_0%,rgba(5,202,60,0)_100%)] blur-[1px]" />

            {/* Icon */}
            <div className={clsx("flex items-center", imageContainerClassName)}>
                <Image
                    src={icon}
                    alt={title}
                    width={80}
                    height={80}
                    className={clsx(
                        "object-contain drop-shadow-[0_0_10px_rgba(212,254,26,0.5)]",
                        imageClassName
                    )}
                />
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 text-white-primary">
                <h3 className="text-xl md:text-2xl font-bold ">
                    {title}
                </h3>

                <p className="text-sm md:text-[18px] opacity-90">
                    {description}
                </p>

                {hasInfo && (
                    <ul className="space-y-2">
                        {info.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm md:text-[18px] opacity-90">
                                <Image
                                    src="/files/icons/list_icon.png"
                                    alt="check"
                                    width={16}
                                    height={16}
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Button */}
            {showButton && (
                <div className="pt-4 mt-auto">
                    <div
                        className="h-12 w-full rounded-lg flex items-center justify-center"
                        style={{
                            background: "linear-gradient(270deg, #D4FE1A 0%, #39EEBE 100%)"
                        }}
                    >
                    </div>
                </div>
            )}
        </div>
    );
}
