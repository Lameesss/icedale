"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // Optimized premium luxury animation variants
  const luxuryFadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Smooth deceleration
        delay: 0.2
      }
    }
  };

  const elegantSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  const sophisticatedScale = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-full"
          style={{ willChange: 'opacity' }}
        >
          <Image
            src="/images/hero1.jpg"
            alt="Icedale Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Subtle gradient overlay for luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full px-8 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout - Product First, Then Text */}
          <div className="lg:hidden flex flex-col items-center justify-center h-full space-y-6">
            {/* Product Image - Mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sophisticatedScale}
              className="relative h-[300px] w-full flex items-center justify-center"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/product1.png"
                  alt="Icedale Water Bottle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content - Mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={luxuryFadeIn}
              className="text-white space-y-4 text-center"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="text-sm uppercase tracking-widest font-medium"
              >
                You are what you drink
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl font-bold uppercase leading-tight"
              >
                Drink And Repeat.
              </motion.h1>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
              >
                <Link
                  href="/product"
                  className="inline-block px-8 py-3 bg-blue-800 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300 text-sm"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={elegantSlideUp}
              className="text-white space-y-6"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="text-base uppercase tracking-widest font-medium"
              >
                You are what you drink
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl lg:text-7xl font-bold uppercase leading-tight"
              >
                Drink And Repeat.
              </motion.h1>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              >
                <Link
                  href="/product"
                  className="inline-block px-8 py-3 bg-blue-800 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300 text-base"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Product Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sophisticatedScale}
              className="relative h-[700px] flex items-center justify-center"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/product1.png"
                  alt="Icedale Water Bottle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <p className="text-xs uppercase tracking-wider mt-2"></p>
        </motion.div>
      </motion.div>
    </section>
  );
}
