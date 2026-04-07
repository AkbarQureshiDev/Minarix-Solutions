import React from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2"; // Clean, modern arrow

const OurProcess: React.FC = () => {
  const steps = [
    {
      id: "1",
      title: "Subscribe",
      description: "Choose a plan and request as many designs as you need.",
      rotation: "-rotate-[6deg]",
      translateY: "translate-y-16",
    },
    {
      id: "2",
      title: "Request",
      description: "Choose a plan and request as many designs as you need.",
      rotation: "rotate-[3deg]",
      translateY: "-translate-y-4",
    },
    {
      id: "3",
      title: "Get Your Designs",
      description: "Choose a plan and request as many designs as you need.",
      rotation: "-rotate-[1deg]",
      translateY: "translate-y-24",
    },
  ];

  return (
    <section className="relative w-full py-32 bg-[#F3F3F3] overflow-hidden flex flex-col items-center">
      {/* Decorative Header */}
      <div className="flex items-center gap-6 mb-8 opacity-60">
        <div className="h-[1px] w-12 bg-gray-400"></div>
        <span className="italic font-serif text-gray-600 text-lg">
          Our Process, Explained
        </span>
        <div className="h-[1px] w-12 bg-gray-400"></div>
      </div>

      <h2 className="text-[64px] font-medium text-black tracking-[-0.04em] mb-40 text-center">
        Here's how it works
      </h2>

      <div className="max-w-[1200px] mx-auto px-10 relative w-full flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Process Cards */}
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
              className={`
                relative bg-white 
                /* Reduced width from 420px to 360px */
                w-[360px] aspect-[4/5]
                p-10 rounded-[40px] 
                
                /* Outer Border Effect */
                ring-[12px] ring-black/[0.02] 
                border border-black/[0.05]
                
                /* Shadow */
                shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]
                
                flex flex-col justify-between 
                z-20 ${step.rotation} ${step.translateY}
              `}
            >
              {/* Large Number */}
              <span className="text-[100px] font-medium text-black leading-none tracking-tighter">
                {step.id}
              </span>

              {/* Content */}
              <div className="mb-2">
                <h3 className="text-[28px] font-semibold text-black mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#727272] text-[17px] leading-[1.5]">
                  {step.description}
                </p>
              </div>
            </motion.div>

            {/* React Icon Connector (Hidden on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block z-30 text-[#FF4D00] text-4xl opacity-40 mx-[-10px]">
                <HiArrowLongRight />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;