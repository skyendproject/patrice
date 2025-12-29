import React from "react";

const words = [
  "Awareness",
  "Resonance",
  "Restoration",
  "Balance",
  "Clarity",
  "Healing",
  "Presence",
  "Energy",
];

export default function ValueScroller() {
  return (
    <div className="w-full bg-[#DA5B00] py-3 border-b border-[#b97a3c] overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="flex items-center justify-center gap-6 text-white font-semibold text-lg tracking-wide animate-marquee">
        {words.map((word, i) => (
          <span key={word} className="flex items-center gap-2">
            <span className="text-xl font-bold">*</span>
            <span>{word}</span>
          </span>
        ))}
        {/* Repeat for smooth scroll effect */}
        {words.map((word, i) => (
          <span key={word + "-repeat"} className="flex items-center gap-2">
            <span className="text-xl font-bold">*</span>
            <span>{word}</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 24s linear infinite;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
