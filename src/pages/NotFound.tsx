
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4 animate-fade-in">
            404 Error
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in animate-delay-100">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto animate-fade-in animate-delay-200">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="animate-fade-in animate-delay-300">
            <Button size="lg" asChild>
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
