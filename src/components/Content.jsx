"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Content() {
  return (
    <section className={`w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white ${outfit.className}`}>
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight"
        >
          Pure Hydration, Perfected for Everyday Life®
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto"
        >
         Crafted with care, Icedale Mineral Water delivers clean, refreshing hydration you can trust.
Processed under strict quality standards for consistent purity and taste.
Designed for modern living at work, at home, or on the move.
Icedale isn&apos;t just water, it&apos;s hydration you can depend on.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/product"
            className="inline-block px-10 py-3 border-2 border-black text-black text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 rounded-full"
          >
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
