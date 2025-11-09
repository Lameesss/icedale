"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Icon() {
  const icons = [
    {
      id: 1,
      title: "Sustainably Sourced",
      image: "/images/icon/icon1.jpg",
    },
    {
      id: 2,
      title: "Naturally Occurring Minerals",
      image: "/images/icon/icon2.jpg",
    },
    {
      id: 3,
      title: "B-Corp Certified",
      image: "/images/icon/icon3.jpg",
    },
    {
      id: 4,
      title: "Minority-Owned",
      image: "/images/icon/icon4.jpg",
    },
    {
      id: 5,
      title: "100% Recyclable",
      image: "/images/icon/icon5.jpg",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Mobile Layout - Grid (2x2 + 1 centered) */}
        <div className="lg:hidden">
          {/* First 4 items in a 2x2 grid */}
          <div className="grid grid-cols-2 gap-12 mb-12">
            {icons.slice(0, 4).map((icon, index) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Icon Image */}
                <div className="relative w-32 h-32">
                  <Image
                    src={icon.image}
                    alt={icon.title}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-black leading-normal" style={{ color: "#203f69" }}>
                  {icon.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* 5th item centered below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Icon Image */}
            <div className="relative w-32 h-32">
              <Image
                src={icons[4].image}
                alt={icons[4].title}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm font-black leading-normal" style={{ color: "#203f69" }}>
              {icons[4].title}
            </h3>
          </motion.div>
        </div>

        {/* Desktop Layout - All in one row */}
        <div className="hidden lg:grid grid-cols-5 gap-12 xl:gap-16">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon Image */}
              <div className="relative w-32 h-32 transition-transform duration-300 hover:scale-105">
                <Image
                  src={icon.image}
                  alt={icon.title}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-black leading-tight whitespace-nowrap" style={{ color: "#203f69" }}>
                {icon.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
