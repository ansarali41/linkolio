'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuBurger } from 'react-icons/ci';

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/#why-us', label: 'Why Us' },
        { href: '/#expertise', label: 'Our Expertise' },
        { href: '/#skills', label: 'Our Skills' },
    ];

    return (
        <header className=" lg:pt-[32px] px-4 lg:px-32 overflow-hidden absolute top-5 left-0 right-0">
            <div className=" rounded-[10px] bg-[rgba(237,125,74,0.26)] shadow-[4px_4px_20px_4px_rgba(0,0,0,0.10)] backdrop-blur-[106.5px] p-[10px]">
                <div className="grid grid-cols-12 items-center">
                    {/* images */}
                    <div className="col-span-3">
                        <Image src="/images/logos/logo.png" alt="Logo" width={222} height={60} />
                    </div>

                    {/* links */}
                    <div className="col-span-6 flex items-center justify-center gap-[70px]">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-[inter] font-normal text-[19px] leading-[150%] ${
                                    pathname === link.href
                                        ? 'relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#ED7D4A] after:rounded-[10px] text-[#ED7D4A]'
                                        : 'text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* button */}
                    <div className="col-span-3 flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-[#ED7D4A] text-white px-11 py-5 rounded-lg hover:bg-[#ED7D4A] transition-colors font-[inter] font-semibold text-[20px] leading-[28px]"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
