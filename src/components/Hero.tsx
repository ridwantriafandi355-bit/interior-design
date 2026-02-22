"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[100svh] flex flex-col md:flex-row bg-cream overflow-hidden">
            {/* Left side: Image Reveal */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden order-2 md:order-1">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-charcoal z-10"
                />
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                        alt="Minimalist Interior"
                        className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                    />
                    <div className="absolute inset-0 border-[20px] border-cream pointer-events-none"></div>
                </motion.div>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 py-20 md:py-0 order-1 md:order-2">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-sans mb-8 block font-medium">
                        Lumina Design Studio
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-[1.05] mb-10 text-balance">
                        Curating Spaces <br />
                        <span className="italic font-light">that Define You</span>
                    </h1>
                    <p className="max-w-md text-charcoal/60 font-sans text-base md:text-lg mb-12 leading-relaxed">
                        Exclusive interior architecture that balances minimalist aesthetics with functional luxury.
                    </p>
                    <button className="group flex items-center gap-6 text-charcoal font-sans uppercase tracking-[0.25em] text-xs py-5 px-2 border-b border-charcoal/10 hover:border-gold transition-all duration-500 hover:gap-8">
                        View Portfolio
                        <ArrowRight className="w-4 h-4 group-hover:text-gold transition-colors duration-500" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
