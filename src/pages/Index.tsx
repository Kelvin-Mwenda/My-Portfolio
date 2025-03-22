
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Kelvin Mwenda | Portfolio";
    
    // Intersection Observer to handle section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            // Handle skill progress bars animation
            if (entry.target.id === "skills") {
              const progressBars = entry.target.querySelectorAll(".skill-progress");
              progressBars.forEach((bar) => {
                const width = bar.getAttribute("data-width");
                if (width) {
                  setTimeout(() => {
                    (bar as HTMLElement).style.width = width;
                  }, 100);
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Update active link based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          window.history.replaceState(null, "", `#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Set dark mode as default
    document.documentElement.classList.add('dark');

    return () => {
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 dark:bg-[#0d0d0d]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
