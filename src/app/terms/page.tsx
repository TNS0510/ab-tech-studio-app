export default function TermsPage() {
    return (
        <main className="min-h-screen bg-deep-navy text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* Page Title Header */}
                <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Service</h1>
                    <p className="text-xs text-soft-gray/50 font-mono">Last Updated: July 2026</p>
                </div>

                <hr className="border-white/5" />

                {/* Content Breakdown Blocks */}
                <div className="space-y-6 text-sm text-soft-gray/80 leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or interacting with the digital presentation layers of AB Tech AI Studio, you acknowledge, understand, and agree to be bound by these operational Terms of Service and all applicable international data guidelines.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">2. Intellectual Property</h2>
                        <p>
                            All engineered system scaffolds, custom software design components, imagery assets, text layouts, and brand logos compiled across this domain remain the exclusive intellectual property of AB Tech AI Studio unless explicitly transferred via separate client service contracts.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">3. Limitation of Liability</h2>
                        <p>
                            The structural materials, code demonstrations, and service details published on this platform are provided on an "as-is" architectural basis. AB Tech AI Studio carries no direct liability for unexpected server compilation anomalies or runtime browser discrepancies experienced on external client hosting tracks.
                        </p>
                    </section>
                </div>

            </div>
        </main>
    );
}