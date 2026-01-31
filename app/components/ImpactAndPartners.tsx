import React from 'react';

const ImpactAndPartners = () => {
    const stats = [
        { value: "150+", label: "Projects Delivered" },
        { value: "$50M+", label: "Client Revenue Generated" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "40+", label: "Countries Served" },
    ];

    return (
        <section className="bg-dark-deep py-24">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group border border-white-primary/10 hover:border-green-bright/50 rounded-2xl p-10 flex flex-col items-center justify-center bg-dark-medium/20 transition-all duration-300 min-h-[100px]"
                        >
                            <h3 className="text-5xl lg:text-6xl font-bold text-green-bright mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-lg text-center font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Partners Bar */}
                <div className="w-full border border-green-bright/30 rounded-md py-8 px-10 flex flex-col lg:flex-row items-center justify-between gap-8 bg-transparent">
                    <span className="text-white-primary text-xl font-light whitespace-nowrap min-w-fit">
                        Trusted Technology Partners:
                    </span>

                    <div className="flex flex-wrap justify-center lg:justify-end gap-12 w-full opacity-80">
                        {/* Logo Placeholders matching the image style */}
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="flex items-center gap-2 group cursor-pointer">
                                <div className="text-white-primary group-hover:text-green-bright transition-colors">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.5 12H21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 2.5V21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-white-primary font-bold text-lg tracking-widest group-hover:text-white-primary/90">
                                    logoipsum
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ImpactAndPartners;
