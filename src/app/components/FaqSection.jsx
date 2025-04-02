'use client';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function FaqSection() {
    const faqs = [
        {
            question: 'How much money can I make with Communities using Linkolio?',
            answer: 'We offer a comprehensive range of services including web development, mobile app development, UI/UX design, cloud solutions, data analytics, and cybersecurity.',
        },
        {
            question: 'How much money can I make with Communities using Linkolio?',
            answer: 'Project timelines vary depending on scope and complexity. We provide detailed estimates after initial consultation.',
        },
        {
            question: 'How much money can I make with Communities using Linkolio?',
            answer: 'Our process includes requirements gathering, planning, design, development, testing, and deployment, with regular client communication throughout.',
        },
        {
            question: 'How much money can I make with Communities using Linkolio?',
            answer: 'Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally.',
        },
        {
            question: 'How much money can I make with Communities using Linkolio?',
            answer: 'Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-[40px] md:py-20 px-[20px] md:px-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[15px] md:gap-0 items-center">
                {/* Column 1 */}
                <div className="lg:col-span-5">
                    <p className="text-[#ED7D4A] text-center lg:text-left leading-trim lg:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] lg:text-[40px] sm:text-[24px] lg:sm:text-[40px]">
                        <span className="text-white">Frequently</span> asked <span className="text-white">questions</span>
                    </p>
                </div>

                <div className="lg:flex justify-center hidden lg:col-span-2">
                    <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                </div>
                {/* Column 2 */}
                <div className="text-center md:col-span-5">
                    <p className="text-white font-[poppins] font-light text-[14px] leading-[20px] sm:text-base sm:leading-[156%]">
                        Find answers to common queries about our services, process, and expertise. Our FAQ section is designed to provide clarity and help you make informed
                        decisions. If you need further assistance, feel free to reach out!
                    </p>
                </div>
            </div>

            <div className=" text-white">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-opacity-80 overflow-hidden">
                        <button
                            className="w-full px-2  pb-[16px] pt-[36px] text-left flex justify-between items-center "
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="font-poppins font-semibold text-[13px] md:text-[16px] leading-[19.375px]">{faq.question}</span>
                            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                <IoIosArrowDown />
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="py-[16px] pt-[16px] px-2 text-white">
                                <span className="font-poppins font-light text-[13px] md:text-[16px] leading-[19.375px]">{faq.answer}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
