"use client";

import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Banner2() {
  return (
    <section className={`w-full py-12 lg:py-16 mt-8 lg:mt-12 bg-white ${outfit.className}`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Heading with Premium Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="text-center text-blue-900 text-sm font-bold uppercase tracking-widest mb-8 lg:mb-12"
        >
          AS SEEN IN
        </motion.h2>

        {/* Brand Names - Desktop - Infinite Scroll with Premium Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="hidden lg:block overflow-hidden relative"
        >
          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-16"
          >
            {/* First Set */}
            {/* Page Six */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-4xl uppercase cursor-pointer">
                INDIAN EXPRESS
              </div>
            </motion.div>

            {/* E!NEWS */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-5xl uppercase flex items-center cursor-pointer">
                <span className="text-6xl">E</span>
                <span className="text-4xl">!</span>
                <span className="text-3xl">NEWS</span>
              </div>
            </motion.div>

            {/* LA WEEKLY */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-4xl uppercase tracking-tight cursor-pointer">
                <span className="inline-block border-4 border-blue-900 px-2">GULF</span>
                <span>MADHYAMAM</span>
              </div>
            </motion.div>

            {/* US Weekly */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black uppercase flex flex-col items-center leading-none cursor-pointer">
                <span className="text-7xl">A</span>
                <span className="text-6xl -mt-3">S</span>
                <span className="text-xs tracking-widest mt-1">GROUP</span>
              </div>
            </motion.div>

            {/* KCAL NEWS */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-bold uppercase flex flex-col items-start leading-tight cursor-pointer">
                <div className="bg-blue-900 text-white px-3 py-1 text-lg font-black">
                  <span>SPORTING</span>
                </div>
                <div className="text-sm font-bold mt-1">
                  <span>CLUB</span> <span className="text-xs">KERALA</span>
                </div>
              </div>
            </motion.div>

            {/* BuzzFeed */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-4xl uppercase cursor-pointer">
                madhyamam
              </div>
            </motion.div>

            {/* Duplicate Set for Seamless Loop */}
            {/* Page Six */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-4xl uppercase cursor-pointer">
                INDIAN EXPRESS
              </div>
            </motion.div>

            {/* E!NEWS */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-5xl uppercase flex items-center cursor-pointer">
                <span className="text-6xl">E</span>
                <span className="text-4xl">!</span>
                <span className="text-3xl">NEWS</span>
              </div>
            </motion.div>

            {/* LA WEEKLY */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-4xl uppercase tracking-tight cursor-pointer">
                <span className="inline-block border-4 border-blue-900 px-2">GULF</span>
                <span>MADHYAMAM</span>
              </div>
            </motion.div>

            {/* US Weekly */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black uppercase flex flex-col items-center leading-none cursor-pointer">
                <span className="text-7xl">A</span>
                <span className="text-6xl -mt-3">S</span>
                <span className="text-xs tracking-widest mt-1">GROUP</span>
              </div>
            </motion.div>

            {/* KCAL NEWS */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-bold uppercase flex flex-col items-start leading-tight cursor-pointer">
                <div className="bg-blue-900 text-white px-3 py-1 text-lg font-black">
                  <span>SPORTING</span>
                </div>
                <div className="text-sm font-bold mt-1">
                  <span>CLUB</span> <span className="text-xs">KERALA</span>
                </div>
              </div>
            </motion.div>

            {/* BuzzFeed */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-blue-900 font-black text-4xl uppercase cursor-pointer">
                madhyamam
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Brand Names - Mobile - Infinite Scroll */}
        <div className="lg:hidden">
          <div className="relative pt-4">
            {/* Carousel Container - Infinite scroll */}
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: [0, -936] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8"
              >
                {/* Page Six */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black text-2xl uppercase">
                    INDIAN EXPRESS
                  </div>
                </div>

                {/* E!NEWS */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black uppercase flex items-center">
                    <span className="text-4xl">E</span>
                    <span className="text-2xl">!</span>
                    <span className="text-xl">NEWS</span>
                  </div>
                </div>

                {/* LA WEEKLY */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black text-2xl uppercase tracking-tight">
                    <span className="inline-block border-2 border-blue-900 px-1">GULF</span>
                    <span>MADHYAMAM</span>
                  </div>
                </div>

                {/* US Weekly */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black uppercase flex flex-col items-center leading-none">
                    <span className="text-4xl">A</span>
                    <span className="text-3xl -mt-2">S</span>
                    <span className="text-[8px] tracking-widest mt-1">GROUP</span>
                  </div>
                </div>

                {/* KCAL NEWS */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-bold uppercase flex flex-col items-center leading-tight">
                    <div className="bg-blue-900 text-white px-2 py-0.5 text-sm font-black">
                      <span>SPORTING</span>
                    </div>
                    <div className="text-xs font-bold mt-1">
                      <span>CLUB</span> <span className="text-[8px]">KERALA</span>
                    </div>
                  </div>
                </div>

                {/* BuzzFeed */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black text-2xl uppercase">
                    madhyamam
                  </div>
                </div>

                {/* Duplicate items for seamless loop */}
                {/* Page Six */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black text-2xl uppercase">INDIAN EXPRESS
                  </div>
                </div>

                {/* E!NEWS */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black uppercase flex items-center">
                    <span className="text-4xl">E</span>
                    <span className="text-2xl">!</span>
                    <span className="text-xl">NEWS</span>
                  </div>
                </div>

                {/* LA WEEKLY */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black text-2xl uppercase tracking-tight">
                    <span className="inline-block border-2 border-blue-900 px-1">GULF</span>
                    <span>MADHYAMAM</span>
                  </div>
                </div>

                {/* US Weekly */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black uppercase flex flex-col items-center leading-none">
                    <span className="text-4xl">A</span>
                    <span className="text-3xl -mt-2">S</span>
                    <span className="text-[8px] tracking-widest mt-1">GROUP</span>
                  </div>
                </div>

                {/* KCAL NEWS */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-bold uppercase flex flex-col items-center leading-tight">
                    <div className="bg-blue-900 text-white px-2 py-0.5 text-sm font-black">
                      <span>SPORTING</span>
                    </div>
                    <div className="text-xs font-bold mt-1">
                      <span>CLUB</span> <span className="text-[8px]">KERALA</span>
                    </div>
                  </div>
                </div>

                {/* BuzzFeed */}
                <div className="flex-shrink-0 flex items-center justify-center text-center">
                  <div className="text-blue-900 font-black text-2xl uppercase">
                    madhyamam
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
