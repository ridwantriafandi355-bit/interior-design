"use client";

import { motion } from "framer-motion";
import { Compass, PencilRuler, Armchair } from "lucide-react";

const services = [
    {
        title: "Bespoke Interiors",
        description: "Tailored design solutions that reflect your unique personality and lifestyle choices.",
        icon: Armchair,
    },
    {
        title: "Architectural Planning",
        description: "Detailed blueprints and spatial planning that optimize every inch of your environment.",
        icon: Compass,
    },
    {
        title: "Fine Furnishing",
        description: "Curated selection of premium materials and custom-made furniture pieces.",
        icon: PencilRuler,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 md:py-48 bg-cream border-y border-charcoal/5">
            <div className="max-w-7xl mx-auto px-8 lg:px-16">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32"
                >
                    <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-sans mb-6 block font-medium text-center md:text-left">Our Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-charcoal text-center md:text-left leading-tight">Design <br /><span className="italic font-light text-gold/80">Disciplines</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-start group"
                        >
                            <div className="w-16 h-16 flex items-center justify-center mb-10 text-charcoal/30 group-hover:text-gold transition-all duration-700 ease-out transform group-hover:-translate-y-1">
                                <service.icon strokeWidth={0.75} size={56} />
                            </div>
                            <h3 className="text-2xl font-serif text-charcoal mb-6 font-light">{service.title}</h3>
                            <p className="text-charcoal/50 font-sans leading-relaxed text-sm md:text-base mb-10">
                                {service.description}
                            </p>
                            <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                Explore
                            </button>
                            <div className="w-full h-[1px] bg-charcoal/5 mt-auto">
                                <div className="w-0 h-full bg-gold/30 group-hover:w-full transition-all duration-1000 ease-out"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
