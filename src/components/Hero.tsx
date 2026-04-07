import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  // Avatars data based on screenshot
  const avatars = [
    { name: "Leader 1", src: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Leader 2", src: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Leader 3", src: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Leader 4", src: "https://randomuser.me/api/portraits/men/78.jpg" },
    { name: "Leader 5", src: "https://randomuser.me/api/portraits/men/81.jpg" },
  ];

  return (
    <section className="font-inter w-full min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      {/* Light Diagonal Shade Gradient (Matches screenshot subtle shadow) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.01)_100%)]" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10 text-center">
        
        {/* Top Status Pill */}
        <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-100 shadow-sm mb-12">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            Booking Open — <span className="font-semibold text-gray-900">2 Spots Left</span>
          </span>
        </div>

        {/* --- Main Heading Row --- */}
        <div className="relative mb-12 flex flex-col items-center">
          
          {/* Top Line of Heading */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-serif-heading">
            <h1 className="text-[100px] leading-[0.9] font-medium text-white tracking-[-0.03em]">
              Unlimited
            </h1>
            
            {/* --- Floating Visual Mockup Badge --- */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white p-3 rounded-[28px] shadow-xl border border-gray-100 w-[160px] h-[100px] flex items-center justify-center"
            >
              {/* This simulates the UI cards from the image */}
              <div className="grid grid-cols-2 gap-1.5 w-full h-full">
                <div className="bg-[#E4B653] rounded-lg"></div>
                <div className="bg-[#A7C080] rounded-lg"></div>
                <div className="bg-gray-100 rounded-lg"></div>
                <div className="bg-[#B983FF] rounded-lg"></div>
              </div>
            </motion.div>

            <h1 className="text-[100px] leading-[0.9] font-medium text-gray-200 tracking-[-0.03em]">
              Design
            </h1>
          </div>

          {/* Bottom Line of Heading */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-serif-heading mt-2">
            <h1 className="text-[100px] leading-[0.9] font-medium text-gray-200 tracking-[-0.03em]">
              for
            </h1>

            {/* --- Floating Dark Logo Badge --- */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="bg-[#1C1C1C] px-7 py-5 rounded-[28px] shadow-xl flex items-center justify-center w-[160px] h-[100px]"
            >
              {/* Minimalist text/logo simulation */}
              <span className="text-4xl font-extrabold text-[#757575] tracking-tight">/ / / /</span>
            </motion.div>

            <h1 className="text-[100px] leading-[0.9] font-medium text-white tracking-[-0.03em]">
              Solid Startups
            </h1>
          </div>
        </div>
        {/* --- End Heading --- */}

        {/* Subtext Paragraph */}
        <p className="max-w-[580px] text-lg text-gray-200 leading-relaxed mb-16 px-4">
          We help startups and brands create beautiful, functional products — fast and hassle-free.
        </p>

        {/* --- Call to Action & Trust Block --- */}
        <div className="flex items-center gap-6">
          
          {/* Avatar & Text Block */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3.5">
              {avatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar.src}
                  alt={avatar.name}
                  className="w-12 h-12 rounded-full border-4 border-black object-cover shadow-inner ring-1 ring-gray-700"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-200">
              Trusted by Leaders
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-700" />

          {/* Main Button */}
          <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold text-lg transition-colors shadow-lg active:scale-95">
            Choose your plan
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

        </div>
        {/* --- End CTA Block --- */}

      </div>
    </section>
  );
};

export default Hero;