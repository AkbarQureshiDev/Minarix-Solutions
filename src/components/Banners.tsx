import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';

const banners = [
  { src: banner1, alt: 'DERMYX Skincare client work showcase', link: '/dermyxclientwork' },
  { src: banner2, alt: 'NERO client work showcase', link: '/neroclientwork' },
];

const Banners: React.FC = () => {
  return (
    <section className="w-full bg-black md:bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16 text-center font-poppins"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white" />
          <span className="italic text-2xl sm:text-4xl text-white tracking-wide">
            Our Latest Client Works
          </span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-white/40 text-sm tracking-widest italic font-poppins -mt-10 mb-16"
        >
          click to see more
        </motion.p>

        <div className="flex flex-col gap-8">
          {banners.map((banner, index) => (
            <Link key={index} to={banner.link} className="block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                whileHover={{ scale: 1.01 }}
                className="group overflow-hidden rounded-2xl border-2 border-[#1FB51E]/20 shadow-2xl shadow-[#1FB51E]/20"
              >
                <img
                  src={banner.src}
                  alt={banner.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banners;
