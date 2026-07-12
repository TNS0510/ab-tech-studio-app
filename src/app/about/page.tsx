export default function AboutPage() {
    return (
        <main className="min-h-screen bg-deep-navy text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header Hero Section */}
                <div className="space-y-4 text-center md:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                        Our Story
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Driving Digital Transformation Through Intelligence.
                    </h1>
                    <p className="text-base sm:text-lg text-soft-gray/80 max-w-2xl leading-relaxed">
                        AB Tech AI Studio bridges the gap between complex software engineering and high-performance digital automation. We design, deploy, and scale custom software architectures that empower modern enterprises.
                    </p>
                </div>

                <hr className="border-white/5" />

                {/* Core Value Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                        <h3 className="text-xl font-bold text-white">Engineered Innovation</h3>
                        <p className="text-sm text-soft-gray/70 leading-relaxed">
                            We build production-ready software systems utilizing cutting-edge natural language programming frameworks, scalable cloud integrations, and robust automated validation setups.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                        <h3 className="text-xl font-bold text-white">Performance Optimization</h3>
                        <p className="text-sm text-soft-gray/70 leading-relaxed">
                            Our engineering philosophy focuses directly on speed, efficiency, and scalable user interfaces. Every application is optimized for continuous deployment and pixel-perfect performance.
                        </p>
                    </div>
                </div>

                {/* Strategic Operational Vision Statement */}
                <div className="p-8 rounded-2xl bg-gradient-to-r from-electric-blue/10 to-cyan-500/5 border border-electric-blue/10 space-y-4">
                    <h2 className="text-2xl font-bold">The Strategic Vision</h2>
                    <p className="text-sm sm:text-base text-soft-gray/80 leading-relaxed">
                        Whether architecting localized fintech utility engines or building complete enterprise automation pipelines, our mission remains exactly the same: delivery of high-trust, production-grade applications that yield measurable client growth.
                    </p>
                </div>

            </div>
        </main>
    );
}