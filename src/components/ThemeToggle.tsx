// Step 1: Establish the client-side interaction boundary for state events
"use client";

import { useState } from "react";

export default function ThemeToggle() {
    // Simple interactive UI state toggle for demonstration/polish tracking
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            onClick={() => setIsActive(!isActive)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-vibrant-cyan/40 transition-all duration-300 group cursor-pointer flex items-center justify-center"
            aria-label="Toggle Interface Mode"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                {/* Visual Pulse Indicator Circle */}
                <span className={`absolute inset-0 rounded-full bg-vibrant-cyan/20 transition-transform duration-300 ${isActive ? "scale-125 opacity-100" : "scale-0 opacity-0"
                    }`}></span>

                {/* Core Inner Core Dynamic Symbol */}
                <span className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${isActive ? "bg-vibrant-cyan border-vibrant-cyan" : "bg-transparent border-soft-gray/60 group-hover:border-white"
                    }`}></span>
            </div>
        </button>
    );
}