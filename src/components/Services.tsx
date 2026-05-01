import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import GraphicDesigningImg from '../assets/services/GraphicDesigning.png';
import WebDevelopmentImg from '../assets/services/WebDevelopment.png';
import DigitalMarketingImg from '../assets/services/DigitalMarketing.png';
import SmBrandingImg from '../assets/services/SmBranding.png';
import VideoEditingImg from '../assets/services/VideoEditing.png';

interface Category {
  title: string;
  description: string;
  img: string;
  link: string;
}

const categories: Category[] = [
  { 
    title: 'Graphic Designing', 
    description: 'Premium visual designs that capture your brand\'s essence and engage your audience.',
    img: GraphicDesigningImg,
    link: '/services/graphic-designing'
  },
  { 
    title: 'Web Development', 
    description: 'Custom, high-performance websites built with the latest technologies.',
    img: WebDevelopmentImg,
    link: '/services/web-development'
  },
  { 
    title: 'Digital Marketing', 
    description: 'Strategic advertising campaigns across Google, Meta, and more to scale your business.',
    img: DigitalMarketingImg,
    link: '/services/digital-marketing'
  },
  { 
    title: 'Social Media Branding', 
    description: 'Complete social media identity and engagement strategies for modern brands.',
    img: SmBrandingImg,
    link: '/services/sm-branding'
  },
  { 
    title: 'Video Editing', 
    description: 'Professional video production and editing to tell your story effectively.',
    img: VideoEditingImg,
    link: '/services/video-editing'
  },
];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    let interval: any;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
      }, 3000);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interval) clearInterval(interval);
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
 
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };


  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };
  
  return (
    <div className="max-w-[1400px] mx-auto !px-4 !py-16 md:!pb-45">
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
          <span className="italic text-2xl md:text-4xl text-white tracking-wide">
            Our Professional Services
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
        </div>
        <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">
          Tailored solutions to elevate your brand
        </h2>
      </motion.div>
      
      {!isMobile ? (
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-16 lg:gap-24 pb-12 w-full max-w-[1100px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {categories.map((item, index) => (
            <motion.div 
              key={index} 
              className="group flex flex-col items-center flex-shrink-0 w-full md:w-auto"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >

              {/* Image Container with Link */}
              <Link to={item.link}>
                <motion.div 
                  className="w-[260px] h-[260px] rounded-full shadow-2xl shadow-[#1FB51E]/40 overflow-hidden transition-all duration-500 cursor-pointer relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-2 border-[#1FB51E]/20"
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain p-8"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  {/* Arrow Icon Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <ArrowRight className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>
              </Link>
              
              {/* Content Section */}
              <motion.div 
                className="!mt-8 w-[260px]"
                variants={textVariants}
              >
                <motion.h3 
                  className="font-logo text-xl font-bold text-[#1FB51E] text-center !p-1 leading-tight drop-shadow-[0_0_8px_rgba(31,181,30,0.4)]"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="font-logo text-sm text-white text-center !mt-2 !px-2 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {item.description}
                </motion.p>
                
                {/* Arrow Link Button */}
                <Link to={item.link}>
                  <motion.div 
                    className="flex items-center justify-center !mt-4 text-[#1FB51E] hover:text-white transition-colors duration-300 cursor-pointer drop-shadow-[0_0_5px_rgba(31,181,30,0.3)]"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-logo text-sm font-semibold mr-2">View Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="relative max-w-[400px] mx-auto flex flex-col items-center">
          <div className="w-full overflow-hidden px-4">
            <motion.div 
              className="flex items-center"
              animate={{ x: `calc(-${currentIndex * 100}%)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {categories.map((item, index) => {
                const isActive = index === currentIndex;
                return (
                  <motion.div
                    key={index}
                    animate={{ 
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.5
                    }}
                    className="flex-shrink-0 w-full flex flex-col items-center pb-8"
                  >
                    <Link to={item.link}>
                      <div className="w-[260px] h-[260px] rounded-full shadow-[#1FB51E]/40 shadow-2xl overflow-hidden relative border-4 border-[#1FB51E]/20 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
                        <img src={item.img} alt={item.title} className="w-full h-full object-contain p-8" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <ArrowRight className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </Link>
                    <div className="mt-8 text-center px-4">
                      <h3 className="text-[#1FB51E] text-2xl font-bold mb-3 drop-shadow-[0_0_8px_rgba(31,181,30,0.4)]">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm italic leading-relaxed">
                        {item.description}
                      </p>
                      <Link to={item.link} className="flex items-center justify-center mt-6 text-[#1FB51E]">
                        <span className="text-sm font-bold mr-2">View Details</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex gap-3 mt-4">
            {categories.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-10 bg-[#1FB51E]' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
