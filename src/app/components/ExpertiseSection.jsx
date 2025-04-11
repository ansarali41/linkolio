import DiamondLine from './DiamondLine';

export default function ExpertiseSection() {
    const expertiseItems = [
        {
            id: '01',
            title: 'Architecture',
            description:
                "Cloud, Sécurité, API Management",
        },
        {
            id: '02',
            title: 'Développement',
            description:
                'Back-end, front-end, Web, Mobile natif, Cross-platform, Industrialisation',
        },
        {
            id: '03',
            title: 'Pilotage',
            description:
                'Méthodologies Scrum et agilité à l’échelle pour des projets dynamiques et collaboratifs',
        },
    ];

    return (
        <section id="expertise">
            <DiamondLine diamondPosition="right" />
            <div className="py-[40px] lg:py-20 px-[20px] lg:px-32 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[15px] md:gap-0 items-center">
                    {/* Column 1 */}
                    <div className="col-span-1 lg:col-span-5">
                        <p className="text-[#ED7D4A] text-center lg:text-left leading-trim lg:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] lg:text-[40px] sm:text-[24px] lg:sm:text-[40px]">
                            <span className="text-white">NOS</span> domaines d’intervention
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
                        De l’architecture au développement, en passant par le pilotage agile, nos domaines d’intervention traduisent notre capacité à concevoir, construire et faire évoluer des solutions digitales performantes et robustes.
                        </p>
                    </div>
                </div>
                {/*
                 */}

                <div className="mb-[70px] hidden md:block"></div>

                {/* 3 div section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[15px] md:gap-[10px] items-center justify-items-center pt-[20px] md:pt-0">
                    {expertiseItems.map(item => (
                        <div key={item.id} className="col-span-1 md:col-span-6 lg:col-span-4 rounded-[12px]">
                            <div
                                style={{
                                    borderRight: '1px solid #ED7D4A',
                                    borderBottom: '1px solid #ED7D4A',
                                }}
                                className=" bg-[#313E47] rounded-[12px] p-[32px] flex flex-col items-center justify-center w-[401px] h-[414px]"
                            >
                                <div className="w-[97px] h-[97px] rounded-full bg-[#ED7D4A] flex justify-center items-center">
                                    <p className="text-white text-center font-[inter] text-[48px] font-semibold leading-[64px]">{item.id}</p>
                                </div>

                                <p
                                    style={{
                                        leadingTrim: 'both',
                                        textEdge: 'cap',
                                        textShadow: '1.69px 1.69px 1.69px rgba(237, 125, 74, 0.81)',
                                    }}
                                    className="text-white text-center font-[inter] text-[20px] leading-normal pt-[40px]"
                                >
                                    {item.title}
                                </p>

                                <p className="text-white text-center font-[poppins] text-[15px] font-light leading-[25.2px] pt-[28px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
