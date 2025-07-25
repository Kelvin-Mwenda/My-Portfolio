
import { useRef, useEffect } from "react";
import { Check, Code, Database, Globe, Layout, Server, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            // Animate progress bars when in view
            const progressBars = entry.target.querySelectorAll(".skill-progress");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add("animate-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const programmingLanguages = [
    { name: "JavaScript", icon: Code, proficiency: 90 },
    { name: "TypeScript", icon: Code, proficiency: 85 },
    { name: "Python", icon: Code, proficiency: 75 },
    { name: "HTML/CSS", icon: Layout, proficiency: 95 },
    { name: "SQL", icon: Database, proficiency: 80 },
    { name: "PHP", icon: Code, proficiency: 65 },
  ];
  
  const frameworks = [
    { name: "React", proficiency: 92 },
    { name: "Next.js", proficiency: 88 },
    { name: "Node.js", proficiency: 85 },
    { name: "Express", proficiency: 80 },
    { name: "TailwindCSS", proficiency: 90 },
    { name: "Django", proficiency: 70 },
  ];
  
  const softSkills = [
    { name: "Problem Solving", proficiency: 95 },
    { name: "Communication", proficiency: 90 },
    { name: "Teamwork", proficiency: 85 },
    { name: "Time Management", proficiency: 80 },
  ];

  return (
    <section id="skills" className="py-24 md:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#8B4513]/10 px-3 py-1 text-sm font-medium text-[#8B4513] mb-4">
            My Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills & Languages
          </h2>
          <p className="mt-4 text-foreground max-w-2xl mx-auto">
            With a diverse set of technical skills and programming languages, I can tackle a wide range of projects and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Programming Languages & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Programming Languages & Tools</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {programmingLanguages.map((language) => (
                <div 
                  key={language.name}
                  className="flex flex-col items-center group"
                >
                  <div className="h-24 w-24 rounded-full bg-[#8B4513]/10 border-4 border-[#8B4513]/30 flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-[#8B4513] group-hover:scale-110 soft-glow">
                    <language.icon className="h-10 w-10 text-[#8B4513]" />
                  </div>
                  <span className="font-medium">{language.name}</span>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3.5 w-3.5 ${i < Math.round(language.proficiency/20) ? 'text-[#8B4513] fill-[#8B4513]' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skill Proficiency */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Skill Proficiency</h3>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h4 className="text-lg font-medium">Frameworks & Libraries</h4>
                {frameworks.map((framework) => (
                  <div key={framework.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{framework.name}</span>
                      <Badge variant="outline" className="bg-[#8B4513]/5 text-[#8B4513]">
                        {framework.proficiency}%
                      </Badge>
                    </div>
                    <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="skill-progress absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#8B4513]/60 to-[#8B4513] w-0 transition-all duration-1000 ease-out" 
                        style={{ width: "0%" }}
                        data-width={`${framework.proficiency}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <div className="space-y-6">
                <h4 className="text-lg font-medium">Soft Skills</h4>
                {softSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="outline" className="bg-[#8B4513]/5 text-[#8B4513]">
                        {skill.proficiency}%
                      </Badge>
                    </div>
                    <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div 
                        className="skill-progress absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#8B4513]/60 to-[#8B4513] w-0 transition-all duration-1000 ease-out" 
                        style={{ width: "0%" }}
                        data-width={`${skill.proficiency}%`}
                      />
                    </div>
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

export default Skills;
