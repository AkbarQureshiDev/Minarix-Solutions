import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight, HiArrowLongDown } from "react-icons/hi2";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    description: "We start by understanding your business, goals, and target audience to build the right strategy.",
    desktopStyle: "rotate(-8deg) translateY(4rem) translateX(-1rem)",
  },
  {
    id: "02",
    title: "Strategy & Design",
    description: "Our team crafts a tailored plan — from visuals to content — aligned with your brand identity.",
    desktopStyle: "rotate(4deg) translateY(-2rem) scale(1.05)",
  },
  {
    id: "03",
    title: "Execute & Deliver",
    description: "We build, launch, and optimize — delivering results on time with full transparency.",
    desktopStyle: "rotate(8deg) translateY(4rem) translateX(1rem)",
  },
];

const OurProcess: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <section className="relative w-full py-40 bg-black overflow-hidden flex flex-col items-center font-[Poppins,sans-serif]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#01C000]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 mb-24 text-center font-poppins relative z-10"
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
          <span className="italic text-4xl text-white tracking-wide">Our Process</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
        </div>
        <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">How we bring ideas to life</h2>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 relative w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={isDesktop ? { scale: 1.1, rotate: 0, zIndex: 100, y: 0 } : { scale: 1.02 }}
              viewport={{ once: true }}
              className="relative bg-[#0A0A0A] w-full max-w-[420px] md:w-[420px] p-12 rounded-[48px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer overflow-hidden group mb-10 md:mb-0"
              style={{ transform: isDesktop ? step.desktopStyle : undefined }}
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#01C000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-[90px] font-black text-white/5 group-hover:text-[#01C000]/20 leading-none tracking-tighter transition-colors duration-500 absolute top-4 right-8">
                {step.id}
              </span>

              <div className="relative z-10 pt-10">
                <div className="w-12 h-12 bg-[#01C000] rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(1,192,0,0.3)]">
                  <span className="text-black font-bold text-lg">{index + 1}</span>
                </div>
                
                <h3 className="text-[28px] font-bold text-white mb-5 tracking-tight group-hover:text-[#01C000] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[16px] leading-[1.8] font-medium">
                  {step.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#01C000]/0 group-hover:bg-[#01C000]/5 transition-all duration-500 pointer-events-none" />
            </motion.div>

            {index < steps.length - 1 && (
              <div className="hidden xl:flex z-30 text-white text-5xl absolute" style={{ left: `calc(33.33% * ${index + 1} - 20px)`, top: '45%' }}>
                <HiArrowLongRight className="animate-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
