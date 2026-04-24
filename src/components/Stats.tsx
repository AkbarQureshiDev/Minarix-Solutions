import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DigitProps {
  digit: string;
}

const Digit: React.FC<DigitProps> = ({ digit }) => {
  // If it's not a number (like '+' or ','), just render it plain
  if (isNaN(parseInt(digit))) {
    return <span>{digit}</span>;
  }

  return (
    <div className="relative h-[1em] overflow-hidden leading-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: `-${digit}0%` }}
        transition={{ 
          duration: 2, 
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 0.2 
        }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num}>{num}</span>
        ))}
      </motion.div>
    </div>
  );
};

interface RollingNumberProps {
  number: string;
}

const RollingNumber: React.FC<RollingNumberProps> = ({ number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex overflow-hidden">
      {isInView &&
        number.split('').map((char, index) => (
          <Digit key={index} digit={char} />
        ))}
    </div>
  );
};

const Stats = () => {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 768);

  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const statsData = [
    { 
      number: '700+', 
      label: 'Satisfied Clients',
      desktopStyle: "rotate(-8deg) translateY(2rem) translateX(-1rem)",
    },
    { 
      number: '1500+', 
      label: 'Projects Completed',
      desktopStyle: "rotate(4deg) translateY(-2rem) scale(1.05)",
    },
    { 
      number: '100+', 
      label: 'Brands',
      desktopStyle: "rotate(8deg) translateY(2rem) translateX(1rem)",
    },
  ];

  return (
    <section className="bg-black w-full py-24 md:py-40 overflow-hidden font-[Poppins,sans-serif]">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {statsData.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={isDesktop ? { scale: 1.1, rotate: 0, zIndex: 10, transition: { duration: 0.3 } } : { scale: 1.02 }}
            className="relative bg-[#0A0A0A] w-full max-w-[400px] p-10 md:p-14 rounded-[48px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer group flex flex-col items-center text-center"
            style={{ transform: isDesktop ? stat.desktopStyle : undefined }}
          >
            {/* Card Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#01C000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              {/* Number with Rolling Animation */}
              <div className="text-[50px] sm:text-[60px] md:text-[80px] font-black text-[#01C000] leading-none mb-4 tracking-tighter flex justify-center">
                <RollingNumber number={stat.number} />
              </div>
              
              {/* Label Text */}
              <p className="text-white text-lg md:text-xl font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </p>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-[#01C000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[48px] pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;