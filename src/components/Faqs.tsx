import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi2';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer Video Editing, Digital Marketing, Web Development, Graphic Designing, SEO, and WordPress & Shopify Development — everything your brand needs under one roof."
  },
  {
    question: "How long does a website project take?",
    answer: "A standard website takes 1–2 weeks. More complex builds like e-commerce or custom platforms may take 3–4 weeks depending on requirements."
  },
  {
    question: "Do you work with small businesses and startups?",
    answer: "Absolutely. We work with businesses of all sizes — from early-stage startups to established brands looking to scale their digital presence."
  },
  {
    question: "Can you manage our social media and SEO together?",
    answer: "Yes. We offer combined digital marketing packages that include SEO, social media management, and paid ads to maximize your online reach."
  },
  {
    question: "How do we get started?",
    answer: "Simply book a free discovery call. We'll understand your goals and recommend the best plan for your business."
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black min-h-screen py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1300px] mx-auto">

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
            <span className="italic text-4xl text-white tracking-wide">FAQs</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
          </div>
          <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">Answers to your common questions</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* CTA Card — left on desktop, bottom on mobile */}
          <div className="w-full lg:w-[400px] flex justify-center lg:pt-4 order-2 lg:order-1">
            <div className="bg-[#111] p-10 rounded-[35px] border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] transform -rotate-[2.5deg] hover:rotate-0 transition-transform duration-500 w-full">

              <div className="mb-10">
                  <h3 className="text-[20px] font-medium text-white leading-tight">Have more questions?</h3>
                  <p className="text-gray-400 text-base">Book a free discovery call</p>
              </div>

              <a 
                href="https://wa.me/923349313075?text=Hello%20Minarix!%20I%20would%20like%20to%20book%20a%20free%20discovery%20call." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#01C000] text-black py-4 px-8 rounded-full flex items-center justify-between group/btn hover:bg-[#00a800] transition-all"
              >
                <span className="font-semibold text-[16px]">Book a Discovery Call</span>
                <HiArrowRight className="text-xl transition-transform group-hover/btn:translate-x-1" />
              </a>

              <p className="mt-6 text-center text-[14px] text-gray-500">
                Or email us at{" "}
                <a 
                  href="mailto:minarixsolutions@gmail.com?subject=Website%20Inquiry&body=Hello%20Minarix%20Team,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  className="text-[#01C000] cursor-pointer hover:opacity-80 transition-opacity"
                >
                  minarixsolutions@gmail.com
                </a>
              </p>

            </div>
          </div>

          {/* Accordion — right on desktop, top on mobile */}
          <div className="flex-1 w-full border-t border-white/10 order-1 lg:order-2">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className={`text-lg md:text-[22px] font-normal tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[#01C000]' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className="ml-6 flex-shrink-0">
                    <HiPlus
                      className={`transition-all duration-500 ease-[cubic-bezier(0.2,1,0.3,1)] ${
                        openIndex === index ? 'rotate-[135deg] text-[#01C000]' : 'rotate-0 text-gray-400'
                      }`}
                      size={28}
                    />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faqs;
