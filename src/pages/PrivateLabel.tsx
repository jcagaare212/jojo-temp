import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const formats = [
  {
    id: "packaging-solutions",
    name: "Packaging Formats",
    tag: "Format 01 · Tins, Tubes, & Boxes",
    desc: "Metal tins, plastic jars, paper tubes, kraft boxes, drawer boxes, and display units designed to elevate your brand presence on the shelf.",
    img: "/images/products/oem/oem-packaging-formats.webp",
  },
  {
    id: "booklet-options",
    name: "Rolling Paper Booklets",
    tag: "Format 02 · Custom Finishes",
    desc: "Fully customizable booklets in different styles, finishes & designs. From classic and natural to holographic, marble, and embossed effects.",
    img: "/images/products/oem/oem-booklet-options.webp",
  },
  {
    id: "custom-boxes",
    name: "Custom Box Design",
    tag: "Format 03 · Retail Ready",
    desc: "Endless color options. Infinite possibilities. Custom drawer boxes, tube packaging, pouch packaging, and retail display boxes.",
    img: "/images/products/oem/oem-custom-boxes.webp",
  }
];

export default function PrivateLabel() {
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
          <Link to="/" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground">Home</Link> / Private Label & Branding
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="pt-4 pb-14">
        <motion.div className="max-w-[1180px] mx-auto text-center px-6 md:px-8" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="eyebrow center justify-center mb-6" variants={fadeInUp}>
            05 — OEM & Custom Manufacturing
          </motion.div>
          <motion.h1 className="text-[clamp(32px,4.4vw,50px)] leading-[1.1] mb-6 font-['Cormorant_Garamond'] font-medium max-w-[20ch] mx-auto" variants={fadeInUp}>
            Your Brand. Your Packaging.
          </motion.h1>
          <motion.p className="text-[16px] text-muted-foreground max-w-[56ch] mx-auto leading-relaxed mb-12" variants={fadeInUp}>
            We guide you from a design idea to a finished, retail-ready product. End-to-end custom manufacturing engineered to meet the exacting standards of the world's top brands.
          </motion.p>
          <motion.div className="w-full relative overflow-hidden flex items-center justify-center group bg-white border border-border" variants={fadeInUp}>
            <img 
              src="/images/products/oem/oem-hero-collage.webp" 
              alt="OEM Products Spread" 
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" 
            />
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
                <motion.div className="w-full md:w-[60%] bg-white border border-border flex items-center justify-center p-2 relative overflow-hidden group" variants={fadeInUp}>
                  <img 
                    src={item.img} 
                    alt={`${item.name}`} 
                    className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 drop-shadow-sm" 
                  />
                </motion.div>

                {/* Text Side */}
                <motion.div className="w-full md:w-[40%]" variants={fadeInUp}>
                  <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.06em] mb-3">
                    {item.tag}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-[26px] font-medium mb-3">{item.name}</h3>
                  <p className="text-[16px] text-muted-foreground mb-6 max-w-[44ch] leading-relaxed">
                    {item.desc}
                  </p>
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
            Start Your Brand
          </div>
          <h2 className="text-[clamp(26px,3.6vw,40px)] font-['Cormorant_Garamond'] font-medium max-w-[18ch] mx-auto mb-5 leading-[1.15]">
            Let's build your next premium product line.
          </h2>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link to="/contact" className="btn-premium-solid bg-background text-foreground hover:bg-white/90">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
