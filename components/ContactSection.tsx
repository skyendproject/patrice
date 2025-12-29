import React from "react";
import Image from "next/image";

export default function ContactSection() {
    return (
        <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
            <h3 className="text-sm md:text-4xl font-bold text-[#DA5B00] tracking-widest mb-8 uppercase">
                Contact
            </h3>

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch border border-[#DA5B00]/30 p-8 rounded-2xl">
                {/* Left: Image */}
                <div className="w-full h-full">
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-[#e6c36b]/10">
                        <Image
                            src="/placeholder-selfaware.png"
                            alt="Contact visual"
                            width={600}
                            height={600}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Form */}
                <div className="w-full h-full flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#3d3246] mb-6 leading-tight">
                        If something here resonates, you’re welcome to reach out
                    </h2>

                    <form className="flex flex-col gap-4 bg-white rounded-2xl shadow p-8 h-full">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex flex-col">
                                <label className="text-[#3d3246] text-sm font-medium mb-1">
                                    Name<span className="text-[#DA5B00]">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="border border-[#e6c36b]/40 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-[#faf8f4]"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="flex-1 flex flex-col">
                                <label className="text-[#3d3246] text-sm font-medium mb-1">
                                    Email<span className="text-[#DA5B00]">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="border border-[#e6c36b]/40 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-[#faf8f4]"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[#3d3246] text-sm font-medium mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="border border-[#e6c36b]/40 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-[#faf8f4]"
                                placeholder="Enter your number"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[#3d3246] text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                className="border border-[#e6c36b]/40 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e6c36b] bg-[#faf8f4] resize-none"
                                placeholder="Enter your message"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-auto bg-[#7bb661] hover:bg-[#5e944c] text-white font-semibold rounded-lg px-6 py-3 shadow transition-colors duration-200 self-end"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
