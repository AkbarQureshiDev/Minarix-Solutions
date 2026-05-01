import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Navbar from '../Navbar';

// Load images for the carousel
import img1 from '../../assets/Marketing/marketing1.jpeg';
import img2 from '../../assets/Marketing/marketing2.png';
import img3 from '../../assets/Marketing/marketing3.jpeg';
import img4 from '../../assets/Marketing/marketing4.png';
import img5 from '../../assets/Marketing/marketing5.jpeg';

const workImages = [img1, img2, img3, img4, img5];
const sliderImages = [...workImages, ...workImages, ...workImages]; // Duplicated for slider effect

const DigitalMarketing: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  // Responsive logic to handle how many items to show
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextSlide = () => {
    setSliderIndex((prev) => (prev + 1 >= sliderImages.length - itemsToShow + 1 ? 0 : prev + 1));
  };
  const handlePrevSlide = () => {
    setSliderIndex((prev) => (prev === 0 ? sliderImages.length - itemsToShow : prev - 1));
  };

  // Auto-scroll timer every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1 >= sliderImages.length - itemsToShow + 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [itemsToShow]);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden relative">
      <Navbar />


      {/* High-End Hero Section */}
      <section className="relative w-full min-h-[90vh] pt-48 pb-20 px-6 flex flex-col items-center justify-center text-center z-10">
        
        {/* Massive Dynamic Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] h-[50vh] bg-[#01C000] blur-[180px] -z-10 rounded-full" 
        />

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#01C000] animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase text-white/80">Growth Focused</span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-[14vw] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black leading-[0.85] tracking-tighter italic uppercase text-white relative">
            <span className="block relative z-10 hover:text-transparent hover:-webkit-text-stroke-[2px] hover:-webkit-text-stroke-white transition-all duration-500">Digital</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#01C000] to-white bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_30px_rgba(1,192,0,0.5)]">
              Marketing
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl text-lg md:text-2xl text-white/60 font-light leading-relaxed mb-12"
        >
          Amplify your brand's voice. We craft data-driven campaigns that drive traffic, 
          ignite engagement, and convert audiences globally.
        </motion.p>

        {/* Hero Interactive Button */}
        <motion.a
          href="https://wa.me/923134409152?text=Hello%20Minarix!%20I%20would%20like%20to%20start%20a%20digital%20marketing%20campaign."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-wide rounded-full flex items-center gap-4 overflow-hidden border-2 border-transparent transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(1,192,0,0.6)] hover:border-[#01C000]"
        >
          <span className="relative z-10 text-lg group-hover:text-[#01C000] transition-colors duration-300">Start Your Campaign</span>
          <BsArrowRightCircleFill className="text-2xl text-black group-hover:text-[#01C000] transition-colors duration-300 relative z-10" />
        </motion.a>
      </section>

      {/* Horizontal Image Slider Section */}
      <section className="relative w-full py-24 px-4 sm:px-12 bg-[#050505] z-10 overflow-hidden">
        
        {/* Simple User Requested Header */}
        <div className="w-full flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white" />
            <span className="italic text-2xl md:text-4xl text-white tracking-wide">
              Our Marketing Results
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white" />
          </div>
        </div>

        {/* Outer Slider Container with nav buttons */}
        <div className="relative w-full max-w-[1500px] mx-auto flex items-center justify-between group">
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrevSlide}
            className="flex-shrink-0 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#01C000] transition-colors"
          >
            <HiArrowLeft className="text-2xl md:text-4xl" />
          </button>

          {/* Track Container */}
          <div className="flex-1 overflow-hidden px-2 md:px-6">
            <motion.div 
              className="flex gap-4 md:gap-6"
              animate={{ x: `calc(-${sliderIndex * (100 / itemsToShow)}%)` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {sliderImages.map((src, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 cursor-pointer overflow-hidden bg-white/5 border border-white/10 rounded-md shadow-lg"
                  style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 24 / itemsToShow}px)` }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-auto"
                  >
                    <img 
                      src={src} 
                      alt={`Marketing Work ${idx + 1}`} 
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNextSlide}
            className="flex-shrink-0 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#01C000] transition-colors"
          >
            <HiArrowRight className="text-2xl md:text-4xl" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
