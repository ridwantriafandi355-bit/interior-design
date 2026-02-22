"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/628123456789?text=hallo%20saya20%mau%20buat,%website'm%20interested%20in%20consulting%20about%20my%20space."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-charcoal text-cream rounded-full flex items-center justify-center shadow-2xl hover:bg-gold transition-colors duration-500 border border-gold/20"
        >
            <MessageCircle size={28} strokeWidth={1.5} />
        </motion.a>
    );
}
