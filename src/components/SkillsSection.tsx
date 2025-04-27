
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  proficiency: number;
  icon: string;
  category: "language" | "framework" | "soft";
}

const skills: Skill[] = [
  // Languages
  { name: "C++", proficiency: 85, icon: "devicon-cplusplus-plain", category: "language" },
  { name: "Java", proficiency: 90, icon: "devicon-java-plain", category: "language" },
  { name: "JavaScript", proficiency: 85, icon: "devicon-javascript-plain", category: "language" },
  { name: "PHP", proficiency: 75, icon: "devicon-php-plain", category: "language" },
  
  // Frameworks
  { name: "HTML/CSS", proficiency: 90, icon: "devicon-html5-plain", category: "framework" },
  { name: "Bootstrap", proficiency: 85, icon: "devicon-bootstrap-plain", category: "framework" },
  { name: "Node.js", proficiency: 80, icon: "devicon-nodejs-plain", category: "framework" },
  { name: "React", proficiency: 85, icon: "devicon-react-original", category: "framework" },
  
  // Soft Skills
  { name: "Problem Solving", proficiency: 90, icon: "fa-solid fa-lightbulb", category: "soft" },
  { name: "Team Player", proficiency: 95, icon: "fa-solid fa-users", category: "soft" },
  { name: "Project Management", proficiency: 85, icon: "fa-solid fa-tasks", category: "soft" },
  { name: "Adaptability", proficiency: 90, icon: "fa-solid fa-sync-alt", category: "soft" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "language" | "framework" | "soft">("all");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  useEffect(() => {
    // Load external icons
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/devicon.min.js';
      script.async = true;
      document.body.appendChild(script);
      
      const fontAwesome = document.createElement('link');
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      fontAwesome.rel = 'stylesheet';
      document.head.appendChild(fontAwesome);
    };
    
    loadScript();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div 
        ref={ref} 
        className={cn(
          "section-container transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="section-title">My Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2 rounded-full text-sm transition-all",
              activeCategory === "all" ? 
                "bg-theme-purple text-white" : 
                "bg-white/5 text-gray-300 hover:bg-white/10"
            )}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveCategory("language")}
            className={cn(
              "px-5 py-2 rounded-full text-sm transition-all",
              activeCategory === "language" ? 
                "bg-theme-purple text-white" : 
                "bg-white/5 text-gray-300 hover:bg-white/10"
            )}
          >
            Languages
          </button>
          <button
            onClick={() => setActiveCategory("framework")}
            className={cn(
              "px-5 py-2 rounded-full text-sm transition-all",
              activeCategory === "framework" ? 
                "bg-theme-purple text-white" : 
                "bg-white/5 text-gray-300 hover:bg-white/10"
            )}
          >
            Frameworks
          </button>
          <button
            onClick={() => setActiveCategory("soft")}
            className={cn(
              "px-5 py-2 rounded-full text-sm transition-all",
              activeCategory === "soft" ? 
                "bg-theme-purple text-white" : 
                "bg-white/5 text-gray-300 hover:bg-white/10"
            )}
          >
            Soft Skills
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={cn(
                "glass-card p-6 rounded-xl transition-all duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                // Stagger the animations
                inView && `transition-delay-[${index * 100}ms]`
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100}ms` : "0ms"
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-theme-purple mr-4">
                  <i className={`${skill.icon} text-3xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="text-theme-purple">{skill.proficiency}%</p>
                </div>
              </div>
              
              <div className="skill-progress-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: inView ? `${skill.proficiency}%` : '0%',
                    transition: 'width 1s ease-in-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
