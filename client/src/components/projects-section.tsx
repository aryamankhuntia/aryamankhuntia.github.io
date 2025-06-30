import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectModal from "./project-modal";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  overview: string;
  features: string[];
  allTechnologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "project1",
      title: "[Project 1 Title]",
      description: "Brief description of your first project and what it accomplishes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      overview: "Detailed overview of your first project. Explain the problem it solves, the approach you took, and the impact it has. Include any challenges you overcame and what makes this project special.",
      features: [
        "Key feature 1 of your project",
        "Key feature 2 of your project", 
        "Key feature 3 of your project",
        "Key feature 4 of your project",
        "Key feature 5 of your project"
      ],
      allTechnologies: ["React", "Node.js", "MongoDB", "Express.js", "Additional Tech"],
      githubUrl: "https://github.com/[yourusername]/[project1-repo]",
      liveUrl: "https://[your-project1-live-url].com"
    },
    {
      id: "project2", 
      title: "[Project 2 Title]",
      description: "Brief description of your second project and what it accomplishes.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      overview: "Detailed overview of your second project. Explain the problem it solves, the approach you took, and the impact it has. Include any challenges you overcame and what makes this project special.",
      features: [
        "Key feature 1 of your project",
        "Key feature 2 of your project",
        "Key feature 3 of your project", 
        "Key feature 4 of your project",
        "Key feature 5 of your project"
      ],
      allTechnologies: ["Technology 1", "Technology 2", "Technology 3", "Additional Tech 1", "Additional Tech 2"],
      githubUrl: "https://github.com/[yourusername]/[project2-repo]",
      liveUrl: "https://[your-project2-live-url].com"
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">My Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-slide-up"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    Click to view details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
