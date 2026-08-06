import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, BarChart3, Package, CheckCircle2, ArrowRight, Globe2, Lightbulb, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Consultation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] pb-24 pt-24 md:pt-32">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Hero Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.p 
            {...fadeIn}
            className="text-[#c1ad94] tracking-[0.3em] uppercase text-sm font-bold mb-4"
          >
            Strategic Partnership
          </motion.p>
          <motion.h1 
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-[#2a2927] mb-8"
          >
            Expert Consultation & Global Sourcing
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#645f5a] font-serif text-xl italic mb-8"
          >
            We don't just manufacture. We partner with the world's leading brands to optimize supply chains, formulate custom blends, and scale operations globally.
          </motion.p>
          <motion.div 
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px bg-[#d5c6b4] w-full max-w-md mx-auto"
          />
        </div>

        {/* Free QC Special Offer Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="relative z-10 p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6 border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" /> Premium Service Guarantee
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                Complimentary Quality Control For Key Markets
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We guarantee the highest manufacturing standards globally. For our strategic partners in North America and Europe, we are proud to offer <strong className="text-white">100% Free, Comprehensive Quality Control (QC)</strong> on all bulk and private label orders.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl text-white font-semibold">
                  <MapPin className="w-5 h-5 text-emerald-400" /> USA
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl text-white font-semibold">
                  <MapPin className="w-5 h-5 text-emerald-400" /> Canada
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-xl text-white font-semibold">
                  <MapPin className="w-5 h-5 text-emerald-400" /> Germany
                </div>
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-100 transition-colors group">
                Claim Your Free QC Review <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Pre-Shipment Inspection</h4>
                  <p className="text-slate-400 text-sm">Rigorous factory-floor checks before containers are sealed.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Compliance Verification</h4>
                  <p className="text-slate-400 text-sm">Meeting strict US, CA, and EU packaging regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Consulting Capabilities */}
        <div className="mb-16 text-center">
          <h3 className="font-serif text-4xl text-[#2a2927] mb-4">How We Can Help</h3>
          <p className="text-[#645f5a] text-lg max-w-2xl mx-auto">Beyond manufacturing, we offer end-to-end strategic guidance to help you launch, scale, and optimize your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {[
            {
              title: "Supply Chain Optimization",
              desc: "Streamline your logistics, reduce freight costs, and ensure consistent inventory flow from our factory to your global warehouses.",
              icon: Globe2
            },
            {
              title: "Brand Scaling Strategy",
              desc: "Strategic guidance on transitioning from low-volume runs to massive scale OEM production without losing quality.",
              icon: BarChart3
            },
            {
              title: "Custom Blend Formulation",
              desc: "Consulting on the perfect paper composition—wood pulp, hemp, rice, or flax blends—to match your desired burn rate.",
              icon: Lightbulb
            },
            {
              title: "Retail Packaging Design",
              desc: "Expert advice on structural design, point-of-sale displays, and retail-ready emergency kits that stand out on shelves.",
              icon: Package
            },
            {
              title: "Regulatory Compliance",
              desc: "Navigating international trade laws, customs documentation, and packaging compliance for specific regions.",
              icon: Scale
            },
            {
              title: "Dedicated Account Management",
              desc: "A singular point of contact who acts as an extension of your team, managing your production schedule day and night.",
              icon: CheckCircle2
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#ede9e1] hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#f7f4ed] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-[#a89680]" />
              </div>
              <h4 className="font-serif text-2xl text-[#2a2927] mb-3">{service.title}</h4>
              <p className="text-[#4a4743] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Consultation;
