import { ArrowRight } from "lucide-react";
import React from "react";

const offerings = [
  {
    label: "FREEDOM CODES",
    subtitle: "What’s mine",
    description:
      "Clear subconscious patterns shaping performance, self-trust, and daily decision-making.",
    color: "#e6c36b",
  },
  {
    label: "RESET CODES",
    subtitle: "What I inherited",
    description:
      "Release ancestral and generational imprints stored in the body and subconscious.",
    color: "#DA5B00",
  },
  {
    label: "HEART CODES",
    subtitle: "How I embody coherence",
    description:
      "Stabilize your system through heart–brain coherence so calm, clarity, and resilience become your baseline.",
    color: "#b97a3c",
  },
];

export default function SignatureOfferings() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold text-[#DA5B00] mb-2 tracking-tight">
            My Signature Offerings
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {offerings.map((offering) => (
            <div
              key={offering.label}
              className="bg-[#faf8f4] rounded-2xl shadow-md border border-[#e6c36b]/20 flex flex-col items-start p-8 min-h-[260px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-base font-bold uppercase tracking-wide"
                  style={{ color: offering.color, letterSpacing: 1 }}
                >
                  {offering.label}
                </span>
                <ArrowRight className="text-xs text-[#b97a3c] mt-0.5" />
              </div>
              <div className="text-sm text-[#b97a3c] mb-3 font-medium">
                {offering.subtitle}
              </div>
              <div className="text-base text-[#3d3246] font-light">
                {offering.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
