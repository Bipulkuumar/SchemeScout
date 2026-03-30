import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search, FileText, Zap } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "Smart Matching",
      description: "Our algorithm matches your profile with hundreds of active central and state schemes."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Verified Schemes",
      description: "Only official and currently active government schemes are listed on our platform."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Easy Application",
      description: "Get step-by-step guidance on documentation and direct links to official portals."
    }
  ];

  const steps = [
    { step: "01", title: "Share Your Details", desc: "Fill in a simple 2-minute eligibility questionnaire." },
    { step: "02", title: "Discover Schemes", desc: "Instantly see schemes you uniquely qualify for." },
    { step: "03", title: "Apply Securely", desc: "Follow guided steps to apply on official platforms." }
  ];

  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 rounded-full bg-green-100 blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block py-1.5 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200 shadow-sm">
              Empowering Indian Citizens
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Find Government Schemes You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Actually Qualify For</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Stop guessing. Start benefiting. Tell us a bit about yourself and we will find the financial, educational, and welfare schemes built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/check-eligibility" 
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Check Eligibility <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#how-it-works"
                className="px-8 py-4 rounded-full bg-white text-slate-700 border-2 border-slate-200 font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why use SchemeScout?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">3 Simple Steps to Your Benefits</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 w-2/3 h-0.5 bg-slate-800 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-3xl font-black text-blue-500 text-opacity-50 mb-6 shadow-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/check-eligibility" 
              className="inline-flex px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 hover:shadow-lg transition-all active:scale-95 items-center justify-center gap-2"
            >
              Start Your Search <FileText className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
