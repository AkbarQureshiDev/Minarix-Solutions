import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Joris was a game-changer. He instantly understood our vision and translated it into a sleek, intuitive product. The process felt effortless, and the results exceeded our expectations.",
    author: "Sophie Lemaire",
    role: "Product Lead at Loomi",
    avatar: "https://i.pravatar.cc/150?u=sophie",
  },
  {
    quote:
      "Joris brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been incredible.",
    author: "Milan Bakker",
    role: "Founder of Drifted Studio",
    avatar: "https://i.pravatar.cc/150?u=milan",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#D9D9D9] py-32 px-6 md:px-12">
      {/* Container restricted to 1300px */}
      <div className="max-w-[1300px] mx-auto relative flex flex-col md:flex-row items-start justify-between">
        
        {/* Central Vertical Divider - matching the thin, subtle line in the image */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/[0.08] -translate-x-1/2" />

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex-1 flex flex-col px-4 md:px-16 ${
              index === 1 ? "md:mt-64" : "md:mt-20" // Replicating the staggered vertical alignment
            }`}
          >
            <div className="relative w-full">
              {/* Quote Mark - Positioned exactly like the image */}
              <div className="absolute right-0 top-1 text-[#999999] text-2xl font-serif select-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                   <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.2386 16.7784 9 14.017 9V7C17.883 7 21.017 10.134 21.017 14V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V14C8.017 11.2386 5.77843 9 3.017 9V7C6.883 7 10.017 10.134 10.017 14V21H3.017Z" />
                </svg>
              </div>

              {/* Quote Text - Using specific size and tracking */}
              <p className="text-[26px] md:text-[32px] leading-[1.3] text-[#1A1A1A] font-medium tracking-[-0.02em] mb-12 pr-10">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 ring-1 ring-black/5">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold text-black tracking-tight">
                    {item.author}
                  </span>
                  <span className="text-[15px] text-[#707070] font-normal tracking-tight">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;