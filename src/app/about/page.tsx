export default function AboutPage() {
    const values = [
        { title: "Technical Excellence", desc: "We don't cut corners. We engineer production-ready architectures that are clean, modular, and built to scale." },
        { title: "Client Alignment", desc: "We sit on your side of the table, designing custom automated tools that directly target your core business bottlenecks." },
        { title: "Rapid Iteration", desc: "Using advanced AI-assisted software systems, we bring software concepts to life in fractions of standard development timelines." }
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Who We Are
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
                    Behind the Code at AB Tech
                </h1>
                <p className="mt-4 text-lg text-soft-gray/70 leading-relaxed">
                    We are a premier digital solutions studio combining high-performance software engineering with specialized artificial intelligence pipelines to help modern enterprises dominate their industries.
                </p>
            </div>

            {/* Value Pillars Grid */}
            <div className="mt-12 border-t border-white/5 pt-16">
                <h2 className="text-2xl font-bold text-white mb-8">Our Core Operating Pillars</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-charcoal/20 border border-white/5"
                        >
                            <div className="w-8 h-8 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-vibrant-cyan flex items-center justify-center text-sm font-mono font-bold mb-4">
                                0{idx + 1}
                            </div>
                            <h3 className="text-lg font-bold text-white">{value.title}</h3>
                            <p className="mt-2 text-sm text-soft-gray/60 leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}