import React, { useEffect, useRef, useMemo } from "react";
import { Code, Palette, Layout, Zap, Download, Calendar, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageHovered, setImageHovered] = React.useState(false);

  // Memoize personalInfo and skills to prevent re-creation
  const personalInfo = useMemo(
    () => [
      { icon: Calendar, label: "Birthday", value: "June 7, 🤔😜😜😅" },
      { icon: Mail, label: "Email", value: "kelvinmwendadoreen@gmail.com" },
      { icon: Phone, label: "Phone", value: "+254 746917394" },
      { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
      { icon: Globe, label: "Languages", value: "English, Swahili" },
    ],
    []
  );

  const skills = useMemo(
    () => [
      { name: "Development", icon: Code, description: "Building responsive websites and applications with modern technologies." },
      { name: "Design", icon: Palette, description: "Creating beautiful, intuitive interfaces that enhance user experience." },
      { name: "UI/UX", icon: Layout, description: "Designing user-centered interfaces that are both functional and visually appealing." },
      { name: "Performance", icon: Zap, description: "Optimizing applications for speed and efficiency to provide the best experience." },
    ],
    []
  );

  // Memoize the download handler
  const handleDownloadCV = useMemo(
    () => () => {
      console.log("CV Download initiated");
      alert("CV Download initiated. In a real implementation, this would download your CV.");
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect(); // Disconnect after first trigger
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-2/5 relative">
            <div
              className="aspect-square max-w-md mx-auto relative overflow-hidden rounded-3xl shadow-lg"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <img
                src="/Kelvin.avif"
                alt="Profile Image"
                className={`w-full h-full object-cover transition-all duration-500 ${imageHovered ? "grayscale-0 scale-105" : "grayscale"}`}
                width={400} // Adjust based on actual image size
                height={400} // Adjust based on actual image size
                loading="lazy"
              />
              <div className="absolute -z-10 -left-8 -bottom-8 h-64 w-64 rounded-full bg-accent/5"></div>
              <div className="absolute -z-10 -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-8">
            <div className="inline-block rounded-full bg-[#8B4513]/10 px-3 py-1 text-sm font-medium text-[#8B4513]">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="text-2xl md:text-3xl">Passionate about creating</span>{" "}
              <span className="text-[#8B4513]">exceptional digital experiences</span>
            </h2>
            <p className="text-foreground leading-relaxed">
              I'm a web developer and designer with a focus on creating clean, user-friendly experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality to create websites that not only look beautiful but also perform exceptionally well.
            </p>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              <Separator className="my-4" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-[#8B4513]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleDownloadCV}
                className="mt-8 bg-[#8B4513] hover:bg-[#8B4513]/80 text-white btn-hover-effect"
              >
                <Download className="h-4 w-4 mr-2" /> Download CV
              </Button>
            </div>
            <Separator className="my-8" />
            <div>
              <h3 className="text-xl font-semibold mb-6">My Skills & Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-5 bg-secondary/50 dark:bg-secondary/10 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#8B4513]/10 text-[#8B4513] group-hover:bg-[#8B4513] group-hover:text-white transition-colors duration-300">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                    <p className="mt-1 text-sm text-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(About);