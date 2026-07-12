export default function PricingPage() {
    const tiers = [
        {
            name: "MVP Starter",
            price: "$2,500",
            desc: "Perfect for founders looking to validate ideas with rapid, AI-assisted software deployment.",
            features: ["Custom UI/UX Design Prototype", "1 Core Autonomous AI Agent", "Responsive Web App Build", "Standard Email Support"]
        },
        {
            name: "Production Scale",
            price: "$7,500",
            desc: "Ideal for growing operations looking to automate workflows and scale database systems.",
            features: ["Full Modular Architecture", "Multi-Agent AI Workflow Loops", "High-Performance Backend Sync", "Priority 24/7 Support Channel"],
            popular: true
        },
        {
            name: "Enterprise Custom",
            price: "Custom",
            desc: "Bespoke digital systems and infrastructure optimized for enterprise-grade performance.",
            features: ["Custom LLM Training Pipelines", "Industrial Database Clustering", "Full Structural IT Optimization", "Dedicated Account Engineers"]
        }
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Predictable Tiers
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
                    Flexible Plans for Smart Teams
                </h1>
                <p className="mt-4 text-lg text-soft-gray/70">
                    Choose a path optimized for your current scaling targets. No hidden fees. Pure execution.
                </p>
            </div>

            {/* Tiers Grid Canvas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {tiers.map((tier, idx) => (
                    <div
                        key={idx}
                        className={`p-8 rounded-2xl bg-charcoal/20 border flex flex-col justify-between relative transition-all duration-300 ${tier.popular ? "border-electric-blue shadow-xl shadow-electric-blue/5" : "border-white/5 hover:border-white/10"
                            }`}
                    >
                        {tier.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric-blue text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-md">
                                Most Popular
                            </span>
                        )}

                        <div>
                            <h2 className="text-xl font-bold text-white">{tier.name}</h2>
                            <p className="mt-2 text-sm text-soft-gray/50 min-h-[40px] leading-relaxed">{tier.desc}</p>

                            <div className="mt-6 mb-8">
                                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                                {tier.price !== "Custom" && <span className="text-xs text-soft-gray/40 font-medium"> / project</span>}
                            </div>

                            {/* Features Checklist */}
                            <ul className="space-y-4 border-t border-white/5 pt-6">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-soft-gray/70">
                                        <span className="text-vibrant-cyan font-bold select-none">&bull;</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Trigger */}
                        <div className="mt-8">
                            <a
                                href="/contact"
                                className={`w-full block text-center py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${tier.popular
                                        ? "bg-electric-blue text-white hover:bg-electric-blue/90 shadow-lg shadow-electric-blue/10"
                                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}