import { Button } from "./components/ui/button";
import { PhoneMockup } from "./components/PhoneMockup";
import { PhoneCarousel } from "./components/PhoneCarousel";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import mapScreenshot from "figma:asset/a27cee5ebde25bea3f151596aaa5f9c3930d5a7c.png";
import journalScreenshot from "figma:asset/2686c0358fc68b0c70002c5076cba5a39609508e.png";
import profileScreenshot from "figma:asset/89e000d5fcca51473eb20535673199f2d65b9ca2.png";
import sacredPause1 from "figma:asset/3b4040bdf80905006c47b89fb75909155c2c58a5.png";
import sacredPause2 from "figma:asset/7f7b5078653c88a02636ab340a6d6b552fedaf7f.png";
import sacredPause3 from "figma:asset/86e128ea13661f13f4c9a19430eb39376f10f9e6.png";
import instagramBlocked from "figma:asset/5a864ee06280f7477f79a8cba8e73b6719891f84.png";

export default function App() {
  const carouselItems = [
    { src: mapScreenshot, alt: "Pilgrim Path Map" },
    { src: sacredPause1, alt: "Sacred Pause - Prayer Prompt" },
    { src: sacredPause2, alt: "Sacred Pause - Time Check" },
    { src: sacredPause3, alt: "Sacred Pause - Time Limit" },
    { src: journalScreenshot, alt: "Daily Journal" },
    { src: profileScreenshot, alt: "Profile & Progress" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-2 py-2 border border-gray-700">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 px-4 py-2">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-xs">P</span>
              </div>
            </div>
            <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Store</a>
            <a href="#" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm ml-2">
              Download
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-8xl font-light text-white leading-[0.9] font-serif">
                  Turn scrolling into
                  <span className="italic font-light text-gray-300"> prayer</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
                  A Catholic app that transforms your bad habits into good habits. 
                  Increase silence, discover sacred spaces, track prayer habits, and grow in faith.
                </p>
              </div>
              
              <div className="flex gap-4 justify-center pt-8">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-base">
                  Download App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 text-base">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Main Phone Mockup - Instagram Blocked */}
          <div className="flex justify-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <PhoneMockup>
                <img 
                  src={instagramBlocked} 
                  alt="Instagram Blocked - Sacred Pause" 
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </motion.div>
          </div>

          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-white font-serif">
                More features to explore
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Discover sacred spaces, track habits, and grow in your spiritual journey
              </p>
            </div>
            
            <PhoneCarousel items={carouselItems} />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-20"
          >
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-white font-serif">
                Spiritual growth, simplified
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three core features that transform how you engage with your faith
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-3xl flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-red-500 rounded-xl"></div>
                </div>
                <h3 className="text-2xl font-medium text-white">Sacred Pause</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Gently interrupts social media with prayer prompts and spiritual reflection
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-3xl flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-blue-500 rounded-xl"></div>
                </div>
                <h3 className="text-2xl font-medium text-white">Discover</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Find nearby churches, chapels, and sacred spaces on an interactive map
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-green-500 rounded-xl"></div>
                </div>
                <h3 className="text-2xl font-medium text-white">Reflect</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Journal daily prayers and track spiritual practices with guided prompts
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-5xl font-light text-white font-serif">
              Ready to begin your journey?
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands discovering a more intentional spiritual life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-4 text-base">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-4 text-base">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-12">
              Free • No Ads • Privacy First
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-medium text-white">Pilgrim Path</span>
          </div>
          
          <div className="flex items-center gap-12 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}