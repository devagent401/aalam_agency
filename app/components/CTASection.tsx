import Button from "./ui/Button";

export default function CTASection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-dark-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-gray-800 bg-dark-medium/50 backdrop-blur-sm p-8 md:p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        {/* Heading */}
                        <h2 className="text-white-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            Ready to Build the Future?
                        </h2>

                        {/* Description */}
                        <p className="text-white-primary/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                            Let's discuss how we can engineer intelligent solutions for
                            your most ambitious challenges.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button
                                variant="primary"
                                className="bg-green-bright text-dark-deep hover:bg-green-secondary transition-colors px-8 py-4 text-base md:text-lg font-semibold"
                            >
                                Schedule Strategy Call
                            </Button>
                            <Button
                                variant="primary"
                                className="bg-transparent border-2 border-green-bright text-white-primary hover:bg-green-bright/10 transition-colors px-8 py-4 text-base md:text-lg font-semibold"
                            >
                                View Our Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

