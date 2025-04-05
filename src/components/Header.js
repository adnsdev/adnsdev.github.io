import { useState, useEffect } from "react";
import ThemeController from "./ThemeController";

export default function GlassmorphismHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header with Glassmorphism */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 sm:px-24 px-4 shadow-lg border-b border-blue-500 ${isScrolled
          ? "w-[90%] top-2 mx-auto dark:bg-blue-250 bg-white/20 backdrop-blur-xl shadow-md rounded-xl border-none"
          : "w-full bg-[#E6F1FF] dark:bg-[#0A192F] dark:backdrop-blur-xl"
          }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto p-1">
          <div>
            <p className="text-blue-500 text-2xl md:text-3xl font-bold sm:font-semibold ml-2">Adns-Dev</p>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 text-blue-500 text-md font-semibold">
            <li><a href="#home" className="px-3 py-1 border border-blue-500 rounded-xl hover:text-white hover:bg-blue-500 transition-colors">Home</a></li>
            <li><a href="#about" className="px-3 py-1 border border-blue-500 rounded-xl hover:text-white hover:bg-blue-500 transition-colors">About</a></li>
            <li><a href="#blogs" className="px-3 py-1 border border-blue-500 rounded-xl hover:text-white hover:bg-blue-500 transition-colors">Blogs</a></li>
            <li><a href="#projects" className="px-3 py-1 border border-blue-500 rounded-xl hover:text-white hover:bg-blue-500 transition-colors">Projects</a></li>
            <li><a href="#services" className="px-3 py-1 border border-blue-500 rounded-xl hover:text-white hover:bg-blue-500 transition-colors">Services</a></li>
            <li><a href="#contact" className="px-3 py-1 border border-blue-500 rounded-xl hover:text-white hover:bg-blue-500 transition-colors">Contact</a></li>
          </ul>

          {/* Theme Controller & Hire Me Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeController />
            <button
              onClick={() => window.open("https://wa.me/7822044747?text=Hi%20Adnan,%20I%20want%20to%20hire%20you%20for%20a%20project.%20Let's%20discuss!", "_blank")}
              className="px-4 py-1 border text-[#E6F1FF] text-md font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-colors">

              Hire me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeController />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-2xl focus:outline-none ${isOpen ? "text-blue-500" : "text-blue-500"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Header ke Bahar */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#E6F1FF] dark:bg-[#0A192F] z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#home"
                className="block w-full text-center py-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about"
                className="block w-full text-center py-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}>
                About
              </a>
            </li>
            <li>
              <a href="#blogs"
                className="block w-full text-center py-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("blogs").scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}>
                Blogs
              </a>
            </li>
            <li>
              <a href="#services"
                className="block w-full text-center py-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact"
                className="block w-full text-center py-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}>
                Contact
              </a>
            </li>
            <li>
              <button
                className="px-6 py-2 border text-[#E6F1FF] text-md font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-colors"
                onClick={() => window.open("https://wa.me/91XXXXXXXXXX?text=Hi%20Adnan,%20I%20want%20to%20hire%20you%20for%20a%20project.%20Let's%20discuss!", "_blank")}
              >
                Hire me
              </button>
            </li>
          </ul>
        </div>
      )}

    </>
  );
}
