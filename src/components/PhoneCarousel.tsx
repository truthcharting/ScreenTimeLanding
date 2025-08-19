import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { useEffect, useRef } from "react";

interface CarouselItem {
  src: string;
  alt: string;
}

interface PhoneCarouselProps {
  items: CarouselItem[];
}

export function PhoneCarousel({ items }: PhoneCarouselProps) {
  const animationRef = useRef<number>();
  
  // Create a much longer array that repeats the items many times for seamless looping
  const extendedItems = [...items, ...items, ...items, ...items, ...items, ...items]; // 6x the original items

  useEffect(() => {
    // Start the animation
    const startTime = Date.now();
    const itemWidth = 320; // Width of each item including margin
    const totalWidth = extendedItems.length * itemWidth;
    const duration = 120000; // 120 seconds for full cycle (slower)
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const translateX = -(progress * totalWidth);
      
      const carousel = document.getElementById('carousel-container');
      if (carousel) {
        carousel.style.transform = `translateX(${translateX}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [extendedItems.length]);

  return (
    <div className="relative w-screen h-[600px] flex items-center overflow-hidden" style={{ marginLeft: '-50vw', marginRight: '-50vw', left: '50%', right: '50%', position: 'relative', zIndex: 1 }}>
      <div 
        id="carousel-container"
        className="flex items-center absolute left-0"
        style={{ 
          width: `${extendedItems.length * 320}px`,
        }}
      >
        {/* Render all items in a horizontal line */}
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="mx-4 flex-shrink-0"
            style={{ width: '280px' }}
          >
            <div
              style={{
                opacity: 1,
                transform: 'scale(0.8)'
              }}
            >
              <PhoneMockup>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}