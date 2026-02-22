"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Zen Living Room",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Modern Loft",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1616486341351-702524d73bb9?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Minimalist Office",
        category: "Workspace",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Classic Suite",
        category: "Hospitality",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd0f8e1?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Light & Airy",
        category: "Kitchen",
        image: "https://images.unsplash.com/photo-1556911220-e15224bbbe39?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Deep Charcoal",
        category: "Bathroom",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
    },
];

export default function Gallery() {
    return (
        <section id="portfolio" className="py-32 md:py-48 bg-white selection:bg-gold/30">
            <div className="max-w-7xl mx-auto px-8 lg:px-16">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32 text-center"
                >
                    <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-sans mb-6 block font-medium">Selected Works</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-charcoal leading-tight">Architecture & <span className="italic font-light">Fine Interiors</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group aspect-[4/5] overflow-hidden bg-cream"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale transition-all duration-[1s] ease-out group-hover:grayscale-0 group-hover:scale-105"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200"; // Fallback high-quality image
                                }}
                            />
                            <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-medium mb-3 block">{project.category}</span>
                                    <h3 className="text-white text-2xl font-serif font-light">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
