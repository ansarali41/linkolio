import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-16 lg:py-20 lg:pb-[50px] px-4 lg:px-32 overflow-hidden">
            <div>
                <div className="flex items-center justify-center">
                    <Image src="/images/logos/logo.png" alt="Logo" width={222} height={60} />
                </div>
                {/* 4 links in center */}
                <div className="flex items-center justify-center gap-[26px] py-[50px]">
                    <Link href="/" className="font-[inter] text-[18px] font-normal leading-[150%] text-[#E4E4E7] mb-4">
                        Home
                    </Link>
                    <Link href="/" className="font-[inter] text-[18px] font-normal leading-[150%] text-[#E4E4E7] mb-4">
                        About Us
                    </Link>
                    <Link href="/" className="font-[inter] text-[18px] font-normal leading-[150%] text-[#E4E4E7] mb-4">
                        Review
                    </Link>
                    <Link href="/" className="font-[inter] text-[18px] font-normal leading-[150%] text-[#E4E4E7] mb-4">
                        Portfolio
                    </Link>
                </div>
            </div>

            {/* footer navbar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 bg-[#ED7D4A] rounded-lg p-[16px]">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="cursor-pointer p-[14px] bg-white rounded-full flex items-center justify-center">
                        <FaFacebook size={24} className="text-[#ED7D4A]" />
                    </div>
                    <div className="cursor-pointer p-[14px] bg-white rounded-full flex items-center justify-center">
                        <FaTwitter size={24} className="text-[#ED7D4A]" />
                    </div>
                    <div className="cursor-pointer p-[14px] bg-white rounded-full flex items-center justify-center">
                        <FaLinkedin size={24} className="text-[#ED7D4A]" />
                    </div>
                </div>
                <div className="flex items-center justify-center py-[25px] lg:py-0">
                    <p className="text-white font-[inter] font-normal text-[18px] leading-[150%]">CoinSea {new Date().getFullYear()} All Rights Reserved</p>
                </div>
                <div className="flex items-center justify-center py-[25px] lg:py-0">
                    <p className="text-white font-[inter] font-normal text-[18px] leading-[150%]">Design by Munazza</p>
                </div>
                <div className="flex items-center justify-center py-[25px] lg:py-0">
                    <p className="text-white font-[inter] font-normal text-[18px] leading-[150%]">
                        <Link href="/#privacy-policy">Privacy Policy</Link> | <Link href="/#terms-of-service">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
