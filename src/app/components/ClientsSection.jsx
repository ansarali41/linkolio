'use client';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const clientData = [
    {
        id: 1,
        name: 'Andrew Rathore',
        position: 'Executive',
        rating: 5,
        image: '/images/client-1.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions, combining the most advanced web technologies.',
    },
    {
        id: 2,
        name: 'Breann Adamson',
        position: 'Executive',
        rating: 5,
        image: '/images/client-2.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions, combining the most advanced web technologies.',
    },
    {
        id: 3,
        name: 'John Doe',
        position: 'Executive',
        rating: 5,
        image: '/images/client-3.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions, combining the most advanced web technologies.',
    },
    {
        id: 4,
        name: 'Doe',
        position: 'Executive',
        rating: 5,
        image: '/images/client-3.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions, combining the most advanced web technologies.',
    },
    // Add more clients as needed
];

export default function ClientsSection() {
    const swiperRef = useRef(null);

    return (
        <section className="py-16 md:py-20 px-4 md:px-32 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-0 items-center mb-10">
                {/* Column 1 */}
                <div>
                    <p className="text-[#ED7D4A] text-center md:text-left leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] md:sm:text-[40px]">
                        <span className="text-white">Our</span> Client
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                </div>

                {/* Navigation Buttons - Only visible on desktop */}
                <div className="hidden lg:flex justify-end gap-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-[60px] h-[60px] rounded-full border-2 border-[#ED7D4A] hover:bg-[#ED7D4A]/10 transition-all duration-300 flex items-center justify-center group"
                        aria-label="Previous slide"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-110 transition-transform duration-300"
                        >
                            <path d="M15 19L8 12L15 5" stroke="#ED7D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-[60px] h-[60px] rounded-full border-2 border-[#ED7D4A] hover:bg-[#ED7D4A]/10 transition-all duration-300 flex items-center justify-center group"
                        aria-label="Next slide"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-110 transition-transform duration-300"
                        >
                            <path d="M9 5L16 12L9 19" stroke="#ED7D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <Swiper
                onBeforeInit={swiper => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                pagination={{
                    enabled: true,
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                className="w-full"
            >
                {clientData.map(client => (
                    <SwiperSlide key={client.id}>
                        <div className="bg-[#313E47] rounded-[20px] p-8 transition-all duration-300 hover:bg-opacity-90 group">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="relative w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-[#ED7D4A] border-opacity-20 group-hover:border-opacity-40 transition-all duration-300">
                                    <Image src={client.image} alt={client.name} width={90} height={90} className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-white font-inter font-semibold text-[26px] mb-2">{client.name}</h3>
                                    <p className="text-[#ED7D4A] font-poppins text-lg">{client.position}</p>
                                    <div className="flex gap-2 mt-3">
                                        {[...Array(client.rating)].map((_, i) => (
                                            <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#ED7D4A" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-white/90 font-poppins text-lg leading-[1.8]">{client.testimonial}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Mobile Pagination */}
            <div className="swiper-pagination mt-8 flex justify-center gap-2 lg:hidden"></div>

            <style jsx>{`
                :global(.swiper-pagination-bullet) {
                    width: 10px;
                    height: 10px;
                    background: rgba(237, 125, 74, 0.2);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                :global(.swiper-pagination-bullet-active) {
                    background: #ed7d4a;
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    );
}
