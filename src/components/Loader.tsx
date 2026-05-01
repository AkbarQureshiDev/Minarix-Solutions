import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total loading simulated
    const interval = 30; // update every 30ms
    const step = 100 / (duration / interval);
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(onComplete, 400); // give a small pause at 100% before exiting
      }
      setProgress(Math.floor(current));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Container for Loader Graphic + Logo */}
      <div className="relative flex items-center justify-center mb-10 w-44 h-44">
        {/* The 3-color circular loader mimicking the provided image */}
        <motion.svg
          viewBox="0 0 120 120"
          className="absolute inset-0 w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          {/* White Curve 1 */}
          <circle 
            cx="60" cy="60" r="50" 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeDasharray="80 234" 
            transform="rotate(-75 60 60)" 
          />
          {/* White Curve 2 */}
          <circle 
            cx="60" cy="60" r="50" 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeDasharray="80 234" 
            transform="rotate(45 60 60)" 
          />
          {/* Green Curve */}
          <circle 
            cx="60" cy="60" r="50" 
            fill="none" 
            stroke="#02C001" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeDasharray="80 234" 
            transform="rotate(165 60 60)" 
          />
        </motion.svg>

        {/* Center Logo */}
        <motion.img 
          src={logo} 
          alt="Minarix Solutions Logo" 
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Name fading in below */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="text-[20px] tracking-widest passero-one-regular bg-[linear-gradient(90deg,#fff_0%,#01C000_30%,#01C000_60%,#fff_100%)] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent mb-2">
          Minarix Solutions
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
