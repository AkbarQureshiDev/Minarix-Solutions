import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import heroBg from "../assets/Hero-bg.mp4";
import mbHeroBg from "../assets/mbhero-bg.mp4";
import ayyanImg from "../assets/testimonials/Ayyan.jpeg";
import nadeemImg from "../assets/testimonials/Nadeem.png";
import aliImg from "../assets/testimonials/ali.jpeg";
import img1 from "../assets/testimonials/img1.jpeg";

const Hero: React.FC = () => {
  return (
    <section className="font-[Poppins,sans-serif] w-full min-h-screen bg-black relative overflow-hidden">
      {/* Desktop Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src={heroBg} type="video/mp4" />
      </video>

      {/* Mobile Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
      >
        <source src={mbHeroBg} type="video/mp4" />
      </video>

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/80 md:bg-black/90 pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center relative z-[2] text-center py-20">

        {/* Top Pill */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            Your <span className="font-semibold text-gray-900">All-in-One</span> Digital Agency
          </span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-8 sm:mb-10 flex flex-col items-center w-full px-5 sm:px-0">

          {/* Row 1: We Build [badge] Brands */}
          <div className="flex flex-nowrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 w-full">
            <h1 className="text-[9vw] xs:text-[38px] sm:text-[70px] md:text-[90px] leading-[0.9] font-medium text-white tracking-[-0.03em] whitespace-nowrap passero-one-regular">
              We
            </h1>

            <h1 className="text-[9vw] xs:text-[38px] sm:text-[70px] md:text-[90px] leading-[0.9] font-medium tracking-[-0.03em] bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent whitespace-nowrap passero-one-regular">
              Build
            </h1>

            {/* Color grid badge */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-white p-1.5 sm:p-2.5 md:p-3 rounded-[10px] sm:rounded-[20px] md:rounded-[28px] shadow-xl border border-gray-100 flex items-center justify-center flex-shrink-0"
              style={{ width: "clamp(44px, 11vw, 160px)", height: "clamp(30px, 7.5vw, 100px)" }}
            >
              <div className="grid grid-cols-2 gap-[3px] sm:gap-1.5 w-full h-full">
                <div className="bg-[#E4B653] rounded-[3px] sm:rounded-md md:rounded-lg"></div>
                <div className="bg-[#A7C080] rounded-[3px] sm:rounded-md md:rounded-lg"></div>
                <div className="bg-gray-100 rounded-[3px] sm:rounded-md md:rounded-lg"></div>
                <div className="bg-[#B983FF] rounded-[3px] sm:rounded-md md:rounded-lg"></div>
              </div>
            </motion.div>

            <h1 className="text-[9vw] xs:text-[38px] sm:text-[70px] md:text-[90px] leading-[0.9] font-medium tracking-[-0.03em] bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent whitespace-nowrap passero-one-regular">
              Brands
            </h1>
          </div>

          {/* Row 2: That [badge] Online */}
          <div className="flex flex-nowrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 mt-2 sm:mt-3 w-full">
            <h1 className="text-[9vw] xs:text-[38px] sm:text-[70px] md:text-[90px] leading-[0.9] font-medium text-gray-200 tracking-[-0.03em] whitespace-nowrap passero-one-regular">
              That
            </h1>

            {/* GROW badge */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="bg-[#1C1C1C] rounded-[10px] sm:rounded-[20px] md:rounded-[28px] shadow-xl flex items-center justify-center flex-shrink-0"
              style={{ width: "clamp(44px, 11vw, 160px)", height: "clamp(30px, 7.5vw, 100px)" }}
            >
              <span className="text-[2.5vw] sm:text-lg md:text-2xl font-bold text-white tracking-tight passero-one-regular">GROW</span>
            </motion.div>

            <h1 className="text-[9vw] xs:text-[38px] sm:text-[70px] md:text-[90px] leading-[0.9] font-medium tracking-[-0.03em] bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent whitespace-nowrap passero-one-regular">
              Online
            </h1>
          </div>
        </div>

        {/* Subtext */}
        <p className="max-w-[480px] sm:max-w-[560px] text-base sm:text-lg text-white/80 leading-relaxed mb-10 sm:mb-14 px-2">
          Design, develop, market, and grow — everything your brand needs, under one roof.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto">
          <button className="group flex items-center justify-center gap-3 bg-white text-black px-10 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-colors shadow-lg active:scale-95 w-[75%] sm:w-auto">
            Get Started
            <HiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          {/* Divider */}
          <div className="w-px h-12 bg-gray-700 hidden sm:block" />

          {/* Avatar Stack */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3">
              {[
                { name: "Ayyan", src: ayyanImg },
                { name: "Ali", src: aliImg },
                { name: "Nadeem", src: nadeemImg },
                { name: "Leader", src: img1 },
              ].map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar.src}
                  alt={avatar.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[5px] border-black object-cover shadow-inner ring-1 ring-gray-700"
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-200">Trusted by Leaders</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;