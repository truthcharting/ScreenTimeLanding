import { Button } from "./components/ui/button";
import { PhoneCarousel } from "./components/PhoneCarousel";
import ThreeJSPhone from "./components/ThreeJSPhone";
import { SacredLogo } from "./components/SacredLogo";
import { VideoMockup } from "./components/VideoMockup";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
// Real app screenshots from Figma
import mapScreenshot from "../images/IMG_9828.png";
import journalScreenshot from "../images/IMG_9829.png";
import profileScreenshot from "../images/IMG_9830.png";
import additionalScreenshot from "../images/IMG_9840.png";
import newScreenshot from "../images/IMG_9881.png";

import hallowLogo from "./hallow-logo.svg";

export default function App() {
  const carouselItems = [
    { src: mapScreenshot, alt: "Pilgrim Path Map" },
    { src: journalScreenshot, alt: "Daily Journal" },
    { src: profileScreenshot, alt: "Profile & Progress" },
    { src: additionalScreenshot, alt: "Additional Feature" },
    { src: newScreenshot, alt: "New Feature" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center overflow-hidden rounded-md">
                <img 
                  src="/images/Sacred Logo Icon.png" 
                  alt="Sacred Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-semibold">Sacred</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
              <a 
                href="#partner" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Partner
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
            <a 
              href="https://expo.dev/accounts/johndonahue/projects/ScreenTimeAppV2/updates/2fc646f8-6d1a-4772-b71b-50cf60981ff9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 font-medium transition-colors"
            >
              Download
            </a>
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
                  <SacredLogo />
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
                  <a 
                    href="https://expo.dev/accounts/johndonahue/projects/ScreenTimeAppV2/updates/2fc646f8-6d1a-4772-b71b-50cf60981ff9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-4 text-base font-medium transition-colors flex items-center"
                  >
                    Download App
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
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

      {/* Video Mockup Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-white font-serif">
                See Sacred in action
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                Watch how Sacred transforms your daily screen time into meaningful prayer moments
              </p>
            </div>
            
            <VideoMockup />
          </motion.div>
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
      <section id="partner" className="py-32 px-6" style={{ backgroundColor: '#330066' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex justify-center items-center mb-8 space-x-8">
                <span className="text-8xl font-bold text-white tracking-tight">Sacred</span>
                <div className="text-4xl font-bold text-white opacity-60">×</div>
                <img 
                  src={hallowLogo} 
                  alt="Hallow Logo" 
                  className="h-20 opacity-90"
                />
              </div>
              <h2 className="text-3xl lg:text-4xl font-thin text-white font-sans tracking-wide">
                The perfect partners.
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Screen Time Redirection</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Sacred is designed to redirect screen time from social media platforms toward spiritual practices.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Hallow Partnership</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Rather than creating prayer content, we partner with Hallow to provide users with curated prayer experiences.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Mission Focus</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Our mission is to reduce time spent on addictive platforms while increasing meaningful moments of prayer.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Smart Intervention</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    When users attempt to access an app they have limited, Sacred intervenes with Hallow prayer suggestions
                    before allowing them to select the amount of time they'll be using the limited app.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Free & Sustainable</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Sacred operates as a completely free application with no advertisements. Our sustainable revenue model
                    is based on strategic lead generation partnerships with Hallow.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">★</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">Transform Habits</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Through this innovative approach, Sacred effectively transforms doomscrolling habits into meaningful
                    Hallow prayer sessions.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-black">
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
              <a 
                href="https://expo.dev/accounts/johndonahue/projects/ScreenTimeAppV2/updates/2fc646f8-6d1a-4772-b71b-50cf60981ff9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-4 text-base font-medium transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </a>
              <a 
                href="https://expo.dev/accounts/johndonahue/projects/ScreenTimeAppV2/updates/2fc646f8-6d1a-4772-b71b-50cf60981ff9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-4 text-base font-medium transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-12">
              Free • No Ads • Privacy First
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg">
                <img 
                  src="/images/Sacred Logo Icon.png" 
                  alt="Sacred Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-medium text-white">Sacred</span>
            </div>
            
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="text-gray-400 space-y-2">
                <p className="font-medium text-white">John Donahue</p>
                <p>Cell: <a href="tel:352-223-2895" className="hover:text-white transition-colors">352-223-2895</a></p>
                <p>Email: <a href="mailto:john@truthcharting.com" className="hover:text-white transition-colors">john@truthcharting.com</a></p>
              </div>
            </div>
            
            <div className="flex items-center gap-12 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}