'use client'
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
    {
        text: (
            <>
                I came to Dr. Patrice five years ago grieving a broken engagement and repeating old patterns. After a lifetime in therapy, I could analyze my pain but couldn’t feel where it truly lived—in my body. Real change began with her gentle blend of energy work: tapping and somatic healing. I moved from understanding my pain to releasing long-held patterns and reclaiming a grounded self.<br /><br />
                <span className="block font-semibold text-[#b97a3c] mt-2">Today I’m engaged in a relationship rooted in emotional safety, mutual growth, and deep presence. I carry her integrative wisdom into my own psychotherapy practice.</span>
            </>
        ),
        author: "— Anam Jangda | Psychotherapist | Karachi, Pakistan",
    },
    {
        text: (
            <>
                Working with Dr. Patrice Khan has been like opening a window to forgotten parts of myself. In her presence, old stories soften, and what once felt heavy begins to breathe again.<br /><br />
                She listens beyond words — to what the heart hides, to what the body remembers. Through her gentle questions and steady light, I’ve been able to return to my past with kindness and reimagine it with love.<br /><br />
                This journey with her has not been about fixing, but about remembering...who I am beneath the noise, beneath the years. I walk away from each session a little more whole, a little more at peace.
            </>
        ),
        author: "Kanwer A. Saeed\nManaging Partner at Ascend Consulting | Karachi, Pakistan",
    },
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(0);
    const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    return (
        <section className="w-full bg-[#faf8f4] py-16 px-4 flex flex-col items-center justify-center">
            {/* Top Heading */}
            <div className="w-full max-w-6xl mx-auto mb-8 px-2">
                <h3 className="text-[#DA5B00] text-xl md:text-4xl font-bold tracking-tight text-left md:text-center">Client Experiences</h3>
            </div>
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Swiping Card Block */}
                <div className="flex flex-col gap-8">
                    <div className="bg-white rounded-2xl shadow p-8 min-h-[320px] flex flex-col justify-between">
                        <div>
                            {/* Star Ratings */}
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} fill="#DA5B00"/>
                                ))}
                            </div>
                            <p className="text-[#3d3246] text-lg md:text-xl font-normal leading-relaxed mb-6">
                                {testimonials[index].text}
                            </p>
                            <div className="text-sm text-[#5a4d3b] font-medium whitespace-pre-line">
                                {testimonials[index].author}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image Block */}
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-[#e6c36b]/10">
                        <Image
                            src="/placeholder-selfaware.png"
                            alt="Testimonial visual"
                            width={480}
                            height={480}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
            {/* Swiper Buttons Below and Centered */}
            <div className="flex gap-4 justify-center mt-8">
                <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full bg-[#e6c36b]/40 hover:bg-[#e6c36b] flex items-center justify-center text-[#b97a3c] text-xl font-bold shadow transition"
                >
                    <ArrowLeft />
                </button>
                <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full bg-[#e6c36b]/40 hover:bg-[#e6c36b] flex items-center justify-center text-[#b97a3c] text-xl font-bold shadow transition"
                >
                    <ArrowRight />
                </button>
            </div>
        </section>
    );
}