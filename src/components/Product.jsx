"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { Outfit } from "next/font/google";
import { useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Product() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      name: "MINI WATER BOTTLE",
      image: "/images/2.png",
      link: "/product/natural-spring-water",
    },
    {
      id: 2,
      name: "500 ML BOTTLE",
      image: "/images/1.png",
      link: "/product/glass",
    },
    {
      id: 3,
      name: "PARTY BOTTLE",
      image: "/images/3.png",
      link: "/product/aluminum-cans",
    },
    {
      id: 4,
      name: "1 LITER BOTTLE",
      image: "/images/4.png",
      link: "/product/sparkling-water",
    },
    {
      id: 5,
      name: "PREMIUM BOTTLE",
      image: "/images/5.png",
      link: "/product/premium-glass-bottles",
    },
    {
      id: 6,
      name: "ECO-FRIENDLY CANS",
      image: "/images/6.jpg",
      link: "/product/eco-friendly-cans",
    },
  ];

  // On mobile, show only first 3 products unless showAll is true
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className={`w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 ${outfit.className}`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Products Grid - Mobile */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-12">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Product Image */}
                <div className="relative w-full h-[350px] mb-8 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="100vw"
                    />
                  </motion.div>
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-black">
                  {product.name}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* More Button - Only show on mobile if not all products are displayed */}
          {!showAll && (
            <div className="flex justify-center mt-12">
              <motion.button
                onClick={() => setShowAll(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-sm font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-950 rounded-full transition-all duration-300"
              >
                More
              </motion.button>
            </div>
          )}
        </div>

        {/* Products Grid - Tablet and Desktop (show all) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Product Image */}
              <div className="relative w-full h-[350px] mb-8 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Product Name */}
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-black">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
