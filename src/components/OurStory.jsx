"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
    const brandBlue = "#1e3a8a"; // blue-900

    return (
        <section
            className="w-full py-16 lg:py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
                {/* Title and Heading - Above Everything */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl lg:text-5xl font-bold mb-4 text-blue-900"
                    >
                        OUR STORY
                    </motion.h2>

                    {/* Subtitle with Blue Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-3"
                    >
                        {/* Desktop Layout - Text and Line Side by Side */}
                        <div className="hidden sm:flex items-center space-x-4">
                            <p className="text-lg lg:text-xl font-light text-blue-900">
                                Pure water from the heart of Kerala
                            </p>
                            <motion.div
                                className="flex-1 h-0.5 bg-blue-900 origin-left"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.8,
                                    duration: 1.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                            ></motion.div>
                        </div>

                        {/* Mobile Layout - Text Above, Line Below */}
                        <div className="sm:hidden">
                            <p className="text-lg font-light mb-3 text-blue-900">
                                Pure water from the heart of Kerala
                            </p>
                            <motion.div
                                className="w-full h-0.5 bg-blue-900 origin-left"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.8,
                                    duration: 1.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                            ></motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Content Layout - Image and Text Side by Side */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/founder/team3.jpg"
                                    alt="Icedale Water Story"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="space-y-6"
                    >
                        {/* Single Paragraph Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <p className="text-blue-900 text-base lg:text-lg leading-relaxed">
                                Founded in 2015 in the heart of Calicut, Kerala, Icedale was born from a simple yet powerful vision: to provide the purest, most refreshing drinking water to every household in India. Our journey began when our founders discovered an ancient natural spring deep in the Western Ghats.
                            </p>
                            <p className="text-blue-900 text-base lg:text-lg leading-relaxed mt-6">
                                This pristine water source, untouched by modern pollution and naturally filtered through layers of volcanic rock, became the foundation of what Icedale is today. We combine traditional wisdom with modern purification technology to deliver water that's not just safe—it's exceptional.
                            </p>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="pt-6"
                        >
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl lg:text-3xl font-bold text-blue-900">
                                    Experience
                                </span>
                                <span className="text-2xl lg:text-3xl font-bold text-blue-900">
                                    Pure
                                </span>
                                <span className="text-2xl lg:text-3xl font-bold text-blue-900">
                                    Hydration!
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
