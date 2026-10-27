import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Navbar from '../Navbar';

// TODO: Replace these with actual video shooting images once added
// import img1 from '../../assets/VideoShooting/Shoot1.jpg';
const placeholderItems: null[] = [null, null, null, null, null];
const sliderContent = [...placeholderItems, ...placeholderItems, ...placeholderItems];

const VideoShooting: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
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
    setSliderIndex((prev) => (prev + 1 >= sliderContent.length - itemsToShow + 1 ? 0 : prev + 1));
  };
  const handlePrevSlide = () => {
    setSliderIndex((prev) => (prev === 0 ? sliderContent.length - itemsToShow : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1 >= sliderContent.length - itemsToShow + 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [itemsToShow]);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] pt-48 pb-20 px-6 flex flex-col items-center justify-center text-center z-10">

        {/* Dynamic Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
          <span className="text-sm font-medium tracking-wide uppercase text-white/80">On Location Production</span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-[14vw] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black leading-[0.85] tracking-tighter italic uppercase text-white relative">
            <span className="block relative z-10 hover:text-transparent hover:-webkit-text-stroke-[2px] hover:-webkit-text-stroke-white transition-all duration-500">Production &</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#01C000] to-white bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_30px_rgba(1,192,0,0.5)]">
              Shooting
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl text-lg md:text-2xl text-white/60 font-light leading-relaxed mb-12"
        >
          From concept to camera — professional production and shooting for commercials, reels, brand films, and more.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/923134409152?text=Hello%20Minarix!%20I%20would%20like%20to%20book%20a%20video%20shooting%20session."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-wide rounded-full flex items-center gap-4 overflow-hidden border-2 border-transparent transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(1,192,0,0.6)] hover:border-[#01C000]"
        >
          <span className="relative z-10 text-lg group-hover:text-[#01C000] transition-colors duration-300">Book a Shoot</span>
          <BsArrowRightCircleFill className="text-2xl text-black group-hover:text-[#01C000] transition-colors duration-300 relative z-10" />
        </motion.a>
      </section>

      {/* Portfolio Slider Section */}
      <section className="relative w-full py-24 px-4 sm:px-12 bg-[#050505] z-10 overflow-hidden">

        {/* Section Header */}
        <div className="w-full flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white" />
            <span className="italic text-2xl md:text-4xl text-white tracking-wide">
              Our Shooting Work
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white" />
          </div>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-[1500px] mx-auto flex items-center justify-between">

          {/* Left Arrow */}
          <button
            onClick={handlePrevSlide}
            className="flex-shrink-0 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#01C000] transition-colors"
          >
            <HiArrowLeft className="text-2xl md:text-4xl" />
          </button>

          {/* Track */}
          <div className="flex-1 overflow-hidden px-2 md:px-6">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: `calc(-${sliderIndex * (100 / itemsToShow)}%)` }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
            >
              {sliderContent.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 cursor-pointer overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-700 hover:border-[#01C000]/50 hover:shadow-[0_0_50px_rgba(1,192,0,0.2)]"
                  style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 24 / itemsToShow}px)` }}
                >
                  <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center">
                    {src ? (
                      <motion.img
                        src={src}
                        alt={`Shoot ${idx + 1}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center rounded-[2rem]">
                        <span className="text-white/20 text-sm italic">Coming Soon</span>
                      </div>
                    )}
                  </div>
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

export default VideoShooting;
