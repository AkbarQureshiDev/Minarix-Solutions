import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full min-h-[80vh] bg-black flex flex-col items-center justify-center py-20 px-6 overflow-hidden text-white font-sans">
      
      <div className="relative z-10 flex flex-col items-center text-center flex-grow justify-center">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 mb-20 text-center font-poppins relative z-10"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
            <span className="italic text-4xl text-white tracking-wide">Let's Talk</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
          </div>
          <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">Start your project with us</h2>
        </motion.div>

        <p className="text-lg md:text-xl text-white max-w-md leading-relaxed mb-12">
          Ready to grow your brand online? We're available for new projects and partnerships.
        </p>

        <button className="group relative px-10 py-5 bg-[#01C000] text-black rounded-full flex items-center gap-3 transition-all hover:bg-[#00a800] font-semibold">
          <span className="text-lg font-semibold">Book a Free Discovery Call</span>
          <HiOutlineArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
        </button>
      </div>

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