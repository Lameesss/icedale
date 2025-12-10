"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
   <section className="relative w-full min-h-[90vh] pt-[80px] md:pt-[90px] overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="w-full h-full relative"
    >
      <Image
        src="/images/hero1.jpg"
        alt="Icedale Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
    </motion.div>
  </div>

  {/* Content */}
  <div className="relative z-10 w-full flex items-center px-6 sm:px-8 lg:px-20 py-10 md:py-0">
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-white space-y-4 sm:space-y-6 text-center lg:text-left"
      >
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase opacity-80">
          Premium Hydration
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight">
          Redefining What
          <br />
          <span className="font-bold">Water Can Be.</span>
        </h1>

        <p className="text-base sm:text-lg opacity-90 max-w-sm mx-auto lg:mx-0 leading-relaxed">
          Hydration engineered with purity, design and everyday performance in mind.
        </p>

        <div>
          <Link
  href="https://wa.me/919995900122?text=I'm%20interested%20in%20your%20products"
  className="inline-block px-8 sm:px-10 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-neutral-100 transition-all"
>
  Shop Collection
</Link>

        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[650px] flex items-center justify-center"
      >
        <Image
          src="/hero.png"
          alt="Icedale Bottle"
          fill
          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          priority
        />
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
 
</section>

  );
}
