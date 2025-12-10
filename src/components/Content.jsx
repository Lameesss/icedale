"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center">

        {/* Subtle Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm tracking-[0.25em] text-gray-500 uppercase mb-4"
        >
          About Icedale
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight mb-6"
        >
          Delivering Pure, Mineral-Rich Drinking Water
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Icedale is one of the fastest-growing packaged drinking water companies in the
          northern region of Kerala. Our water goes through a highly advanced 
          <span className="font-semibold text-black"> 13-stage purification process </span> 
          that guarantees exceptional clarity, purity, and safety. 
          <br /><br />
          Enriched with essential minerals, every bottle of Icedale is crafted to provide
          healthier, cleaner, and fresher hydration—making it more than just water.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Link
            href="https://wa.me/919995900122?text=I'm%20interested%20in%20your%20products"
            className="inline-block px-12 py-3.5 bg-black text-white font-semibold text-sm sm:text-base tracking-wide rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-md"
          >
            Explore Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
