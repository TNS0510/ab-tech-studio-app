export default function ServicesGrid() {
    const services = [
        { title: "AI Development", desc: "Custom AI solutions, automated workflow engines, intelligent agents, and neural network integrations." },
        { title: "Software Development", desc: "Scalable enterprise software, robust backend architectures, application APIs, and SaaS platforms." },
        { title: "Web Development", desc: "Stunning, ultra-fast web applications built with modern frameworks and accessible layout designs." },
        { title: "IT Services", desc: "Comprehensive structural IT consulting, system health monitoring, network hardware setup, and optimization." },
        { title: "Cloud Solutions", desc: "Secure cloud migration, serverless cluster deployment, system redundancy, and infrastructure scaling." },
        { title: "Cybersecurity", desc: "End-to-end security analysis, compliance tracking, risk management, and system vulnerability assessment." }
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-white/5">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What We Do</h2>
                <p className="mt-4 text-soft-gray/70">End-to-end digital engineering solutions to help your business automate and scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-xl bg-charcoal/40 border border-white/5 hover:border-vibrant-cyan/30 transition-all group duration-300"
                    >
                        <h3 className="text-xl font-bold text-white group-hover:text-vibrant-cyan transition-colors">
                            {service.title}
                        </h3>
                        <p className="mt-3 text-sm text-soft-gray/60 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}