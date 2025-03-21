import Image from 'next/image';

export default function WhyUsSection() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-32 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-5 md:gap-26 items-center">
                {/* Column 1 */}
                <div>
                    <Image src="/images/why-us.png" alt="Why Us" className="w-full h-full object-cover rounded-2xl" width={600} height={500} priority />
                </div>

                {/* Column 2 */}
                <div>
                    <p className="text-[#ED7D4A] text-center md:text-left leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] md:sm:text-[40px]">
                        Why Us?
                    </p>
                    <p className="text-white font-poppins font-light text-[14px] sm:text-[16px] leading-[178%] sm:leading-[178%]">
                        We prioritize understanding your unique needs and challenges to deliver solutions that truly make a difference. By carefully selecting experts with the
                        right skills and knowledge in their respective fields, we ensure that you receive tailored, high-quality support for your organization. Every solution we
                        provide is designed to fit your specific goals and requirements, leaving no room for one-size-fits-all approaches. Our team of dedicated professionals
                        specializes in crafting high-performance and resilient digital solutions that stand the test of time. Whether it’s optimizing processes, implementing
                        cutting-edge technology, or driving innovation, we’re here to help your business thrive. By partnering with us, you gain access to expertise that empowers
                        your company to achieve its objectives efficiently and effectively, while staying ahead in today’s competitive landscape. When you work with us, you're not
                        just hiring a service provider—you’re gaining a trusted partner who is invested in your success.
                    </p>
                </div>
            </div>
        </section>
    );
}
