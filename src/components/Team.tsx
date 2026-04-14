import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Amina Gulzar", role: "CEO | Managing Director", image: "/path-to-img.jpg" },
  { name: "Rana Haseeb Ahmad", role: "Brand Ambassador", image: "/path-to-img.jpg" },
  { name: "M.Akbar Qureshi", role: "Full-Stack Developer", image: "/path-to-img.jpg" },
  { name: "Rana Muneeb Ahmad", role: "Branding Specialist", image: "/path-to-img.jpg" },
  { name: "Humera Gulzar", role: "", image: "/path-to-img.jpg" },
  { name: "Khayam Riaz", role: "Operational Incharge", image: "/path-to-img.jpg" },
];

const Team: React.FC = () => {
  return (
    <div className="py-24 px-10 bg-black">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px w-12 bg-white" />
        <span className="italic font-serif text-3xl text-white tracking-wider">Our Team</span>
        <div className="h-px w-12 bg-white" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => {
          const isGreen = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              {/* Pill */}
              <div
                className={`w-[270px] h-[380px] rounded-full flex flex-col items-center pt-12 px-6 text-center
                  transition-all duration-500 group-hover:-translate-y-3
                  ${isGreen
                    ? 'bg-[#01C000] shadow-[0_20px_60px_rgba(1,192,0,0.35)] group-hover:shadow-[0_30px_80px_rgba(1,192,0,0.55)]'
                    : 'bg-white shadow-[0_20px_60px_rgba(255,255,255,0.15)] group-hover:shadow-[0_30px_80px_rgba(255,255,255,0.3)]'
                  }`}
              >
                {/* Name */}
                <h3 className={`font-bold text-xl leading-tight mb-2 transition-all duration-300 group-hover:scale-105 px-5 ${isGreen ? 'text-white' : 'text-black'}`}>
                  {member.name}
                </h3>
                {/* Role */}
                <p className={`text-[12px] uppercase tracking-widest font-medium ${isGreen ? 'text-white/75' : 'text-black/55'}`}>
                  {member.role}
                </p>

                {/* Inner arch shadow */}
                <div className="absolute bottom-[2px] w-[266px] h-[220px] bg-black/10 rounded-full pointer-events-none" />

                {/* Profile image */}
                <div className="absolute bottom-0 w-[270px] h-[270px] rounded-full overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white/20 backdrop-blur-md border border-white/20 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
