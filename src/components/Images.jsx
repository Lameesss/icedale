"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Images() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Upcoming Products
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            A preview of what's coming soon from Icedale — crafted with purity and innovation.
          </p>
        </motion.div>

        {/* Two Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[225px] sm:h-[250px] lg:h-[300px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="/upcom1.jpg"
              alt="Upcoming Product 1"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full h-[225px] sm:h-[250px] lg:h-[300px] rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src="/upcom2.jpg"
              alt="Upcoming Product 2"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
