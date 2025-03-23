
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
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

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Dairy Farming Management",
      description: "Dairy Harbor is a web-based system for managing dairy farms, tracking milk production, cow health, feeding, and finances.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "/dairy1.jpg",
      liveDemo: "https://dairyharbor.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/Dairy-Harbor-static-website"
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "A comprehensive travel booking service with flight, hotel, and experience reservation capabilities.",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/travel.jpg",
      liveDemo: "https://social-media.example.com",
      github: "https://github.com/yourusername/social-media-app" 
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A feature-rich social platform for connecting users with similar interests and sharing content.",
      tags: ["React Native", "Firebase", "Redux", "GraphQL"],
      image: "/social.jpg",
      liveDemo: "https://social-media.example.com",
      github: "https://github.com/yourusername/social-media-app"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "An AI-powered tool for generating marketing copy, blog posts, and social media content.",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      image: "/ai.jpg",
      liveDemo: "https://social-media.example.com",
      github: "https://github.com/yourusername/social-media-app"
    },
    {
      id: 5,
      title: "Finance Tracker",
      description: "A personal finance application for budget management, expense tracking, and financial goal setting.",
      tags: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
      image: "/finance.jpg",
      liveDemo: "https://social-media.example.com",
      github: "https://github.com/yourusername/social-media-app"
    },
    {
      id: 6,
      title: "Health & Fitness App",
      description: "A comprehensive wellness platform for workout tracking, meal planning, and health monitoring.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/health.jpg",
      liveDemo: "https://social-media.example.com",
      github: "https://github.com/yourusername/social-media-app"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="py-24 md:py-32 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#8B4513]/10 px-3 py-1 text-sm font-medium text-[#8B4513] mb-4">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise. Each project was carefully crafted with attention to detail and user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-200 line-clamp-2">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center gap-3">
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#8B4513] px-4 py-2 text-sm font-medium text-white hover:bg-[#8B4513]/90 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Non-hover state info */}
              <div className="p-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm group-hover:translate-y-full transition-transform duration-300">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8B4513] hover:text-[#8B4513]/80 transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
