"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "NATURAL SPRING WATER",
      image: "/images/product2.png",
      link: "/product/natural-spring-water",
    },
    {
      id: 2,
      name: "GLASS",
      image: "/images/product3.png",
      link: "/product/glass",
    },
    {
      id: 3,
      name: "ALUMINUM CANS",
      image: "/images/product4.png",
      link: "/product/aluminum-cans",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
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

              {/* Shop Now Link */}
              <Link
                href={"/product"}
                className="inline-block text-xs font-bold uppercase tracking-wider text-black hover:text-blue-950 transition-all duration-300"
              >
                SHOP NOW
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
