
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/contexts/ThemeContext";
import { User } from "lucide-react";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={isDark ? "py-20 bg-gray-900" : "py-20 bg-gray-100"}>
      <div 
        ref={ref} 
        className={cn(
          "section-container transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="section-title">
          <User className="inline-block mr-2 h-8 w-8" />
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="glass-card p-6 rounded-xl">
            <h3 className={`text-xl font-semibold mb-4 text-theme-purple`}>Who I Am</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              I'm a passionate Software Developer with a strong foundation in various programming 
              languages and frameworks. My journey in technology is driven by a desire to create 
              meaningful solutions that enhance user experiences and solve real-world problems.
            </p>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mt-4`}>
              With a Bachelor's degree in Computer Science and Engineering from Lovely Professional University, 
              I've developed strong problem-solving skills and adaptability to new technologies.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className={`text-xl font-semibold mb-4 text-theme-purple`}>My Approach</h3>
            <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="flex items-start">
                <span className="text-theme-purple mr-2">•</span>
                <span>Focused on creating responsive, user-friendly applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-purple mr-2">•</span>
                <span>Dedicated to writing clean, efficient, and maintainable code</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-purple mr-2">•</span>
                <span>Committed to continuous learning and staying updated with industry trends</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-purple mr-2">•</span>
                <span>Experienced in collaborative environments as a team player</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-purple mr-2">•</span>
                <span>Strong project management skills to deliver projects on time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
