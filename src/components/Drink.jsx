"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Drink() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white overflow-x-hidden">
      <div className="w-full px-4 lg:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center uppercase leading-none font-black text-blue-900"
          style={{ 
            fontSize: "clamp(2rem, 10vw, 10rem)",
            letterSpacing: "-0.05em",
            wordSpacing: "-0.1em",
            transform: "scale(0.7, 2.0)",
            transformOrigin: "center"
          }}
        >
          DRINK IT ALL IN
        </motion.h2>
      </div>
    </section>
  );
}
