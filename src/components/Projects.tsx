import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Adnan's Portfolio",
      description: "Personal portfolio website showcasing my background, skills, projects, and achievements with a clean design and interactive experience.",
      tech: ["React", "Node.js", "TypeScipt", "Tailwind CSS"],
      imageUrl: "/projects/portfolio.png",
      repoUrl: "https://github.com/Hitchgernn/my-portfolio",
    },
    {
      title: "Ask Me AI (unfinished)",
      description: "AI-powered personal FAQ assistant built with a custom RAG system to provide smart, reliable answers about me.",
      tech: ["RAG", "Fast API", "FAISS", "Groq LLM", "Next.js"],
      image: "/projects/portfolio1.png",
      repoUrl: "https://github.com/Hitchgernn/my-portfolio",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up pt-6">
          <h2 className="text-3xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-md-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="h-48 w-full object-cover rounded-t-lg" />
              ) : (
                <div className={`h-48 ${project.image} rounded-t-lg`} />
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};