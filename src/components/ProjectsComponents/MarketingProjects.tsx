import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import marketing1 from '../../assets/marketing1.jpeg';
import marketing2 from '../../assets/marketing2.jpeg';
import marketing3 from '../../assets/marketing3.jpeg';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  year: string;
  image: string;
  timeline: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Brand – 3.19K Conversions @ $0.04 CPA",
    description: "Scaled to 1.07M impressions with ultra-low cost conversions.",
    longDescription:
      "We helped an e-commerce brand scale rapidly using advanced paid ads strategy. By optimizing creatives, targeting, and retargeting funnels, we generated 1.07M impressions and achieved 3.19K conversions at just $0.04 CPA. The campaign focused heavily on high-converting audiences and consistent A/B testing, resulting in strong ROI and daily growth.",
    year: "2026",
    timeline: "6 Weeks Growth Campaign",
    image: marketing1,
  },
  {
    title: "Global Campaign – 163K Conversions & 297K Clicks",
    description: "Massive engagement with high-scale ad performance.",
    longDescription:
      "This campaign was designed to maximize global reach and engagement. We generated 297K clicks and 163K conversions using a mix of Meta and Google Ads. With continuous optimization and testing, we maintained a strong conversion rate at just $0.80 per conversion. The campaign delivered powerful brand awareness and consistent lead generation.",
    year: "2026",
    timeline: "4 Months Scaling Campaign",
    image: marketing2,
  },
  {
    title: "Startup Growth – 5.22K Conversions @ $11.9K Spend",
    description: "Turned ad spend into scalable growth.",
    longDescription:
      "We helped a startup build and scale its digital presence from scratch. With a total ad spend of $11.9K, we achieved 5.22K conversions and over 1.06M impressions. Our approach included funnel optimization, audience targeting, and creative testing, leading to sustainable and profitable growth.",
    year: "2026",
    timeline: "3 Months Performance Campaign",
    image: marketing3,
  },
];

const MarketingProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section className="bg-black pt-24 pb-8 px-8 md:px-16 lg:px-24 font-sans antialiased text-white">
      <div className="max-w-[1300px] mx-auto relative">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 bg-white" />
          <span className="italic font-serif text-3xl text-white tracking-wider">Marketing CaseStudies</span>
          <div className="h-px w-12 bg-white" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#111] rounded-[12px] border border-white/10 p-4 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(1,192,0,0.15)] w-full h-[280px] flex flex-col"
            >
              <div className="relative flex-1 overflow-hidden rounded-[8px] border border-white/10 bg-[#1a1a1a] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="group space-y-1 pb-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-[18px] font-normal text-white tracking-tight">
                    {project.title}
                  </h4>
                </div>

                <p className="text-[14px] text-gray-400 font-light leading-snug line-clamp-1">
                  {project.description}
                </p>

                <span className="text-xs text-[#01C000] opacity-0 group-hover:opacity-100 transition">
                  View Case Study →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="fixed top-6 right-6 text-4xl text-gray-400 hover:text-white"
          >
            <IoCloseOutline />
          </button>

          {/* Content */}
          <div className="max-w-7xl mx-auto py-28 px-6">
            {/* Modal Image */}
            <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-10 max-h-[480px]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-light mb-6">
              {selectedProject.title}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {selectedProject.longDescription}
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-white/10 mb-10"></div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h5 className="text-[#01C000] mb-2 text-lg">Timeline</h5>
                <p className="text-gray-400">
                  {selectedProject.timeline}
                </p>
              </div>

              <div>
                <h5 className="text-[#01C000] mb-2 text-lg">Year</h5>
                <p className="text-gray-400">
                  {selectedProject.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MarketingProjects;