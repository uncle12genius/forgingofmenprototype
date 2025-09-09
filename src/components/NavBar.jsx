import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Home, Users, BookOpen } from "lucide-react";
import Men from "../assets/Men.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home", scroll: true, icon: <Home size={18} /> },
    { name: "About Us", id: "about", scroll: true, icon: <Users size={18} /> },
    { name: "Events", id: "events", scroll: true, icon: <Calendar size={18} /> },
    { name: "Resources", href: "/resources", scroll: false, icon: <BookOpen size={18} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-green-600 to-teal-500 py-3"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div
            className={`p-2 rounded-lg ${
              scrolled
                ? "bg-gradient-to-r from-green-600 to-teal-500"
                : "bg-white"
            }`}
          >
            <img src={Men} alt="Forging of men" className="h-8 w-auto" />
          </div>
          <span
            className={`text-xl font-bold ${
              scrolled ? "text-green-700" : "text-white"
            }`}
          >
            Forging Of Men
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              {item.scroll ? (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    scrolled
                      ? "text-gray-700 hover:bg-green-50 hover:text-green-700"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </button>
              ) : (
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    scrolled
                      ? "text-gray-700 hover:bg-green-50 hover:text-green-700"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </a>
              )}
              <span
                className={`absolute left-4 -bottom-1 w-0 h-0.5 transition-all group-hover:w-8 ${
                  scrolled ? "bg-green-600" : "bg-white"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/book"
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${
              scrolled
                ? "bg-gradient-to-r from-green-600 to-teal-500 text-white hover:from-green-700 hover:to-teal-600"
                : "bg-white text-green-700 hover:bg-green-50"
            }`}
          >
            Book Session
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? "text-green-700 hover:bg-green-50" : "text-white hover:bg-white/20"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-2xl mx-4 mt-2 overflow-hidden">
          <ul className="flex flex-col p-2">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.scroll ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li className="mt-2 border-t border-gray-100 pt-2">
              <a
                href="/book"
                className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-600 transition-all"
              >
                Book Session
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
