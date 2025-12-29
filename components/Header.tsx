
import React from "react";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "About Me", href: "#about" },
    { label: "Freedom Codes", href: "#freedom-codes" },
    { label: "RESET Codes", href: "#awareness" },
    { label: "Heart Codes", href: "#real-change" },
    { label: "FAQs", href: "#contact" },
];

export default function Header() {
    // Smooth scroll handler
    const handleNavClick = (e:any, href:any) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    const handleConnectClick = (e:any) => {
        e.preventDefault();
        const el = document.querySelector('#contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header
            className="w-full border-b-[3px] border-[#3d3246] bg-gradient-to-r from-white via-white via-70% via-[#DA5B00]/[0.2] to-[#e6c36b]"
        >
            <div className="max-w-[1600px] mx-auto px-10 py-6 w-full">
                <div className="flex justify-between items-center w-full">
                    {/* Logo — stays on the left */}
                    <div className="flex items-center min-w-[80px]">
                        <Image src="/logo.png" alt="Logo" width={80} height={80} />
                    </div>

                    {/* Right side: Nav + Button */}
                    <div className="flex items-center gap-12">
                        <nav>
                            <ul className="flex gap-12 md:gap-4 list-none m-0 p-0">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={e => handleNavClick(e, link.href)}
                                            className={
                                                `text-base font-normal transition-colors duration-200 px-2 ` +
                                                (link.active
                                                    ? "text-[#DA5B00] font-bold font-serif"
                                                    : "text-[#3d3246] font-sans hover:text-[#DA5B00]")
                                            }
                                            style={
                                                link.active
                                                    ? { fontFamily: "'Times New Roman', Times, serif" }
                                                    : { fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }
                                            }
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button
                                className="bg-gradient-to-b from-[#ff9a3c] to-[#DA5B00] text-white font-bold font-serif text-[1.2rem] rounded px-10 py-4 shadow-md transition hover:from-[#ffb36b] hover:to-[#b94a00] hover:shadow-lg"
                                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                                onClick={handleConnectClick}
                            >
                                Connect
                            </button>
                    </div>
                </div>

            </div>
        </header>
    );
}
