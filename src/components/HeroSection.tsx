
import { Download } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Create particle effect
    if (particlesContainerRef.current) {
      const container = particlesContainerRef.current;
      
      // Clear any existing particles
      container.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        
        // Random position, size and animation delay
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDelay = Math.random() * 8;
        const animationDuration = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.className = 'floating-particle animate-particle';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.opacity = `${opacity}`;
        particle.style.animationDelay = `${animationDelay}s`;
        particle.style.animationDuration = `${animationDuration}s`;
        
        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <div ref={particlesContainerRef} className="absolute inset-0 z-0" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <Avatar className="w-40 h-40 mb-8 border-4 border-theme-purple shadow-lg">
            <AvatarImage src="/lovable-uploads/93504ae2-602e-482e-a1d7-ddefb1f8d983.png" alt="Shivam Prakash" className="object-cover" />
            <AvatarFallback className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}>SP</AvatarFallback>
          </Avatar>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className="text-theme-purple">Shivam Prakash</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Software Developer</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-theme-purple text-white rounded-full font-medium hover:bg-theme-purple-light transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a
              href="/shivam-prakash-resume.pdf"
              className={`px-6 py-3 bg-transparent border border-theme-purple rounded-full font-medium transition-colors duration-300 flex items-center gap-2 ${
                theme === 'dark' ? 'text-theme-purple hover:bg-theme-purple/10' : 'text-theme-purple hover:bg-theme-purple/10'
              }`}
              download
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/shivamprakash31"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-theme-purple transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/SHIVAMP149"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-theme-purple transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:shivamprakash310702@gmail.com"
              className={`hover:text-theme-purple transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
