import { useState, useEffect } from 'react';
import { ArrowUp, Download, Github, Linkedin, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-300 py-4',
          scrolled ? 'bg-theme-dark/95 dark:bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home" className="text-white font-bold text-xl">
                <span className="text-theme-purple">S</span>hivam <span className="text-theme-purple">P</span>rakash
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={cn(
                    'nav-link',
                    activeSection === link.id && 'nav-link-active'
                  )}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-theme-purple/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="/shivam-prakash-resume.pdf"
                className="flex items-center gap-2 ml-4 bg-theme-purple hover:bg-theme-purple-light text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                download
              >
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-white hover:text-theme-purple"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            'fixed inset-0 bg-theme-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xl font-medium text-white hover:text-theme-purple transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/shivam-prakash-resume.pdf"
              className="flex items-center gap-2 mt-4 bg-theme-purple hover:bg-theme-purple-light text-white px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300"
              download
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={18} /> Download Resume
            </a>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com/in/shivamprakash31"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/SHIVAMP149"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:shivamprakash310702@gmail.com"
                className="social-icon"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <button
        className={cn(
          'back-to-top',
          backToTopVisible && 'visible'
        )}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default Navbar;
