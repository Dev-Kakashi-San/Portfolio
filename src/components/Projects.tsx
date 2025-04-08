
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  reverse?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  demoLink, 
  reverse = false,
  index
}) => {
  return (
    <div 
      className={cn(
        "grid md:grid-cols-5 gap-6 items-center animate-fade-in",
        reverse ? "md:grid-flow-dense" : ""
      )}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      {/* Project Image/Preview */}
      <div className={cn(
        "md:col-span-3 relative group overflow-hidden rounded-lg border border-white/10",
        reverse ? "md:col-start-3" : "md:col-start-1"
      )}>
        <div className="aspect-video bg-gradient-to-tr from-accent/20 to-secondary/30 relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-foreground/30">
            {title}
          </div>
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-300"></div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className={cn(
        "md:col-span-2 z-10",
        reverse ? "md:col-start-1 md:text-right" : "md:col-start-4"
      )}>
        <p className="text-accent mb-2 text-sm">Featured Project</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="glass-card p-4 rounded-lg mb-4">
          <p className="text-foreground/70">{description}</p>
        </div>
        <div className={cn(
          "flex flex-wrap gap-2 mb-4",
          reverse ? "md:justify-end" : "md:justify-start"
        )}>
          {technologies.map((tech) => (
            <span key={tech} className="text-sm text-foreground/50">
              {tech}
            </span>
          ))}
        </div>
        <div className={cn(
          "flex gap-4",
          reverse ? "md:justify-end" : "md:justify-start"
        )}>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS, featuring a modern UI and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/dev-tushar-sh/Portfolio",
      demoLink: "https://dev-tushar-sh.github.io/Portfolio/"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/dev-tushar-sh/ecommerce-project",
      demoLink: "https://ecommerce-demo.tusharsharma.dev"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts for any location using weather APIs.",
      technologies: ["JavaScript", "HTML/CSS", "WeatherAPI", "Responsive Design"],
      githubLink: "https://github.com/dev-tushar-sh/weather-app",
      demoLink: "https://weather-app.tusharsharma.dev"
    }
  ];

  return (
    <section id="projects" className="section-spacing px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-accent">03.</span> Projects
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button asChild variant="outline" className="rounded-full">
            <a 
              href="https://github.com/dev-tushar-sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
