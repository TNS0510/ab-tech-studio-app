"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, we simulate a successful client submission
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-deep-navy text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left Side: Editorial Content */}
                <div className="space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight">Let's Build Something Smarter.</h1>
                    <p className="text-sm sm:text-base text-soft-gray/70 leading-relaxed">
                        Have a system architecture problem or an automation project you want to launch? Drop your details here. Our studio reviews all technical briefs within 24 hours.
                    </p>
                    <div className="pt-4 text-xs font-mono text-soft-gray/50">
                        Direct Inquiries: <span className="text-white">studio@abtech.ai</span>
                    </div>
                </div>

                {/* Right Side: Interactive Lead Form */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl">
                    {submitted ? (
                        <div className="text-center py-12 space-y-3">
                            <div className="text-electric-blue text-4xl">✓</div>
                            <h3 className="text-lg font-bold">Message Received!</h3>
                            <p className="text-xs text-soft-gray/70">Thank you for reaching out. We will connect with you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-semibold text-soft-gray/80 uppercase tracking-wider mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-blue transition-colors text-white"
                                    placeholder="Abubakar Jibrin"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-soft-gray/80 uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-blue transition-colors text-white"
                                    placeholder="name@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-soft-gray/80 uppercase tracking-wider mb-2">Project Brief</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-blue transition-colors text-white resize-none"
                                    placeholder="Tell us about the software or AI systems you want to design..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3 px-4 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all shadow-md shadow-electric-blue/10"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </main>
    );
}