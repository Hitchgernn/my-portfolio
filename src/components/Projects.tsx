import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Adnan's Portfolio",
      description: "Gaktaulah.",
      tech: ["React", "Node.js", "TypeScipt", "Tailwind CSS"],
      image: "bg-gradient-to-br from-muted to-muted/50",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "bg-gradient-to-br from-muted/80 to-muted/30",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
            in web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-48 ${project.image} rounded-t-lg`} />
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
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
