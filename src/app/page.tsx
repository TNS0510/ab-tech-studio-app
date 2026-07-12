// Step 1: Import our brand new ServicesGrid module from the components folder
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section Container */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Animated Feature Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-vibrant-cyan text-xs sm:text-sm font-semibold tracking-wide uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-vibrant-cyan animate-pulse"></span>
          AI-Powered. Future-Ready.
        </div>

        {/* Main H1 Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          Intelligent Solutions.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-vibrant-cyan">
            Smarter Businesses.
          </span>
        </h1>

        {/* Core Explainer Body Paragraph */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-soft-gray/70 max-w-2xl leading-relaxed">
          Empowering businesses with innovative AI solutions, custom software engineering, stunning web interfaces, and reliable IT services that drive scalable growth and efficiency.
        </p>

        {/* Call to Action Actions Wrapper */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="bg-electric-blue hover:bg-electric-blue/90 text-white px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg shadow-electric-blue/20"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide transition-all"
          >
            Let's Talk
          </a>
        </div>
      </section>

      {/* Step 2: Render our Services Grid cleanly right below the Hero container */}
      <ServicesGrid />
    </div>
  );
}