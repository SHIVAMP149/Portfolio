
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <div 
        ref={ref} 
        className={cn(
          "section-container transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-theme-purple/20 rounded-full p-3 mr-4">
                  <Mail className="text-theme-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a 
                    href="mailto:shivamprakash310702@gmail.com" 
                    className="text-gray-300 hover:text-theme-purple transition-colors"
                  >
                    shivamprakash310702@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-theme-purple/20 rounded-full p-3 mr-4">
                  <Linkedin className="text-theme-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/shivamprakash31" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-theme-purple transition-colors"
                  >
                    linkedin.com/in/shivamprakash31
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-theme-purple/20 rounded-full p-3 mr-4">
                  <Github className="text-theme-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">GitHub</h4>
                  <a 
                    href="https://github.com/SHIVAMP149" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-theme-purple transition-colors"
                  >
                    github.com/SHIVAMP149
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/shivamprakash31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-theme-purple p-3 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/SHIVAMP149" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-theme-purple p-3 rounded-full transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:shivamprakash310702@gmail.com" 
                  className="bg-white/5 hover:bg-theme-purple p-3 rounded-full transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-theme-purple hover:bg-theme-purple-light text-white py-3 px-6 rounded-lg transition-colors duration-300",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
