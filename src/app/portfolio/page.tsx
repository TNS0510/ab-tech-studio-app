export default function PortfolioPage() {
    const projectsList = [
        {
            title: "Socialite Infrastructure Platform",
            category: "Mutual-Aid & FinTech",
            description: "A high-trust social contribution architecture engineered to track mutual aid pooling, internal short-term ledger balances, and member micro-allocation security.",
            stack: ["Next.js", "Tailwind CSS", "TypeScript"],
            status: "MVP Production Blueprint"
        },
        {
            title: "CashPoint Core Engine",
            category: "Localized Finance",
            description: "A production-ready localized financial orchestration utility engineered with automated unit testing suites, rigorous data workflows, and rapid deployment pipelines.",
            stack: ["React Core", "Node.js", "Automated Validation"],
            status: "Completed Case Study"
        }
    ];

    return (
        <main className="min-h-screen bg-deep-navy text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header Hero */}
                <div className="space-y-4 max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                        Case Studies
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Engineered Systems in Action.
                    </h1>
                    <p className="text-lg text-soft-gray/80 leading-relaxed">
                        Explore our architectural track record. We design scalable MVPs and client-ready digital products optimized for real-world deployment.
                    </p>
                </div>

                {/* Portfolio Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectsList.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electric-blue/20 transition-all space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start gap-4">
                                    <span className="text-xs font-semibold text-electric-blue uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <span className="text-xs bg-white/[0.04] text-soft-gray/60 px-2.5 py-0.5 rounded-full border border-white/5">
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-soft-gray/70 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Technical Stack Badges */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {project.stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-mono text-soft-gray/50 bg-white/[0.01] px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}