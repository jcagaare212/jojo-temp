import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const formats = [
  {
    id: "tower-range",
    name: "The Tower Range",
    tag: "Format 01 · 600 - 1000 PCS",
    desc: "SAME PURITY. DIFFERENT VIBES. ALL JOJO. Configured specifically for high-volume dispensaries, our towers hold precise counts ranging from 600 up to 1,000 pieces depending on the cone size and paper formulation.",
    img: "/images/products/bulk/bulk-tower-range.webp",
  },
  {
    id: "nested-structure",
    name: "Rigid Base Packaging",
    tag: "Format 02 · Structural Integrity",
    desc: "Precision engineered to survive freight. Our nested base structure maximizes shipping density without deforming the filter tips, ensuring every cone arrives ready to pack and pulls perfectly.",
    img: "/images/products/bulk/bulk-tower-angles.webp",
  },
  {
    id: "bulk-pack",
    name: "Master Bulk Packs",
    tag: "Format 03 · Contract Packaging",
    desc: "For mass producers and automated filling machines. Our highest-volume closed box configuration ensures safe transport with structured internal layering to prevent crushed cones.",
    img: "/images/products/bulk/bulk-pack-white.webp",
  }
];

const BulkCones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stagger: Variants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="bg-background text-foreground overflow-hidden font-sans">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-8 mt-24">
        <div className="font-sans text-[11.5px] text-muted-foreground uppercase tracking-widest">
          <Link to="/" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground">Home</Link> / Bulk Cones
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="pt-4 pb-14">
        <motion.div className="max-w-[1180px] mx-auto text-center px-6 md:px-8" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="eyebrow center justify-center mb-6" variants={fadeInUp}>
            Wholesale & B2B
          </motion.div>
          <motion.h1 className="text-[clamp(32px,4.4vw,50px)] leading-[1.1] mb-6 font-['Cormorant_Garamond'] font-medium max-w-[16ch] mx-auto" variants={fadeInUp}>
            Engineered for Scale.
          </motion.h1>
          <motion.p className="text-[16px] text-muted-foreground max-w-[56ch] mx-auto leading-relaxed" variants={fadeInUp}>
            Dependable counts and rigid packaging structures designed for dispensaries, contract packers, and private-label operators who demand repeatable specifications on every reorder.
          </motion.p>
          
          <motion.div className="flex flex-col md:flex-row justify-center gap-[1px] bg-border border border-border max-w-[900px] mx-auto mt-12" variants={fadeInUp}>
            <div className="flex-1 bg-white p-8 text-center">
              <h4 className="font-['Cormorant_Garamond'] text-[18px] font-medium mb-2">Exact Volume Counts</h4>
              <p className="text-[13px] text-muted-foreground">Standardized towers from 600 up to 1,000 pieces per unit depending on size.</p>
            </div>
            <div className="flex-1 bg-white p-8 text-center">
              <h4 className="font-['Cormorant_Garamond'] text-[18px] font-medium mb-2">Rigid Packaging</h4>
              <p className="text-[13px] text-muted-foreground">Built to survive freight, ensuring cones arrive without crushed tips or warped paper.</p>
            </div>
            <div className="flex-1 bg-white p-8 text-center">
              <h4 className="font-['Cormorant_Garamond'] text-[18px] font-medium mb-2">Consistent Specs</h4>
              <p className="text-[13px] text-muted-foreground">Absolute tolerance control across hundreds of thousands of units.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FORMATS */}
      <section className="py-14">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="flex flex-col">
            {formats.map((item, index) => (
              <motion.div 
                key={item.id}
                id={item.id}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 py-14 border-t border-border ${index === formats.length - 1 ? 'border-b' : ''} ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={stagger}
              >
                {/* Image Side */}
                <motion.div className="w-full md:w-[45%] aspect-[4/3] bg-secondary border border-border flex items-center justify-center p-8 relative overflow-hidden group" variants={fadeInUp}>
                  <img 
                    src={item.img} 
                    alt={`${item.name}`} 
                    className="w-full max-w-sm h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 drop-shadow-xl" 
                  />
                </motion.div>

                {/* Text Side */}
                <motion.div className="w-full md:w-[55%]" variants={fadeInUp}>
                  <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.06em] mb-3">
                    {item.tag}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-[26px] font-medium mb-3">{item.name}</h3>
                  <p className="text-[16px] text-muted-foreground mb-6 max-w-[44ch] leading-relaxed">
                    {item.desc}
                  </p>
                  <Link to="/contact" className="btn-premium inline-flex bg-transparent hover:bg-foreground hover:text-background text-foreground border border-border">Request Pricing</Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 text-center">
          <div className="font-sans text-[11px] tracking-widest uppercase text-white/60 flex items-center justify-center gap-2.5 mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-white/60">
            Next Step
          </div>
          <h2 className="text-[clamp(26px,3.6vw,40px)] font-['Cormorant_Garamond'] font-medium max-w-[18ch] mx-auto mb-5 leading-[1.15]">
            Ready to secure your supply chain?
          </h2>
          <p className="text-white/65 max-w-[48ch] mx-auto mb-8 text-[16px]">
            Speak with our manufacturing team to configure your order volume and secure pricing for your facility.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-premium-solid bg-background text-foreground hover:bg-white/90">Request a Quote</Link>
            <Link to="/consultation" className="btn-premium bg-transparent text-background hover:bg-background hover:text-foreground border-background/40">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkCones;
