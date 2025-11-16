import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies and best practices.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces that users love to interact with.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Ensuring lightning-fast load times and smooth user experiences.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with a keen eye for design and a love for creating
            innovative solutions. With years of experience in web development, I specialize
            in building applications that are not only functional but also visually stunning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My journey into web development began with a curiosity about how things work
            on the internet. Over the years, I've honed my skills across the full stack,
            from crafting pixel-perfect frontends to architecting robust backend systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies.
            When I'm not coding, you'll find me exploring new design trends, contributing to
            open-source projects, or sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </div>
  );
};
