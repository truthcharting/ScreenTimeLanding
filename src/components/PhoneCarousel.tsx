import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { useEffect, useState } from "react";

interface CarouselItem {
  src: string;
  alt: string;
}

interface PhoneCarouselProps {
  items: CarouselItem[];
}

export function PhoneCarousel({ items }: PhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items.length]);

  // Calculate the offset to center the current item
  // Each item is 280px wide, and we want the current item to be centered
  const itemWidth = 280;
  const centerOffset = (window.innerWidth - itemWidth) / 2;
  const translateX = centerOffset - (currentIndex * itemWidth);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div 
        className="flex items-center justify-center"
        animate={{ 
          x: translateX
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 1.2
        }}
      >
        {/* Render all items in a horizontal line */}
        {items.map((item, index) => {
          const isCenter = index === currentIndex;
          const scale = isCenter ? 1 : 0.7;
          const opacity = isCenter ? 1 : 0.4;
          const zIndex = isCenter ? 10 : 5;

          return (
            <div
              key={index}
              className="mx-4 flex-shrink-0"
              style={{ width: '280px' }}
            >
              <motion.div
                animate={{ 
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.8
                }}
                style={{
                  pointerEvents: isCenter ? 'auto' : 'none'
                }}
              >
                <PhoneMockup>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </PhoneMockup>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Dots indicator */}
      <div className="absolute bottom-0 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}