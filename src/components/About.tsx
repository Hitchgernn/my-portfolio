import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Server, BrainCircuit, Bot } from "lucide-react";

export const About = () => {
  const tools = [
    { name: "VSCode", logo: "/logos/vscode.png" },
    { name: "GitHub", logoLight: "/logos/github-light.png", logoDark: "/logos/github-dark.png" },
    { name: "Git", logo: "/logos/git.png" },
    { name: "Figma", logo: "/logos/figma.png" },
    { name: "Fedora", logo: "/logos/fedora.png" },
    { name: "Jupyter", logo: "/logos/jupyter.png" },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="animate-fade-in-up">
          <div className="md:flex md:items-start md:space-x-8">
            {/* Left Column */}
            <div className="md:w-1/3 flex-shrink-0 mb-8 md:mb-0">
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
              
              {/* Education Card */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-md font-bold">Universitas Gadjah Mada</h3>
                      <p className="text-muted-foreground text-sm">Information Engineering</p>
                    </div>
                    <span className="text-muted-foreground text-sm text-right">2024 - Now</span>
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-md font-bold">SMA Negeri 1 Kota Mungkid</h3>
                      <p className="text-muted-foreground text-sm">Mathematics and Natural Science</p>
                    </div>
                    <span className="text-muted-foreground text-sm text-right">2021 - 2024</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-md font-bold">SMP Negeri 1 Salaman</h3>
                    </div>
                    <span className="text-muted-foreground text-sm text-right">2018 - 2021</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          
            {/* Right Column */}
            <div className="md:w-2/3">
              {/* About Me Card */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md text-foreground text-justify">
                    Hi, my name is Adnan Abdul Majid, but you can call me Adnan. I’m an undergraduate student at UGM majoring in Information Engineering. 
                    I started learning programming back in 10th grade, with C++ as my first language, 
                    and that moment sparked my curiosity for technology. Over time, I grew especially interested 
                    in <b> AI, ML, </b> and <b> backend development,</b> and I love exploring how these fields can be used to build meaningful, 
                    real-world solutions. I enjoy creating things, experimenting with new ideas, 
                    and constantly pushing myself to grow both technically and creatively.
                  </p>
                </CardContent>
              </Card>
          
              {/* Tools Card */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {tools.map((tool) => (
                      <div key={tool.name} className="w-16 h-16 p-2 border border-border/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-primary/50">
                        {tool.name === 'GitHub' ? (
                          <>
                            <img src={tool.logoDark} alt={tool.name} className="w-8 h-8 object-contain hidden dark:block" />
                            <img src={tool.logoLight} alt={tool.name} className="w-8 h-8 object-contain dark:hidden" />
                          </>
                        ) : (
                          <img src={tool.logo} alt={tool.name} className="w-8 h-8 object-contain" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
          
              {/* Skill & Expertise Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Skill & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Backend */}
                  <h3 className="text-md font-bold mb-4">
                    Backend Development
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                    <Badge variant="secondary">Prisma ORM</Badge>
                    <Badge variant="secondary">Authentication</Badge>
                    <Badge variant="secondary">Caching</Badge>
                  </div>
          
                  {/* Machine Learning */}
                  <h3 className="text-md font-bold mb-4">
                    Machine Learning
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">Scikit-Learn</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">NLP</Badge>
                  </div>
          
                  {/* AI & Fullstack Engineering */}
                  <h3 className="text-md font-bold mb-4">
                    AI & Fullstack Engineering
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">LLM Providers (ChatGPT, Gemini, Mistral)</Badge>
                    <Badge variant="secondary">AI Agents</Badge>
                    <Badge variant="secondary">Prompt Engineering</Badge>
                    <Badge variant="secondary">RAG (Retrieval-Augmented Generation)</Badge>
                    <Badge variant="secondary">Vector Databases (Weaviate, Pinecone)</Badge>
                    <Badge variant="secondary">Tool Routing & Calling</Badge>
                    <Badge variant="secondary">Hugging Face Transformers</Badge>
                    <Badge variant="secondary">Vercel AI SDK</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>        </div>
      </div>
    </div>
  );
};