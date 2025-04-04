
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
                src="/public/images/second-slide.jpeg"
                alt="Hospital building"
                className="rounded-lg shadow-lg object-cover h-64 w-full"
              />
            </div>
            <div className="transform translate-y-4 opacity-0 animate-fade-in animate-delay-200" style={{ animationFillMode: 'forwards' }}>
              <img
                src="/public/images/principle-protect.jpeg"
                alt="Medical staff"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
            <div className="transform translate-y-4 opacity-0 animate-fade-in animate-delay-300" style={{ animationFillMode: 'forwards' }}>
              <img
                src="/public/images/doctor-bg.png"
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
              Dedicated to Providing Exceptional Healthcare Since 2010
            </h2>
            <p className="text-muted-foreground mb-6">
              Shiloh Hospital, located at 17, Ajokakan Avenue, Elebu, Oluyole Extension, Ibadan, Nigeria, is dedicated to providing exceptional healthcare services to our community.
            </p>

            <p className="text-muted-foreground mb-6">
              As a general-purpose hospital, we specialize in the diagnosis and treatment of a wide range of ailments, ensuring comprehensive care for patients of all ages.
            </p>

            <p className="text-muted-foreground mb-6">
              Our team of experienced medical professionals is committed to delivering personalized, compassionate care with a focus on promoting health and wellness.
            </p>

            <p className="text-muted-foreground mb-6">
              Equipped with modern facilities and a patient-centered approach, Shiloh Hospital strives to be a trusted partner in your healthcare journey, offering reliable and affordable medical services to meet your everyday health needs.
            </p>

            <p className="text-muted-foreground mb-6">
              Business Registration Date: 06, October, 2010
            </p>

            <p className="text-muted-foreground mb-6">
              Business Registration Number: RC OY48726
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
