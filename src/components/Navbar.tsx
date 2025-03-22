
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentHash = location.hash || "#home";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-[#0d0d0d]/90 backdrop-blur-lg shadow-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-lg font-medium tracking-tighter flex items-center gap-2"
        >
          <img 
            src="./public/logo.jpg" 
            alt="Kelvin Mwenda" 
            className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-lg"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/40x40?text=KM";
              console.log("Logo image failed to load, using placeholder");
            }}
          />
          <span className="font-bold text-white">Kelvin Mwenda</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-all duration-300 px-3 py-2 rounded-md relative",
                currentHash === link.href
                  ? "text-[#8B4513] shadow-[0_0_10px_rgba(139,69,19,0.3)]"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
              {currentHash === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B4513] rounded-full shadow-[0_0_5px_#8B4513]"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white/90 hover:text-white transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d0d0d]/95 backdrop-blur-lg border-t border-white/10 animate-fade-in shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium px-4 py-3 rounded-md transition-all duration-300",
                  currentHash === link.href
                    ? "text-[#8B4513] bg-white/5 shadow-[0_0_10px_rgba(139,69,19,0.2)]"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
