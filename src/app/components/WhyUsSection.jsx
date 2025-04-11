import Image from 'next/image';
import DiamondLine from './DiamondLine';

export default function WhyUsSection() {
    return (
        <section id="why-us">
            <DiamondLine diamondPosition="left" />
            <div className="py-[40px] lg:py-20 px-[20px] lg:px-32 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-5 md:gap-26 items-center">
                    {/* Column 1 */}
                    <div>
                        <Image src="/images/why-us.png" alt="Why Us" className="w-full h-full object-cover rounded-2xl" width={600} height={500} priority />
                    </div>

                    {/* Column 2 */}
                    <div>
                        <p className="text-[#ED7D4A] leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] pb-[22px]">
                            Pourquoi Nous ?
                        </p>
                        <p className="text-white font-poppins font-light text-[14px] sm:text-[16px] leading-[178%] sm:leading-[178%]">
                            Nous prêtons une attention particulière à la comprehension de votre besoin pour vous mettre à disposition des experts soigneusement sélectionnés par rapport à leurs domaines de compétence afin de vous mettre en place une solution sur-mesure pour votre organisation.
                            Avec notre équipe d’experts, nous fournissons des solutions digitales performantes et résilientes. Nous aidons les entreprises à atteindre leurs objectifs de manière innovante et efficace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
