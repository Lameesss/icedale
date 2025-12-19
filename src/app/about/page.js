"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OurStory from "@/components/OurStory";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function About() {
  const brandBlue = "#1e3a8a"; // blue-900

  // Premium animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Purity",
      description: "Every drop meets the highest standards of purity through rigorous testing and quality control."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sustainability",
      description: "Committed to eco-friendly practices, protecting our planet for future generations."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Continuously improving our processes to deliver the best hydration experience."
    }
  ];

  const features = [
    {
      number: "01",
      title: "Natural Source",
      description: "Water from protected natural springs in the Western Ghats, ensuring unmatched purity and mineral content."
    },
    {
      number: "02",
      title: "Advanced Purification",
      description: "State-of-the-art filtration processes ensure every bottle meets international quality standards."
    },
    {
      number: "03",
      title: "Quality Assurance",
      description: "Regular testing and certification from leading laboratories guarantee safety and quality."
    },
    {
      number: "04",
      title: "Eco-Friendly Packaging",
      description: "100% recyclable bottles and sustainable packaging materials to minimize environmental impact."
    }
  ];

  return (
    <main className={`pt-16 bg-white ${outfit.className}`}>


      {/* OurStory Component */}
      <OurStory />



      {/* Our Mission */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              {/* Section Header */}
              <div className="mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg lg:text-xl font-light mb-4 text-blue-900"
                >
                  Our Mission
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-wide mb-6 text-blue-900"
                >
                  QUALITY YOU CAN TRUST
                </motion.h2>

                {/* Animated Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1.0 }}
                  className="w-24 h-0.5 mb-8 origin-left bg-blue-900"
                />
              </div>

              {/* Story Content */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base lg:text-lg leading-relaxed text-gray-700"
                >
                  At Icedale, we are committed to delivering pure and reliable drinking water without compromise. Our state-of-the-art purification facilities ensure that every bottle meets stringent quality standards, providing you with safe, refreshing hydration every time.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base lg:text-lg leading-relaxed text-gray-700"
                >
                  From sourcing to bottling, we maintain complete transparency and responsibility. Our multi-stage purification process, combined with regular quality testing, guarantees that Icedale water is not just clean—it's premium hydration you can depend on for your family, your business, and your community.
                </motion.p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="relative w-full h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/founder/ice2.png"
                    alt="Icedale Water Quality"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section (Original) */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-blue-900 mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do at Icedale
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>




      {/* Our Story Section (Original with Stats) */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm uppercase tracking-widest text-blue-900 mb-4"
              >
                Since 2015
              </motion.p>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
                Our Journey to
                <br />
                <span className="text-black">Pure Excellence</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base lg:text-lg">
                <p>
                  Founded in the heart of Calicut, Kerala, Icedale was born from a powerful vision: to provide the purest, most refreshing drinking water to every household in India.
                </p>
                <p>
                  Our journey began when our founders discovered an ancient natural spring deep in the Western Ghats. This pristine water source, untouched by modern pollution and naturally filtered through layers of volcanic rock, became the foundation of Icedale.
                </p>
                <p>
                  Today, we are proud to be one of Kerala's leading premium water bottle companies, serving thousands of families and businesses with our unwavering commitment to purity, quality, and sustainability.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <motion.div variants={fadeInUp} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-900">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Years</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-900">10K+</div>
                  <div className="text-sm text-gray-600 mt-1">Customers</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-900">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Pure</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/founder/ice14.png"
                alt="Icedale Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-8 right-8 bg-white px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="text-2xl font-bold text-blue-900">Since 2015</div>
                <div className="text-sm text-gray-600">Trusted Quality</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values (New Premium Cards) */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl font-light mb-4 text-blue-900"
            >
              Our Values
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl lg:text-5xl font-bold uppercase leading-[1.1] tracking-wide mb-6 text-blue-900"
            >
              WHAT DRIVES US
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="w-32 h-0.5 mx-auto mb-6 origin-center bg-blue-900"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg lg:text-xl leading-relaxed text-gray-700"
            >
              Discover the core principles that guide everything we do at Icedale
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Purity */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative group h-full"
            >
              <div className="relative rounded-2xl p-1 shadow-xl bg-blue-900">
                <div className="relative p-8 lg:p-10 rounded-xl bg-white text-center flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto bg-blue-900">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4 text-blue-900">
                    PURITY
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mt-auto">
                    Every drop of Icedale water goes through advanced multi-stage purification, ensuring absolute purity and safety for your loved ones.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="relative rounded-2xl p-1 shadow-xl bg-blue-900">
                <div className="relative p-8 lg:p-10 rounded-xl bg-white text-center flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto bg-blue-900">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4 text-blue-900">
                    QUALITY
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mt-auto">
                    Rigorous quality control at every step, from source to bottle. We never compromise on standards, delivering premium water you can trust.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Responsibility */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group h-full"
            >
              <div className="relative rounded-2xl p-1 shadow-xl bg-blue-900">
                <div className="relative p-8 lg:p-10 rounded-xl bg-white text-center flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto bg-blue-900">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-wider mb-4 text-blue-900">
                    RESPONSIBILITY
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mt-auto">
                    Committed to sustainable practices and environmental responsibility. We care about our community and the planet we all share together.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-blue-900 mb-4">
              The Icedale Difference
            </p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
              Why Choose Icedale?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                variants={fadeInUp}
                className="flex items-start space-x-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Hero Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl lg:text-2xl font-light italic mb-12 text-gray-700"
            >
              "Pure water, pure trust. Every bottle, every time."
            </motion.p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                href="/product"
                className="inline-block px-12 py-4 bg-blue-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-800 transition-all duration-300"
              >
                EXPLORE OUR PRODUCTS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}