import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-charcoal/20 border-t border-white/5 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">

                {/* Left: Brand & Copyright */}
                <div className="text-center sm:text-left">
                    <p className="text-sm text-soft-gray/40">
                        &copy; {currentYear} <span className="text-soft-gray/60 font-semibold">AB TECH AI STUDIO</span>. All rights reserved.
                    </p>
                </div>

                {/* Right: Quick Footer Links */}
                <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-soft-gray/40">
                    <Link href="/privacy" className="hover:text-vibrant-cyan transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-vibrant-cyan transition-colors">Terms of Service</Link>
                    <Link href="/contact" className="hover:text-vibrant-cyan transition-colors">Support</Link>
                </div>

            </div>
        </footer>
    );
}