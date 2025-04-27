
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div 
        ref={ref} 
        className={cn(
          "section-container transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-theme-purple">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Software Developer with a strong foundation in various programming 
              languages and frameworks. My journey in technology is driven by a desire to create 
              meaningful solutions that enhance user experiences and solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              With a Bachelor's degree in Computer Science and Engineering from Lovely Professional University, 
              I've developed strong problem-solving skills and adaptability to new technologies.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-theme-purple">My Approach</h3>
            <ul className="space-y-3 text-gray-300">
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
        
        <div className="mt-12 glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-theme-purple">Education</h3>
          
          <div className="space-y-6">
            <div className="border-l-2 border-theme-purple pl-4">
              <h4 className="text-lg font-medium text-white">Bachelor of Technology - Computer Science and Engineering</h4>
              <p className="text-theme-purple">Lovely Professional University</p>
              <p className="text-gray-400">Punjab, India (Since 2022)</p>
              <p className="text-gray-300 mt-2">CGPA: 7.33</p>
            </div>
            
            <div className="border-l-2 border-theme-purple pl-4">
              <h4 className="text-lg font-medium text-white">Matriculation</h4>
              <p className="text-theme-purple">Sanatan Dharma Public School</p>
              <p className="text-gray-400">Delhi, India (April 2020 - March 2021)</p>
              <p className="text-gray-300 mt-2">Percentage: 73.6%</p>
            </div>
            
            <div className="border-l-2 border-theme-purple pl-4">
              <h4 className="text-lg font-medium text-white">Intermediate</h4>
              <p className="text-theme-purple">Sanatan Dharma Public School</p>
              <p className="text-gray-400">Delhi, India (April 2018 - March 2019)</p>
              <p className="text-gray-300 mt-2">Percentage: 79.8%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
