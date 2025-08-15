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
    }, 3000); // Slightly faster for smoother experience

    return () => clearInterval(timer);
  }, [items.length]);

  // Create a continuous array for smooth infinite scrolling
  const createInfiniteArray = () => {
    const result = [];
    // Add items before current for smooth entry
    for (let i = -3; i < items.length + 3; i++) {
      const index = (i + items.length) % items.length;
      result.push({
        ...items[index],
        originalIndex: index,
        displayIndex: i
      });
    }
    return result;
  };

  const infiniteItems = createInfiniteArray();

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {infiniteItems.map((item, arrayIndex) => {
          const position = arrayIndex - 3 - currentIndex; // Center the current item
          const isCenter = position === 0;
          const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(position) * 0.2);
          const opacity = isCenter ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.3);
          const translateX = position * 280; // Spacing between phones
          const zIndex = 10 - Math.abs(position);

          return (
            <motion.div
              key={`${item.originalIndex}-${arrayIndex}`}
              className="absolute"
              initial={false}
              animate={{ 
                x: translateX,
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