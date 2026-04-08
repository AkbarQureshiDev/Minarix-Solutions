import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full min-h-[80vh] bg-black flex flex-col items-center justify-center py-20 px-6 overflow-hidden text-white font-sans">
      
      {/* 2. Main Content (Center) */}
      <div className="relative z-10 flex flex-col items-center text-center flex-grow justify-center">
        <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-white"></div>
            <span className="italic font-serif text-3xl text-white tracking-wider">Let's Talk</span>
            <div className="h-px w-12 bg-white"></div>
        </div>

        <h2 className="text-7xl md:text-[140px] font-medium tracking-tighter leading-none mb-8">
          Let's <span className="text-[#01C000]">Connect</span>
        </h2>

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