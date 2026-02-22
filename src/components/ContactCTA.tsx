"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
    return (
        <footer id="contact" className="py-24 md:py-40 bg-cream">
            <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-12">
                        Ready to transform <br className="hidden md:block" /> your space?
                    </h2>
                    <a
                        href="https://wa.me/628123456789?text=Hello%20Lumina%20Interiors,%20I'd%20like%20to%20book%20a%20consultation."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <button className="px-12 py-6 bg-charcoal text-cream hover:bg-gold transition-colors duration-500 font-sans uppercase tracking-[0.2em] text-sm group">
                            Book a Consultation
                        </button>
                    </a>
                </motion.div>

                <div className="mt-32 pt-16 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-serif text-charcoal">
                        LUMINA<span className="text-gold">.</span>
                    </div>
                    <div className="flex gap-8 text-xs uppercase tracking-widest text-charcoal/40 font-sans">
                        <a href="#" className="hover:text-gold transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
                        <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-charcoal/30 font-sans">
                        © 2024 Lumina Interiors. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
