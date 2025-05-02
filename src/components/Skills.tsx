
import React, { useEffect, useRef } from 'react';
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
      <div className="h-2 bg-secondary/40 rounded-full overflow-hidden flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "flex-1 h-full mx-0.5 first:ml-0 last:mr-0 rounded-full border-r border-background/30",
              i < level / 10 ? "bg-accent" : "bg-transparent"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { name: "C++", level: 85 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Golang", level: 70 }
  ];

  const csFundamentals = [
    { name: "Data Structures & Algorithms", level: 90 },
    { name: "OOPs", level: 80 },
    { name: "DBMS", level: 75 },
    { name: "Operating Systems", level: 80 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Django", level: 75 },
    { name: "Flask", level: 70 }
  ];

  const databases = [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "PostgresSQL", level: 80 },
    { name: "MySQlite", level: 80 },
    { name: "Elasticsearch", level: 70 }
  ];

  const tools = [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "MongoDB Atlas", level: 85 },
    { name: "Termius", level: 70 }
  ];

  const integrations = [
    { name: "Twilio", level: 80 },
    { name: "Zapier", level: 70 }
  ];

  const ml = [
    { name: "Generative AI (OpenAI APIs)", level: 85 },
    { name: "Machine Learning", level: 80 }
  ];

  return (
    <section id="skills" className="section-spacing px-6 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">02.</span> Skills
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>

        <div className="grid gap-12">
          {[ 
            { title: "Programming Languages", data: programmingLanguages },
            { title: "CS Fundamentals", data: csFundamentals },
            { title: "Backend Development", data: backendSkills },
            { title: "Databases", data: databases },
            { title: "AI Solutions & Integrations", data: ml },
            { title: "Tools", data: tools },
            { title: "Integrations", data: integrations }
          ].map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold mb-4 text-accent">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.data.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index + sectionIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
