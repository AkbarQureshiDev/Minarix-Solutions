import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden font-poppins">

      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 mb-24 text-center"
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
          <span className="italic text-4xl text-white tracking-wide">About</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
        </div>
        <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">The story behind our agency</h2>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* Main Heading Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[340px] xs:max-w-[450px] sm:max-w-[1300px] mx-auto"
        >
          <h2 className="text-[28px] sm:text-[40px] md:text-[72px] font-medium leading-[1.2] sm:leading-[1.1] text-white tracking-tighter mb-6 sm:mb-10">
            We help businesses grow their{" "}
            <span className="bg-gradient-to-r from-[#01C000] to-[#01a000] bg-clip-text text-transparent italic pr-2 pb-2 box-decoration-clone">digital presence</span>{" "}
            through creative strategy and execution, transforming bold ideas into measurable results.
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#01C000] to-transparent" />
            
            <p className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-[800px] leading-relaxed font-light">
              One agency. Every service your brand needs to stand out and scale online.
            </p>
          </div>
        </motion.div>

        {/* Decorative Background Glows */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#01C000]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default About;

