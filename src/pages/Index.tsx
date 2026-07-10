import { Link } from "react-router-dom";
import B2BForm from "@/components/B2BForm";
import { useInView } from "@/hooks/useInView";
import heroBg from "@/assets/hero-bg.jpg";
import sectionTl from "@/assets/section-tl.jpg";
import sectionTr from "@/assets/section-tr.jpg";
import sectionBottom from "@/assets/section-bottom.jpg";
import sectionBg from "@/assets/section-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, ArrowRight, TrendingUp, Globe } from "lucide-react";

const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};


const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section ref={heroRef} className="relative flex flex-col items-center w-full min-h-[200vh]">
        <div className="sticky top-0 flex flex-col items-center w-full h-screen">
          <motion.div 
            style={{ scale, opacity }}
            className="relative w-full h-full"
          >
            <img
              src="/images/12.png"
              alt="Jojo Papers Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="blur-vignette" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className="max-w-4xl">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-lg">
                  Factory-Direct <br className="hidden md:block" />Wholesale Value
                </h1>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium tracking-wide drop-shadow-md mb-12">
                  Premium stock ready to ship today. <br className="hidden md:block" />Custom orders built in just 4 weeks.
                </h2>
                
                <button className="bg-transparent backdrop-blur-sm border-2 border-white/40 text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  Start Your Custom Build
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white border-b border-border py-12 shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-4 items-center">
            {/* ISO Badge */}
            <div className="flex flex-col items-center text-center group">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-full ring-1 ring-emerald-600/20 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-sm tracking-widest text-slate-500 uppercase font-semibold">ISO 9001 Certified</p>
              </div>
              <p className="text-xl font-display text-slate-900 font-semibold">Global Manufacturing Standard</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-200"></div>
            
            {/* Brands (Clickable) */}
            <a href="#brands-marquee" className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 text-primary p-2 rounded-full ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <p className="text-sm tracking-widest text-primary uppercase font-bold flex items-center gap-1 group-hover:text-primary/80 transition-colors">
                  Trusted Partner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
              <p className="text-xl font-display text-slate-900 font-semibold">500+ Global Brands Supplied</p>
            </a>
            
            <div className="hidden md:block w-px h-16 bg-slate-200"></div>
            
            {/* Massive Scale */}
            <div className="flex flex-col items-center text-center group">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-full ring-1 ring-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-sm tracking-widest text-slate-500 uppercase font-semibold">Massive Scale</p>
              </div>
              <p className="text-xl font-display text-slate-900 font-semibold">10M+ Monthly Unit Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Collections (Moved Up) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Premium Collections</h3>
              <p className="text-lg text-muted-foreground max-w-xl">Explore our diverse manufacturing capabilities across distinct product lines.</p>
            </div>
            <Link to="/products" className="inline-flex items-center justify-center bg-transparent border border-primary text-primary px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors w-full md:w-auto">
              Explore Full Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-border bg-slate-100">
                <img src="/images/jojo_assets/JOJO Website 26-06-2026/33.webp" alt="The Pink Series" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-2">The Pink Series</h4>
              <p className="text-muted-foreground text-sm">Ultra-thin, slow-burning colored papers.</p>
            </div>
            <div className="group cursor-pointer md:-translate-y-8">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-border bg-slate-900">
                <img src="/images/jojo_assets/JOJO Website 26-06-2026/21.webp" alt="The Signature Series" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-2">The Signature Series</h4>
              <p className="text-muted-foreground text-sm">Luxury printed booklets with gold foil stamping.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-border bg-white flex items-center justify-center p-4">
                <img src="/images/jojo_assets/JOJO Website 26-06-2026/13.webp" alt="Protective Tubes" className="max-w-full max-h-full object-contain transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out mix-blend-multiply will-change-transform" />
              </div>
              <h4 className="font-display text-2xl font-bold mb-2">Protective Tubes</h4>
              <p className="text-muted-foreground text-sm">Airtight, moisture-resistant single packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Serve - Marquee */}
      <section id="brands-marquee" className="py-16 bg-white border-y border-border overflow-hidden flex flex-col items-center scroll-mt-20">
        <h3 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground font-semibold mb-10 text-center">Trusted by Global Brands</h3>
        <div className="relative w-full flex overflow-hidden group max-w-7xl mx-auto">
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee flex whitespace-nowrap items-center hover:[animation-play-state:paused] cursor-default">
            {/* Two sets of logos to create seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 md:gap-32 px-10 items-center justify-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-slate-300 transition-colors hover:text-primary">BRAND 1</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-slate-300 transition-colors hover:text-primary">BRAND 2</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-slate-300 transition-colors hover:text-primary">BRAND 3</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-slate-300 transition-colors hover:text-primary">BRAND 4</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-slate-300 transition-colors hover:text-primary">BRAND 5</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-slate-300 transition-colors hover:text-primary">BRAND 6</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing Steps */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">The Ultimate Private Label Experience</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { step: "01", title: "DEFINE YOUR PROFILE" },
              { step: "02", title: "SELECT PREMIUM MATERIALS" },
              { step: "03", title: "DESIGN CUSTOM GRAPHICS" },
              { step: "04", title: "CREATE RETAIL PACKAGING" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <div className="w-full relative bg-white shadow-md hover:shadow-xl hover:shadow-slate-200 transition-all duration-500 flex flex-col items-center justify-center p-8 border border-slate-100 rounded-3xl text-center hover:-translate-y-2 overflow-hidden aspect-square">
                  
                  {/* Subtle step watermark */}
                  <span className="absolute -top-4 -right-2 text-8xl md:text-9xl font-black text-slate-50 opacity-50 select-none group-hover:scale-110 group-hover:text-slate-100 transition-all duration-500">
                    {item.step}
                  </span>

                  {/* Stacked Text with Modern Font */}
                  <h4 className="relative z-10 font-sans text-[1.1rem] md:text-lg font-bold text-slate-800 tracking-widest leading-loose uppercase">
                    {item.title.split(' ').map((word, j) => (
                      <span key={j} className="block">{word}</span>
                    ))}
                  </h4>

                  {/* Decorative animated line */}
                  <div className="relative z-10 mt-8 w-8 h-1 bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-slate-800 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities - Bento Grid (Moved Down) */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Core Capabilities</h3>
              <p className="text-lg text-muted-foreground max-w-xl">From custom watermarking to retail-ready displays, we engineer solutions for the world's most demanding brands.</p>
            </div>
            <Link to="/private-label" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors w-full md:w-auto">
              Explore Private Label
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Box 1: Wide */}
            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group bg-slate-900 shadow-sm border border-border/50">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/3.webp" alt="OEM Packaging" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-white/80 text-sm tracking-widest uppercase font-semibold mb-2">Brand Scaling</p>
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold">High-Volume OEM</h4>
              </div>
            </div>

            {/* Box 2: Square */}
            <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group bg-slate-900 shadow-sm border border-border/50">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/23.webp" alt="Custom POS Displays" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-xl font-bold">POS Displays</h4>
              </div>
            </div>

            {/* Box 3: Square */}
            <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group bg-slate-900 shadow-sm border border-border/50">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/28.webp" alt="Premium Custom Tins" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-xl font-bold">Premium Metal Tins</h4>
              </div>
            </div>

            {/* Box 4: Wide */}
            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group bg-slate-900 shadow-sm border border-border/50">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/18.webp" alt="Classic Rolling Papers" className="w-full h-full object-cover object-center transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <p className="text-white/80 text-sm tracking-widest uppercase font-semibold mb-2">Heritage</p>
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold">Classic Booklets & Materials</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Lead Capture Form */}
      <B2BForm />
    </div>
  );
};

export default Index;
