import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const sizes = [
  {
    id: "dogwalker",
    name: "DogWalker",
    size: "70mm",
    tag: "Size 01 · 70mm",
    desc: "The shortest cone in the range, built for small, quick fills.",
    img: "/images/products/cones/dogwalker-mini-70mm.webp",
  },
  {
    id: "mini",
    name: "Mini",
    size: "78mm",
    tag: "Size 02 · 78mm",
    desc: "Slightly longer than the DogWalker, still light and easy to fill.",
    img: "/images/products/cones/mini-78mm.webp",
  },
  {
    id: "1-1-4-size",
    name: "1¼ Size",
    size: "84mm",
    tag: "Size 03 · 84mm",
    desc: "The most common size in the category, balancing length and fill.",
    img: "/images/products/cones/1-1-4-size-84mm.webp",
  },
  {
    id: "98mm-special",
    name: "98mm Special",
    size: "98mm",
    tag: "Size 04 · 98mm",
    desc: "Longer than 1¼, sitting between the standard size and King Size.",
    img: "/images/products/cones/98mm-special.webp",
  },
  {
    id: "king-size",
    name: "King Size",
    size: "109mm",
    tag: "Size 05 · 109mm",
    desc: "The longest cone in the range, built for maximum fill capacity.",
    img: "/images/products/cones/king-size-109mm.webp",
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
          <Link to="/" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground">Home</Link> / Pre-Rolled Cones
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="pt-4 pb-14">
        <motion.div className="max-w-[1180px] mx-auto text-center px-6 md:px-8" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="eyebrow center justify-center mb-6" variants={fadeInUp}>
            Pre-Rolled Cones
          </motion.div>
          <motion.h1 className="text-[clamp(32px,4.4vw,50px)] leading-[1.1] mb-6 font-['Cormorant_Garamond'] font-medium max-w-[16ch] mx-auto" variants={fadeInUp}>
            Pre-Rolled Cones, Made with Precision.
          </motion.h1>
          <motion.p className="text-[16px] text-muted-foreground max-w-[56ch] mx-auto leading-relaxed" variants={fadeInUp}>
            JOJO pre-rolled cones are hand-formed with an integrated filter tip and produced across five standard sizes. Each format can be developed using different paper bases, colours and filter-tip constructions.
          </motion.p>
          
          <motion.div className="flex flex-col md:flex-row justify-center gap-[1px] bg-border border border-border max-w-[900px] mx-auto mt-12" variants={fadeInUp}>
            <div className="flex-1 bg-white p-8 text-center">
              <h4 className="font-['Cormorant_Garamond'] text-[18px] font-medium mb-2">Hand-Rolled</h4>
              <p className="text-[13px] text-muted-foreground">Each cone is individually formed and finished by hand.</p>
            </div>
            <div className="flex-1 bg-white p-8 text-center">
              <h4 className="font-['Cormorant_Garamond'] text-[18px] font-medium mb-2">Five Standard Sizes</h4>
              <p className="text-[13px] text-muted-foreground">A complete range from 70mm DogWalker to 109mm King Size.</p>
            </div>
            <div className="flex-1 bg-white p-8 text-center">
              <h4 className="font-['Cormorant_Garamond'] text-[18px] font-medium mb-2">Multiple Configurations</h4>
              <p className="text-[13px] text-muted-foreground">Choose from different paper bases, colours and filter-tip constructions.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SIZES */}
      <section className="py-14">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="flex flex-col">
            {sizes.map((item, index) => (
              <motion.div 
                key={item.id}
                id={item.id}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 py-14 border-t border-border ${index === sizes.length - 1 ? 'border-b' : ''} ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={stagger}
              >
                {/* Image Side */}
                <motion.div className="w-full md:w-[45%] aspect-[4/3] bg-white border border-border flex items-center justify-center p-8 relative overflow-hidden group" variants={fadeInUp}>
                  {item.img ? (
                    <img 
                      src={item.img} 
                      alt={`${item.name} Cone`} 
                      className="w-full max-w-sm h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                  ) : null}
                  <div className="font-sans text-[11px] tracking-[0.05em] text-[#a3a3a3] uppercase text-center" style={{ display: item.img ? 'none' : 'block' }}>
                    {item.name}<br/>Product Photo
                  </div>
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
                  <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.04em] mb-6 border-l-2 border-border pl-4 py-1">
                    Inside: dimensions · paper options · colours · filter tip construction
                  </div>
                  <Link to={`/pre-rolled-cones/${item.id}`} className="btn-premium bg-transparent text-foreground hover:bg-foreground hover:text-background border-foreground text-[11px]">
                    View Specifications
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE NOTE */}
      <section className="py-10">
        <motion.div className="max-w-[1180px] mx-auto px-6 md:px-8" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}>
          <div className="border border-border p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-widest mb-3 eyebrow">Detailed Specifications</div>
              <p className="text-[14px] text-muted-foreground max-w-[52ch]">
                Select a cone size above to view its complete technical page, including dimensions, paper options, colour choices and filter-tip construction.
              </p>
            </div>
            <Link to="/pre-rolled-cones/king-size" className="font-sans text-[12px] tracking-[0.06em] uppercase border-b border-foreground pb-0.5 hover:text-muted-foreground hover:border-muted-foreground transition-colors shrink-0">
              View a Specification Page →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground text-background py-20 mt-10">
        <motion.div className="max-w-[1180px] mx-auto px-6 md:px-8 text-center" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
          <motion.div className="font-sans text-[11px] tracking-widest uppercase text-white/60 flex items-center justify-center gap-2.5 mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-white/60" variants={fadeInUp}>
            Next Step
          </motion.div>
          <motion.h2 className="text-[clamp(26px,3.6vw,40px)] font-['Cormorant_Garamond'] font-medium max-w-[20ch] mx-auto mb-5 leading-[1.15]" variants={fadeInUp}>
            Tell us the size, count and paper — we'll handle the rest.
          </motion.h2>
          <motion.p className="text-white/65 max-w-[46ch] mx-auto mb-10 text-[16px]" variants={fadeInUp}>
            Every size on this page can be developed across our paper bases, colours and tip constructions, and scaled into a bulk or private-label order.
          </motion.p>
          <motion.div className="flex gap-4 justify-center flex-wrap" variants={fadeInUp}>
            <Link to="/contact" className="btn-premium-solid bg-background text-foreground hover:bg-white/90">Request Samples</Link>
            <Link to="/contact" className="btn-premium bg-transparent text-background hover:bg-background hover:text-foreground border-background/40">Get a Quote</Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default PreRolledCones;
