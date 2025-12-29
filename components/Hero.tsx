import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[480px] md:h-[600px] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <Image
        src="/placeholder-hero.png"
        alt="Hero background"
        fill
        className="object-cover object-center opacity-60"
        priority
      />
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full max-w-5xl px-4 md:px-2 text-left">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-[#DA5B00] mb-4 drop-shadow-lg leading-tight" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            From Stuck to Freedom
          </h1>
          <p className="text-base md:text-2xl font-sans text-[#3d3246] mb-8" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Release Hidden Patterns · Come Home to Yourself
          </p>
          <button
            className="bg-gradient-to-b from-[#ff9a3c] to-[#DA5B00] text-white font-bold font-serif text-lg md:text-xl rounded px-8 py-4 shadow-md transition hover:from-[#ffb36b] hover:to-[#b94a00] hover:shadow-lg"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Schedule A Clarity Call
          </button>
        </div>
      </div>
      {/* Optional: Overlay for darkening the image */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
    </section>
  );
}
