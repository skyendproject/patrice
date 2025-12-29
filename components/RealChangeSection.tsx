import React from "react";
import Image from "next/image";

export default function RealChangeSection() {
  return (
    <section className="w-full flex justify-center py-24 px-4 bg-gradient-to-br from-white via-[#fff7f0] to-[#ffe5cc] relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Image Card with hover effect */}
        <div className="flex items-center justify-center h-full">
          <div className="bg-white/90 rounded-3xl shadow-2xl p-3 flex items-center justify-center w-full h-full min-h-[340px] md:min-h-[520px] transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder-selfaware.png"
              alt="Real Change Visual"
              width={600}
              height={700}
              className="object-cover rounded-2xl w-full h-full transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
        {/* Right: Content Card with accent border */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col justify-center min-h-[380px] border-l-8 border-[#DA5B00]">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-[#DA5B00] drop-shadow-sm tracking-tight" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            Where Real Change Begins
          </h2>
          <p className="text-base md:text-lg font-sans text-[#3d3246] mb-4 leading-relaxed" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            True freedom begins when the body releases what the mind already understands.<br />
            My work clears hidden emotional and energetic patterns that drive stress, anxiety, self-doubt, and self-sabotage — even when you “know better.”
          </p>
          <ul className="list-disc pl-6 text-base md:text-lg font-sans text-[#3d3246] mb-4 space-y-1" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            <li>your system settles</li>
            <li>reactions soften</li>
            <li>clarity and ease return</li>
          </ul>
          <div className="mt-2 text-base md:text-lg font-sans text-[#3d3246]" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            <span className="block font-bold text-[#b94a00] mb-1">This isn’t about fixing yourself.</span>
            It’s about freeing yourself from the patterns that have been running your life.
          </div>
        </div>
      </div>
    </section>
  );
}
