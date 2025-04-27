
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <a href="#home" className="text-white font-bold text-xl">
              <span className="text-theme-purple">S</span>hivam <span className="text-theme-purple">P</span>rakash
            </a>
            <p className="text-gray-400 mt-2">Software Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/shivamprakash31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-theme-purple p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/SHIVAMP149" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-theme-purple p-2 rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:shivamprakash310702@gmail.com" 
                className="bg-white/5 hover:bg-theme-purple p-2 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Shivam Prakash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
