import { MdEmail, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import DiamondLine from './DiamondLine';
import './RadioButton.css';

export default function ContactSection() {
    return (
        <section id="contact">
            <DiamondLine diamondPosition="left" />
            <div className="py-[40px] lg:py-20 px-[20px] lg:px-32 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[15px] lg:gap-0 items-center pb-[25px] lg:pb-[60px]">
                    {/* Column 1 */}
                    <div className="lg:col-span-5">
                        <p className="text-[#ED7D4A] text-center lg:text-left leading-trim lg:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] lg:text-[40px] sm:text-[24px] lg:sm:text-[40px]">
                            <span className="text-white">CONTACTEZ</span> NOUS
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="lg:flex justify-center hidden lg:col-span-2">
                        <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center lg:col-span-5">
                        <p className="text-white font-[poppins] font-light text-[14px] leading-[20px] sm:text-base sm:leading-[156%]">
                            Une question ou une remarque ? Écrivez-nous un message.
                        </p>
                    </div>
                </div>
                <div className="border border-[#ED7D4A] py-[15px] px-[8px] lg:p-[10px] rounded">
                    <div className=" grid grid-cols-1 lg:grid-cols-12 gap-[10px]  2xl:gap-[114px]">
                        {/* Contact Information */}

                        <div className="bg-[#ED7D4A] py-[40px] px-[12px] lg:p-[40px] rounded md:col-span-5">
                            <h3 className="text-white font-[inter] font-semibold text-[28px] leading-none mb-[16px]">Information de Contact</h3>
                            <div className="space-y-[55px]">
                                <p className="flex items-center text-white font-[inter] font-normal text-[16px] leading-normal">
                                    <span className="pr-6">
                                        <MdPhoneInTalk className="text-white" />
                                    </span>
                                    0033.9.77.97.27.39
                                </p>
                                <p className="flex items-center text-white font-[inter] font-normal text-[16px] leading-normal">
                                    <span className="pr-6">
                                        <MdEmail className="text-white" />
                                    </span>
                                    contact@linkolia.com
                                </p>
                                <p className="flex items-center text-white font-[inter] font-normal text-[16px] leading-normal">
                                    <span className="pr-6">
                                        <MdLocationOn className="text-white" />
                                    </span>
                                    295, rue Du Professeur Paul Milliez - 94500 Champigny-sur-Marne. France.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7  my-[20px] lg:mx-[15px]">
                            <form className="space-y-[50px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white font-[inter] text-[12px] leading-[20px] font-500">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="firstName"
                                            className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                            placeholder="Votre prénom"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="text" className="block text-sm font-medium text-white font-[inter] text-[12px] leading-[20px] font-500">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="text"
                                            name="lastName"
                                            className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white font-[inter] text-[12px] leading-[20px] font-500">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                            placeholder="Votre email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white font-[inter] text-[12px] leading-[20px] font-500">
                                            Numéro de téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                            placeholder="Votre numéro de téléphone"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-white font-[inter] text-[12px] leading-[20px] font-500 pb-[12px]">
                                        Select Subject?
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center">
                                            <input type="radio" id="general" name="subject" value="general" className="custom-radio" />
                                            <label htmlFor="general" className="ml-3 text-sm text-gray-300 font-[inter]">
                                                Demande générale
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="support" name="subject" value="support" className="custom-radio" />
                                            <label htmlFor="support" className="ml-3 text-sm text-gray-300 font-[inter]">
                                                Demande de support
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="partnership" name="subject" value="partnership" className="custom-radio" />
                                            <label htmlFor="partnership" className="ml-3 text-sm text-white font-[inter]">
                                                Demande de partenariat
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="other" name="subject" value="other" className="custom-radio" />
                                            <label htmlFor="other" className="ml-3 text-sm text-white font-[inter]">
                                                Autre
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white font-[inter] text-[12px] leading-[20px] font-500">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={1}
                                        className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                        placeholder="Ecrire votre message.."
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className=" bg-[#ED7D4A] text-white px-6 py-3 rounded-lg hover:bg-[#ED7D4A] transition-colors font-medium">
                                        Envoyer Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
