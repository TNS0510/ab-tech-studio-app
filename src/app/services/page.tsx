export default function ServicesPage() {
    const servicesList = [
        {
            title: "AI & Automation Engineering",
            description: "Custom intelligent agent setups, automated workflow engines, and neural network routing pipelines built to eliminate operational bottlenecks.",
            features: ["Autonomous Agents", "LLM Fine-Tuning", "Workflow Automation"]
        },
        {
            title: "Full-Stack Software Systems",
            description: "Robust back-end architectures, secure application programming interfaces (APIs), and scalable platform engines engineered for high availability.",
            features: ["API Architectures", "Microservices", "Secure Infrastructure"]
        },
        {
            title: "Premium Web Engineering",
            description: "Ultra-fast, accessible web interfaces styled with next-generation design systems and optimized for pixel-perfect user experiences.",
            features: ["Next.js Solutions", "Tailwind Design", "Performance Scaling"]
        },
        {
            title: "Cloud & DevSecOps Solutions",
            description: "Secure cloud migration pipelines, container orchestration, automated unit testing configurations, and continuous deployment systems.",
            features: ["CI/CD Pipelines", "AWS/Vercel Hosting", "System Security"]
        }
    ];

    return (
        <main className="min-h-screen bg-deep-navy text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header Hero */}
                <div className="space-y-4 max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                        Our Capabilities
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        High-Performance Technical Deliverables.
                    </h1>
                    <p className="text-lg text-soft-gray/80 leading-relaxed">
                        We provide end-to-end engineering execution. Our systems are built using contemporary frameworks to ensure absolute reliability, speed, and continuous growth.
                    </p>
                </div>

                {/* Services Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6 hover:border-electric-blue/30 transition-all group"
                        >
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold group-hover:text-electric-blue transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-soft-gray/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Feature Tags Sub-Group */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {service.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium bg-white/[0.03] border border-white/5 text-soft-gray/90 px-3 py-1 rounded-md"
                                    >
                                        {feature}
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