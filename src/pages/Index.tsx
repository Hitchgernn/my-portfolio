import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return <Hero onNavigate={setActiveSection} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="w-full h-full overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
