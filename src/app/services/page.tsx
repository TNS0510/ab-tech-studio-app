export default function ServicesPage() {
    const deepServices = [
        {
            title: "Automated AI Agents & Development",
            features: ["Custom LLM Integrations", "Autonomous Workflow Agents", "Natural Language Tools", "Predictive Analytics Models"],
            tagline: "Streamline operations and slash overhead costs with smart software."
        },
        {
            title: "Enterprise Software Engineering",
            features: ["Robust API Architectures", "Scalable SaaS Foundations", "Database Clustering & Design", "High-Performance Codebases"],
            tagline: "Industrial-grade systems designed to handle intensive user traffic smoothly."
        },
        {
            title: "Premium UI/UX & Web Design",
            features: ["Responsive Interface Layouts", "Interactive Design Systems", "Conversion Rate Optimization", "Figma-to-Code Translation"],
            tagline: "Stunning digital interfaces built to load instantly and convert visitors."
        }
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Our Specializations
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
                    Next-Gen Technical Solutions
                </h1>
                <p className="mt-4 text-lg text-soft-gray/70 leading-relaxed">
                    We combine cutting-edge artificial intelligence with reliable software architecture to transform your business operations.
                </p>
            </div>

            {/* Deep-Dive Service Cards */}
            <div className="flex flex-col gap-8">
                {deepServices.map((service, idx) => (
                    <div
                        key={idx}
                        className="p-8 sm:p-10 rounded-2xl bg-charcoal/30 border border-white/5 hover:border-electric-blue/30 transition-all duration-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
                    >
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                            <p className="mt-2 text-sm text-soft-gray/50 italic">{service.tagline}</p>

                            {/* Feature Tags Wrapper */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {service.features.map((feature, fIdx) => (
                                    <span
                                        key={fIdx}
                                        className="text-xs font-semibold text-vibrant-cyan/90 bg-vibrant-cyan/5 border border-vibrant-cyan/10 px-3 py-1 rounded-md"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Micro Call-To-Action Link */}
                        <a
                            href="/contact"
                            className="w-full lg:w-auto text-center bg-white/5 hover:bg-electric-blue text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap border border-white/10 hover:border-transparent"
                        >
                            Request Quote
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}