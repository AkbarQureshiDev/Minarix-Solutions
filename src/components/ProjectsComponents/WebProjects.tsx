import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';

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

// 2. Define the Data (CRITICAL: This must be present)
const projects: Project[] = [
  {
    title: "Assisted Lives",
    description: "A digital care management platform",
    longDescription: "Assisted Live is a digital care management platform that provides monitoring of carers, logging in and out, medication and task changes, to reviews, and automates the process of assessments.",
    role: "Frontend Developer",
    year: "2025",
    timeline: "Feb 2025 - Present",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2340&auto=format&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    webServices: ["Socket.io", "AWS S3", "Chart.js", "React Query", "Postmark API"],
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
    <section className="bg-[#FDFDFD] py-24 px-8 md:px-16 lg:px-24 font-sans antialiased text-[#707070]">
      <div className="max-w-[1300px] mx-auto relative">
        
        {/* Top Decoration */}
        <div className="flex items-center justify-center gap-5 opacity-30 mb-6">
          <div className="h-[0.5px] w-14 bg-black"></div>
          <span className="italic font-serif text-[22px] text-black lowercase tracking-wider">Our Projects</span>
          <div className="h-[0.5px] w-14 bg-black"></div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-[32px] font-light text-[#707070] tracking-tight">
            Software And Web Development Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-[12px] border border-[#E8E8E8] p-4 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.03)] 
                         w-full max-w-[400px] h-[320px] flex flex-col" 
            >
              <div className="relative flex-1 overflow-hidden rounded-[8px] border border-[#F0F0F0] bg-[#FAFAFA] mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-1 pb-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-[18px] font-normal text-[#5A5A5A] tracking-tight">{project.title}</h4>
                  <span className="text-[11px] text-[#AFAFAF] font-light">{project.year}</span>
                </div>
                <p className="text-[14px] text-[#8C8C8C] font-light leading-snug line-clamp-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto antialiased no-scrollbar">
          {/* Internal CSS for hiding scrollbar */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          <button 
            onClick={() => setSelectedProject(null)}
            className="fixed top-8 right-8 text-4xl text-gray-400 hover:text-black transition-colors z-[110]"
          >
            <IoCloseOutline />
          </button>

          <div className="max-w-[1000px] mx-auto py-32 px-10">
            <h1 className="text-[20px] md:text-[50px] font-normal text-[#333] mb-8 tracking-tight">
              {selectedProject.title}
            </h1>
            
            <p className="text-[14px] md:text-[18px] leading-[1.6] text-[#888] mb-12 font-light">
              {selectedProject.longDescription}
            </p>

            <div className="h-[1px] w-full bg-gray-100 mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
              <div>
                <h5 className="font-bold text-[18px] text-[#333] mb-4">Timeline</h5>
                <p className="text-[#888] text-[17px] font-light">{selectedProject.timeline}</p>
              </div>
              <div>
                <h5 className="font-bold text-[18px] text-[#333] mb-4">Technologies</h5>
                <ul className="text-[#888] text-[17px] font-light space-y-1">
                  {selectedProject.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[18px] text-[#333] mb-4">Web services</h5>
                <ul className="text-[#888] text-[17px] font-light space-y-1">
                  {selectedProject.webServices.map(service => <li key={service}>{service}</li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[18px] text-[#333] mb-4">Links</h5>
                <div className="space-y-3">
                  <a href={selectedProject.githubLink} className="flex items-center gap-2 text-[#333] hover:underline">
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