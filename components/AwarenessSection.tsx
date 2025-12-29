'use client'
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";


export default function AwarenessSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex justify-center py-24 px-4 bg-[#DA5B00] relative overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DA5B00] via-[#e67c2b]/80 to-[#b94a00]/90 opacity-80 pointer-events-none z-0" />
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Content Card with accent border */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col justify-center min-h-[380px] border-l-8 border-[#b94a00]">
          <h2
            ref={headingRef}
            className={`text-3xl md:text-5xl font-bold font-serif mb-8 text-[#DA5B00] drop-shadow-sm tracking-tight transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{fontFamily: "'Times New Roman', Times, serif"}}
          >
            Awareness Isn’t the Problem
          </h2>
          <div className="space-y-5 text-base md:text-lg font-sans text-[#3d3246]" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            <p className="leading-relaxed">Insight alone doesn’t create lasting change.</p>
            <p className="leading-relaxed">Most thoughts, habits, and emotional reactions are driven by subconscious patterns stored in the body and nervous system — long before the mind can intervene.</p>
            <p className="leading-relaxed">That’s why talk therapy, mindset work, and willpower often reach a limit.</p>
            <p className="font-bold text-[#b94a00] text-lg md:text-xl mt-6">Real change happens beneath awareness.</p>
          </div>
        </div>
        {/* Right: Image Card with hover effect */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="bg-white/90 rounded-3xl shadow-2xl p-3 flex items-center justify-center w-full h-full min-h-[340px] md:min-h-[480px] transition-transform duration-300 hover:scale-105">
            <Image
              src="/placeholder-selfaware.png"
              alt="Awareness visual"
              width={900}
              height={600}
              className="object-cover rounded-2xl w-full h-full transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
