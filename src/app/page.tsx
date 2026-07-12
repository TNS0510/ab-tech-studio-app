// src/app/page.tsx
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <div className="w-full bg-deep-navy text-white">
      {/* 
        Hero Section Container 
        - Max width matching design standards
        - Grid structure that stacks on mobile, splits 50/50 on desktop (md:grid-cols-2)
      */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-36 md:pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* 
            LEFT COLUMN: Text Content 
            - Fully organized, neat, and given room to breathe
          */}
          <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">

            {/* Animated Feature Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-vibrant-cyan text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-vibrant-cyan animate-pulse"></span>
              AI-Powered. Future-Ready.
            </div>

            {/* Main H1 Hero Headline */}
            {/* Locate your H1 inside src/app/page.tsx and update it to this: */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Intelligent Solutions.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-vibrant-cyan">
                Smarter Businesses.
              </span>
            </h1>

            {/* Core Explainer Body Paragraph (Kept exactly identical) */}
            <p className="text-base sm:text-lg text-soft-gray/70 max-w-xl leading-relaxed">
              Empowering businesses with innovative AI solutions, custom software engineering,
              stunning web interfaces, and reliable IT services that drive scalable growth and efficiency.
            </p>

            {/* Call to Action Framework Links */}
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 w-full">
              <Link
                href="/services"
                className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg shadow-electric-blue/20"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* 
            RIGHT COLUMN: AI Face Graphic Container
            - Restricts the graphic to the right half of the screen
            - Uses object-contain to prevent cropping or clipping out details
          */}
          <div className="relative w-full flex justify-center md:justify-end items-center mt-8 md:mt-0">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square flex justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-blended-face.webp"
                alt="AI Digital Profile Design Network Head"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_0_35px_rgba(0,180,216,0.15)]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid Section Component */}
      <ServicesGrid />
    </div>
  );
}