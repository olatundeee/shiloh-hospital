
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Healthcare" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 mix-blend-multiply" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Your Health Is Our Priority
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 opacity-0 animate-fade-in animate-delay-100" style={{ animationFillMode: 'forwards' }}>
            Don't wait to address your health concerns. Schedule an appointment with our expert medical team today and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-200" style={{ animationFillMode: 'forwards' }}>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">Book an Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/70 hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
