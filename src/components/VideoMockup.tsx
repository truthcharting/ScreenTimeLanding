import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const VideoMockup = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      video.addEventListener('error', () => console.error('Video failed to load'));
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex justify-center items-center mb-16"
    >
      <div className="relative w-[300px] h-[600px]">
        {/* iPhone SVG Overlay */}
        <img
          src="/images/iPhone SVG.svg"
          alt="iPhone Mockup"
          className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
        />
        
        {/* Video Container - positioned to fit within the iPhone screen */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[273px] h-[503px] rounded-[35px] overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              poster="/images/IMG_9828.png"
            >
              <source src="/videos/sacred_example_vid1.MOV" type="video/quicktime" />
              <source src="/videos/sacred_example_vid1.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Loading overlay */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="text-white text-sm">Loading video...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
