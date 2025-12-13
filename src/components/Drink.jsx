"use client";

import { motion } from "framer-motion";

export default function Drink() {
  // Split text into individual letters with spaces between words
  const text = "DRINK  IT  ALL  IN";
  const letters = text.split("");

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Slower delay between each letter (was 0.05)
        delayChildren: 0.4,   // Slightly longer initial delay
      }
    }
  };

  // Bouncing letter animation with smooth spring physics
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 18,        // Higher damping for smoother, gentler bounce (was 12)
        stiffness: 120,     // Lower stiffness for slower movement (was 200)
        mass: 1,            // Added mass for more weight
        duration: 1.2,      // Longer duration for smoother effect
      }
    }
  };

  return (
    <section className="w-full py-20 lg:py-32 bg-white overflow-x-hidden">
      <div className="w-full px-4 lg:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center uppercase leading-none font-black text-blue-900 flex flex-wrap justify-center"
          style={{
            fontSize: "clamp(2rem, 10vw, 10rem)",
            letterSpacing: "-0.05em",
            wordSpacing: "-0.1em",
            transform: "scale(0.85, 1.3)",
            transformOrigin: "center"
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              whileHover={{
                y: -10,
                scale: 1.1,
                color: "#1e40af",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }
              }}
              style={{ display: "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
