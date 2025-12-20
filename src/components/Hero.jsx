"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Hero() {
  // Sleek Hero Text Transition - splits text into words and period separately
  const text = "Drink And Repeat";
  const words = text.split(" ");

  // Slow bouncy hero text reveal animation
  const bouncyTextReveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Slower stagger for smooth effect
        delayChildren: 0.4,
      }
    }
  };

  // Slow, smooth bouncy word animation - drops from top
  const bouncyWordAnimation = {
    hidden: {
      opacity: 0,
      y: -60, // Negative = from top
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20, // Higher damping for slower, smoother bounce
        stiffness: 100, // Lower stiffness for gentler bounce
        mass: 1.2, // Added mass for more weight/slower movement
      }
    }
  };

  // Period drops and bounces multiple times - realistic bounce effect
  const bouncyPeriod = {
    hidden: {
      opacity: 0,
      y: -80, // Drops from higher
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        y: {
          type: "spring",
          damping: 8, // Lower damping = more bounces
          stiffness: 120,
          mass: 1.5, // More mass for realistic bounce
        },
        opacity: {
          duration: 0.3,
        },
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100,
        }
      }
    }
  };

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

  // Floating bottle animation - smooth, premium effect
  const floatingBottle = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8
      }
    }
  };

  return (
    <section className={`relative w-full h-screen overflow-hidden bg-white ${outfit.className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero1.jpg"
          alt="Icedale Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full px-8 lg:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout - Text First, Then Image, Then Button */}
          <div className="lg:hidden flex flex-col items-center justify-center h-full space-y-6">
            {/* Text Content - Mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={luxuryFadeIn}
              className="text-blue-900 space-y-4 text-center"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="text-sm uppercase tracking-widest font-medium"
              >
                Premium Hydration
              </motion.p>

              {/* Main Heading - Bouncy Text Transition */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={bouncyTextReveal}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight flex flex-wrap justify-center gap-x-2"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={bouncyWordAnimation}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
                {/* Period as Circle - Bounces Multiple Times */}
                <motion.span
                  variants={bouncyPeriod}
                  className="inline-flex items-end justify-center"
                  style={{ paddingBottom: '0.3em' }}
                >
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-900 rounded-full"></span>
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Product Image - Mobile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={floatingBottle}
              className="relative h-[300px] w-full flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0, -1, 0],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: [0.45, 0.05, 0.55, 0.95],
                }}
                className="relative w-full h-full"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(25, 65, 185, 0.15))'
                }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Icedale Water Bottle"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href="/product"
                className="inline-block px-8 py-3 bg-blue-900 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300 text-sm"
              >
                View Products
              </Link>
            </motion.div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={elegantSlideUp}
              className="text-blue-900 space-y-6"
            >
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="text-base uppercase tracking-widest font-medium"
              >
                Premium Hydration
              </motion.p>

              {/* Main Heading - Bouncy Text Transition */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={bouncyTextReveal}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase leading-tight flex flex-wrap gap-x-3"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={bouncyWordAnimation}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
                {/* Period as Circle - Bounces Multiple Times */}
                <motion.span
                  variants={bouncyPeriod}
                  className="inline-flex items-end justify-center"
                  style={{ paddingBottom: '0.3em' }}
                >
                  <span className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-blue-900 rounded-full"></span>
                </motion.span>
              </motion.h1>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              >
                <Link
                  href="/product"
                  className="inline-block px-8 py-3 bg-blue-900 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300 text-base"
                >
                  View Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Product Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={floatingBottle}
              className="relative h-[700px] flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: [0.45, 0.05, 0.55, 0.95],
                }}
                className="relative w-full h-full"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(25, 65, 185, 0.2))'
                }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Icedale Water Bottle"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
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
          className="text-blue-900 text-center"
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
