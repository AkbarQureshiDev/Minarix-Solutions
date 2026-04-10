import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight, HiArrowLongDown } from "react-icons/hi2";

const steps = [
  {
    id: "1",
    title: "Discovery Call",
    description: "We start by understanding your business, goals, and target audience to build the right strategy.",
    desktopStyle: "rotate(-6deg) translateY(4rem)",
  },
  {
    id: "2",
    title: "Strategy & Design",
    description: "Our team crafts a tailored plan — from visuals to content — aligned with your brand identity.",
    desktopStyle: "rotate(3deg) translateY(-1rem)",
  },
  {
    id: "3",
    title: "Execute & Deliver",
    description: "We build, launch, and optimize — delivering results on time with full transparency.",
    desktopStyle: "rotate(-1deg) translateY(6rem)",
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
    <section className="relative w-full py-32 bg-black overflow-hidden flex flex-col items-center font-[Poppins,sans-serif]">

      {/* Section Label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-white" />
        <span className="italic font-serif text-xl md:text-3xl text-white tracking-wider">Our Process, Explained</span>
        <div className="h-px w-12 bg-white" />
      </div>

      <h2 className="text-[26px] md:text-[48px] font-semibold text-white tracking-[-0.03em] mb-16 text-center">
        Here's how it works
      </h2>

      <div className="max-w-[1200px] mx-auto px-10 relative w-full flex flex-col md:flex-row items-center justify-center gap-4">

        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
              className="relative bg-[#111] w-full max-w-[350px] md:w-[350px] mx-auto p-10 rounded-[36px] ring-[8px] ring-white/[0.02] border border-white/[0.08] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] flex flex-col justify-between z-20"
              style={{ transform: isDesktop ? step.desktopStyle : undefined }}
            >
              <span className="text-[64px] font-semibold text-[#01C000] leading-none tracking-tighter text-center md:text-left">
                {step.id}
              </span>
              <div className="mt-5 text-center md:text-left">
                <h3 className="text-[18px] font-semibold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[14px] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </motion.div>

            {index < steps.length - 1 && (
              <>
                {/* Desktop: right arrow */}
                <div className="hidden md:block z-30 text-[#01C000] text-4xl opacity-60 mx-[-10px]">
                  <HiArrowLongRight />
                </div>
                {/* Mobile: down arrow */}
                <div className="md:hidden flex justify-center text-[#01C000] text-4xl opacity-60 my-2">
                  <HiArrowLongDown />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
