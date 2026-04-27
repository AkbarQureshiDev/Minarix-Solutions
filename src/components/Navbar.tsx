import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IoMenuOutline, 
  IoCloseOutline, 
  IoLogoTwitter, 
  IoLogoLinkedin, 
  IoLogoInstagram 
} from "react-icons/io5";

import logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Our Process", to: "process" },
    { name: "Our Services", to: "services" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Our Team", to: "team" },
    { name: "Faqs", to: "faqs" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 z-50 bg-black">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <RouterLink to="/">
          <img src={logo} alt="logo" className="h-15 w-auto object-contain cursor-pointer" />
        </RouterLink>

        {/* Hamburger Toggle */}
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white px-5 py-2.5 rounded-full shadow-md flex items-center gap-2 group"
        >
          <span className="text-sm font-medium text-black tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>Menu</span>
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <IoMenuOutline className="w-5 h-5 text-black" />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-[60]"
            />

            {/* Dropdown Menu Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] 
                         w-full sm:max-w-[400px] sm:mt-6 sm:mr-6
                         bg-black p-10 shadow-2xl
                         rounded-none sm:rounded-[40px]
                         flex flex-col h-full sm:h-auto"
            >
              {/* Close Button Row */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 bg-white/10 border border-white/20 rounded-full shadow-sm hover:bg-white/20"
                >
                  <IoCloseOutline className="w-7 h-7 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-5">
                {menuItems.map((item, i) => (
                  <motion.div whileHover={{ x: 8 }} key={item.name}>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-semibold text-white hover:text-gray-400 transition-colors tracking-tight cursor-pointer block"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span className="text-xs text-gray-500 mr-3 font-normal">0{i + 1}</span>
                      {item.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Row */}
              <div className="flex space-x-4 mt-16">
                {[IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-4 border border-white/20 rounded-full text-white hover:border-white hover:text-white transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;