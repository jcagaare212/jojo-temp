import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const About = () => {
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

  const stagger: Variants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  return (
    <div className="bg-background text-foreground overflow-hidden font-sans">
      
      {/* BREADCRUMB */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-8 mt-24">
        <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-widest">
          <Link to="/" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground">Home</Link> / About Us
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="pt-4 pb-14">
        <motion.div className="max-w-[1180px] mx-auto text-center px-6 md:px-8" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="eyebrow center justify-center mb-6" variants={fadeInUp}>
            Our Story
          </motion.div>
          <motion.h1 className="text-[clamp(40px,5vw,60px)] leading-[1.1] mb-6 font-['Cormorant_Garamond'] font-medium max-w-[16ch] mx-auto" variants={fadeInUp}>
            Engineered for Perfection.
          </motion.h1>
          <motion.p className="text-[16px] text-muted-foreground max-w-[56ch] mx-auto leading-relaxed" variants={fadeInUp}>
            Setting the standard for premium rolling paper and cone manufacturing since 2014. We combine ethical manufacturing with an obsession for precision that most of the industry has forgotten.
          </motion.p>
        </motion.div>
      </section>

      {/* CORE STATS */}
      <section className="py-14 border-b border-border">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[1px] bg-border border border-border" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            <motion.div className="bg-white p-8 text-center flex flex-col justify-center items-center" variants={fadeInUp}>
              <h4 className="font-['Cormorant_Garamond'] text-[40px] font-medium leading-none mb-3">10+</h4>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground">Years of Precision</p>
            </motion.div>
            <motion.div className="bg-white p-8 text-center flex flex-col justify-center items-center" variants={fadeInUp}>
              <h4 className="font-['Cormorant_Garamond'] text-[40px] font-medium leading-none mb-3">100%</h4>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground">Made by Women</p>
            </motion.div>
            <motion.div className="bg-white p-8 text-center flex flex-col justify-center items-center" variants={fadeInUp}>
              <h4 className="font-['Cormorant_Garamond'] text-[40px] font-medium leading-none mb-3">OEM</h4>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground">Private Label Focus</p>
            </motion.div>
            <motion.div className="bg-white p-8 text-center flex flex-col justify-center items-center" variants={fadeInUp}>
              <h4 className="font-['Cormorant_Garamond'] text-[40px] font-medium leading-none mb-3">Global</h4>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground">Manufacturing Standard</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR LEGACY */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="eyebrow flex items-center gap-2.5 mb-4 font-sans text-[10px] tracking-[0.14em] uppercase text-foreground before:content-[''] before:w-5 before:h-[1px] before:bg-foreground">
                Our Legacy
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,44px)] font-medium leading-[1.05] mb-6">
                An obsession with craft the industry forgot.
              </h3>
              <div className="text-[16px] text-muted-foreground leading-relaxed space-y-5">
                <p>
                  <strong className="text-foreground font-medium">Since 2014</strong>, JOJO Papers has been quietly setting the standard for what a rolling paper and cone manufacturer can be. Not through shortcuts or mass-market compromise, but through an obsession with craft that most of the industry has forgotten to hold onto.
                </p>
                <p>
                  <strong className="text-foreground font-medium">Engineered for Perfection</strong> is not a slogan we borrowed. It is the discipline behind every cone that leaves our facility. Each one is hand rolled by skilled women artisans who have refined their craft over years, using ultra-thin paper selected for a clean draw and a slow, even burn from first light to last. Nothing about that process is rushed, and nothing about it is accidental.
                </p>
              </div>
            </motion.div>
            <motion.div className="relative aspect-[4/5] bg-secondary border border-border overflow-hidden group" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}>
              <div className="w-full h-full ph-image bg-secondary flex items-center justify-center text-center p-6 text-muted-foreground font-sans text-xs uppercase tracking-widest leading-relaxed">
                Brand Legacy / Artisans Photo<br/>(Client to provide)
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHOLESALE PARTNERS */}
      <section className="py-20 border-b border-border bg-secondary">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
            <motion.div className="order-2 md:order-1 relative aspect-square bg-white border border-border p-8 flex items-center justify-center overflow-hidden group" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}>
              <img
                src="/images/about/bulk-brown-cones.png"
                alt="B2B Manufacturing"
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>
            <motion.div className="order-1 md:order-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="eyebrow flex items-center gap-2.5 mb-4 font-sans text-[10px] tracking-[0.14em] uppercase text-foreground before:content-[''] before:w-5 before:h-[1px] before:bg-foreground">
                Wholesale Partners
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,44px)] font-medium leading-[1.05] mb-6">
                Building a product worth your name.
              </h3>
              <div className="text-[16px] text-muted-foreground leading-relaxed space-y-5">
                <p>
                  We work with brands and wholesale partners who understand that packaging a product is easy, but building one worth putting your name on is not.
                </p>
                <p>
                  Through private label and OEM partnerships, we give partners access to a decade of manufacturing precision, from raw material sourcing to the final finish, so the product that reaches their customers is one they can stand behind completely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="eyebrow flex items-center gap-2.5 mb-4 font-sans text-[10px] tracking-[0.14em] uppercase text-foreground before:content-[''] before:w-5 before:h-[1px] before:bg-foreground">
                Our Philosophy
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,44px)] font-medium leading-[1.05] mb-6">
                No Shortcuts.<br/>Just the JOJO Standard.
              </h3>
              <div className="text-[16px] text-muted-foreground leading-relaxed space-y-5">
                <p>
                  We believe that the finest products cannot be rushed. Our manufacturing process is built on uncompromising quality control and an obsession with the details that most overlook.
                </p>
                <div className="pl-6 border-l border-foreground mt-8 pt-1 pb-1">
                  <h4 className="font-['Cormorant_Garamond'] text-[22px] font-medium text-foreground mb-2">Empowering Craftsmanship</h4>
                  <p className="text-[15px] text-muted-foreground">
                    Hand-crafted in India by a 100% women-led production team, every cone and paper is made with meticulous care. By choosing JOJO, you aren't just getting premium manufacturing—you are supporting ethical labor and female empowerment at scale.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative aspect-square bg-secondary border border-border p-12 flex items-center justify-center overflow-hidden group" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}>
              <img
                src="/images/about/jojo-standard.png"
                alt="The JOJO Standard Philosophy"
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-20 mt-10">
        <motion.div className="max-w-[1180px] mx-auto px-6 md:px-8 text-center" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="font-sans text-[11px] tracking-widest uppercase text-white/60 flex items-center justify-center gap-2.5 mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-white/60" variants={fadeInUp}>
            Partner With Us
          </motion.div>
          <motion.h2 className="text-[clamp(26px,3.6vw,40px)] font-['Cormorant_Garamond'] font-medium max-w-[20ch] mx-auto mb-5 leading-[1.15]" variants={fadeInUp}>
            Build your brand with a manufacturer you can trust.
          </motion.h2>
          <motion.p className="text-white/65 max-w-[46ch] mx-auto mb-10 text-[16px]" variants={fadeInUp}>
            Reach out to discuss private label opportunities, bulk orders, and custom paper formulations.
          </motion.p>
          <motion.div className="flex gap-4 justify-center flex-wrap" variants={fadeInUp}>
            <Link to="/contact" className="btn-premium-solid bg-background text-foreground hover:bg-white/90">Contact Us</Link>
            <Link to="/consultation" className="btn-premium bg-transparent text-background hover:bg-background hover:text-foreground border-background/40">Book a Consultation</Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
