'use client'
import AwarenessSection from "@/components/AwarenessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextStepSection from "@/components/NextStepSection";
import RealChangeSection from "@/components/RealChangeSection";
import SectionIntro from "@/components/SectionIntro";
import SelfAwareSection from "@/components/SelfAwareSection";
import SignatureOfferings from "@/components/SignatureOfferings";
import TestimonialSection from "@/components/TestimonialSection";
import ValueScroller from "@/components/ValueScroller";
import WhoIServe from "@/components/WhoIServe";
import WhyWorkWithPatrice from "@/components/WhyWorkWithPatrice";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><SelfAwareSection /></section>
        <section id="awareness"><AwarenessSection /></section>
        <section id="real-change"><RealChangeSection /></section>
        <section id="section-intro"><SectionIntro /></section>
        <section id="why-work"><WhyWorkWithPatrice /></section>
        <section id="who-i-serve"><WhoIServe /></section>
        <section id="freedom-codes"><SignatureOfferings /></section>
        <section id="next-step"><NextStepSection /></section>
        <section id="testimonials"><TestimonialSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <ValueScroller />
      <Footer />
    </div>
  );
}
