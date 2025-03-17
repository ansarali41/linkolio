import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative  pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="relative z-10 animate-fade-in">
                        <div className="animate-slide-up space-y-6">
                            <h1 className="text-[40px] md:text-[56px] font-bold text-white tracking-[-0.02em] leading-[1.1]">
                                YOUR LINK TO
                                <span className="block text-[#ED7D4A]">EXPERTISE</span>
                            </h1>

                            {/* Stats */}
                            <div className="flex gap-8 flex-wrap">
                                {[
                                    { number: '45k+', label: 'Specialists' },
                                    { number: '200+', label: 'Projects' },
                                ].map((stat, index) => (
                                    <div key={index} className="flex items-center space-x-2 group">
                                        <span className="text-[32px] font-bold text-[#ED7D4A] transition-transform duration-300 group-hover:scale-110">{stat.number}</span>
                                        <span className="text-gray-400 text-lg">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-4 text-base font-medium text-black bg-[#ED7D4A] rounded-full hover:bg-[#ED7D4A]/90 transition-all duration-300 ease-out transform hover:translate-y-[-2px] hover:shadow-lg"
                                >
                                    Get Started
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative order-first md:order-last animate-fade-in">
                        <div className="aspect-square md:aspect-[4/3] relative rounded-2xl overflow-hidden bg-gray-800/80 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-gray-800/60">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                <p className="text-lg font-medium tracking-wide">Hero Image Coming Soon</p>
                            </div>

                            {/* Abstract Background Elements */}
                            <div className="absolute inset-0">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ED7D4A]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                                    <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-l from-[#ED7D4A]/30 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#ED7D4A]/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-[#ED7D4A]/20 to-transparent rounded-full blur-xl animate-pulse delay-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
