"use client";

import { useState } from "react";

export default function ContactPage() {
    // Step 1: Initialize form input tracking states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectType, setProjectType] = useState("ai");
    const [message, setMessage] = useState("");

    // Track submission success state lifecycle
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Step 2: Handle form submission event logic
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a future step, this is where we will dispatch the payload to a Supabase or Node backend database
        setIsSubmitted(true);
    };

    // Step 3: Conditional Render — Show a success screen if the form was sent
    if (isSubmitted) {
        return (
            <div className="w-full py-24 px-4 max-w-xl mx-auto text-center animate-fadeIn">
                <div className="p-8 rounded-2xl bg-charcoal/30 border border-vibrant-cyan/20 shadow-2xl">
                    <div className="w-12 h-12 rounded-full bg-vibrant-cyan/10 text-vibrant-cyan flex items-center justify-center mx-auto text-xl mb-4 font-bold">
                        ✓
                    </div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                        Inquiry Received!
                    </h1>
                    <p className="mt-4 text-sm text-soft-gray/70 leading-relaxed">
                        Thank you for reaching out, <span className="text-vibrant-cyan font-semibold">{name}</span>. Our technical engineering team has received your request for a <span className="text-white font-medium uppercase tracking-wider text-xs bg-white/5 px-2 py-0.5 rounded border border-white/5">{projectType}</span> pipeline, and we will contact you at <span className="text-white underline">{email}</span> within 24 hours.
                    </p>
                    <button
                        onClick={() => { setIsSubmitted(false); setName(""); setEmail(""); setMessage(""); }}
                        className="mt-8 text-xs font-bold text-soft-gray/40 hover:text-vibrant-cyan transition-colors uppercase tracking-wider underline cursor-pointer"
                    >
                        Submit another request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            {/* Header Info */}
            <div className="text-center mb-12">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Get In Touch
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-white mt-2">
                    Let's Build Something Great
                </h1>
                <p className="mt-3 text-soft-gray/70">
                    Tell us about your project requirements and our engineering team will get back to you within 24 hours.
                </p>
            </div>

            {/* Structured Interactive Contact Form Box */}
            <div className="p-8 rounded-2xl bg-charcoal/30 border border-white/5 shadow-xl">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                    {/* Row 1: Name Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-soft-gray/80">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Abubakar Jibrin"
                            className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-soft-gray/30"
                            required
                        />
                    </div>

                    {/* Row 2: Email Input */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-soft-gray/80">
                            Business Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-soft-gray/30"
                            required
                        />
                    </div>

                    {/* Row 3: Project Selection Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="project-type" className="text-xs font-semibold uppercase tracking-wider text-soft-gray/80">
                            What can we build for you?
                        </label>
                        <select
                            id="project-type"
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                            className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors cursor-pointer"
                        >
                            <option value="ai">Automated AI Agents & Systems</option>
                            <option value="software">Custom Software Architecture</option>
                            <option value="web">Premium UI/UX & Web App</option>
                            <option value="other">General Technical Consultation</option>
                        </select>
                    </div>

                    {/* Row 4: Project Scope Message */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-soft-gray/80">
                            Project Description
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your timeline, targets, and technical goals..."
                            className="w-full bg-deep-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-soft-gray/30 resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Primary Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-bold py-3.5 px-6 rounded-lg text-sm tracking-wide transition-all mt-2 cursor-pointer"
                    >
                        Send Inquiry
                    </button>

                </form>
            </div>
        </div>
    );
}