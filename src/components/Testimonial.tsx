"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
    return (
        <section className="py-32 md:py-56 bg-charcoal text-cream overflow-hidden relative">
            {/* Subtle background element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cream rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Quote className="w-16 h-16 text-gold/20 mx-auto mb-16" strokeWidth={0.5} />
                    <blockquote className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-16 italic font-light text-balance text-cream/90">
                        &quot;They didn&apos;t just design a house; they curated an experience. Every corner of our home now tells a story of elegance and simplicity.&quot;
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-[1px] bg-gold/50 mb-6"></div>
                        <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-2">Verified Client</span>
                        <span className="text-cream/30 text-[10px] md:text-xs font-sans tracking-widest uppercase">Manhattan Residence</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
