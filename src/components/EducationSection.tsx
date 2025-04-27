
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "National Institute of Technology",
    period: "2020 - 2024",
    location: "Karnataka, India",
    achievements: [
      "Maintained a CGPA of 8.5/10",
      "Active member of the Coding Club",
      "Led multiple hackathon teams"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Delhi Public School",
    period: "2018 - 2020",
    location: "New Delhi, India",
    achievements: [
      "Graduated with 95% marks",
      "School prefect and tech club leader",
      "Won multiple programming competitions"
    ]
  }
];

const EducationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { theme } = useTheme();

  return (
    <section id="education" className={theme === 'dark' ? "py-20 bg-gray-900/50" : "py-20 bg-gray-100"}>
      <div 
        ref={ref}
        className={cn(
          "section-container transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="section-title">
          <GraduationCap className="inline-block mr-2 h-8 w-8" />
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={cn(
                "project-card group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ 
                transitionDelay: inView ? `${index * 150}ms` : "0ms"
              }}
            >
              <div className="transition-all duration-300 group-hover:transform group-hover:translate-y-[-8px]">
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {edu.degree}
                </h3>
                <p className="text-theme-purple mb-2">{edu.institution}</p>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.period} • {edu.location}
                </p>
                
                <ul className={`list-disc list-inside text-sm space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
