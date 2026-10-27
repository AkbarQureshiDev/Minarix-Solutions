import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';

interface ImageSliderProps {
  title: string;
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ title, images }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const sliderImages = [...images, ...images, ...images]; // Duplicated for slider effect

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

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1 >= sliderImages.length - itemsToShow + 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timer);
  }, [itemsToShow, sliderImages.length]);

  return (
    <div className="w-full py-12">
      {/* Header */}
      <div className="w-full flex justify-center mb-10">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white" />
          <span className="italic text-2xl md:text-3xl text-white tracking-wide">
            {title}
          </span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-[1500px] mx-auto flex items-center justify-between group">
        <button
          onClick={handlePrevSlide}
          aria-label={`Previous ${title} images`}
          className="flex-shrink-0 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#01C000] transition-colors"
        >
          <HiArrowLeft className="text-2xl md:text-4xl" />
        </button>

        <div className="flex-1 overflow-hidden px-2 md:px-6">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: `calc(-${sliderIndex * (100 / itemsToShow)}%)` }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
          >
            {sliderImages.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 cursor-pointer overflow-hidden bg-white/5 border border-white/10 rounded-md shadow-lg"
                style={{ width: `calc(${100 / itemsToShow}% - ${((itemsToShow - 1) * 24) / itemsToShow}px)` }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-auto flex items-center justify-center bg-black/20"
                >
                  <img
                    src={src}
                    alt={`${title} Work ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover rounded-md"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={handleNextSlide}
          aria-label={`Next ${title} images`}
          className="flex-shrink-0 z-20 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:text-[#01C000] transition-colors"
        >
          <HiArrowRight className="text-2xl md:text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
