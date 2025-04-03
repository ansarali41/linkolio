'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DiamondLine from './DiamondLine';

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
];

export default function ClientsSection({ isShow }) {
    const swiperRef = useRef(null);

    return (
        isShow && (
            <section>
                <DiamondLine diamondPosition="right" />
                <div className="py-[40px] lg:py-20">
                    <div className=" px-[20px] lg:px-32 overflow-hidden">
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
                    </div>

                    {/* Carousel */}
                    <div className="px-[20px] lg:pl-32 lg:pr-0 overflow-hidden">
                        <Swiper
                            onBeforeInit={swiper => {
                                swiperRef.current = swiper;
                            }}
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1.8}
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
                                1024: {
                                    slidesPerView: 1,
                                    navigation: {
                                        enabled: true,
                                    },
                                    pagination: {
                                        enabled: false,
                                    },
                                },
                                1280: {
                                    slidesPerView: 1.8,
                                    navigation: {
                                        enabled: true,
                                    },
                                    pagination: {
                                        enabled: false,
                                    },
                                },
                            }}
                        >
                            {clientData.map(client => (
                                <SwiperSlide key={client.id}>
                                    <div className="relative">
                                        {/* text content */}
                                        <div className="relative">
                                            <div className="bg-[#ED7D4A] rounded-[15px] lg:rounded-[20px] py-[29px] lg:py-[101px] pl-[5px]  lg:pl-[56px] w-[90px] h-[122px] lg:w-[285px] lg:h-[345px] inline-block mb-[60px]">
                                                <p className="text-[#313E47] font-[inter] font-semibold text-[10px] lg:text-[25px] leading-[12px] lg:leading-[30px] mb-2">
                                                    {client.firstName} <br />
                                                    {client.lastName}
                                                </p>
                                                <p className="text-[#313E47] font-poppins font-medium text-[6px] lg:text-[10px] leading-[15px] lg:leading-[25px]">
                                                    {client.position}
                                                </p>
                                                {/* line */}
                                                <div className="w-[1.5px] my-[11px] bg-[#FF5E27] mx-6"></div>
                                                {/* rating */}
                                                <div className="flex gap-1 lg:gap-2 mt-3">
                                                    {[...Array(client.rating)].map((_, i) => (
                                                        <svg key={i} className="lg:w-4 lg:h-4 w-2 h-2" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* image div */}
                                        <div className="absolute left-18 lg:left-50 top-15 lg:top-1/2 -translate-y-1/2">
                                            <div className="relative ">
                                                <Image
                                                    src={client.image}
                                                    alt={client.firstName}
                                                    width={240}
                                                    height={240}
                                                    className="w-[75px] h-[75px] lg:w-[240px] lg:h-[240px] object-cover rounded-[20px]"
                                                />
                                            </div>
                                        </div>
                                        {/* testimonial */}
                                        <div className="absolute left-42 lg:left-115 top-15 lg:top-1/2 -translate-y-1/2">
                                            <div className="relative ">
                                                <div className="flex items-center justify-center lg:w-[300px]">
                                                    <p className="text-white font-poppins font-medium text-[10px] lg:text-[16px] leading-[15px] lg:leading-[25px]">
                                                        {client.testimonial}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

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
                </div>
            </section>
        )
    );
}
