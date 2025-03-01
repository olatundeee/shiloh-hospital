
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-primary">Shiloh Hospital</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link to="/departments" className="text-sm font-medium hover:text-primary transition-colors">Departments</Link>
            <Link to="/doctors" className="text-sm font-medium hover:text-primary transition-colors">Doctors</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Button className="animate-scale-in">Book Appointment</Button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"} overflow-hidden bg-white/95 backdrop-blur-sm`}>
        <div className="px-4 py-6 space-y-4">
          <Link to="/" className="block text-base font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="block text-base font-medium hover:text-primary transition-colors">About Us</Link>
          <Link to="/services" className="block text-base font-medium hover:text-primary transition-colors">Services</Link>
          <Link to="/departments" className="block text-base font-medium hover:text-primary transition-colors">Departments</Link>
          <Link to="/doctors" className="block text-base font-medium hover:text-primary transition-colors">Doctors</Link>
          <Link to="/contact" className="block text-base font-medium hover:text-primary transition-colors">Contact</Link>
          <Button className="w-full">Book Appointment</Button>
        </div>
        
        <div className="px-4 py-6 border-t border-border">
          <div className="flex items-center mb-4">
            <Phone className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm">+234 803 123 4567</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm">contact@shilohhospital.ng</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
