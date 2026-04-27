import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import alemaar from '../assets/brands/Alemaar.png';
import digitalEra from '../assets/brands/DigitalEra.png';
import scair from '../assets/brands/Scair.png';
import signAge from '../assets/brands/SignAge.png';
import zarb from '../assets/brands/Zarb.png';

const Brands: React.FC = () => {
  const brandLogos = [
    { name: "Alemaar", src: alemaar },
    { name: "DigitalEra", src: digitalEra },
    { name: "Scair", src: scair },
    { name: "SignAge", src: signAge },
    { name: "Zarb", src: zarb },
  ];

  return (
    <section className="w-full py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 mb-20 text-center font-poppins"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
            <span className="italic text-2xl sm:text-4xl text-white tracking-wide">Brands That Trust Us</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
          </div>
          <h2 className="text-white/40 text-base sm:text-xl lg:text-2xl tracking-widest font-light mt-2">Trusted by industry leaders</h2>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2.5}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
            className="brand-swiper !ease-linear"
          >
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="group h-[60px] sm:h-[100px] flex items-center justify-center transition-all duration-500 hover:scale-105">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-w-[80%] max-h-[40px] sm:max-h-[60px] md:max-h-[80px] object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(31,180,30,0.5)]"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(31, 180, 30, 0.3))' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fade effects on edges for a premium look */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
      
      <style>{`
        .brand-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Brands;
