export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-deep-navy text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* Page Title Header */}
                <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
                    <p className="text-xs text-soft-gray/50 font-mono">Last Updated: July 2026</p>
                </div>

                <hr className="border-white/5" />

                {/* Content Breakdown Blocks */}
                <div className="space-y-6 text-sm text-soft-gray/80 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
                        <p>
                            When you interact with AB Tech AI Studio through our digital portal or utilize our interactive contact forms, we securely capture the details you provide voluntarily. This includes your full name, email address, and any detailed technical specifications or briefs you input regarding your software systems.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">2. How We Use Data</h2>
                        <p>
                            Your personal communication records and infrastructure blueprints are processed exclusively to review technical requirements, follow up on inquiries, deliver engineering deliverables, or coordinate project timelines. We never trade, lease, or distribute information to external marketing brokers.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">3. Security Architectures</h2>
                        <p>
                            We implement industry-standard database protection protocols and hosted network barriers to protect your data from unauthorized access or alteration. Your submissions are held firmly within secure server clouds managed by production platform providers.
                        </p>
                    </section>
                </div>

            </div>
        </main>
    );
}