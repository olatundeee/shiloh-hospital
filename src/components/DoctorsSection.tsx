
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Specializing in cardiovascular health with over 15 years of experience in diagnosing and treating heart conditions.",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Dedicated to children's health and development, bringing a caring approach to pediatric medicine.",
  },
  {
    name: "Dr. Emily Roberts",
    specialty: "Obstetrician & Gynecologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "An expert in women's health, providing comprehensive care from adolescence through menopause and beyond.",
  },
  {
    name: "Dr. David Wilson",
    specialty: "General Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "A skilled surgeon with expertise in minimally invasive procedures and a focus on patient-centered care.",
  },
];

const DoctorsSection = () => {
  return (
    <section className="section-container" id="doctors">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
          Our Doctors
        </div>
        <h2 className="section-title">Meet Our Expert Medical Team</h2>
        <p className="section-subtitle">
          Our team of highly qualified and experienced medical professionals is dedicated to providing exceptional care and improving your health outcomes.
        </p>
      </div>
      
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doctor, index) => (
          <div 
            key={index} 
            className="glass-card rounded-xl overflow-hidden opacity-0 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <div className="relative overflow-hidden h-72">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold mb-1">{doctor.name}</h3>
              <p className="text-primary font-medium mb-3">{doctor.specialty}</p>
              <p className="text-sm text-muted-foreground mb-4">{doctor.description}</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/doctors">View Profile</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button size="lg" asChild>
          <Link to="/doctors">View All Doctors</Link>
        </Button>
      </div>
    </section>
  );
};

export default DoctorsSection;
