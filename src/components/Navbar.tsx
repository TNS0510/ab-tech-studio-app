import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
    return (
        <nav className="w-full border-b border-white/5 bg-deep-navy/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Left Core Side: Clean Logo Identity Layout */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="AB Tech AI Studio Logo"
                            width={140}
                            height={42}
                            className="object-contain h-10 w-auto" // Step 1: Cleaned up the mix-blend utility class completely!
                            priority
                        />
                    </Link>
                </div>

                {/* Center Canvas: Navigation Link Entries */}
                <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-soft-gray/60">
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                </div>

                {/* Right Action Side: Interactive Controls Group */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <Link
                        href="/contact"
                        className="hidden sm:inline-block bg-electric-blue hover:bg-electric-blue/90 text-white font-bold px-5 py-2.5 rounded-lg text-xs tracking-wide transition-all shadow-md shadow-electric-blue/10"
                    >
                        Let's Talk
                    </Link>
                </div>

            </div>
        </nav>
    );
}