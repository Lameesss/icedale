"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Content2() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Two Column Layout - Desktop, Stack on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Large Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-none uppercase tracking-tight">
              MORE THAN<br />WATER
            </h2>
          </motion.div>

          {/* Right Side - Paragraph and Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl" style={{ fontFamily: "Georgia, serif" }}>
              From a sustainable ancient artesian aquifer in Icedale to more than 60 countries across the globe, <strong className="font-semibold">ICEDALE Water</strong> has been bringing Earth's Finest Water to the world since 1996. Along the way, its philanthropic efforts have focused on improving the lives of the people of Icedale and protecting the unique place they call home.
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-900 transition-all duration-300 mt-4"
            >
              UNDERSTAND OUR IMPACT
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

