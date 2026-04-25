import React from "react";

interface StatItemProps {
  value: string;
  label: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, description }) => (
  <div className="flex flex-col items-center text-center px-6 md:border-l border-white/20 first:border-l-0">
    <h2 className="text-5xl md:text-6xl font-bold text-[#01BD00] mb-2 font-mono">
      {value}
    </h2>
    <p className="text-white text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-3">
      {label}
    </p>
    <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
      {description}
    </p>
  </div>
);

const Stats: React.FC = () => {
  const statsData = [
    {
      value: "700+",
      label: "satisfied clients",
      description:
        "Driving success across Digital Marketing, SEO, and Social Media Management for diverse global clients.",
    },
    {
      value: "1500+",
      label: "projects",
      description:
        "Delivering excellence in Web Development, Graphic Design, and Video Editing with a focus on creative precision.",
    },
    {
      value: "100+",
      label: "brands",
      description:
        "Strategic partner for leading brands, enhancing their digital identity through innovative marketing and design.",
    },
  ];

  return (
    <div className="w-full bg-black py-24 px-4 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-4">
        {statsData.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
