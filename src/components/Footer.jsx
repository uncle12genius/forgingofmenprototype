import React, { useState, useEffect } from "react";
import { ChevronUp, Instagram, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import Men from "../assets/Men.jpeg";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for "scrolled" state + back-to-top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
        setScrolled(true);
      } else {
        setShowBackToTop(false);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);

    // Reappear after scrolling is complete
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-8 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Social Media */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  scrolled
                    ? "bg-gradient-to-r from-green-600 to-teal-500"
                    : "bg-white"
                }`}
              >
                <img src={Men} alt="Forging of men" className="h-10 w-auto" />
              </div>
              <span className="text-xl font-bold text-white">
                Forging Of Men
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Visit our TikTok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Visit our Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          {showBackToTop && isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-white text-green-700 hover:bg-green-50 transition-all duration-300 p-3 rounded-full shadow-lg flex items-center justify-center animate-fade-in"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Copyright and Contact */}
        <div className="mt-8 pt-6 border-t border-green-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-green-100">
              © {new Date().getFullYear()} Forging of Men. All rights reserved.
            </p>
            <a
              href="mailto:info@forgingofmen.org"
              className="text-green-100 hover:text-white transition-colors text-sm"
            >
              info@forgingofmen.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;