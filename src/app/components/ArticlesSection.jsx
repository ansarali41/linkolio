'use client';
import { useRef } from 'react';
import { FaArrowLeftLong, FaArrowRightLong, FaCircleArrowRight } from 'react-icons/fa6';
import { IoCaretDownSharp } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from 'react-icons/fa6';

const skills = [
    {
        title: 'How to create a modern logo that attracts customers?',
        description: 'I am too much excited that it has been featured. The idea is not very unique. As a designer.',
        date: 'April 21,2020',
    },
    {
        title: 'How to create a modern logo that attracts customers?',
        description: 'I am too much excited that it has been featured. The idea is not very unique. As a designer.',
        date: 'April 21,2020',
    },
    {
        title: 'How to create a modern logo that attracts customers?',
        description: 'I am too much excited that it has been featured. The idea is not very unique. As a designer.',
        date: 'April 21,2020',
    },
    {
        title: 'How to create a modern logo that attracts customers?',
        description: 'I am too much excited that it has been featured. The idea is not very unique. As a designer.',
        date: 'April 21,2020',
    },
    {
        title: 'How to create a modern logo that attracts customers?',
        description: 'I am too much excited that it has been featured. The idea is not very unique. As a designer.',
        date: 'April 21,2020',
    },
    {
        title: 'How to create a modern logo that attracts customers?',
        description: 'I am too much excited that it has been featured. The idea is not very unique. As a designer.',
        date: 'April 21,2020',
    },
];

export default function ArticlesSection() {
    const swiperRef = useRef(null);

    return (
        <section className="py-[40px] lg:py-20 px-[20px] lg:px-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[15px] md:gap-0 items-center mb-10">
                {/* Column 1 */}
                <div className="col-span-1 lg:col-span-5">
                    <p className="text-[#ED7D4A] text-center md:text-left leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] md:sm:text-[40px]">
                        <span className="text-white">Our Latest Articles From </span> Blog
                    </p>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <div className="hidden lg:flex justify-end">
                        <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                    </div>
                </div>

                {/* Navigation Buttons - Only visible on desktop */}
                <div className="hidden lg:flex justify-end col-span-1 lg:col-span-5">
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
                slidesPerView={4}
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
                        slidesPerView: 4,
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
                {skills.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <h1 className="text-white font-inter text-[19.375px] font-semibold leading-[22.604px] ">STYLE</h1>
                            <div className="py-[30px]">
                                <IoCaretDownSharp className="text-[#ED7D4A] w-[16.146px] h-[16.146px]" />
                            </div>
                            <div
                                style={{
                                    borderTop: '1.615px solid var(--rrrrr, #FFF)',
                                    borderLeft: '1.615px solid var(--rrrrr, #FFF)',
                                    borderRight: '1.615px solid var(--rrrrr, #ED7D4A)',
                                    borderBottom: '1.615px solid var(--rrrrr, #ED7D4A)',
                                    background: 'var(--Primary-Color, #313E47)',
                                    borderRadius: '9.688px',
                                }}
                                className="px-[20px] py-[38px]"
                            >
                                {/* date */}
                                <p className="text-white font-poppins text-[12.917px] font-normal leading-[16.146px]">{item.date}</p>

                                <p className="text-white font-inter text-[19.375px] font-semibold leading-[25.833px] pt-[12px]">{item.title}</p>

                                <div className="pt-[20px]">
                                    <p className="text-[#EAEAEA] font-poppins font-light text-[12.917px] leading-[156%]">{item.description}</p>
                                </div>
                                <div className="pt-[32px]">
                                    <FaArrowRight className="text-[#FF5E27] bg-[#465057] w-[30px] h-[30px] rounded-[50%] p-[7px]" cursor="pointer" />
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
