export default function ExpertiseSection() {
    const expertiseItems = [
        {
            id: '01',
            title: 'Architecture',
            description:
                "Could you clarify which architecture you're referring to? Is it related to software architecture, system design, or something else? This will help me craft a more accurate sub-description for you.",
        },
        {
            id: '02',
            title: 'Piloting',
            description:
                'Piloting refers to the process of testing a new project, system, or solution in a controlled or limited environment before its full-scale implementation. It involves deploying a smaller version or prototype to evaluate its functionality,',
        },
        {
            id: '03',
            title: 'Development',
            description:
                'Development refers to the process of creating and building a product, system, or solution from concept to completion. It encompasses a series of stages, including planning, design, coding, testing, and deployment. The development ',
        },
    ];

    return (
        <section className="py-16 md:py-20 px-4 md:px-32 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-0 items-center">
                {/* Column 1 */}
                <div>
                    <p className="text-[#ED7D4A] text-center md:text-left leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] md:sm:text-[40px]">
                        <span className="text-white">Our</span> Expertise
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                </div>

                {/* Column 2 */}
                <div>
                    <p className="text-white font-poppins font-light text-[14px] sm:text-[16px] leading-[178%] sm:leading-[178%]">
                        We specialize in creating innovative, user-centered solutions with expertise in UX/UI design, software development, and system optimization.
                    </p>
                </div>
            </div>

            <div className="mb-[70px] hidden md:block"></div>

            {/* 3 div section */}
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[10px] items-center">
                {expertiseItems.map(item => (
                    <div key={item.id} className="rounded-[12px]">
                        <div
                            style={{
                                borderRight: '1px solid #ED7D4A',
                                borderBottom: '1px solid #ED7D4A',
                            }}
                            className="bg-[#313E47] rounded-[12px] p-[32px] flex flex-col items-center justify-center w-[401px] h-[414px]"
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
        </section>
    );
}
