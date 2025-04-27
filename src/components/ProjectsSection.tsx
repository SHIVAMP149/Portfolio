
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/contexts/ThemeContext';
import { Briefcase } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  period: string;
  achievements: string[];
}

const projects: Project[] = [
  {
    title: "Green Trace App: Climate Change Solution",
    description: "A climate change solution focused on sustainability and eco-awareness",
    period: "December 2024 - January 2025",
    techStack: ["Kotlin", "XML", "Firebase", "Gemini API"],
    achievements: [
      "Developed Green Trace App, a climate change solution focused on sustainability and eco-awareness.",
      "Implemented carbon footprint tracking, allowing users to monitor and reduce their environmental impact.",
      "Integrated AI-powered recommendations using the Gemini API to suggest eco-friendly habits."
    ]
  },
  {
    title: "Hospital Management System",
    description: "A web-based dashboard for managing patient records and appointments",
    period: "October 2024 - December 2024",
    techStack: ["React", "Bootstrap", "JavaScript"],
    achievements: [
      "Designed and developed a web-based dashboard for managing patient records and appointments.",
      "Implemented secure data management to ensure patient confidentiality with healthcare regulations.",
      "Enhanced workflow efficiency with an intuitive UI, real-time updates, and automated scheduling."
    ]
  },
  {
    title: "Room Booking System",
    description: "A robust system for seamless reservations and food ordering",
    period: "June 2024 - July 2024",
    techStack: ["Java", "Data Structures"],
    achievements: [
      "Developed and implemented a robust room booking system for seamless reservations.",
      "Integrated a food ordering system, enabling guests to place orders conveniently.",
      "Enhanced user experience with real-time availability updates and order tracking."
    ]
  }
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={isDark ? "py-20 bg-gray-900" : "py-20 bg-gray-100"}>
      <div 
        ref={ref} 
        className={cn(
          "section-container transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="section-title">
          <Briefcase className="inline-block mr-2 h-8 w-8" />
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={cn(
                "project-card",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 150}ms` : "0ms"
              }}
            >
              <div className="flex flex-col h-full">
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                <p className="text-theme-purple text-sm mb-4">{project.period}</p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                
                <div className="mb-4 flex-grow">
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>Key Achievements:</h4>
                  <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-1`}>
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-2`}>Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-theme-purple/20 text-theme-purple rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
