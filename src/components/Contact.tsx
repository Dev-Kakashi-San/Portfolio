
import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing px-6 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">04.</span> Contact
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-foreground/70">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of these channels!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 glass-card p-6 rounded-xl animate-fade-in">
            <div className="bg-accent/20 p-3 rounded-full">
              <Mail size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a href="mailto:contact@tusharsharma.dev" className="text-foreground/70 hover:text-accent transition-colors">
                contact@tusharsharma.dev
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 glass-card p-6 rounded-xl animate-fade-in">
            <div className="bg-accent/20 p-3 rounded-full">
              <Phone size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a href="tel:+919876543210" className="text-foreground/70 hover:text-accent transition-colors">
                +91 9876543210
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 glass-card p-6 rounded-xl animate-fade-in">
            <div className="bg-accent/20 p-3 rounded-full">
              <Github size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-medium">GitHub</h4>
              <a href="https://github.com/dev-tushar-sh" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                github.com/dev-tushar-sh
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 glass-card p-6 rounded-xl animate-fade-in">
            <div className="bg-accent/20 p-3 rounded-full">
              <Linkedin size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="font-medium">LinkedIn</h4>
              <a href="https://linkedin.com/in/tushar-sharma" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                linkedin.com/in/tushar-sharma
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
