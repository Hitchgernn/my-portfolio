import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Artificial Inteligence",
      description: "Building intelligent systems that solve real problems and automate complex tasks.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Designing models that learn from data and improve prediction accuracy over time.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Backend Development",
      description: "Creating fast, reliable, and scalable server-side systems that keep applications running smoothly.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="mb-16 animate-fade-in-up">
          <div className="md:flex md:items-start md:space-x-8">
            {/* Image Section */}
            <div className="md:w-1/4 flex-shrink-0 mb-8 md:mb-0">
              <img
                src="/dark.png"
                alt="Adnan Abdul Majid (Dark Mode)"
                className="rounded-lg shadow-lg w-full h-auto object-cover hidden dark:block"
              />
              <img
                src="/light.png"
                alt="Adnan Abdul Majid (Light Mode)"
                className="rounded-lg shadow-lg w-full h-auto object-cover dark:hidden"
              />
            </div>
            {/* Text Section */}
            <div className="md:w-3/4 md:pt-2">
              <h2 className="text-4xl font-bold mb-2">About Me</h2>
              <p className="text-lg text-muted-foreground text-justify">
                Hi, my name is Adnan Abdul Majid, but you can call me Adnan. I’m an undergraduate student at UGM 
                majoring in Information Engineering. 
                I started learning programming back in 10th grade, with C++ as my first language, 
                and that moment sparked my curiosity for technology. Over time, I grew especially interested 
                in AI, ML, and backend development, and I love exploring how these fields can be used to build meaningful, 
                real-world solutions. I enjoy creating things, experimenting with new ideas, 
                and constantly pushing myself to grow both technically and creatively.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="mb-2 flex justify-center">{skill.icon}</div>
                      <h3 className="text-md font-semibold mb-1">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
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
