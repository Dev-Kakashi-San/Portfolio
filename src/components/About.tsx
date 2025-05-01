
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
                Hey, I’m Tushar — a backend engineer with a deep interest in system design, algorithms, and machine learning.
              </p>
              <p className="text-foreground/80">
                My journey started in college, where I got obsessed with breaking down problems and building reliable systems to solve them.
                Since then, I've been focused on crafting performant APIs, working with databases, and scaling backend logic — all while sharpening my DSA skills like a maniac.
              </p>
              <p className="text-foreground/80">
                I'm passionate about clean architecture, efficient code, and solving real-world problems that require more than just plugging in libraries.
                When I’m not coding, I’m either exploring ML/AI models, diving into new tech, or solving problems on platforms like LeetCode.
              </p>
              <p className="text-foreground/80">
                I’m all about learning fast, building right, and pushing boundaries — both in tech and in myself.
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
