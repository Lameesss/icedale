"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Content() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
        >
          The Purest Tasting Water On Earth®
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Over 5,000 years ago, long before the first humans reached remote Iceland, a massive
          volcanic eruption created a unique underground spring, complete with its own natural
          filtration system– pristine lava rock. Now known as the Ölfus Spring, this is the source of
          Icedale
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
            SHOP ALL WATER
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
