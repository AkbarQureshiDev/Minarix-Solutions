import React from "react";
import { motion } from "framer-motion";
import {
  IoVideocam,
  IoGlobe,
  IoSearch,
  IoMegaphone,
  IoBrush,
  IoStorefront,
} from "react-icons/io5";

const float = (delay: number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
  },
});

const Badge = ({
  icon,
  label,
  iconBg,
  delay,
  transform,
  offset,
}: {
  icon: React.ReactNode;
  label: string;
  iconBg: string;
  delay: number;
  transform: string;
  offset: string;
}) => (
  <motion.div
    variants={float(delay)}
    initial="initial"
    animate="animate"
    className={`flex items-center gap-3 bg-[#111] px-4 py-2.5 rounded-full border border-white/10 w-fit ${offset}`}
    style={{ transform }}
  >
    <div className={`${iconBg} p-1.5 rounded-lg text-white text-base`}>{icon}</div>
    <span className="font-medium text-[15px] text-white tracking-tight whitespace-nowrap">{label}</span>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden font-sans">

      {/* Section Label */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <div className="h-px w-12 bg-white" />
        <span className="italic font-serif text-3xl text-white tracking-wider">About</span>
        <div className="h-px w-12 bg-white" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 w-full grid grid-cols-12 items-center gap-6">

        {/* LEFT BADGES — hidden on mobile */}
        <div className="hidden md:flex col-span-3 flex-col gap-8">
          <Badge icon={<IoVideocam />} label="Video Editing"    iconBg="bg-[#FF5C00]" delay={0}   transform="rotateY(25deg) rotateX(4deg)" offset="ml-2" />
          <Badge icon={<IoGlobe />}    label="Web Development"  iconBg="bg-[#01C000]" delay={0.5} transform="rotateY(25deg) rotateX(4deg)" offset="ml-14" />
          <Badge icon={<IoSearch />}   label="SEO"              iconBg="bg-[#00A3FF]" delay={1}   transform="rotateY(25deg) rotateX(4deg)" offset="ml-6" />
        </div>

        {/* CENTER HEADING */}
        <div className="col-span-12 md:col-span-6 flex flex-col items-center text-center gap-5 px-4">
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-normal leading-[1.15] text-white tracking-[-0.03em]">
            We help businesses grow their{" "}
            <span className="text-[#01C000]">digital presence</span>{" "}
            through creative strategy and execution
          </h2>
          <p className="text-white text-base max-w-[420px] leading-relaxed">
            One agency. Every service your brand needs to stand out and scale online.
          </p>
        </div>

        {/* RIGHT BADGES — hidden on mobile */}
        <div className="hidden md:flex col-span-3 flex-col gap-8 items-end">
          <Badge icon={<IoMegaphone />}  label="Digital Marketing"  iconBg="bg-[#10B981]" delay={0.3} transform="rotateY(-25deg) rotateX(4deg)" offset="mr-2" />
          <Badge icon={<IoBrush />}      label="Graphic Designing"  iconBg="bg-[#FF008A]" delay={0.8} transform="rotateY(-25deg) rotateX(4deg)" offset="mr-16" />
          <Badge icon={<IoStorefront />} label="WordPress & Shopify" iconBg="bg-[#FFB800]" delay={1.3} transform="rotateY(-25deg) rotateX(4deg)" offset="mr-6" />
        </div>

      </div>
    </section>
  );
};

export default About;
