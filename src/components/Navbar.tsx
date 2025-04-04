
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

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
            <a href="/" className="flex items-center">
              <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>Shiloh</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? '' : 'text-white'}`}>About Us</a>
            <a href="#services" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? '' : 'text-white'}`}>Services</a>
            <a href="#facilities" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? '' : 'text-white'}`}>Facilities</a>
            <a href="#testimonials" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? '' : 'text-white'}`}>Testimonials</a>
            <a href="#contact" className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? '' : 'text-white'}`}>Contact</a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isScrolled ? '' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"} overflow-hidden bg-white/95 backdrop-blur-sm`}>
        <div className="px-4 py-6 space-y-4">
          <a href="#about" onClick={toggleMenu} className="block text-base font-medium hover:text-primary transition-colors">About Us</a>
          <a href="#services" onClick={toggleMenu} className="block text-base font-medium hover:text-primary transition-colors">Services</a>
          <a href="#facilities" onClick={toggleMenu} className="block text-base font-medium hover:text-primary transition-colors">Facilities</a>
          <a href="#testimonials" onClick={toggleMenu} className="block text-base font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" onClick={toggleMenu} className="block text-base font-medium hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="px-4 py-6 border-t border-border">
          <div className="flex items-center mb-4">
            <Phone className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm">+234 803 573 4000</span>
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
