export default function DiamondLine({ diamondPosition }) {
    return (
        <div className="flex items-center justify-center w-full py-16 md:py-20 px-4 md:px-32 overflow-hidden">
            <div className="flex items-center w-full">
                {diamondPosition === 'left' ? (
                    <>
                        <div className="h-[1px] w-[80px] bg-white/70"></div>
                        <div className="group relative flex items-center justify-center">
                            <div className="absolute w-[38px] h-[38px] bg-[#ED7D4A]/20 blur-xl rounded-full"></div>
                            <div className="relative flex-shrink-0 w-[38px] h-[38px] -rotate-[44.774deg] bg-[#ED7D4A] border border-white/70"></div>
                        </div>
                        <div className="h-[1px] flex-grow bg-white/70"></div>
                    </>
                ) : (
                    <>
                        <div className="h-[1px] flex-grow bg-white/70"></div>
                        <div className="group relative flex items-center justify-center">
                            <div className="absolute w-[38px] h-[38px] bg-[#ED7D4A]/20 blur-xl rounded-full"></div>
                            <div className="relative flex-shrink-0 w-[38px] h-[38px] -rotate-[44.774deg] bg-[#ED7D4A] border border-white/70"></div>
                        </div>
                        <div className="h-[1px] w-[80px] bg-white/70"></div>
                    </>
                )}
            </div>
        </div>
    );
}
