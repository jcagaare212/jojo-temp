import { Link } from "react-router-dom";
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
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4 drop-shadow-lg">
                  Factory-Direct <br className="hidden md:block" />Wholesale Value
                </h1>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium tracking-wide drop-shadow-md mb-12">
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

            {/* Global Reach */}
            <div className="flex flex-col items-center text-center group">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-full ring-1 ring-indigo-600/20 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <p className="text-sm tracking-widest text-slate-500 uppercase font-semibold">
                  Worldwide Export
                </p>
              </div>
              <p className="text-xl font-display text-slate-900 font-semibold">Trusted by Global Brands</p>
            </div>

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

      {/* Pre-Rolled Cones Size Chart */}
      <section className="py-16 md:py-24 bg-white border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-primary w-8"></div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Size Guide</span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight uppercase">Pre-Rolled Cones</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                From Dogwalker Minis to King Size, we offer a comprehensive range of pre-rolled cone sizes to suit every need. Explore our standard dimensions or ask us about custom sizing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div><span className="text-slate-700">Dogwalker Mini (70mm)</span></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div><span className="text-slate-700">Mini (78mm)</span></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div><span className="text-slate-700">1 1/4 Size (84mm)</span></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div><span className="text-slate-700">98mm Special (98mm)</span></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div><span className="text-slate-700">King Size (109mm)</span></li>
              </ul>
              <Link to="/products" className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors">
                View All Sizes
              </Link>
            </div>

            {/* Image side */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/5 bg-[#F9F7F2] p-6 border border-slate-100 flex items-center justify-center">
              <img src="/images/size_chart.png" alt="Pre-Rolled Cone Size Chart" className="w-full h-auto object-contain scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* Products We Make For You */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase">Our Core Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pre-rolled cones */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-full h-48 md:h-64 mb-8 overflow-hidden flex items-center justify-center">
                <img src="/images/jojo_assets/JOJO Website 26-06-2026/7.webp" alt="Pre-rolled cones" className="w-full h-full object-contain transform-gpu group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">Pre-rolled cones</h4>
              <p className="text-slate-500 font-sans leading-relaxed mb-6">
                Rolled by hand, using only the highest quality materials for a superior cone.
              </p>
              <Link to="/products" className="text-primary font-bold text-sm tracking-wide uppercase hover:text-slate-600 transition-colors">
                Explore our range
              </Link>
            </div>

            {/* Custom rolling papers */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-full h-48 md:h-64 mb-8 overflow-hidden flex items-center justify-center">
                <img src="/images/jojo_assets/JOJO Website 26-06-2026/6.webp" alt="Custom rolling papers" className="w-full h-full object-contain transform-gpu group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">Custom rolling papers</h4>
              <p className="text-slate-500 font-sans leading-relaxed mb-6">
                Anything is possible. Build your brand with customized booklets and filters.
              </p>
              <Link to="/products" className="text-primary font-bold text-sm tracking-wide uppercase hover:text-slate-600 transition-colors">
                Explore the possibilities
              </Link>
            </div>

            {/* Custom Branding & Textures */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-full h-48 md:h-64 mb-8 overflow-hidden flex items-center justify-center">
                <img src="/images/jojo_assets/JOJO Website 26-06-2026/16.webp" alt="Custom branding and textures" className="w-full h-full object-contain transform-gpu group-hover:scale-105 transition-transform duration-500 rounded-xl" />
              </div>
              <h4 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-4">Private Label</h4>
              <p className="text-slate-500 font-sans leading-relaxed mb-6">
                Elevate your product with custom watermarks, printed tips, and unique paper blends.
              </p>
              <Link to="/private-label" className="text-primary font-bold text-sm tracking-wide uppercase hover:text-slate-600 transition-colors">
                Private Label
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Manufacturing Steps */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">The Ultimate Private Label Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {[
              { title: "CUSTOM SIZES", img: "/images/concept/size.png" },
              { title: "CUSTOM PAPER", img: "/images/concept/paper.png" },
              { title: "CUSTOM PRINT", img: "/images/concept/print.png" },
              { title: "CUSTOM PACKAGING", img: "/images/concept/packaging.png" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-full bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200 transition-all duration-500 flex flex-col items-center justify-between p-8 pt-12 pb-10 border border-slate-100 rounded-2xl text-center hover:-translate-y-2 h-[340px] md:h-[400px]">
                  <div className="w-full flex-1 flex items-center justify-center mb-8">
                    <img src={item.img} alt={item.title} className="max-h-40 md:max-h-56 w-auto object-contain mix-blend-multiply transform-gpu group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-display text-lg md:text-xl font-bold text-slate-800 tracking-widest uppercase">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/products" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start Your Custom Build
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Bento Grid (Moved Down) */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Core Capabilities</h3>
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

            {/* Box 4: Wide (Light Theme for bright image) */}
            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group bg-white shadow-sm border border-border/50">
              <img src="/images/products/emergency-kit-fanned.png" alt="Classic Rolling Papers" className="absolute inset-0 w-full h-full object-cover md:object-contain md:object-right transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full md:w-2/3 h-full flex flex-col justify-end md:justify-center">
                <p className="text-slate-500 text-sm tracking-widest uppercase font-semibold mb-2">Heritage</p>
                <h4 className="text-slate-900 font-display text-2xl md:text-4xl font-bold mb-4">Retail Ready Packaging</h4>
                <p className="text-slate-600 font-sans max-w-md hidden md:block">
                  Complete emergency kits and point-of-sale ready displays crafted for immediate retail impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
