
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code, Database, Server, GitBranch, FileJson, Braces, Cpu, 
  Terminal, MessageSquare, Laptop, Workflow, Bookmark 
} from "lucide-react";

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
  icon?: React.ReactNode;
}

const getIconForSkill = (skillName: string) => {
  const iconProps = { size: 20, className: "text-accent" };
  
  // Map skill names to their corresponding icons
  switch (skillName.toLowerCase()) {
    case "c++": 
      return <Code {...iconProps} />;
    case "python": 
      return <Terminal {...iconProps} />;
    case "javascript": 
      return <Braces {...iconProps} />;
    case "golang": 
      return <FileJson {...iconProps} />;
    case "data structures & algorithms": 
      return <Workflow {...iconProps} />;
    case "oops": 
      return <Bookmark {...iconProps} />;
    case "dbms": 
      return <Database {...iconProps} />;
    case "operating systems": 
      return <Laptop {...iconProps} />;
    case "node.js": 
      return <Server {...iconProps} />;
    case "django": 
      return <Code {...iconProps} />;
    case "flask": 
      return <Code {...iconProps} />;
    case "mongodb": 
      return <Database {...iconProps} />;
    case "mysql": 
      return <Database {...iconProps} />;
    case "postgressql": 
      return <Database {...iconProps} />;
    case "mysqlite": 
      return <Database {...iconProps} />;
    case "elasticsearch": 
      return <Database {...iconProps} />;
    case "git & github": 
      return <GitBranch {...iconProps} />;
    case "postman": 
      return <MessageSquare {...iconProps} />;
    case "mongodb atlas": 
      return <Database {...iconProps} />;
    case "termius": 
      return <Terminal {...iconProps} />;
    case "twilio": 
      return <MessageSquare {...iconProps} />;
    case "zapier": 
      return <Workflow {...iconProps} />;
    case "generative ai (openai apis)": 
      return <Cpu {...iconProps} />;
    case "machine learning": 
      return <Cpu {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const segments = 10; // Total segments in the skill bar
  const filledSegments = Math.floor(level / 10); // How many segments should be filled

  // Animation state for filled segments
  const [animatedFill, setAnimatedFill] = useState(0);

  return (
    <div
      className="glass-card p-4 rounded-lg animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
      onMouseEnter={() => {
        setIsHovered(true);
        // Animate segments filling one by one
        let currentSegment = 0;
        const interval = setInterval(() => {
          if (currentSegment <= filledSegments) {
            setAnimatedFill(currentSegment);
            currentSegment++;
          } else {
            clearInterval(interval);
          }
        }, 100);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setAnimatedFill(0);
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {getIconForSkill(name)}
        <h3 className="font-medium">{name}</h3>
      </div>
      <div className="h-2 bg-secondary/20 rounded-full overflow-hidden flex">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 h-full mx-0.5 first:ml-0 last:mr-0 rounded-full transition-all duration-300",
              isHovered
                ? i < animatedFill
                  ? "bg-accent scale-y-110"
                  : "bg-[#1c6666]"
                : i < filledSegments
                ? "bg-accent"
                : "bg-[#1c6666]",
              "border-r border-background/30" // Lighter border for better visibility
            )}
            style={{
              transitionDelay: isHovered ? `${i * 80}ms` : "0ms",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { name: "C++", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 70 },
    { name: "Golang", level: 60 },
  ];

  const csFundamentals = [
    { name: "Data Structures & Algorithms", level: 90 },
    { name: "OOPs", level: 80 },
    { name: "DBMS", level: 80 },
    { name: "Operating Systems", level: 80 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Django", level: 75 },
    { name: "Flask", level: 70 },
  ];

  const databases = [
    { name: "MongoDB", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "PostgresSQL", level: 80 },
    { name: "MySQlite", level: 80 },
    { name: "Elasticsearch", level: 70 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "MongoDB Atlas", level: 85 },
    { name: "Termius", level: 70 },
  ];

  const integrations = [
    { name: "Twilio", level: 80 },
    { name: "Zapier", level: 80 },
  ];

  const ml = [
    { name: "Generative AI (OpenAI APIs)", level: 85 },
    { name: "Machine Learning", level: 60 },
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
            { title: "Integrations", data: integrations },
          ].map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.data.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index + sectionIndex * 10}
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
