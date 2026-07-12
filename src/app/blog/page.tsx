// Step 1: Tell Next.js that this page handles real-time input interaction states
"use client";

import { useState } from "react";

export default function BlogPage() {
    const posts = [
        {
            title: "Building Autonomous AI Agents for Retail Fintech",
            excerpt: "An inside look into how automated workflow layers optimize customer retention loops and speed up capital distribution pipelines.",
            date: "May 14, 2026",
            readTime: "5 min read"
        },
        {
            title: "Why Modern Web Architectures Demand Tailwind v4",
            excerpt: "Exploring the performance shifts, simplified design engine configurations, and pure CSS variables driving next-gen web speed.",
            date: "April 28, 2026",
            readTime: "4 min read"
        },
        {
            title: "Designing Scalable State Machines with Zustand",
            excerpt: "How to avoid rendering bottlenecks and maintain clean global interface states across complex real-time application frameworks.",
            date: "March 11, 2026",
            readTime: "6 min read"
        }
    ];

    // Step 2: Initialize a client state field to hold the live search string text
    const [searchQuery, setSearchQuery] = useState("");

    // Step 3: Compute the matching articles array using a case-insensitive match loop
    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
        );
    });

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="max-w-3xl mb-8">
                <span className="text-vibrant-cyan text-sm font-bold uppercase tracking-wider">
                    Studio Insights
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-3">
                    Latest Tech Perspectives
                </h1>
                <p className="mt-4 text-lg text-soft-gray/70">
                    Deep dives into artificial intelligence engineering, interface optimizations, and enterprise system design rules.
                </p>
            </div>

            {/* Step 4: Add the Real-Time Input Search Field UI element wrapper */}
            <div className="max-w-md mb-12">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles (e.g., AI, Tailwind, Zustand)..."
                    className="w-full bg-charcoal/30 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-vibrant-cyan transition-colors placeholder:text-soft-gray/30"
                />
            </div>

            {/* Blog Listing Grid - Maps from our filtered computation */}
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, idx) => (
                        <article
                            key={idx}
                            className="p-6 rounded-xl bg-charcoal/20 border border-white/5 hover:border-electric-blue/20 transition-all flex flex-col justify-between animate-fadeIn"
                        >
                            <div>
                                <div className="flex items-center gap-4 text-xs font-medium text-soft-gray/40 mb-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-soft-gray/30"></span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h2 className="text-xl font-bold text-white hover:text-vibrant-cyan transition-colors line-clamp-2 cursor-pointer">
                                    {post.title}
                                </h2>
                                <p className="mt-3 text-sm text-soft-gray/60 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5">
                                <span className="text-xs font-bold text-electric-blue hover:text-vibrant-cyan transition-colors cursor-pointer inline-flex items-center gap-1">
                                    Read Article &rarr;
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                /* Step 5: Clean feedback layout box if no records match the query string keyword */
                <div className="p-12 text-center rounded-2xl bg-charcoal/10 border border-white/5">
                    <p className="text-sm text-soft-gray/40">No articles found matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
}