
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Facility = {
  title: string;
  description: string;
  image: string;
};

const facilities: Facility[] = [
  {
    title: "Laboratory",
    description: "Our state-of-the-art laboratory is equipped with the latest technology for accurate diagnostics and testing. We provide comprehensive laboratory services for a wide range of medical tests.",
    image: "/public/laboratory.jpeg",
  },
  {
    title: "Serene Environment",
    description: "We understand the importance of a healing environment. Our hospital offers a peaceful and serene atmosphere that promotes recovery and wellbeing for all patients.",
    image: "/public/serene-env.jpeg",
  },
  {
    title: "Operating Room",
    description: "Our modern surgical theaters are equipped with advanced medical equipment and maintained under strict sterile conditions to ensure successful surgical procedures.",
    image: "/public/surgery-theatre.jpeg",
  },
  {
    title: "Drug Repository",
    description: "Our in-house pharmacy stocks a comprehensive range of medications, ensuring that prescribed treatments are readily available for our patients without delay.",
    image: "/public/our-vision.jpeg",
  },
];

const FacilitiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + facilities.length) % facilities.length);
  };

  return (
    <section className="py-20 bg-white" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            Our Facilities
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            World-Class Healthcare Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience exceptional care in our modern, well-equipped facilities designed for your comfort and recovery.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          {/* Main Facility Display */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {facilities.map((facility, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-serif font-semibold mb-4">{facility.title}</h3>
                    <p className="text-muted-foreground mb-6">{facility.description}</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={facility.image} 
                        alt={facility.title} 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Previous facility"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Next facility"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to facility ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
