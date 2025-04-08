
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index }) => {
  return (
    <div 
      className="glass-card p-4 rounded-lg animate-fade-in" 
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <h3 className="font-medium mb-2">{name}</h3>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 85 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "Firebase", level: 70 },
    { name: "RESTful APIs", level: 80 }
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "UI/UX Principles", level: 75 },
    { name: "Performance Optimization", level: 70 },
    { name: "Testing", level: 65 }
  ];

  return (
    <section id="skills" className="section-spacing px-6 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">02.</span> Skills
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>
        
        <div className="grid gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Frontend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Backend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backendSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index + frontendSkills.length}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Other Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index + frontendSkills.length + backendSkills.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
