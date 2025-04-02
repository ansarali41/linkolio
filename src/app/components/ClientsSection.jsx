'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const clientData = [
    {
        id: 1,
        firstName: 'Andrew',
        lastName: 'Rathore',
        position: 'Executive',
        rating: 5,
        image: '/images/client-1.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet  projects. We deliver unconventional solutions, combining the most advanced web technologies,',
    },
    {
        id: 2,
        firstName: 'Breann',
        lastName: 'Adamson',
        position: 'Executive',
        rating: 5,
        image: '/images/client-2.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet  projects. We deliver unconventional solutions, combining the most advanced web technologies,',
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Doe',
        position: 'Executive',
        rating: 5,
        image: '/images/client-3.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet  projects. We deliver unconventional solutions, combining the most advanced web technologies,',
    },
    {
        id: 4,
        firstName: 'Morgan',
        lastName: 'Doe',
        position: 'Executive',
        rating: 5,
        image: '/images/client-3.png',
        testimonial:
            'We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet  projects. We deliver unconventional solutions, combining the most advanced web technologies,',
    },
    // Add more clients as needed
];

export default function ClientsSection() {
    const swiperRef = useRef(null);

    return (
        <section className="py-16 md:py-20 px-4 md:px-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px] md:gap-0 items-center mb-10">
                {/* Column 1 */}
                <div>
                    <p className="text-[#ED7D4A] text-center md:text-left leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] md:sm:text-[40px]">
                        <span className="text-white">Our</span> Client
                    </p>
                </div>

                <div className="hidden lg:flex justify-end">
                    <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                </div>

                {/* Navigation Buttons - Only visible on desktop */}
                <div className="hidden lg:flex justify-end">
                    <div className="hidden lg:flex justify-end rounded-[28.942px] border-0 bg-gradient-to-l from-[rgba(255,107,44,0.50)] to-transparent">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="px-[19px] py-[11px] flex items-center justify-center group cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <FaArrowLeftLong className="text-[#B0ACAD] group-hover:text-[#FF5E27] transition-colors duration-300" />
                        </button>
                        <div className="flex justify-center">
                            <div className="w-[1.5px] my-[11px] bg-[#FF5E27]"></div>
                        </div>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="px-[19px] py-[11px] flex items-center justify-center group cursor-pointer"
                            aria-label="Next slide"
                        >
                            <FaArrowRightLong className="text-[#B0ACAD] group-hover:text-[#FF5E27] transition-colors duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <Swiper
                onBeforeInit={swiper => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                pagination={{
                    enabled: true,
                    clickable: true,
                    bulletSize: 15,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    enabled: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        navigation: {
                            enabled: false,
                        },
                        pagination: {
                            enabled: true,
                            clickable: true,
                            bulletSize: 15,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        },
                    },
                    768: {
                        slidesPerView: 2,
                        navigation: {
                            enabled: false,
                        },
                        pagination: {
                            enabled: true,
                            clickable: true,
                            bulletSize: 15,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        },
                    },
                    1024: {
                        slidesPerView: 2,
                        navigation: {
                            enabled: true,
                        },
                        pagination: {
                            enabled: false,
                        },
                    },
                }}
                className="w-full"
            >
                {clientData.map(client => (
                    <SwiperSlide key={client.id}>
                        <div className="relative">
                            {/* text content */}
                            <div className="relative">
                                <div className="bg-[#ED7D4A] rounded-[20px]  py-[101px] pl-[56px] w-[285px] h-[345px] inline-block">
                                    <p className="text-[#313E47] font-[inter] font-semibold text-[25px] leading-[30px] mb-2">
                                        {client.firstName} <br />
                                        {client.lastName}
                                    </p>
                                    <p className="text-[#313E47] font-poppins font-medium text-[16px] leading-[25px]">{client.position}</p>
                                    {/* line */}
                                    <div className="w-[1.5px] my-[11px] bg-[#FF5E27] mx-6"></div>
                                    {/* rating */}
                                    <div className="flex gap-2 mt-3">
                                        {[...Array(client.rating)].map((_, i) => (
                                            <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* image div */}
                            <div className="absolute left-25 top-1/2 -translate-y-1/2 ml-[100px]">
                                <div className="relative ">
                                    <Image src={client.image} alt={client.firstName} width={240} height={240} className="object-cover rounded-[20px]" />
                                </div>
                            </div>
                            {/* testimonial */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 ml-[100px]">
                                <div className="relative ">
                                    <div className="flex items-center justify-center w-[308px]">
                                        <p className="text-white font-poppins font-medium text-[16px] leading-[25px]">{client.testimonial}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Mobile Pagination */}
            <div className="swiper-pagination mt-8 flex justify-center gap-2 lg:hidden"></div>

            <style jsx>{`
                :global(.swiper-pagination-bullet) {
                    width: 15px;
                    height: 15px;
                    background: #c4c4c4;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                :global(.swiper-pagination-bullet-active) {
                    background: #ed7d4a;
                }
            `}</style>
        </section>
    );
}
