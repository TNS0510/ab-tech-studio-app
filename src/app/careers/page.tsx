export default function CareersPage() {
    const roles = [
        {
            title: "AI Engineer / Prompt Architect",
            type: "Full-Time / Remote (Lagos/Accra Hybrid)",
            department: "Artificial Intelligence",
            desc: "Develop advanced agentic workflows, orchestrate LLM systems, and build automated text-to-action logic loops."
        },
        {
            title: "Full-Stack Software Engineer",
            type: "Full-Time / Remote",
            department: "Engineering",
            desc: "Construct robust, high-throughput server backends and scalable state-driven frontend interfaces using Next.js and Supabase."
        }
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Join Our Network
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
                    Build the Future of AI Systems
                </h1>
                <p className="mt-4 text-lg text-soft-gray/70">
                    We are always looking for visionary developers, design purists, and high-performance engineers to scale digital operations.
                </p>
            </div>

            {/* Roles List */}
            <div className="flex flex-col gap-6">
                {roles.map((role, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-xl bg-charcoal/20 border border-white/5 hover:border-vibrant-cyan/20 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                        <div>
                            <span className="text-[10px] font-mono tracking-wider text-vibrant-cyan uppercase bg-vibrant-cyan/5 border border-vibrant-cyan/10 px-2.5 py-0.5 rounded">
                                {role.department}
                            </span>
                            <h2 className="text-xl font-bold text-white mt-3">{role.title}</h2>
                            <p className="text-xs text-soft-gray/40 mt-1">{role.type}</p>
                            <p className="text-sm text-soft-gray/60 mt-3 max-w-xl leading-relaxed">{role.desc}</p>
                        </div>

                        <a
                            href="/contact"
                            className="w-full sm:w-auto text-center bg-white/5 hover:bg-electric-blue text-white text-xs font-bold px-4 py-2.5 rounded-lg border border-white/10 hover:border-transparent transition-colors whitespace-nowrap"
                        >
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}