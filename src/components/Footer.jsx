"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full min-h-[60vh] lg:h-[calc(100vh-64px)] bg-black text-white flex flex-col justify-between py-6 lg:py-16 px-4 sm:px-6 lg:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full">
        {/* Top Section - Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 lg:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold lg:whitespace-nowrap">
              Water you waiting for?
              <br />
              Join us!
            </h2>
            <form onSubmit={handleSubscribe} className="flex gap-0 flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YourEmail@example.com"
                required
                className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white text-white placeholder-white/60 focus:outline-none focus:border-white/80 text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 transition-all duration-300 whitespace-nowrap text-[10px] sm:text-xs"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </motion.div>

        {/* Middle Section - Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 mb-6 lg:mb-16"
        >
          {/* About Us Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold mb-4 uppercase">About Us</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/our-story"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/our-impact"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/business-partner"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Business Partner Program
                </Link>
              </li>
              <li>
                <Link
                  href="/wedding-event"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Wedding/Event Request
                </Link>
              </li>
              <li>
                <Link
                  href="/influencer-partner"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Influencer Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold mb-4 uppercase">Support</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/my-account"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Rewards Program
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/return-refund"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-white/70 transition-colors duration-300"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold mb-4 uppercase">Follow Us</h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Legal Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 pt-4 lg:pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs">
              <Link
                href="/water-quality"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Water Quality Report
              </Link>
              <Link
                href="/terms"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/do-not-sell"
                className="hover:text-white/70 transition-colors duration-300"
              >
                Do not sell my personal information
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-[10px] sm:text-xs text-white/80">
              ©2025 Icedale, Inc.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
