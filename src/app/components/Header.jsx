'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { href: '#home', label: 'Accueil' },
        { href: '#why-us', label: 'Pourquoi Nous ?' },
        { href: '#expertise', label: "Nos Domaines d'intervention" },
        { href: '#skills', label: 'Notre Expertise' },
    ];

    const isActive = href => {
        return pathname === href;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="lg:pt-[32px] px-[21px] lg:px-32 overflow-hidden absolute top-8 lg:top-5 left-0 right-0 z-50">
            <div className="rounded-[10px] lg:bg-[rgba(237,125,74,0.26)] lg:shadow-[4px_4px_20px_4px_rgba(0,0,0,0.10)] lg:backdrop-blur-[106.5px] p-[10px]">
                <div className="grid grid-cols-12 items-center">
                    {/* images */}
                    <div className="col-span-2">
                        <Image src="/images/logos/logo.png" alt="Logo" width={222} height={60} />
                    </div>

                    {/* links */}
                    <div className="col-span-8 hidden lg:flex items-center justify-center gap-[70px]">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-[inter] font-normal text-[19px] leading-[150%] ${
                                    isActive(link.href)
                                        ? 'relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#ED7D4A] after:rounded-[10px] text-[#ED7D4A]'
                                        : 'text-white'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* button */}
                    <div className="col-span-2 hidden lg:flex items-center justify-end">
                        <Link href="/#contact">
                            <button
                                type="button"
                                className="bg-[#ED7D4A] text-white px-7 py-5 rounded-lg hover:bg-[#ED7D4A] transition-colors font-[inter] font-semibold text-[20px] leading-[28px]"
                            >
                                Contactez-nous
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden absolute top-1/2 -translate-y-1/2 right-4 z-50">
                <button onClick={toggleMenu} className="text-[#ED7D4A] text-2xl">
                    <RxHamburgerMenu />
                </button>
            </div>

            {/* Mobile menu sidebar */}
            <div className={`fixed inset-0 bg-black/50 z-50 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
                <div
                    className="fixed inset-y-0 left-0 w-[280px] bg-[#313E47] p-6 transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-end">
                        <button onClick={toggleMenu} className="text-[#ED7D4A] text-2xl">
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                        <Image src="/images/logos/logo.png" alt="Logo" width={222} height={60} />
                    </div>

                    <nav className="space-y-4">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block text-white text-[19px] leading-[150%] font-[inter] font-normal ${isActive(link.href) ? 'text-[#ED7D4A]' : ''}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full bg-[#ED7D4A] text-white px-11 py-5 rounded-lg hover:bg-[#ED7D4A] transition-colors font-[inter] font-semibold text-[20px] leading-[28px]"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
