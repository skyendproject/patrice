import React from "react";
import Image from "next/image";

const people = [
  {
    label: "Professionals",
    img: "/placeholder-selfaware.png",
    alt: "Professional visual",
  },
  {
    label: "Conscious Entrepreneurs",
    img: "/placeholder-selfaware.png",
    alt: "Conscious entrepreneur visual",
  },
  {
    label: "Growth Seekers",
    img: "/placeholder-selfaware.png",
    alt: "Growth seeker visual",
  },
];

export default function WhoIServe() {
  return (
    <section className="w-full py-20 px-4 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-[#DA5B00] text-center"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Who I Serve
        </h2>

        {/* Description */}
        <p
          className="text-base md:text-lg text-[#3d3246] text-center max-w-2xl mx-auto"
          style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
        >
          I support professionals, conscious entrepreneurs, and growth-seekers
          who are outwardly capable — yet inwardly tired of carrying invisible
          weight.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {people.map((person) => (
            <div
              key={person.label}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center
                         shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-[100px] h-[100px] mb-6 rounded-full overflow-hidden">
                <Image
                  src={person.img}
                  alt={person.alt}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3
                className="text-xl font-semibold text-[#DA5B00]"
                style={{ fontFamily: "'Helvetica Now', Arial, Helvetica, sans-serif" }}
              >
                {person.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
