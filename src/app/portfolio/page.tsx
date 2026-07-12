// Step 1: Tell Next.js this page handles live client-side filter tracking states
"use client";

import { useState } from "react";

export default function PortfolioPage() {
    // Our master case studies array data state
    const projects = [
        {
            title: "Socialite Platform",
            category: "Fintech",
            desc: "A production-ready mutual-aid system built with React, Zustand, and Supabase for emergency financial circles.",
            stack: ["Next.js", "Supabase", "Zustand", "Tailwind"]
        },
        {
            title: "CashPoint Core",
            category: "Fintech",
            desc: "High-performance interface layer handling rapid liquidity allocation and mobile emergency cash distribution loops.",
            stack: ["Vite", "TypeScript", "PostgreSQL", "Node.js"]
        },
        {
            title: "Kaggriculture Agentic Engine",
            category: "Artificial Intelligence",
            desc: "An intelligent, autonomous agent network specialized in crop performance modeling and supply chain automation.",
            stack: ["Python", "LangChain", "Next.js", "FastAPI"]
        }
    ];

    // Step 2: Set up a state tracking variable to hold our active filter category string
    const [activeFilter, setActiveFilter] = useState("All");

    // Step 3: Compute the filtered projects array based on the state variable
    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    // Available filter buttons list
    const categories = ["All", "Fintech", "Artificial Intelligence"];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Headline */}
            <div className="max-w-3xl mb-12">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Our Proven Case Studies
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
                    Projects We've Brought to Life
                </h1>
                <p className="mt-4 text-lg text-soft-gray/70">
                    A showcase of custom engineering architectures, intelligent systems, and scalable user interfaces.
                </p>
            </div>

            {/* Step 4: Interactive Category Filter Bar Layout */}
            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer border ${activeFilter === category
                                ? "bg-electric-blue text-white border-electric-blue shadow-lg shadow-electric-blue/20"
                                : "bg-charcoal/30 text-soft-gray/50 border-white/5 hover:border-white/10 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid Canvas - Now rendering from our dynamically filtered calculation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col rounded-2xl bg-charcoal/30 border border-white/5 overflow-hidden hover:border-vibrant-cyan/20 transition-all duration-300 group animate-fadeIn"
                    >
                        {/* Visual Top Decorative Block */}
                        <div className="h-48 bg-gradient-to-br from-deep-navy via-charcoal/80 to-electric-blue/20 flex items-center justify-center border-b border-white/5 relative">
                            <span className="text-xs font-bold uppercase tracking-widest text-soft-gray/30 group-hover:text-vibrant-cyan transition-colors">
                                {project.category}
                            </span>
                        </div>

                        {/* Content Details */}
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                                    {project.title}
                                </h2>
                                <p className="mt-3 text-sm text-soft-gray/60 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Technologies Tag Cloud */}
                            <div className="mt-6 flex flex-wrap gap-1.5">
                                {project.stack.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-[10px] font-mono uppercase bg-white/5 text-soft-gray/80 px-2 py-0.5 rounded border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}