
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
      title: "ChocsEli AI Consultant",
      description: "Chocseli delivers innovative technological services, offering AI-driven tools, e-commerce integrations, and scalable cloud solutions through a sleek, user-focused platform.",
      tags: ["React.js", "Tailwind CSS", 'React Router'],
      image: "/chocs-eli.avif",
      liveDemo: "https://chocseli.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/Chocseli-Tech"
    },
    {
      id: 2,
      title: "Dairy Harbor",
      description: "A sleek, responsive website for a dairy farming Digital solutions company to showcase their dairy farming services.",
      tags: ["React.js", "Tailwind CSS", "Chart.js", "Flutter", "Firebase", 'React Router'],
      image: "/dairy-harbor.avif",
      liveDemo: "https://dairyharbor.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/Dairy-Harbor-static-website"
    },
    {
      id: 3,
      title: "Chocoballs Website",
      description: "A sleek, responsive site for a cakes shop making wedding, birthday and custom made cakes all around Kenya.",
      tags: ["React", "TypeScript", "Tailwind CSS", 'React Router'],
      image: "/choco.avif",
      liveDemo: "https://chocoballs.netlify.app/",
      github: "hhttps://github.com/Kelvin-Mwenda/choco-balls"
    },
    {
      id: 4,
      title: "Mikehize Cakes",
      description: "A sleek, responsive site for a cakes shop making wedding, birthday and custom made cakes around Juja, Kiambu and Nairobi.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/mikhize.avif",
      liveDemo: "https://mikehizecakes.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/Agape"
    },
    {
      id: 5,
      title: "Cakes.com",
      description: "A sleek, responsive site for a cakes shop making wedding, birthday and custom made cakes around Juja, Kiambu and Nairobi.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/Cakes.avif",
      liveDemo: "https://cakes-com.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/Cakes.com"
    },
    {
      id: 6,
      title: "Aticas Restaurant & Fast-food",
      description: "Step into a world where homemade comfort meets fast-food convenience.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/aticas.avif",
      liveDemo: "https://aticas.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/aticas-juja-eatery-web"
    },
    {
      id: 7,
      title: "The Stoic Way",
      description: "A minimalist, ad-free site with concise Stoic philosophy articles, daily meditations, and exercises for resilience and clarity.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "/Stoic.avif",
      liveDemo: "https://thestoicway.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/The-Stoic-Way"
    },
    {
      id: 8,
      title: "Agapez Friends Group",
      description: "Welcome to the Agapez Squad – Where Chaos Meets Charm!",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "/Agapez.avif",
      liveDemo: "https://agapez.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/mikehize-juja-delights"
    },
    {
      id: 9,
      title: "Khalice's Portfolio",
      description: "It’s a sleek, minimalist portfolio site that blends tech, design, and storytelling into a smooth, visually engaging experience.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/Khalice.avif",
      liveDemo: "https://khalice.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/khalice-portfolio.git"
    },
    {
      id: 10,
      title: "Beryl Tech Solutions",
      description: "Beryl Tech Solutions is a tech-focused company offering software development, IT consulting, and digital transformation services.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/beryltech.avif",
      liveDemo: "https://berylsolutions.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/beryl-tech-solutions.git"
    },
    {
      id: 11,
      title: "Chuka County Referral Hospital",
      description: "A clean, professional website for Chuka County Referral Hospital that provides essential information about the hospital’s services, mission, and contact details in a clear and accessible format.",
      tags: ["React", "TypeScript", "Tailwind CSS", "OpenStreetMap"],
      image: "/chuka.avif",
      liveDemo: "https://chukareferralhospital.netlify.app/",
      github: "https://github.com/Kelvin-Mwenda/chuka-referral-hospital.git"
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

              {/* Overlay: always visible on mobile, hover on md+ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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
              
              {/* Non-hover state info: hidden on mobile, visible on md+ */}
              <div className="hidden md:block p-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm group-hover:translate-y-full transition-transform duration-300">
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
