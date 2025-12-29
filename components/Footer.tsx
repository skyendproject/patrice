import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DA5B00] pt-12 pb-4 px-4 mt-12">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo & Description */}
        <div className="flex flex-col gap-3">
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="mb-2" />
          {/* <p className="text-white/90 text-sm leading-relaxed">
            Sono is a pioneering sound healing therapy organization dedicated to promoting wellness through the therapeutic use of sound.
          </p> */}
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold mb-1">Contact</h4>
          <a href="mailto:patrice@patricekhan.com" className="text-white/80 hover:text-[#ffb36b] text-sm">patrice@patricekhan.com</a>
          <p className="text-white/80 hover:text-[#ffb36b] text-sm">+1 949 903 4188</p>
          <div className="text-white/80 text-sm">
            Germany —<br />
            785 15th Street, Office 47<br />
            Berlin, De 81566
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold mb-1">Links</h4>
          <Link href="#home" className="text-white/80 hover:text-[#ffb36b] text-sm" scroll={true}>Home</Link>
          <Link href="#about" className="text-white/80 hover:text-[#ffb36b] text-sm" scroll={true}>About Me</Link>
          <Link href="#freedom-codes" className="text-white/80 hover:text-[#ffb36b] text-sm" scroll={true}>Freedom Codes</Link>
          <Link href="#awareness" className="text-white/80 hover:text-[#ffb36b] text-sm" scroll={true}>RESET Codes</Link>
          <Link href="#real-change" className="text-white/80 hover:text-[#ffb36b] text-sm" scroll={true}>Heart Codes</Link>
          <Link href="#contact" className="text-white/80 hover:text-[#ffb36b] text-sm" scroll={true}>Contact</Link>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-bold mb-1">Get in Touch</h4>
          <div className="flex gap-3 mt-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-[#ffb36b] text-xl"><Facebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-[#ffb36b] text-xl"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="text-white/80 hover:text-[#ffb36b] text-xl"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
        <span>© 2025. All Rights Reserved.</span>
        <span>Site by <a href="#" className="text-white/80 hover:text-[#ffb36b] font-semibold">Saifullah Ahmed</a>.</span>
      </div>
    </footer>
  );
}
