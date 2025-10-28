"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageContent() {
  return (
    <section className="w-full bg-white">
      {/* Section 1: Image Left, Text Right */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] lg:h-[550px]"
            >
              <Image
                src="/images/000.png"
                alt="Icedale Source"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black uppercase leading-tight">
                SOURCED FROM ICEDALE
              </h2>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Long before humans reached the remote place of Icedale, a massive volcanic eruption occurred, creating the ancient spring deep below the earth's surface.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-black text-black text-sm font-bold uppercase tracking-widest bg-white hover:bg-black hover:text-white transition-all duration-300"
              >
                OUR SOURCE
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:order-1 order-2"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black uppercase leading-tight">
                THE ICEDALE DIFFERENCE
              </h2>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Exceptionally pure and naturally alkaline water with the perfect mineral balance. Nothing is ever added or taken away.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 border-black text-black text-sm font-bold uppercase tracking-widest bg-white hover:bg-black hover:text-white transition-all duration-300"
              >
                OUR WATER
              </Link>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] lg:h-[550px] lg:order-2 order-1"
            >
              <Image
                src="/images/image33.jpg"
                alt="Icedale Difference"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[450px] lg:h-[550px]"
            >
              <Image
                src="/images/product1.png"
                alt="Icedale Awards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black uppercase leading-tight">
                AWARDS & CERTIFICATIONS
              </h2>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                Icedale Water undergoes rigorous testing to meet the highest food safety and quality standards, fully accredited by the NSF, FDA, and WHO. Click here to learn more about our awards and certifications.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 border-black text-black text-sm font-bold uppercase tracking-widest bg-white hover:bg-black hover:text-white transition-all duration-300"
              >
                LEARN MORE
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

