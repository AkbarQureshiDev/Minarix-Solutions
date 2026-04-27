import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full min-h-[80vh] bg-black flex flex-col items-center justify-center py-20 px-6 overflow-hidden text-white font-sans">
      
      <div className="relative z-10 flex flex-col items-center text-center flex-grow justify-center w-full max-w-5xl">
        {/* Massive Catchy Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-[14vw] sm:text-[120px] md:text-[180px] font-black leading-[0.8] tracking-tighter italic uppercase text-white">
            Let's <br className="sm:hidden" />
            <span className="text-[#01C000] drop-shadow-[0_0_30px_rgba(1,192,0,0.3)]">Connect</span>
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-3xl text-white/80 font-medium tracking-tight mb-14"
        >
          Start your project with us
        </motion.p>

        <motion.a 
          href="https://wa.me/923349313075?text=Hello%20Minarix!%20I%20would%20like%20to%20book%20a%20free%20discovery%20call." 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-6 bg-[#01C000] text-black rounded-full flex items-center gap-4 transition-all hover:bg-[#00e600] font-bold shadow-[0_20px_50px_rgba(1,192,0,0.3)]"
        >
          <span className="text-xl md:text-2xl">Book a Free Discovery Call</span>
          <HiOutlineArrowRight className="text-2xl transition-transform group-hover:translate-x-2" />
        </motion.a>
      </div>

      {/* Background Catchy Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80% ] h-[80%] bg-[#01C000]/10 blur-[150px] -z-10 rounded-full animate-pulse" />

      {/* 3. Bottom Row */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 mt-20">
        <div className="text-white text-sm border-l border-white/10 pl-4 py-1">
          © Minarix Solutions, 2026
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <MdOutlineAlternateEmail />, link: "#" },
            { icon: <FaXTwitter />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaInstagram />, link: "#" }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg hover:bg-[#01C000] hover:text-black hover:border-[#01C000] transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;