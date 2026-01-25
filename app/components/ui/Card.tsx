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
                "relative overflow-hidden rounded-[20px] p-6 md:p-8 bg-card-gradient flex flex-col group transition-all duration-300 border border-green-secondary/10",
                className
            )}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(5,202,60,0.3)_0%,transparent_70%)]" />

            <span className="absolute top-0 left-0 h-[1.5px] w-full bg-linear-to-r from-green-secondary/40 via-transparent to-transparent opacity-50" />

            <span className="absolute top-0 left-0 w-[1.5px] h-full bg-linear-to-b from-green-secondary/40 via-transparent to-transparent opacity-50" />

            <div className={clsx("relative flex items-center z-10", imageContainerClassName)}>

                <div className="absolute inset-0 bg-green-secondary/10 blur-[60px] rounded-full" />

                <Image
                    src={icon}
                    alt={title}
                    width={200}
                    height={200}
                    className={clsx(
                        "relative object-contain transition-transform duration-500 group-hover:scale-105",
                        imageClassName
                    )}
                />
            </div>

            <div className="relative z-10 space-y-2 mt-auto">
                <h3 className="text-xl md:text-[22px] font-semibold text-white">
                    {title}
                </h3>

                <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-[90%]">
                    {description}
                </p>

                {hasInfo && (
                    <ul className="space-y-2 mt-4">
                        {info.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                                <Image
                                    src="/files/icons/list_icon.png"
                                    alt="check"
                                    width={14}
                                    height={14}
                                    className="opacity-70"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {showButton && (
                <div className="relative z-10 pt-6">
                    <div
                        className="h-[52px] w-full rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(5,202,60,0.2)]"
                        style={{
                            background: "linear-gradient(270deg, #05CA3C 0%, #39EEBE 100%)"
                        }}
                    >
                    </div>
                </div>
            )}
        </div>
    );
}
