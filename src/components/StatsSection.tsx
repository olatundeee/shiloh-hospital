
import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 25, label: "Years of Experience", suffix: "+" },
  { value: 50000, label: "Patients Treated", suffix: "+" },
  { value: 50, label: "Medical Professionals", suffix: "+" },
  { value: 15, label: "Specialties", suffix: "" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="opacity-0 transform translate-y-4"
              style={{
                animation: isVisible ? `slide-up 0.5s ease-out ${index * 0.1}s forwards` : 'none',
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp
                  end={stat.value}
                  isVisible={isVisible}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  isVisible: boolean;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, isVisible, duration = 2000, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const startCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(percentage * end);
      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(startCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(startCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

export default StatsSection;
