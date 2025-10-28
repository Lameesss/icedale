"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useState, useEffect } from "react";

export default function Banner2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const brands = [
    { id: 1, name: "Page Six" },
    { id: 2, name: "E!NEWS" },
    { id: 3, name: "LA WEEKLY" },
    { id: 4, name: "US Weekly" },
    { id: 5, name: "KCAL NEWS" },
    { id: 6, name: "BuzzFeed" },
  ];

  const totalSlides = brands.length;

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full py-12 lg:py-16 mt-8 lg:mt-12" style={{ backgroundColor: "#00b2ff" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white text-sm font-bold uppercase tracking-widest mb-8 lg:mb-12"
        >
          AS SEEN IN
        </motion.h2>

        {/* Brand Names - Desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="hidden lg:flex items-center justify-center gap-8 xl:gap-12"
        >
          {/* Page Six */}
          <motion.div
            variants={fadeInUp}
            className="text-white font-black text-4xl uppercase"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Page Six
          </motion.div>

          {/* E!NEWS */}
          <motion.div
            variants={fadeInUp}
            className="text-white font-black text-5xl uppercase flex items-center"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <span className="text-6xl">E</span>
            <span className="text-4xl">!</span>
            <span className="text-3xl">NEWS</span>
          </motion.div>

          {/* LA WEEKLY */}
          <motion.div
            variants={fadeInUp}
            className="text-white font-black text-4xl uppercase tracking-tight"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <span className="inline-block border-4 border-white px-2">LA</span>
            <span>WEEKLY</span>
          </motion.div>

          {/* US Weekly */}
          <motion.div
            variants={fadeInUp}
            className="text-white font-black uppercase flex flex-col items-center leading-none"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <span className="text-7xl">U</span>
            <span className="text-6xl -mt-3">S</span>
            <span className="text-xs tracking-widest mt-1">WEEKLY</span>
          </motion.div>

          {/* KCAL NEWS LOS ANGELES */}
          <motion.div
            variants={fadeInUp}
            className="text-white font-bold uppercase flex flex-col items-start leading-tight"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <div className="bg-white text-blue px-3 py-1 text-lg font-black">
              <span>KCAL</span>
            </div>
            <div className="text-sm font-bold mt-1">
              <span>NEWS</span> <span className="text-xs">LOS ANGELES</span>
            </div>
          </motion.div>

          {/* BuzzFeed */}
          <motion.div
            variants={fadeInUp}
            className="text-white font-black text-4xl uppercase"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            BuzzFeed
          </motion.div>
        </motion.div>

        {/* Brand Names - Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative pt-4">
            {/* Carousel Container - Shows 2.5 items */}
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: -currentSlide * 140 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="flex gap-6"
              >
                {brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex-shrink-0 w-[130px] flex items-center justify-center text-center"
                  >
                    <h3 className="text-white font-black text-xl uppercase leading-tight">
                      {brand.name}
                    </h3>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Pagination */}
              <div className="text-white font-medium text-xs">
                {currentSlide + 1}/{totalSlides}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
