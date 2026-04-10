import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';

import institute from '../../assets/institute.png'
import building from '../../assets/building.png'

// 1. Define the Interface
interface Project {
  title: string;
  description: string;
  longDescription: string;
  role: string;
  year: string;
  image: string;
  timeline: string;
  technologies: string[];
  webServices: string[];
  liveLink: string;
  githubLink: string;
}

// 2. Define the Data
const projects: Project[] = [
  {
    title: "Assisted Lives",
    description: "A digital care management platform",
    longDescription: "Assisted Live is a digital care management platform that provides monitoring of carers, logging in and out, medication and task changes, to reviews, and automates the process of assessments.",
    role: "Frontend Developer",
    year: "2025",
    timeline: "Feb 2025 - Present",
    image:building,
    technologies: ["Vue.js", "Bootstrap"],
    webServices: ["html2pdf.js", "moment", "QRCode", "Vue Draggable", "Apex Charts"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "YouFirst",
    description: "A Human Resource Management(HRM) software",
    longDescription: "YouFirst is an enterprise-grade HRM solution designed to streamline employee lifecycles. From recruitment automation to performance tracking, it provides a unified dashboard.",
    role: "Fullstack Developer",
    year: "2024 - 2025",
    timeline: "Oct 2024 - Jan 2025",
    image:institute,
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    webServices: ["Socket.io", "AWS S3", "Chart.js", "React Query", "Postmark API"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Project Alpha",
    description: "E-commerce Analytics Dashboard",
    longDescription: "A high-performance dashboard built to visualize real-time sales data and customer behavior using advanced filtering and 3D data visualization components.",
    role: "Lead Architect",
    year: "2024",
    timeline: "Jan 2024 - Sept 2024",
    image: "https://images.unsplash.com/photo-1504868584819-f8e905b6c7d3?q=80&w=2340&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Three.js"],
    webServices: ["Firebase", "Stripe API", "Google Cloud"],
    liveLink: "#",
    githubLink: "#"
  }
];

const WebProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section className="bg-black py-24 px-8 md:px-16 lg:px-24 font-sans antialiased text-white">
      <div className="max-w-[1300px] mx-auto relative">
        
        {/* Top Decoration */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 bg-white" />
          <span className="italic font-serif text-3xl text-white tracking-wider">Our Projects</span>
          <div className="h-px w-12 bg-white" />
        </div>

        {/* Projects Grid: Set to 3 columns on desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#111] rounded-[12px] border border-white/10 p-4 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(1,192,0,0.15)] 
                         w-full h-[280px] flex flex-col" 
            >
              <div className="relative flex-1 overflow-hidden rounded-[8px] border border-white/10 bg-[#1a1a1a] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1 pb-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-[18px] font-normal text-white tracking-tight">{project.title}</h4>
                  <span className="text-[11px] text-[#01C000] font-light">{project.year}</span>
                </div>
                <p className="text-[14px] text-gray-400 font-light leading-snug line-clamp-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black overflow-y-auto antialiased no-scrollbar">
          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          <button 
            onClick={() => setSelectedProject(null)}
            className="fixed top-8 right-8 text-4xl text-gray-400 hover:text-white transition-colors z-[110]"
          >
            <IoCloseOutline />
          </button>

          <div className="max-w-[1000px] mx-auto py-32 px-10">
            <h1 className="text-[32px] md:text-[50px] font-normal text-white mb-8 tracking-tight">
              {selectedProject.title}
            </h1>
            
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-gray-400 mb-12 font-light">
              {selectedProject.longDescription}
            </p>

            <div className="h-[1px] w-full bg-white/10 mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
              <div>
                <h5 className="font-bold text-[18px] text-[#01C000] mb-4">Timeline</h5>
                <p className="text-gray-400 text-[17px] font-light">{selectedProject.timeline}</p>
              </div>
              <div>
                <h5 className="font-bold text-[18px] text-[#01C000] mb-4">Technologies</h5>
                <ul className="text-gray-400 text-[17px] font-light space-y-1">
                  {selectedProject.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[18px] text-[#01C000] mb-4">Web services</h5>
                <ul className="text-gray-400 text-[17px] font-light space-y-1">
                  {selectedProject.webServices.map(service => <li key={service}>{service}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[18px] text-[#01C000] mb-4">Links</h5>
                <div className="space-y-3">
                  <a href={selectedProject.githubLink} className="flex items-center gap-2 text-white hover:text-[#01C000] transition-colors">
                    Github Repo <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebProjects;