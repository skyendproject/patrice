import React from "react";
import Image from "next/image";

export default function SelfAwareSection() {
  return (
    <section className="w-full flex justify-center py-8 px-4 bg-white border-b border-gray-300 pb-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: All Text */}
        <div className="flex flex-col justify-center h-full">
          <div className="uppercase text-sm tracking-widest text-[#3d3246] mb-6 font-sans font-semibold" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            THERAPY. COACHING. RETREATS. BOOKS. PRACTICES
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            <span className="text-[#DA5B00]">You are self-aware.</span><br />
            <span className="text-[#3d3246]">You have done the work.</span><br />
          </h2>
          <p className="text-lg md:text-lg font-sans text-[#3d3246] mb-2" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Yet something still feels stuck. Stress returns…Old reactions repeat. A quiet sense of “there must be more” lingers.
          </p>
        </div>
        {/* Right: Placeholder Image */}
        <div className="flex items-center justify-center h-full">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/placeholder-selfaware.png"
              alt="Placeholder visual"
              width={420}
              height={420}
              className="object-contain rounded-lg shadow-md max-h-[420px] w-auto h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
