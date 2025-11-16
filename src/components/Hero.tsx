import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import * as THREE from "three"; // Import THREE to get its type

interface HeroProps {
  onNavigate: (section: string) => void;
}

interface VantaEffect {
  destroy: () => void;
  // Add other properties if needed, based on Vanta.js API
}

interface VantaOptions {
  el: HTMLDivElement | null;
  THREE: typeof THREE; // Use typeof THREE for type safety
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: 1.0,
  color: number;
  color2: number;
  size: number;
  backgroundColor: number;
}

interface Vanta {
  default: (options: VantaOptions) => VantaEffect;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (theme === null) {
      return;
    }

    if (vantaEffect.current) {
      vantaEffect.current.destroy();
    }
    if (vantaRef.current) {
      // Dynamically import THREE and Vanta
      // The import "three" above is for type inference, not for runtime loading
      import("three").then((THREE_RUNTIME) => {
        // @ts-expect-error: window.THREE is a global variable required by Vanta.js
        window.THREE = THREE_RUNTIME;
        
        import("vanta/dist/vanta.globe.min.js").then((VANTA: Vanta) => {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE_RUNTIME, // Use the runtime imported THREE
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: theme === "dark" ? 0xffffff : 0x000000,
            color2: theme === "dark" ? 0xb3b3b3 : 0x666666,
            size: 0.7,
            backgroundColor: theme === "dark" ? 0x000000 : 0xffffff,
          });
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [theme]);

  return (
    <div ref={vantaRef} className="relative h-screen w-full flex items-center justify overflow-hidden">
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up leading-tight" style={{ paddingLeft: '4rem' }}>
          <div className="mb-4">Hello,</div>
          <div className="mb-4">
            I'm &nbsp;<span className="typewriter"></span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]" style={{ paddingLeft: '4rem' }}>
          2nd year | Information Engineering @UGM
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]" style={{ paddingLeft: '4rem' }}>
          <Button
            onClick={() => onNavigate("projects")}
            size="lg"
            className="btn-hero group"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            onClick={() => onNavigate("contact")}
            variant="outline"
            size="lg"
            className="btn-hero"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
