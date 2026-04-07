import React from "react";
import { motion } from "framer-motion";
import { 
  IoGrid, 
  IoLayers, 
  IoSearch, 
  IoSync, 
  IoPrism, 
  IoRocket 
} from "react-icons/io5";

const About: React.FC = () => {
  // Smooth floating animation variant
  const floatingVariant = (delay: number) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section className="relative w-full py-40 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[750px]">
      
      {/* Decorative Top Label */}
      <div className="absolute top-16 flex items-center gap-4 opacity-40 pointer-events-none">
        <div className="h-[1px] w-12 bg-gray-500"></div>
        <span className="italic font-serif text-gray-100 text-xl" style={{ fontFamily: "'Instrument Serif', serif" }}>
          About
        </span>
        <div className="h-[1px] w-12 bg-gray-500"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 w-full grid grid-cols-12 items-center">
        
        {/* Left Side: Staggered Badges */}
        <div className="col-span-3 flex flex-col gap-10">
          <motion.div
            variants={floatingVariant(0)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-2xl shadow-black/[0.04] border border-white/60 w-fit ml-4"
          >
            <div className="bg-[#FF5C00] p-1.5 rounded-md text-white text-sm shadow-inner"><IoGrid /></div>
            <span className="font-medium text-[17px] text-gray-100 tracking-tight">Design systems</span>
          </motion.div>

          <motion.div
            variants={floatingVariant(0.5)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-2xl shadow-black/[0.04] border border-white/60 w-fit ml-16"
          >
            <div className="bg-[#2D3134] p-1.5 rounded-md text-[#A7C080] text-sm shadow-inner"><IoLayers /></div>
            <span className="font-medium text-[17px] text-gray-100 tracking-tight">UI/UX</span>
          </motion.div>

          <motion.div
            variants={floatingVariant(1)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-2xl shadow-black/[0.04] border border-white/60 w-fit ml-6"
          >
            <div className="bg-[#00A3FF] p-1.5 rounded-md text-white text-sm shadow-inner"><IoSearch /></div>
            <span className="font-medium text-[17px] text-gray-100 tracking-tight">Research</span>
          </motion.div>
        </div>

        {/* Center: Full Black Text Heading */}
        <div className="col-span-6 flex justify-center px-4">
          <h2 className="text-[46px] md:text-[56px] font-medium leading-[1.1] text-white tracking-[-0.04em] text-center max-w-[700px]">
            We help startups and enterprise to establish an emotional connection between their products and happy engaged customers
          </h2>
        </div>

        {/* Right Side: Staggered Badges */}
        <div className="col-span-3 flex flex-col gap-10 items-end">
          <motion.div
            variants={floatingVariant(0.2)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-2xl shadow-black/[0.04] border border-white/60 w-fit mr-4"
          >
            <div className="bg-[#10B981] p-1.5 rounded-md text-white text-sm shadow-inner"><IoSync /></div>
            <span className="font-medium text-[17px] text-gray-100 tracking-tight">Animation</span>
          </motion.div>

          <motion.div
            variants={floatingVariant(0.7)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-2xl shadow-black/[0.04] border border-white/60 w-fit mr-14"
          >
            <div className="bg-[#FF008A] p-1.5 rounded-md text-white text-sm shadow-inner"><IoPrism /></div>
            <span className="font-medium text-[17px] text-gray-100 tracking-tight">Prototyping</span>
          </motion.div>

          <motion.div
            variants={floatingVariant(1.2)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-2xl shadow-black/[0.04] border border-white/60 w-fit mr-8"
          >
            <div className="bg-[#FFB800] p-1.5 rounded-md text-white text-sm shadow-inner"><IoRocket /></div>
            <span className="font-medium text-[17px] text-gray-100 tracking-tight">Strategy</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
