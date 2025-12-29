import React from "react";

export default function SelfAwareSection() {
  return (
    <section className="w-full flex justify-center py-16 px-4 bg-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left: Heading */}
        <div className="md:w-3/5 w-full">
          <div className="uppercase text-xs md:text-sm tracking-widest text-[#3d3246] mb-4 font-sans font-semibold" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            YOUR JOURNEY IN SELF-AWARENESS
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-4" style={{fontFamily: "'Times New Roman', Times, serif"}}>
            <span className="text-[#DA5B00] font-bold">If this feels familiar, nothing is wrong with you.</span><br />
            <span className="block text-[#3d3246] font-bold">You are self-aware.</span><br />
            <span className="block text-[#3d3246] font-bold">You have done the work.</span><br />
            <span className="block text-[#3d3246] font-bold">Therapy. Coaching. Retreats. Books. Practices</span><br />
            <span className="block text-[#3d3246] font-bold mt-2">Yet something still feels stuck.</span>
          </h2>
        </div>
        {/* Right: Subheading/Paragraph */}
        <div className="md:w-2/5 w-full flex items-center md:justify-end">
          <div className="text-base md:text-lg font-sans text-[#3d3246] md:text-right" style={{fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif"}}>
            Stress returns…Old reactions repeat…A quiet sense of “there must be more” lingers.
          </div>
        </div>
      </div>
    </section>
  );
}
