
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "The care I received at Shiloh Medical Centre And Maternity was exceptional. The medical staff was attentive, professional, and genuinely concerned about my wellbeing. I couldn't have asked for better care.",
    author: "Mrs. Chioma Okafor",
    role: "Patient",
    image: "/third-slide.jpeg",
  },
  {
    quote: "I've been bringing my family to Shiloh Medical Centre And Maternity for years, and the quality of care has always been outstanding. The doctors take time to listen and explain everything thoroughly. We trust them completely.",
    author: "Mr. Adebayo Johnson",
    role: "Patient",
    image: "/first-slide.jpeg",
  },
  {
    quote: "When I was diagnosed with a heart condition, the cardiology team at Shiloh Medical Centre And Maternity provided not only excellent medical care but also emotional support. They made a difficult time much easier to handle.",
    author: "Dr. Emmanuel Nweke",
    role: "Patient",
    image: "/second-slide.jpeg",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-primary/5 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real patients about their experience with Shiloh Medical Centre And Maternity.
          </p>
        </div>
        
        <div className="relative h-[400px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="glass-card h-full flex flex-col justify-center items-center text-center p-10">
                <div className="mb-6">
                  <svg className="h-12 w-12 text-primary/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl mb-8">{testimonial.quote}</p>
                <div className="flex items-center">
                  {/*<div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>*/}
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full transition-all ${
                index === activeIndex ? "bg-primary w-8" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
