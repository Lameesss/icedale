"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const showBlueBg = !isHomePage || isScrolled || isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        showBlueBg ? "bg-[#1a5098] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button (left) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1"
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>

          {/* Logo (center on mobile, left on desktop) */}
          <Link href="/" className="flex items-center mx-auto lg:mx-0">
            <Image
              src="/logo.png"
              alt="Icedale Logo"
              width={250}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav - RIGHT SIDE */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="lg:hidden fixed top-0 left-0 h-[98vh] pb-20 w-3/4 max-w-xs bg-white z-50 shadow-xl"
      >
        <div className="flex flex-col h-full px-7 pt-6 pb-8">
          {/* Top Row: Logo (optional) + Close button */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-3xl leading-none text-gray-700"
            >
              ×
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col space-y-6 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-black text-2xl font-semibold uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons at Bottom */}
          <div className="pt-6 border-t -mt-20 border-gray-200">
            <div className="flex items-center justify-center space-x-6 text-gray-800">
              <a
                href="https://www.instagram.com/icedale_india"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>

             

              <a
                href="https://wa.me/919995900122"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* OVERLAY BEHIND SIDEBAR */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}
    </nav>
  );
}
