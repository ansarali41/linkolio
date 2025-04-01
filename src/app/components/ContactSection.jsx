import { MdEmail, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';

export default function ContactSection() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-32 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-0 items-center">
                {/* Column 1 */}
                <div>
                    <p className="text-[#ED7D4A] text-center md:text-left leading-trim md:leading-none text-edge-cap font-[inter] font-semibold tracking-[-0.02em] uppercase text-[22px] md:text-[40px] sm:text-[24px] md:sm:text-[40px]">
                        <span className="text-white">CONTACT</span> US
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-[1.5px] h-[81px] bg-[rgba(255,94,39,0.20)]"></div>
                </div>

                {/* Column 2 */}
                <div>
                    <p className="text-white font-poppins font-light text-sm leading-[156%] sm:text-base sm:leading-[156%]">Any question or remarks? Just write us a message</p>
                </div>
            </div>

            <div className="pt-[60px] grid grid-cols-1 md:grid-cols-12 gap-[114px]">
                {/* Contact Information */}

                <div className="bg-[#ED7D4A] p-[40px] rounded col-span-5">
                    <h3 className="text-white font-inter font-semibold text-[28px] leading-none mb-[16px]">Contact Information</h3>
                    <p className="text-white font-poppins font-normal text-[16px] leading-normal pb-[55px]">Say something to start a live chat!</p>
                    <div className="space-y-[55px]">
                        <p className="flex items-center text-white font-inter font-normal text-[16px] leading-normal">
                            <span className="pr-6">
                                <MdPhoneInTalk className="text-white" />
                            </span>
                            +331 54 296 7490
                        </p>
                        <p className="flex items-center text-white font-inter font-normal text-[16px] leading-normal">
                            <span className="pr-6">
                                <MdEmail className="text-white" />
                            </span>
                            mondher.saadaoui@gmail.com
                        </p>
                        <p className="flex items-center text-white font-inter font-normal text-[16px] leading-normal">
                            <span className="pr-6">
                                <MdLocationOn className="text-white" />
                            </span>
                            France, Massachusetts 02156 Europe States
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-span-7">
                    <form className="space-y-[50px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white font-inter text-[12px] leading-[20px] font-500">
                                    First Name
                                </label>
                                <input type="text" id="name" name="firstName" className="w-full px-1 py-3 text-white border-b border-white outline-none" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium text-white font-inter text-[12px] leading-[20px] font-500">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="text"
                                    name="lastName"
                                    className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                    placeholder="Your last name"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white font-inter text-[12px] leading-[20px] font-500">
                                    Email
                                </label>
                                <input type="email" id="email" name="email" className="w-full px-1 py-3 text-white border-b border-white outline-none" placeholder="Your email" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white font-inter text-[12px] leading-[20px] font-500">
                                    Phone
                                </label>
                                <input type="tel" id="phone" name="phone" className="w-full px-1 py-3 text-white border-b border-white outline-none" placeholder="Your phone" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-white font-inter text-[12px] leading-[20px] font-500">
                                Select Subject
                            </label>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="general"
                                        name="subject"
                                        value="general"
                                        className="w-4 h-4 text-white bg-gray-100 border-gray-300 focus:ring-[#ED7D4A]"
                                    />
                                    <label htmlFor="general" className="ml-3 text-sm text-gray-300 font-inter">
                                        General Inquiry
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="support"
                                        name="subject"
                                        value="support"
                                        className="w-4 h-4 text-white bg-gray-100 border-gray-300 focus:ring-[#ED7D4A]"
                                    />
                                    <label htmlFor="support" className="ml-3 text-sm text-gray-300 font-inter">
                                        Support Request
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="partnership"
                                        name="subject"
                                        value="partnership"
                                        className="w-4 h-4 text-white bg-gray-100 border-gray-300 focus:ring-[#ED7D4A]"
                                    />
                                    <label htmlFor="partnership" className="ml-3 text-sm text-white font-inter">
                                        Partnership Inquiry
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="other" name="subject" value="other" className="w-4 h-4 text-white bg-gray-100 border-gray-300 focus:ring-[#ED7D4A]" />
                                    <label htmlFor="other" className="ml-3 text-sm text-white font-inter">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white font-inter text-[12px] leading-[20px] font-500">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={1}
                                className="w-full px-1 py-3 text-white border-b border-white outline-none"
                                placeholder="Write your message.."
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className=" bg-[#ED7D4A] text-white px-6 py-3 rounded-lg hover:bg-[#ED7D4A] transition-colors font-medium">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
