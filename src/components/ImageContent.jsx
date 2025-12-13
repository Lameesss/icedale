"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function UpcomingProducts() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const products = [
    {
      id: 1,
      name: "Peanut Candy",
      image: "/images/coming11.png",
      description: "Crunchy peanut sweet with natural sweetness.",
      comingSoon: "Coming P1 2026"
    },
    {
      id: 2,
      name: "Icedale Plus",
      image: "/images/coming22.png",
      description: "Enhanced with natural minerals for optimal hydration",
      comingSoon: "Coming P2 2026"
    }
  ];

  return (
    <section className={`w-full py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 ${outfit.className}`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight"
          >
            Upcoming Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            Discover our exciting new additions to the Icedale family.
            Premium quality water products designed to elevate your hydration experience.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-6 right-6 z-10 px-4 py-2 bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {product.comingSoon}
              </div>

              {/* Product Image */}
              <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                  {product.name}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {product.description}
                </p>

                {/* Notify Me Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-6 py-3 bg-blue-900 text-white font-bold uppercase tracking-wider hover:bg-blue-800 transition-all duration-300 rounded-full"
                >
                  Notify Me
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
