"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
    // This state tracks whether the mobile menu dropdown is open (true) or closed (false)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b border-white/5 bg-deep-navy/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Left Side: Logo Identity */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="AB Tech AI Studio Logo"
                            width={140}
                            height={42}
                            className="object-contain h-10 w-auto"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links (Hidden on mobile phones, visible on medium screens+) */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-soft-gray/60">
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                </div>

                {/* Right Side Controls Group */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <ThemeToggle />

                    <Link
                        href="/contact"
                        className="inline-block bg-electric-blue hover:bg-electric-blue/90 text-white font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs tracking-wide transition-all shadow-md shadow-electric-blue/10"
                    >
                        Let's Talk
                    </Link>

                    {/* Mobile Hamburger Menu Button (Visible ONLY on mobile phones/tablets) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-soft-gray/60 hover:text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                // "X" Close Icon shown when open
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                // "Hamburger" Three-lines Icon shown when closed
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dynamic Mobile Menu Dropdown Panel (Renders only if isOpen is true) */}
            {isOpen && (
                <div className="md:hidden border-t border-white/5 bg-deep-navy px-4 pt-2 pb-6 space-y-3 flex flex-col text-base font-medium text-soft-gray/80">
                    <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-white p-2 rounded-md transition-colors">Services</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-white p-2 rounded-md transition-colors">Portfolio</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white p-2 rounded-md transition-colors">About</Link>
                    <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-white p-2 rounded-md transition-colors">Blog</Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-white p-2 rounded-md transition-colors">Pricing</Link>
                    <Link href="/careers" onClick={() => setIsOpen(false)} className="hover:text-white p-2 rounded-md transition-colors">Careers</Link>
                </div>
            )}
        </nav>
    );
}