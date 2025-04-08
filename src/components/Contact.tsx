
import React from 'react';
import { Mail, Send, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    // In a real implementation, you would handle form submission here
  };

  return (
    <section id="contact" className="section-spacing px-6 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">04.</span> Contact
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-foreground/70">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a question
            or just want to say hello!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-6 rounded-lg animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your name" 
                  required 
                  className="bg-secondary/10 border-secondary/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  required 
                  className="bg-secondary/10 border-secondary/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5} 
                  required 
                  className="bg-secondary/10 border-secondary/20"
                />
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent/80 flex items-center gap-2">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-right">
            <div className="flex items-center gap-4">
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
            
            <div className="flex items-center gap-4">
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
            
            <div className="flex items-center gap-4">
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
            
            <div className="flex items-center gap-4">
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
      </div>
    </section>
  );
};

export default Contact;
