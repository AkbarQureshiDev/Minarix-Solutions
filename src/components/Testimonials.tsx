import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Working with their team was a game-changer. They understood our vision instantly and delivered a sleek, high-performing website. The results exceeded our expectations.",
    author: "Sophie Lemaire",
    role: "Product Lead at Loomi",
    avatar: "https://i.pravatar.cc/150?u=sophie",
  },
  {
    quote:
      "Their digital marketing and SEO work transformed our online presence. We saw a 3x increase in leads within the first month. Truly a full-service agency that delivers.",
    author: "Milan Bakker",
    role: "Founder of Drifted Studio",
    avatar: "https://i.pravatar.cc/150?u=milan",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">

      {/* Section Label */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px w-12 bg-white" />
        <span className="italic font-serif text-3xl text-white tracking-wider">Testimonials</span>
        <div className="h-px w-12 bg-white" />
      </div>

      <div className="max-w-[1300px] mx-auto relative flex flex-col md:flex-row items-start justify-between">

        {/* Desktop vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white -translate-x-1/2" />

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex-1 flex flex-col px-4 md:px-16 py-8 md:py-0 ${index === 1 ? "md:mt-48" : "md:mt-16"} ${index !== 0 ? "border-t border-white/10 md:border-t-0" : ""}`}
          >
            <div className="relative w-full text-center md:text-left">

              {/* Quote mark */}
              <div className="md:absolute md:right-0 md:top-1 flex justify-center mb-4 md:mb-0 text-[#01C000] opacity-50 text-2xl">
                <FaQuoteRight />
              </div>

              {/* Quote text */}
              <p className="text-[18px] md:text-[20px] leading-[1.6] text-white font-medium tracking-[-0.01em] mb-10 pr-0 md:pr-8">
                {item.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 ring-1 ring-white/10">
                  <img src={item.avatar} alt={item.author} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#01C000] tracking-tight">{item.author}</span>
                  <span className="text-[14px] text-gray-400 font-normal tracking-tight">{item.role}</span>
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
