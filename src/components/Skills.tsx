import React from "react";

interface SkillLogoProps {
  name: string;
  logoUrl: string;
  index: number;
}

const SkillLogo: React.FC<SkillLogoProps> = ({ name, logoUrl, index }) => {
  return (
    <div
      className="animate-fade-in hover:scale-110 transition-transform duration-300 flex flex-col items-center justify-center"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="w-20 h-20 object-contain"
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/80/0ea5e9/ffffff?text=${name.charAt(0)}`;
        }}
      />
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { 
      name: "C++", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    { 
      name: "JavaScript", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "Python", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    { 
      name: "Go", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
    },
  ];

  const csFundamentals = [
    { 
      name: "Data Structures", 
      logoUrl: "https://img.icons8.com/color/96/data-structure.png"
    },
    { 
      name: "OOP", 
      logoUrl: "https://img.icons8.com/color/96/object.png"
    },
    { 
      name: "Database", 
      logoUrl: "https://img.icons8.com/color/96/database.png"
    },
    { 
      name: "Operating System", 
      logoUrl: "https://img.icons8.com/color/96/linux.png"
    },
  ];

  const backendSkills = [
    { 
      name: "Node.js", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "Django", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
    },
    { 
      name: "Flask", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    },
  ];

  const databases = [
    { 
      name: "MongoDB", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "MySQL", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    { 
      name: "PostgreSQL", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    { 
      name: "SQLite", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
    },
    { 
      name: "Elasticsearch", 
      logoUrl: "https://img.icons8.com/color/96/elasticsearch.png"
    },
  ];

  const tools = [
    { 
      name: "Git", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    { 
      name: "GitHub", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    { 
      name: "Postman", 
      logoUrl: "https://img.icons8.com/dusk/96/postman-api.png"
    },
    { 
      name: "VS Code", 
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
  ];

  const integrations = [
    { 
      name: "Twilio", 
      logoUrl: "https://img.icons8.com/color/96/twilio.png"
    },
    { 
      name: "Zapier", 
      logoUrl: "https://img.icons8.com/color/96/zapier.png"
    },
  ];

  const ml = [
    { 
      name: "OpenAI", 
      logoUrl: "https://img.icons8.com/color/96/chatgpt.png"
    },
    { 
      name: "Machine Learning", 
      logoUrl: "https://img.icons8.com/color/96/artificial-intelligence.png"
    },
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
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {section.data.map((skill, index) => (
                  <SkillLogo
                    key={skill.name}
                    name={skill.name}
                    logoUrl={skill.logoUrl}
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
