"use client";

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter,MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t border-black">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <a href="/" className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png" // <-- replace with your logo file path
              alt="Zavia Logo"
              className="h-20 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-gray-700">
             Hydration engineered with purity, design and everyday performance in mind.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4 text-[#1a5098]">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-black">Home</a></li>
            <li><a href="/about" className="text-black">About</a></li>
            
            <li><a href="/contact" className="text-black">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
       <div>
  <h3 className="font-semibold mb-4 text-[#1a5098]">Contact</h3>
  <ul className="space-y-2 text-sm w-full">
    {/* <li className="flex items-center gap-2">
      <Mail size={16} /> Zaviatrips@gmail.com
    </li> */}
    <li className="flex items-center gap-2">
      <Phone size={16} /> +91 9995900122
    </li>
    <li className="flex items-start gap-2">
      <MapPin size={16} className="mt-1 shrink-0" />
      <span className="leading-relaxed">
        North Silk Street, Behind Himayath School, South beach Kozhikode 673001, KL, India
      </span>
    </li>
  </ul>
</div>


        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-[#1a5098]">Follow Us</h3>
          <div className="flex space-x-4 space-y-4">
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

      <div className="text-center text-xs text-gray-500 border-t border-black py-6">
        &copy; {year} Icedale. All rights reserved.
      </div>
    </footer>
  );
}
