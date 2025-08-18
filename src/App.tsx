import { Button } from "./components/ui/button";
import { PhoneCarousel } from "./components/PhoneCarousel";
import ThreeJSPhone from "./components/ThreeJSPhone";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
// Real app screenshots from Figma
import mapScreenshot from "../images/IMG_9828.png";
import journalScreenshot from "../images/IMG_9829.png";
import profileScreenshot from "../images/IMG_9830.png";
import sacredPause1 from "../images/IMG_9833.png";
import sacredPause2 from "../images/IMG_9835.png";
import sacredPause3 from "../images/IMG_9837.png";
import sacredLogo from "./Sacred Logo.jpg";
import hallowLogo from "./Hallow Logo White.png";

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
      <nav className="fixed top-6 left-6 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-2 py-2 border border-gray-700">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 px-4 py-2">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src={sacredLogo} 
                  alt="Sacred Logo" 
                  className="w-full h-full object-cover"
                />
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
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-8">
                  <h1 className="text-5xl lg:text-7xl font-light text-white leading-[0.9] font-serif">
                    Turn scrolling into
                    <span className="italic font-light text-gray-300"> prayer</span>
                  </h1>
                  <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    A Catholic app that transforms your bad habits into good habits. 
                    Increase silence, discover sacred spaces, track prayer habits, and grow in faith.
                  </p>
                </div>
                
                <div className="flex gap-4 pt-8">
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

            {/* Right side - 3D iPhone Model */}
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full h-screen"
              >
                <ThreeJSPhone />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
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

      {/* Hallow Integration Section */}
      <section className="py-32 px-6" style={{ backgroundColor: '#330066' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex justify-center mb-8">
                <img 
                  src={hallowLogo} 
                  alt="Hallow Logo" 
                  className="h-16 opacity-90"
                />
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-white font-serif">
                The perfect partner.
              </h2>
              <div className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto space-y-6">
                <p>
                  Sacred is designed to redirect screen time from social media platforms toward spiritual practices.
                </p>
                <p>
                  Rather than creating prayer content, we partner with Hallow to provide users with curated prayer experiences.
                </p>
                <p>
                  Our mission is to reduce time spent on addictive platforms while increasing meaningful moments of prayer.
                </p>
                <p>
                  When users attempt to access an app they have limited, Sacred intervenes with Hallow prayer suggestions
                  before allowing them to select the amount of time they'll be using the limited app.
                </p>
                <p>
                  Sacred operates as a completely free application with no advertisements. Our sustainable revenue model
                  is based on strategic lead generation partnerships with Hallow.
                </p>
                <p>
                  Through this innovative approach, Sacred effectively transforms doomscrolling habits into meaningful
                  Hallow prayer sessions.
                </p>
              </div>
            </div>
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
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={sacredLogo} 
                alt="Sacred Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-medium text-white">Sacred</span>
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