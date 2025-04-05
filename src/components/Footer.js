import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";


function Footer() {
  return (
    <footer className="w-full dark:bg-[#0A192F] bg-[#E6F1FF] border-t-2 border-blue-500">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h1 className="text-blue-500 text-3xl sm:text-4xl font-bold">Adns-Dev</h1>
            <p className="text-gray-700 dark:text-gray-300">
              Full Stack Developer creating modern web applications with cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaTwitter, color: "shadow-[0_0_20px_5px_#1DA1F2]", href: "https://twitter.com" },
                { icon: FaInstagram, color: "shadow-[0_0_20px_5px_#1DA1F2]", href: "https://instagram.com" },
                { icon: FaLinkedin, color: "shadow-[0_0_20px_5px_#1DA1F2]", href: "https://www.linkedin.com/in/adnan-bagwan12" },
                { icon: FaGithub, color: "shadow-[0_0_20px_5px_#1DA1F2]", href: "https://github.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                  <span className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-pulse ${social.color}`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-500">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Blogs", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-500">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "UI/UX Design", "API Development", "Data Analysis", "Consulting"].map(
                (service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:underline transition-colors">
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-500">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">bagwanadnanr09876@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">+91 7822044747</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarker className="text-blue-500" />
                <p className="text-gray-700 dark:text-gray-300">
                  Anand Nagar,Latur-413512, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Include */}
        

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-blue-500 text-center text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} <span className="text-blue-500">Adns-dev</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
