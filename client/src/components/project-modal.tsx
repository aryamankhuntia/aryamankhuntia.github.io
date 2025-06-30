import { X, Check, Github, ExternalLink, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { Project } from "./projects-section";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const getDetailImage = (projectId: string) => {
    const images = {
      project1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      project2: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600"
    };
    return images[projectId as keyof typeof images] || project.image;
  };

  const getTechColors = (tech: string) => {
    const colors = {
      "React": "bg-blue-100 text-blue-800",
      "React Native": "bg-blue-100 text-blue-800", 
      "Node.js": "bg-green-100 text-green-800",
      "MongoDB": "bg-purple-100 text-purple-800",
      "Firebase": "bg-yellow-100 text-yellow-800",
      "Redux": "bg-red-100 text-red-800",
      "Express.js": "bg-yellow-100 text-yellow-800",
      "Chart.js": "bg-indigo-100 text-indigo-800",
      "Socket.io": "bg-green-100 text-green-800",
      "Expo": "bg-purple-100 text-purple-800"
    };
    return colors[tech as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <VisuallyHidden>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </VisuallyHidden>
        <div className="modal-backdrop">
          <div className="bg-white rounded-xl animate-scale-in">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img 
                src={getDetailImage(project.id)} 
                alt={`Detailed view of ${project.title}`}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Project Overview</h4>
                  <p className="text-slate-600">{project.overview}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Key Features</h4>
                  <ul className="text-slate-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.allTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full ${getTechColors(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {project.id === "project2" ? (
                      <Smartphone className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
