"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export default function Social() {
  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-2">
        
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* IMAGE AREA — Right on Desktop, Second on Mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="order-2 lg:order-2 lg:col-span-2"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[400px] overflow-hidden">
              <Image
                src="/social.png"   // <-- Single image here
                alt="Social Image"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>

          {/* TEXT AREA — Left on Desktop, First on Mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="order-1 lg:order-1 flex items-center justify-center"
            style={{ backgroundColor: "#203f69" }}
          >
            <div className="text-left text-white p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extralight mb-2 leading-tight"
              >
                Get social with us
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm sm:text-base font-extralight"
              >
                stay in touch.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
