import Image from 'next/image';
import DiamondLine from './DiamondLine';

export default function SkillsSection() {
    const skills = [
        {
            icon: '/images/skills-icons/Architecture.png',
            title: 'Architecture',
            description: 'Our architects guarantee the design of innovative architecture while ensuring relevance to the business.',
        },
        {
            icon: '/images/skills-icons/Development.png',
            title: 'Development',
            description: 'Our developers are passionate and will help you optimize your development processes and improve your velocity.',
        },
        {
            icon: '/images/skills-icons/Devops.png',
            title: 'DevOps',
            description: 'We industrialize and make your services more reliable, while maintaining control of the varied and complex environments.',
        },
        {
            icon: '/images/skills-icons/BigData.png',
            title: 'Big Data',
            description: 'We help you take ownership of your data assets to know them, exploit them and enhance their value.',
        },
        {
            icon: '/images/skills-icons/Observability.png',
            title: 'Observability',
            description: 'Observability is the concern of all our experts because it guarantees the reliability of our solutions.',
        },
        {
            icon: '/images/skills-icons/Agility.png',
            title: 'Agility',
            description: 'Our agile mindset develops our resilience, frees up initiative and supports innovation and continuous improvement.',
        },
    ];

    return (
        <section>
            <DiamondLine diamondPosition="left" />
            <div className="py-[40px] lg:py-20 px-[20px] lg:px-32 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[15px] md:gap-0 items-center">
                    {/* Column 1 */}
                    <div className="col-span-1 lg:col-span-5">
                        <p className="text-[#ED7D4A] text-center lg:text-left leading-trim lg:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] lg:text-[40px] sm:text-[24px] lg:sm:text-[40px]">
                            <span className="text-white"> Our </span>Skills
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="hidden lg:flex justify-end">
                            <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center col-span-1 lg:col-span-5">
                        <p className="text-white font-[poppins] font-light text-[14px] leading-[20px] sm:text-base sm:leading-[156%]">
                            We specialize in creating innovative, user-centered solutions with expertise in UX/UI design, software development, and system optimization.
                        </p>
                    </div>
                </div>

                <div className="mb-[70px] hidden md:block"></div>

                {/* 3 div section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[15px] md:gap-[10px] items-center justify-items-center pt-[20px] md:pt-0">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                borderRight: '1px solid #ED7D4A',
                                borderBottom: '1px solid #ED7D4A',
                            }}
                            className="md:col-span-6 lg:col-span-4 rounded-[4px] border-2 border-[rgba(255,94,39,0.00)] bg-[#313E47] shadow-[0px_1px_15px_4px_rgba(0,0,0,0.17)] pt-[30px] pl-[45px] pr-[59px] h-[390px] w-[413px]"
                        >
                            <div className="flex items-center">
                                <Image src={item.icon} alt={item.title} width={100} height={100} />
                                <p className="text-white font-[inter] text-[30px] font-bold leading-normal">{item.title}</p>
                            </div>

                            <div className="pt-[25px]">
                                <p className="text-white font-[poppins] text-[23px] font-normal leading-[43px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
