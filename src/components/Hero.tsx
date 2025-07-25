
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Handle mouse movement for the magnetic effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Apply a subtle transform to create the magnetic effect
      textRef.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (textRef.current) {
      // Reset transform when mouse leaves
      textRef.current.style.transform = "translate(0, 0)";
    }
  };

  useEffect(() => {
    // Intersection Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Setup parallax effect
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxElements = containerRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((element) => {
          const el = element as HTMLElement;
          const speed = parseFloat(element.getAttribute('data-speed') ?? '0.5');
          el.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Toggle theme based on system preference initially
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches && isDarkTheme) {
      toggleTheme();
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className={cn(
        "min-h-screen flex flex-col justify-center relative overflow-hidden", 
        isDarkTheme ? "bg-[#0d0d0d]" : "bg-background"
      )}
    >
      {/* Floating particles background */}
      <div className="starry-background absolute inset-0 -z-10">
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index}
            className="star parallax absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            data-speed={Math.random() * 0.5 + 0.1}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-[#0d0d0d]/40 to-[#0d0d0d]" />
      </div>
      
      {/* Theme toggle */}
      <div className="absolute top-24 right-6 z-50">
        <Toggle 
          pressed={!isDarkTheme} 
          onPressedChange={toggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 rounded-full"
        >
          {isDarkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Toggle>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 z-10">
        <div className="flex flex-col items-center justify-center text-center gap-12">
          <div className="space-y-6 max-w-3xl">
            <div 
              className="glitch-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h1 ref={textRef} className="glitch-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-poppins">
                <span className="block mb-2">Hi, I am</span>
                <span className="block text-[#8B4513]" style={{fontFamily:'Caveat, Indie Flower'}}>Kelvin Mwenda</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground mt-4 font-poppins animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Building digital experiences, one line of code at a time
            </p>
            
            <div className="flex justify-center gap-6 pt-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <a 
                href="https://github.com/Kelvin-Mwenda"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kelvin-mwenda-b4a632262/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/jinx_vinke"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative h-[300px] w-full max-w-md mx-auto animate-slide-up hidden md:block">
            <div className="absolute inset-0 glass rounded-3xl overflow-hidden shadow-xl">
              <div className="w-full flex items-center justify-center">
                <img 
                  src="/keke.avif" // Replace with actual image path
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-[#8B4513]/10 animate-float parallax" style={{ animationDelay: "0s" }} data-speed="0.2"></div>
            <div className="absolute -left-6 top-1/4 h-16 w-16 rounded-full bg-[#8B4513]/10 animate-float parallax" style={{ animationDelay: "1s" }} data-speed="0.3"></div>
            <div className="absolute right-1/4 -top-6 h-20 w-20 rounded-full bg-[#8B4513]/20 animate-float parallax" style={{ animationDelay: "0.5s" }} data-speed="0.15"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-subtle">
        <a 
          href="#about" 
          className="flex items-center justify-center h-12 w-12 rounded-full glass hover:bg-white/10 transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-5 w-5 text-[#8B4513]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
