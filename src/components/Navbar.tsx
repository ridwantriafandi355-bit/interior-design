"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-8 lg:px-16",
                scrolled
                    ? "bg-cream/90 backdrop-blur-xl py-5 border-b border-charcoal/5 shadow-sm"
                    : "bg-transparent py-10"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl md:text-3xl font-serif tracking-tighter text-charcoal flex items-center gap-2">
                    LUMINA<span className="w-1.5 h-1.5 bg-gold rounded-full mb-1"></span>
                </Link>

                <div className="hidden md:flex gap-16 text-[10px] md:text-xs uppercase tracking-[0.35em] font-sans font-semibold text-charcoal/40">
                    <Link href="#services" className="hover:text-gold transition-colors duration-300">Services</Link>
                    <Link href="#portfolio" className="hover:text-gold transition-colors duration-300">Portfolio</Link>
                    <Link href="#contact" className="hover:text-gold transition-colors duration-300">Contact</Link>
                </div>

                <div className="flex items-center gap-8">
                    <button className="hidden lg:block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-gold/40 hover:border-gold transition-all duration-300 pb-1">
                        Inquiry
                    </button>
                    <button className="md:hidden group flex flex-col items-end gap-1.5">
                        <span className="w-6 h-[1px] bg-charcoal group-hover:w-8 transition-all"></span>
                        <span className="w-4 h-[1px] bg-charcoal"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
