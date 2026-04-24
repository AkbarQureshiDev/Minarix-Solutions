import React from 'react';
import { motion } from 'framer-motion';
import aminaImg from '../assets/Team/Amna.jpeg';
import haseebImg from '../assets/Team/Haseeb.png';
import akbarImg from '../assets/Team/Akbar.jpeg';
import muneebImg from '../assets/Team/Muneeb.jpeg';
import humeraImg from '../assets/Team/Humera.jpeg';
import khayamImg from '../assets/Team/Khayam.jpeg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Amina Gulzar", role: "Brand Strategies", image: aminaImg },
  { name: "Rana Haseeb Ahmad", role: "Digital Marketer", image: haseebImg },
  { name: "M.Akbar Qureshi", role: "Full-Stack Developer", image: akbarImg },
  { name: "Rana Muneeb Ahmad", role: "Senior Designer", image: muneebImg },
  { name: "Humera Gulzar", role: "Junior Designer | Content Creator", image: humeraImg },
  { name: "Khayam Riaz", role: "Video Editor", image: khayamImg },
];

const Team: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <div className="py-24 px-10 bg-[#050505] overflow-hidden relative" id="team">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#01C000]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />

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
          <span className="italic text-4xl text-white tracking-wide">Our Team</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-white" />
        </div>
        <h2 className="text-white/40 text-xl lg:text-2xl tracking-widest font-light mt-2">Visionaries behind the craft</h2>
      </motion.div>

      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 max-w-7xl mx-auto"
      >
        {teamMembers.map((member, index) => {
          const isGreen = index % 2 === 0;

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          };

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "circOut" }
              }}
              className="relative flex flex-col items-center group cursor-none sm:cursor-pointer"
            >
              {/* Main Pill Shape */}
              <div
                className={`relative w-[280px] h-[400px] rounded-[140px] flex flex-col items-center pt-14 px-8 text-center
                  transition-all duration-700 overflow-hidden
                  ${isGreen
                    ? 'bg-gradient-to-b from-[#01C000] to-[#018000] shadow-[0_20px_60px_-15px_rgba(1,192,0,0.4)]'
                    : 'bg-white shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]'
                  }`}
              >
                {/* Spotlight Shine Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4), transparent 80%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 w-full font-poppins">
                  <h3 className={`font-bold text-2xl leading-tight mb-2 tracking-tight transition-all duration-500 ${isGreen ? 'text-white' : 'text-black'}`}>
                    {member.name}
                  </h3>
                  <p className={`text-[12px] font-medium ${isGreen ? 'text-white/75' : 'text-black/55'}`}>
                    {member.role}
                  </p>
                </div>

                {/* Circular Image Container - Positions at the Bottom */}
                <div className="absolute bottom-0 w-[280px] h-[280px] translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.33,1,0.68,1]">
                  {/* Subtle Arch Shadow */}
                  <div className="absolute -top-4 inset-x-8 h-12 bg-black/10 blur-xl rounded-full opacity-50 group-hover:opacity-30 transition-opacity" />
                  
                  <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-black/5 relative group-hover:border-transparent transition-colors duration-500">
                    <motion.div 
                      className="w-full h-full"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top filter group-hover:brightness-110 transition-all duration-700"
                      />
                    </motion.div>

                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>

              {/* Outside Glow/Shadow that intensifies on hover */}
              <div className={`absolute -inset-4 rounded-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10
                ${isGreen ? 'bg-[#01C000]/20' : 'bg-white/10'}`} 
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Team;


