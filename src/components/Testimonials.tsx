import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import ayyanImg from "../assets/Testimonials/Ayyan.jpeg";
import nadeemImg from "../assets/Testimonials/Nadeem.png";

const testimonials = [
  {
    quote:
      "Working with their team was a game-changer. They understood our vision instantly and delivered a sleek, high-performing website. The results exceeded our expectations.",
    author: "Adnan Malick",
    role: "CEO of Ayyan Signage",
    avatar: ayyanImg,
  },
  {
    quote:
      "Their digital marketing and SEO work transformed our online presence. We saw a 3x increase in leads within the first month. Truly a full-service agency that delivers.",
    author: "Nadeem Farooq Khan",
    role: "CEO of Alemaar Building Solution",
    avatar: nadeemImg,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">

      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 mb-24 text-center font-poppins"
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-white" />
          <span className="italic text-4xl text-white tracking-wide">Testimonials</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
        </div>
        <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">What our clients say</h2>
      </motion.div>

      <div className="max-w-[1300px] mx-auto relative flex flex-col md:flex-row items-start justify-between">

        {/* Desktop vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white -translate-x-1/2" />

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`group flex-1 flex flex-col px-4 md:px-16 py-10 md:py-12 transition-all duration-500 rounded-3xl ${index === 1 ? "md:mt-48" : "md:mt-16"}`}
          >
            <div className="relative w-full text-center md:text-left">
              {/* Quote mark */}
              <div className="hidden md:flex md:absolute md:right-0 md:-top-4 justify-center text-[#01C000] opacity-20 text-6xl group-hover:opacity-40 transition-opacity">
                <FaQuoteRight />
              </div>

              {/* Quote text */}
              <p className="text-[20px] md:text-[24px] leading-[1.5] text-white/90 font-medium tracking-[-0.02em] mb-12 relative z-10">
                "{item.quote}"
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-5 justify-center md:justify-start">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 ring-2 ring-white/10 group-hover:ring-[#01C000]/50 transition-all duration-500">
                    <img 
                      src={item.avatar} 
                      alt={item.author} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[17px] font-bold text-white group-hover:text-[#01C000] transition-colors duration-300">
                    {item.author}
                  </span>
                  <span className="text-[14px] text-gray-400 font-medium tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01C000]/50" />
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
