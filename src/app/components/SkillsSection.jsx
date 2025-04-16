import Image from 'next/image';
import DiamondLine from './DiamondLine';

export default function SkillsSection() {
    const skills = [
        {
            icon: '/images/skills-icons/Architecture.png',
            title: 'Architecture',
            description: 'Nos architectes conçoivent des architectures innovantes, tout en garantissant leur alignement avec les enjeux métiers.',
        },
        {
            icon: '/images/skills-icons/Development.png',
            title: 'Développement',
            description: 'Nos développeurs passionnés vous accompagnent dans l’optimisation de vos processus et l’amélioration de votre vélocité.',
        },
        {
            icon: '/images/skills-icons/Devops.png',
            title: 'DevOps',
            description: 'Nous industrialisons vos services et renforçons leur fiabilité, tout en maîtrisant des environnements complexes et hétérogènes.',
        },
        {
            icon: '/images/skills-icons/BigData.png',
            title: 'Big Data',
            description: 'Nous vous aidons à vous approprier vos actifs data pour mieux les comprendre, les exploiter et en extraire toute la valeur.',
        },
        {
            icon: '/images/skills-icons/Observability.png',
            title: 'Observabilité',
            description: 'L’observabilité est au cœur des préoccupations de nos experts : elle est garante de la fiabilité de nos solutions.',
        },
        {
            icon: '/images/skills-icons/Agility.png',
            title: 'Agilité',
            description: 'Notre culture agile développe la résilience, libère l’initiative et soutient l’innovation ainsi que l’amélioration continue.',
        },
    ];

    return (
        <section id="skills">
            <DiamondLine diamondPosition="left" />
            <div className="py-[40px] lg:py-17 px-[20px] lg:px-32 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[15px] md:gap-0 items-center">
                    {/* Column 1 */}
                    <div className="col-span-1 lg:col-span-5">
                        <p className="text-[#ED7D4A] text-center lg:text-left leading-trim lg:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] lg:text-[40px] sm:text-[24px] lg:sm:text-[40px]">
                            <span className="text-white"> Notre </span>Expertise
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="hidden lg:flex justify-center">
                            <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-span-1 lg:col-span-5">
                        <p className="text-white font-[poppins] font-light text-[14px] leading-[20px] sm:text-base sm:leading-[156%]">
                            Nous allions créativité et expertise technique pour concevoir des solutions innovantes, pensées pour l’utilisateur et optimisées pour la performance
                        </p>
                    </div>
                </div>

                <div className="mb-[70px] hidden md:block"></div>

                {/* 3 div section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[10px] md:gap-[10px] items-center justify-items-center pt-[20px] md:pt-0">
                    {skills.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                borderRight: '1px solid #ED7D4A',
                                borderBottom: '1px solid #ED7D4A',
                            }}
                            className="md:col-span-6 lg:col-span-4 rounded-[4px] border-2 border-[rgba(255,94,39,0.00)] bg-[#313E47] shadow-[0px_1px_15px_4px_rgba(0,0,0,0.17)] pt-[30px] px-[30px] h-[400px] w-[413px] mt-2"
                        >
                            <div className="flex items-center">
                                <div className="icon-wrapper">
                                    <Image src={item.icon} alt={item.title} width={100} height={100} />
                                </div>
                                <p className="text-white font-[inter] text-[30px] font-bold leading-normal pl-[15px]">{item.title}</p>
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
