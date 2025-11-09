"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Subscribe = () => {
  return (
    <div className="bg-white py-16 w-full">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Section - Product Image with Dark Off-White Background */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-gray-200 p-8 rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 100 }
              }}
              // Enhanced shadow and mobile animations
              animate={{
                boxShadow: [
                  "0 20px 40px rgba(0, 0, 0, 0.1)",
                  "0 25px 50px rgba(0, 0, 0, 0.15)",
                  "0 20px 40px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                // Initial entrance animation
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                stiffness: 60,
                damping: 15,
                // Continuous shadow animation
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <motion.img
                src="/images/product2.jpg"
                alt="Product"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain"
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, type: "spring", stiffness: 120 }
                }}
                // Mobile-specific animations
                animate={{
                  y: [0, -8, 0],
                  rotateY: [0, 2, 0],
                }}
                transition={{
                  // Initial entrance animation
                  duration: 1.2, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  // Continuous floating animation
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  rotateY: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Right Section - Newsletter Form */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
          >
            {/* Heading - Not Bold */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black mb-4"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              Subscribe Newsletter
            </motion.h2>
            
            {/* Description - Gray Color */}
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
            >
              Enter your email below for daily updates
            </motion.p>
            
            {/* Newsletter Form */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              {/* Email Input */}
              <motion.input
                type="email"
                placeholder="Enter your email."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.1)"
                }}
              />
              
              {/* Subscribe Button - Black Background */}
              <motion.button
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                GET START
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
