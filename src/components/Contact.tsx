import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const socials = [
    { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "#" },
    { icon: <FaXTwitter className="h-6 w-6" />, label: "X", href: "#" },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="flex flex-col items-center gap-3 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-foreground">{social.icon}</div>
              <span className="text-sm font-medium">{social.label}</span>
            </a>
          ))}
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full btn-hero" size="lg">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
