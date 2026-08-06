import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const sizes = [
  {
    id: "dogwalker-mini",
    name: "Dogwalker Mini",
    size: "70mm",
    capacity: "~0.3g - 0.5g",
    description: "Perfect for quick, personal sessions. The Dogwalker Mini offers a short, potent experience without the commitment of a full-size cone.",
    img: "/images/products/cones/dogwalker-mini-70mm.png",
    features: ["Quick burn", "Personal size", "Highly portable"],
  },
  {
    id: "mini",
    name: "Mini",
    size: "78mm",
    capacity: "~0.5g",
    description: "A slight step up from the Dogwalker, the Mini is an excellent choice for a solo session or a quick share between two.",
    img: "/images/products/cones/mini-78mm.png",
    features: ["Ideal for solo use", "Smooth draw", "Compact"],
  },
  {
    id: "1-1-4-size",
    name: "1 1/4 Size",
    size: "84mm",
    capacity: "~0.75g",
    description: "The classic industry standard. The 1 1/4 size balances capacity and burn time perfectly for any occasion.",
    img: "/images/products/cones/1-1-4-size-84mm.png",
    features: ["Industry standard", "Perfect balance", "Versatile"],
  },
  {
    id: "98mm-special",
    name: "98mm Special",
    size: "98mm",
    capacity: "~1.0g",
    description: "For those who want a bit more. The 98mm Special holds a full gram, making it perfect for sharing with friends.",
    img: "/images/products/cones/98mm-special.png",
    features: ["Holds a full gram", "Great for sharing", "Extended burn time"],
  },
  {
    id: "king-size",
    name: "King Size",
    size: "109mm",
    capacity: "~1.2g - 1.5g",
    description: "The ultimate premium experience. The King Size offers maximum capacity for group sessions and long-lasting burns.",
    img: "/images/products/cones/king-size-109mm.png",
    features: ["Maximum capacity", "Party size", "Premium experience"],
  }
];

const PreRolledCones = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px bg-primary w-12"></div>
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Premium Quality</span>
              <div className="h-px bg-primary w-12"></div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">Pre-Rolled Cones</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Precision-crafted for the perfect burn. Explore our comprehensive range of cone sizes designed to meet every consumer preference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {sizes.map((item, index) => (
              <motion.div 
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 scroll-mt-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full bg-white rounded-3xl p-12 flex items-center justify-center shadow-xl shadow-slate-200/50 border border-slate-100 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white z-0"></div>
                  <img 
                    src={item.img} 
                    alt={`${item.name} Cone`} 
                    className="w-full max-w-md h-auto object-contain relative z-10 transform group-hover:scale-105 transition-all duration-700 drop-shadow-2xl mix-blend-multiply" 
                  />
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 text-9xl font-display font-bold text-slate-50 opacity-50 select-none z-0">
                    {item.size.replace('mm', '')}
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 w-full space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold tracking-widest uppercase mb-2">
                    {item.size}
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">{item.name}</h2>
                  <p className="text-xl text-slate-500 font-sans leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-200 mt-6">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Specifications & Highlights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span><strong className="font-semibold text-slate-900">Capacity:</strong> {item.capacity}</span>
                      </li>
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-8 flex gap-4 flex-wrap">
                    <Link to={`/pre-rolled-cones/${item.id}`} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-900 transition-colors group shadow-md hover:shadow-lg">
                      View Specifications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreRolledCones;
