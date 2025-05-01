
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-spacing px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">01.</span> About Me
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <p className="text-foreground/80">
              Hello! I'm Tushar, a passionate web developer with a strong foundation in crafting responsive web applications.
              My journey in tech began during my college years, where I discovered my love for turning ideas into reality through code.
            </p>
            <p className="text-foreground/80">
              I enjoy the process of building applications from scratch, solving complex problems, and continuously learning new technologies.
              My focus is on creating clean, efficient, and user-friendly interfaces that provide exceptional digital experiences.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or expanding my knowledge
              through online courses and tech communities.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-md border-2 border-accent/20">
              <div className="relative aspect-square bg-muted overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-60 mix-blend-overlay"></div>
                <img 
                  src="/Chibi Tushar.png" 
                  alt="Tushar Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-0.5 rounded-md bg-gradient-to-tr from-accent to-primary/5 opacity-30 blur group-hover:opacity-60 transition duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
