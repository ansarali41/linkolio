import React from 'react';
import Image from 'next/image';

const TopBar = () => {
    return (
        <div className="w-full h-8 bg-[#ED7D4A] flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Image src="/images/icons/email-icon.svg" alt="Email" width={16} height={16} className="md:w-[16px] md:h-[16px] w-[9.909px] h-[9.909px]" />
                <p className="text-black md:text-base text-[9.909px] font-medium font-[inter] uppercase leading-[11.891px] tracking-[-0.015em] md:tracking-[-0.02em] md:leading-tight">
                    We are currently taking on more clients for {new Date().getFullYear()}
                </p>
                <Image src="/images/icons/email-icon.svg" alt="Email" width={16} height={16} className="md:w-[16px] md:h-[16px] w-[9.909px] h-[9.909px]" />
            </div>
        </div>
    );
};

export default TopBar;
