import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Factory, Users, Target, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

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
      className={`transition-all duration-[1000ms] ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/images/jojo_assets/JOJO Website 26-06-2026/18.webp"
            alt="JOJO Papers Manufacturing Facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          style={{ y }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-md">
            Engineered for <span className="text-white">Perfection</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide max-w-3xl mx-auto drop-shadow-md">
            Setting the standard for premium rolling paper and cone manufacturing since 2014.
          </p>
        </motion.div>
      </section>

      {/* Core Stats / Trust Banner */}
      <section className="bg-white border-b border-border py-16 shadow-sm relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-2xl mb-4 text-slate-700">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-display font-bold text-slate-900 mb-1">10+</h4>
              <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Years of Precision</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-2xl mb-4 text-slate-700">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-display font-bold text-slate-900 mb-1">100%</h4>
              <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Made by Women</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-2xl mb-4 text-slate-700">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-display font-bold text-slate-900 mb-1">OEM</h4>
              <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Private Label Focus</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-slate-50 p-4 rounded-2xl mb-4 text-slate-700">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-display font-bold text-slate-900 mb-1">Global</h4>
              <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Manufacturing Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <FadeIn>
              <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-bold mb-6">Our Legacy</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                An obsession with craft the industry forgot.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">Since 2014</strong>, JOJO Papers has been quietly setting the standard for what a rolling paper and cone manufacturer can be. Not through shortcuts or mass-market compromise, but through an obsession with craft that most of the industry has forgotten to hold onto.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Engineered for Perfection</strong> is not a slogan we borrowed. It is the discipline behind every cone that leaves our facility. Each one is hand rolled by skilled women artisans who have refined their craft over years, using ultra-thin paper selected for a clean draw and a slow, even burn from first light to last. Nothing about that process is rushed, and nothing about it is accidental.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/jojo_assets/JOJO Website 26-06-2026/1.png"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn delay={200} className="order-2 lg:order-1 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-[#dfd6c8] shadow-sm flex items-center justify-center p-8 border border-border/50">
              <img
                src="/images/about/bulk-brown-cones.png"
                alt="B2B Manufacturing"
                className="w-full h-full object-contain mix-blend-multiply transform-gpu hover:scale-[1.03] transition-transform duration-700"
              />
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-bold mb-6">Wholesale Partners</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Building a product worth your name.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We work with brands and wholesale partners who understand that packaging a product is easy, but building one worth putting your name on is not.
                </p>
                <p>
                  Through private label and OEM partnerships, we give partners access to a decade of manufacturing precision, from raw material sourcing to the final finish, so the product that reaches their customers is one they can stand behind completely.
                </p>
              </div>
            </FadeIn>
          </div>
        {/* The JOJO Standard Infographic Section */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-[#ebe4d8] shadow-sm flex items-center justify-center p-8 lg:p-12 border border-border/50">
              <img
                src="/images/about/jojo-standard.png"
                alt="The JOJO Standard Philosophy"
                className="w-full h-full object-contain mix-blend-multiply transform-gpu hover:scale-[1.02] transition-transform duration-700"
              />
            </FadeIn>
            <FadeIn delay={200}>
              <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-bold mb-6">Our Philosophy</h2>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                No Shortcuts.<br/>Just the JOJO Standard.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We believe that the finest products cannot be rushed. Our manufacturing process is built on uncompromising quality control and an obsession with the details that most overlook.
                </p>
                <div className="pl-6 border-l-2 border-primary mt-8">
                  <h4 className="text-xl font-display font-bold text-slate-900 mb-2">Empowering Craftsmanship</h4>
                  <p className="text-slate-600">
                    Hand-crafted in India by a 100% women-led production team, every cone and paper is made with meticulous care. By choosing JOJO, you aren't just getting premium manufacturing—you are supporting ethical labor and female empowerment at scale.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
