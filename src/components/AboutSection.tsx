
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const highlights = [
  "State-of-the-art facilities and equipment",
  "Experienced and compassionate medical professionals",
  "Patient-centered approach to healthcare",
  "Comprehensive range of medical services",
  "Commitment to medical excellence and innovation",
];

const AboutSection = () => {
  return (
    <section className="bg-primary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left side: Image grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 transform translate-y-4 opacity-0 animate-fade-in animate-delay-100" style={{ animationFillMode: 'forwards' }}>
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hospital building"
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
            </div>
            <div className="transform translate-y-4 opacity-0 animate-fade-in animate-delay-200" style={{ animationFillMode: 'forwards' }}>
              <img
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Medical staff"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
            <div className="transform translate-y-4 opacity-0 animate-fade-in animate-delay-300" style={{ animationFillMode: 'forwards' }}>
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Medical equipment"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
          </div>
          
          {/* Right side: Text content */}
          <div className="transform translate-y-4 opacity-0 animate-fade-in animate-delay-200" style={{ animationFillMode: 'forwards' }}>
            <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Dedicated to Providing Exceptional Healthcare Since 1995
            </h2>
            <p className="text-muted-foreground mb-6">
              Shiloh Hospital is a leading healthcare provider in Nigeria, committed to delivering high-quality medical services with compassion and excellence. With state-of-the-art facilities and a team of experienced healthcare professionals, we offer comprehensive care tailored to the unique needs of each patient.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to improve the health and wellbeing of our community through innovative medical care, education, and research. We strive to create a healing environment where patients feel valued, respected, and understood.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
