
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 animate-fade-in">
          404 Error
        </div>
        <h1 className="text-4xl font-bold mb-4 animate-slide-down">Page not found</h1>
        <p className="text-muted-foreground mb-8 animate-slide-down" style={{ animationDelay: "0.1s" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-hover-effect inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-all animate-slide-down"
          style={{ animationDelay: "0.2s" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl"></div>
    </div>
  );
};

export default NotFound;
