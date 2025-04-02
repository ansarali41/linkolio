'use client';
import Image from 'next/image';
import Header from './Header';

export default function HeroSection() {
    return (
        <section className="bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover bg-center">
            {/* header */}
            <Header />
            <div className="pb-[40px] lg:pb-0 pl-[20px] lg:pl-32 overflow-hidden">
                <div className="grid md:grid-cols-12 items-center ">
                    {/* content div */}
                    <div className="text-white col-span-12 lg:col-span-5">
                        <div className="mt-[80px] text-center lg:text-start lg:mt-[200px]">
                            <h1 className="font-[inter] font-[700] text-[32px] lg:text-[66px] leading-[122%] uppercase">YOUR Link to Expertise</h1>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 lg:gap-10 mt-[14px] lg:mt-[60px]">
                            <div>
                                <p className="font-[inter] font-[600] text-[25.694px] lg:text-[38.75px]">40k</p>
                                <p className="font-[inter] font-normal text-[14px] lg:text-[22.604px] text-[rgba(255,255,255,0.88)] pt-[10px]">Satisfied Clients</p>
                            </div>
                            {/* vertical line */}
                            <div>
                                <div className="flex justify-end">
                                    <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.86)]"></div>
                                </div>
                            </div>

                            <div>
                                <p className="font-[inter] font-[600] text-[25.694px] lg:text-[38.75px]">20</p>
                                <p className="font-[inter] font-normal text-[14px] lg:text-[22.604px] text-[rgba(255,255,255,0.88)] pt-[10px]">Awards Won</p>
                            </div>
                        </div>
                        <div className="mt-[18px] lg:mt-[65px] text-center lg:text-start">
                            <button
                                type="submit"
                                className="bg-[#ED7D4A] text-white px-11 py-5 rounded-lg hover:bg-[#ED7D4A] transition-colors font-[inter] font-semibold text-[20px] leading-[28px]"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    {/* image div */}
                    <div className="col-span-12 hidden lg:block lg:col-span-7">
                        <div className="flex items-center justify-end">
                            <Image src="/images/hero-section.png" alt="Hero" className="h-full w-full" objectFit="cover" width={600} height={500} priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
