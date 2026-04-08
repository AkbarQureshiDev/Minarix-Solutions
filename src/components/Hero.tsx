import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";


const Hero: React.FC = () => {
  return (
    <section className="font-inter w-full min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.01)_100%)]" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10 text-center">

        {/* Top Pill */}
        <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-100 shadow-sm mb-12">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            Your <span className="font-semibold text-gray-900">All-in-One</span> Digital Agency
          </span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-10 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <h1 className="text-[90px] leading-[0.9] font-medium text-white tracking-[-0.03em]">
              We
            </h1>

            {/* Highlighted: Build */}
            <h1 className="text-[90px] leading-[0.9] font-medium tracking-[-0.03em] bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              Build
            </h1>

            {/* Floating Visual Badge */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white p-3 rounded-[28px] shadow-xl border border-gray-100 w-[160px] h-[100px] flex items-center justify-center"
            >
              <div className="grid grid-cols-2 gap-1.5 w-full h-full">
                <div className="bg-[#E4B653] rounded-lg"></div>
                <div className="bg-[#A7C080] rounded-lg"></div>
                <div className="bg-gray-100 rounded-lg"></div>
                <div className="bg-[#B983FF] rounded-lg"></div>
              </div>
            </motion.div>

            {/* Highlighted: Brands */}
            <h1 className="text-[90px] leading-[0.9] font-medium tracking-[-0.03em] bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              Brands
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-2">
            <h1 className="text-[90px] leading-[0.9] font-medium text-gray-200 tracking-[-0.03em]">
              That
            </h1>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="bg-[#1C1C1C] px-7 py-5 rounded-[28px] shadow-xl flex items-center justify-center w-[160px] h-[100px]"
            >
              <span className="text-2xl font-bold text-white tracking-tight">GROW</span>
            </motion.div>

            {/* Highlighted: Online */}
            <h1 className="text-[90px] leading-[0.9] font-medium tracking-[-0.03em] bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              Online
            </h1>
          </div>
        </div>

        {/* Subtext */}
        <p className="max-w-[560px] text-lg text-white leading-relaxed mb-14 px-4">
          Design, develop, market, and grow — everything your brand needs, under one roof.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold text-lg transition-colors shadow-lg active:scale-95">
            Get Started
            <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-700 hidden sm:block" />

          {/* Avatar Stack */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3.5">
              {[
                { name: "Leader 1", src: "https://randomuser.me/api/portraits/men/32.jpg" },
                { name: "Leader 2", src: "https://randomuser.me/api/portraits/women/44.jpg" },
                { name: "Leader 3", src: "https://randomuser.me/api/portraits/women/65.jpg" },
                { name: "Leader 4", src: "https://randomuser.me/api/portraits/men/78.jpg" },
                { name: "Leader 5", src: "https://randomuser.me/api/portraits/men/81.jpg" },
              ].map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar.src}
                  alt={avatar.name}
                  className="w-12 h-12 rounded-full border-4 border-black object-cover shadow-inner ring-1 ring-gray-700"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-200">Trusted by Leaders</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

