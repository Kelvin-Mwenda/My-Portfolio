
import { useRef } from "react";
import { Code, Palette, Layout, Zap, Globe, Layers, Server, Shield, Rocket, Lightbulb } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant websites using modern frameworks and technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that enhance user experience and engagement."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Developing robust server-side applications and RESTful APIs for your business needs."
    },
    {
      icon: Globe,
      title: "Cross-platform Apps",
      description: "Building applications that work seamlessly across multiple platforms and devices."
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Implementing best practices to ensure your applications are secure and protected."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency to provide the best user experience."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#8B4513]/10 px-3 py-1 text-sm font-medium text-[#8B4513] mb-4">
            My Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I Can Do For <span className="text-[#8B4513]">You</span>
          </h2>
          <Separator className="mt-8 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-secondary/5 border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#8B4513]/30"
            >
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#8B4513]/10 text-[#8B4513]">
                <service.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
