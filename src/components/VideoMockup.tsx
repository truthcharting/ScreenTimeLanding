import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const VideoMockup = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        setVideoError(null);
        setShowFallback(false);
      };
      
      const handleError = () => {
        setVideoError('Video failed to load');
        setIsVideoLoaded(false);
        setShowFallback(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
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
          src="/ScreenTimeLanding/images/iPhone SVG.svg"
          alt="iPhone Mockup"
          className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
        />
        
        {/* Video Container - positioned to fit within the iPhone screen */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[273px] h-[503px] rounded-[35px] overflow-hidden bg-black">
            {!showFallback ? (
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                poster="/ScreenTimeLanding/images/IMG_9828.png"
              >
                <source src="/ScreenTimeLanding/videos/sacred_example_vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src="/ScreenTimeLanding/images/IMG_9828.png"
                alt="Sacred App Screenshot"
                className="w-full h-full object-contain"
              />
            )}
            
            {/* Loading overlay */}
            {!isVideoLoaded && !showFallback && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="text-white text-sm">
                  {videoError ? `Error: ${videoError}` : 'Loading video...'}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
