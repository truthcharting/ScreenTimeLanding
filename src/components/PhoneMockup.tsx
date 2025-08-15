import { motion } from "framer-motion";

interface PhoneMockupProps {
  children: React.ReactNode;
  delay?: number;
}

export function PhoneMockup({ children, delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      {/* iPhone Frame */}
      <div className="relative mx-auto w-[280px] h-[570px] bg-black rounded-[3rem] p-2 shadow-xl">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </motion.div>
  );
}