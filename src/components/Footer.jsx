import { useState, useEffect } from "react";
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
    <footer className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-6 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Organization Info */}
          <div className="flex items-center">
            <div className="bg-white p-1.5 rounded-lg mr-3">
              <img src={Men} alt="Forging of men" className="h-8 w-auto" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg">Forging Of Men</h3>
              <div className="flex items-center justify-center md:justify-start mt-1 text-green-100 text-sm">
                <a href="mailto:info@forgingofmen.org" className="hover:text-white transition-colors">
                  info@forgingofmen.org
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Visit our Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Visit our TikTok"
            >
              <SiTiktok className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Visit our Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Button */}
          {showBackToTop && isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-white text-green-700 hover:bg-green-50 transition-all duration-300 p-2 rounded-full shadow-lg flex items-center justify-center animate-fade-in"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-green-500/30 text-center">
          <p className="text-xs text-green-100">
            © {new Date().getFullYear()} Forging of Men. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;