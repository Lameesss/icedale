"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function About() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <div className="text-center space-y-8">
          {/* "ABOUT US" Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-widest text-black font-bold"
          >
            ABOUT US
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-black leading-tight"
          >
            EARTH'S FINEST WATER
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the journey from pristine clouds above Icedale to the ancient artesian aquifer deep beneath the surface.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-900 transition-all duration-300"
            >
              DISCOVER MORE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

