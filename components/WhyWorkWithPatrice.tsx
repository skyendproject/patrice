import React from "react";
import Image from "next/image";

export default function WhyWorkWithPatrice() {
  return (
    <section className="w-full flex justify-center py-20 px-4 bg-white">
      <div className="max-w-6xl w-full flex flex-col gap-10">
        {/* Heading and intro */}
        <div>
          <div className="uppercase text-xs md:text-sm tracking-widest text-[#3d3246] mb-2 font-sans font-semibold" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Why Work With Dr. Patrice Khan
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#DA5B00] mb-2" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            We create healing experiences for you
          </h2>
        </div>
        {/* Divider */}
        <hr className="border-t border-[#e6c36b] my-2" />
        {/* Two-column supporting text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <div className="text-base md:text-lg font-sans text-[#3d3246] leading-relaxed" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Sono is a pioneering sound healing therapy organization dedicated to transforming wellness through the use of sound. Our mission is to enhance mental and physical health by harnessing sound frequencies.
          </div>
          <div className="text-base md:text-lg font-sans text-[#3d3246] leading-relaxed" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Founded in 2021, Sono started as a clear vision to promote holistic health through sound therapy. We have since expanded our services and gained recognition for our innovative approach to healing.
          </div>
        </div>
        {/* Wide image below */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/placeholder-selfaware.png"
            alt="Healing Experience"
            width={900}
            height={340}
            className="object-cover rounded-2xl shadow-xl w-full h-[220px] md:h-[340px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
