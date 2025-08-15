import { motion, AnimatePresence } from "motion/react";
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
    }, 4000);

    return () => clearInterval(timer);
  }, [items.length]);

  const getVisibleItems = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      result.push({
        ...items[index],
        position: i,
        index: index
      });
    }
    return result;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {visibleItems.map((item, arrayIndex) => {
          const position = item.position;
          const isCenter = position === 0;
          const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(position) * 0.2);
          const opacity = isCenter ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.3);
          const translateX = position * 280; // Spacing between phones
          const zIndex = 5 - Math.abs(position);

          return (
            <motion.div
              key={`${item.index}-${currentIndex}`}
              className="absolute"
              initial={{ 
                x: translateX,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex
              }}
              animate={{ 
                x: translateX,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 0.8
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
          );
        })}
      </div>

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