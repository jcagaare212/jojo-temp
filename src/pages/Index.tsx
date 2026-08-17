import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['cones', 'bulk', 'paper'];
      let isAnySectionInView = false;
      const offset = window.innerHeight * 0.4;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight - offset && rect.bottom >= offset) {
            setActiveSection(id);
            isAnySectionInView = true;
            break;
          }
        }
      }

      if (!isAnySectionInView) {
        setActiveSection("");
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      const navEl = document.getElementById(`nav-${activeSection}`);
      if (navEl && navEl.parentElement) {
        const container = navEl.parentElement;
        container.scrollTo({
          left: navEl.offsetLeft - (container.clientWidth / 2) + (navEl.clientWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection]);

  const stagger: Variants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-background text-foreground overflow-hidden font-sans">
      
      {/* HERO */}
      <section className="pt-32 pb-16">
        <motion.div 
          className="max-w-[640px] mx-auto text-center px-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div className="eyebrow center mb-6" variants={fadeInUp}>
            B2B Manufacturing · Since 2014
          </motion.div>
          <motion.h1 className="text-[clamp(32px,5vw,54px)] leading-[1.08] mb-5 font-['Cormorant_Garamond'] font-medium" variants={fadeInUp}>
            Precision you can spec.<br/>Craft you can't automate.
          </motion.h1>
          <motion.p className="text-[17px] text-muted-foreground mb-8 max-w-[46ch] mx-auto leading-relaxed" variants={fadeInUp}>
            JOJO Papers manufactures pre‑rolled cones, rolling papers and filter tips for dispensaries, distributors and private‑label brands — every piece rolled by hand.
          </motion.p>
          <motion.div className="flex gap-4 justify-center flex-wrap" variants={fadeInUp}>
            <a href="/consultation" className="btn-premium-solid">Start Your Custom Build</a>
            <a href="/contact" className="btn-premium bg-transparent text-foreground hover:bg-foreground hover:text-background border-foreground">Request Samples</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-w-[1400px] mx-auto px-6 md:px-12 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full aspect-[16/7] bg-secondary border border-border relative overflow-hidden flex items-center justify-center rounded-sm">
             <img src="/images/12.webp" alt="JOJO Papers Hero" className="w-full h-full object-contain p-4 mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>

        <motion.div 
          className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 border-y border-border mt-16"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            { label: 'Manufacturing Since', value: '2014' },
            { label: 'Cones Rolled', value: '10M+' },
            { label: 'Hand-Rolled by Women', value: '100%' },
            { label: 'Standard Sizes', value: '5' }
          ].map((stat, i) => (
            <motion.div key={i} className={`py-10 px-6 text-center ${i !== 0 ? 'md:border-l border-border' : ''}`} variants={fadeInUp}>
              <b className="block font-['Cormorant_Garamond'] text-3xl font-medium mb-1">{stat.value}</b>
              <span className="font-sans text-[11px] uppercase tracking-[0.05em] text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-20 border-b border-border bg-white">
        <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-8 md:py-0 text-center flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-serif mb-2">2014</div>
              <div className="text-[10px] font-sans font-medium tracking-widest text-muted-foreground uppercase">Manufacturing Since</div>
            </div>
            <div className="py-8 md:py-0 text-center flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-serif mb-2">10M+</div>
              <div className="text-[10px] font-sans font-medium tracking-widest text-muted-foreground uppercase">Cones Rolled</div>
            </div>
            <div className="py-8 md:py-0 text-center flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-serif mb-2">100%</div>
              <div className="text-[10px] font-sans font-medium tracking-widest text-muted-foreground uppercase">Hand-rolled By Women</div>
            </div>
            <div className="py-8 md:py-0 text-center flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-serif mb-2">5</div>
              <div className="text-[10px] font-sans font-medium tracking-widest text-muted-foreground uppercase">Standard Sizes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER STRIP */}
      <nav className="sticky top-[73px] md:top-[115px] z-40 border-b border-border bg-white w-full shadow-sm">
        <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { num: '01', title: 'Pre-Rolled Cones', id: 'cones', href: '#cones' },
            { num: '02', title: 'Bulk Cones', id: 'bulk-link', href: '/bulk-cones' },
            { num: '03', title: 'Rolling Papers', id: 'paper', href: '#paper' },
            { num: '04', title: 'Retail & Packaging', id: 'retail-link', href: '/retail-packaging' },
            { num: '05', title: 'Private Label & Branding', id: 'private-link', href: '/private-label' },
            { num: '06', title: 'Consultation', id: 'consultation-link', href: '/consultation' },
          ].map((ch, i) => (
            <a 
              key={i} 
              id={`nav-${ch.id}`}
              href={ch.href} 
              className={`flex-1 min-w-[200px] py-6 px-4 font-sans text-[11.5px] tracking-[0.04em] transition-colors flex items-center justify-center shrink-0 border-r border-border last:border-r-0 ${
                activeSection === ch.id ? 'bg-secondary text-foreground font-bold' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              <b className="text-foreground font-medium mr-2">{ch.num}</b>{ch.title}
            </a>
          ))}
        </div>
      </nav>

      {/* 01 — PRE-ROLLED CONES */}
      <section id="cones" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div className="text-center max-w-[560px] mx-auto mb-12" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center">01 — Pre-Rolled Cones</div>
            <h2 className="text-[clamp(26px,3vw,36px)] font-['Cormorant_Garamond'] font-medium mb-3">Five sizes, ready to fill, built to one manufacturing standard.</h2>
            <p className="text-[15px] text-muted-foreground">Every cone holds approved length, opening and tip fit across every production run — and can be developed in any of our paper types and colours.</p>
          </motion.div>

          <motion.div className="flex flex-wrap border border-border bg-border gap-[1px] mb-12" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            {[
              { name: 'Dogwalker Mini', size: '70mm' },
              { name: 'Mini', size: '78mm' },
              { name: '1¼ Size', size: '84mm' },
              { name: '98mm Special', size: '98mm' },
              { name: 'King Size', size: '109mm' }
            ].map((item, i) => (
              <motion.div key={i} className="flex-1 min-w-[130px] bg-white hover:bg-secondary transition-colors" variants={fadeInUp}>
                <a href="/pre-rolled-cones" className="block w-full h-full p-5 text-center cursor-pointer group">
                  <b className="block font-['Cormorant_Garamond'] text-[16px] font-semibold mb-1 group-hover:text-foreground transition-colors">{item.name}</b>
                  <span className="font-sans text-[11px] text-muted-foreground">{item.size}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex justify-center mb-10" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            <motion.div className="w-full max-w-4xl relative overflow-hidden flex items-center justify-center group" variants={fadeInUp}>
              <img src="/images/products/cones/cones-hero-size-chart.webp" alt="JOJO Pre-Rolled Cones Size Chart" className="w-full h-auto max-h-[700px] object-contain mix-blend-multiply drop-shadow-xl group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </motion.div>

          <div className="text-center"><a href="/pre-rolled-cones" className="font-sans text-[12px] uppercase tracking-[0.06em] border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">View Full Size Chart & Paper Options</a></div>
        </div>
      </section>

      {/* 02 — BULK CONES */}
      <section id="bulk" className="py-20 bg-secondary border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative overflow-hidden flex items-center justify-center" 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <img src="/images/products/cones/bulk-cones-hero.webp" alt="JOJO Bulk Cones Packaging" className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <div className="eyebrow">02 — Bulk Cones</div>
              <h2 className="text-[clamp(24px,3vw,34px)] font-['Cormorant_Garamond'] font-medium mb-4">High-volume supply, built for scale.</h2>
              <p className="text-muted-foreground mb-8 max-w-[40ch]">Dependable counts from 200 to 1,000+ pieces per tower, for dispensaries, distributors, contract packers and private-label operators who need repeatable specifications on every reorder.</p>
              <Link to="/bulk-cones" className="btn-premium border-transparent hover:border-foreground bg-transparent">View Bulk Configurations</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — ROLLING PAPERS */}
      <section id="paper" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div className="text-center max-w-[560px] mx-auto mb-12" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center">03 — Rolling Papers</div>
            <h2 className="text-[clamp(26px,3vw,36px)] font-['Cormorant_Garamond'] font-medium mb-3">Four paper types. Seven colours.</h2>
            <p className="text-[15px] text-muted-foreground">Wood pulp, rice, hemp and flax papers — aligned across colours and matching cone lines.</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border border border-border mb-10" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            {['Wood Pulp', 'Rice Paper', 'Hemp Paper', 'Flax Paper'].map((type, i) => (
              <motion.div key={i} className="bg-white p-5 text-center font-sans text-[12px] uppercase tracking-[0.04em]" variants={fadeInUp}>{type}</motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-4 mb-10" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            {['Bleached', 'Unbleached', 'Pink', 'Blue', 'Green', 'Purple', 'Black'].map((color, i) => (
              <motion.div key={i} className="w-[90px] text-center group" variants={fadeInUp}>
                <div className="w-[90px] h-[90px] border border-border mb-2 bg-secondary transition-colors group-hover:bg-border cursor-pointer flex items-center justify-center relative overflow-hidden">
                   {/* Add a subtle visual hint for paper color in the box */}
                   <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent to-black mix-blend-multiply"></div>
                   {color === 'Pink' && <div className="absolute inset-0 bg-[#f48fb1]"></div>}
                   {color === 'Blue' && <div className="absolute inset-0 bg-[#81d4fa]"></div>}
                   {color === 'Green' && <div className="absolute inset-0 bg-[#a5d6a7]"></div>}
                   {color === 'Purple' && <div className="absolute inset-0 bg-[#ce93d8]"></div>}
                   {color === 'Black' && <div className="absolute inset-0 bg-[#424242]"></div>}
                   {color === 'Unbleached' && <div className="absolute inset-0 bg-[#d7ccc8]"></div>}
                   {color === 'Bleached' && <div className="absolute inset-0 bg-white"></div>}
                </div>
                <span className="font-sans text-[10.5px] uppercase tracking-[0.04em] text-muted-foreground">{color}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center"><a href="#" className="font-sans text-[12px] uppercase tracking-[0.06em] border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">See All Paper Options</a></div>
        </div>
      </section>

      {/* 04 — RETAIL & PACKAGING */}
      <section id="retail" className="py-20 bg-secondary border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div className="text-center max-w-[560px] mx-auto mb-12" variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center">04 — Retail & Packaging</div>
            <h2 className="text-[clamp(26px,3vw,36px)] font-['Cormorant_Garamond'] font-medium mb-3">This isn't just paper — it's branding and packaging.</h2>
            <p className="text-[15px] text-muted-foreground">Beyond the product itself, JOJO builds the full retail presentation around it: boxes, tins, tubes and display systems, with white-label options at every level.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-10" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
            {[
              { title: 'Drawer-Box Packs', desc: 'A premium format for colour-led launches and modern retail presentation.', img: '/images/jojo_assets/JOJO Website 26-06-2026/3.webp' },
              { title: 'Premium Metal Tins', desc: 'Durable, elevated packaging for gifting, storage and premium retail shelves.', img: '/images/jojo_assets/JOJO Website 26-06-2026/28.webp' },
              { title: 'Tube Packaging', desc: 'Compact, protective paper and metal-lid tubes for cone-based retail formats.', img: '/images/jojo_assets/JOJO Website 26-06-2026/13.webp' },
              { title: 'Retail Displays & Kits', desc: 'Emergency kits, cone loaders and point-of-sale displays that round out a full shelf story.', img: '/images/jojo_assets/JOJO Website 26-06-2026/23.webp' },
            ].map((cat, i) => (
              <motion.div key={i} className="flex flex-col gap-5 group" variants={fadeInUp}>
                <div className="aspect-[16/10] bg-white border border-border group-hover:border-foreground transition-colors relative overflow-hidden flex items-center justify-center p-6">
                   <img src={cat.img} alt={cat.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-[20px] font-medium mb-2">{cat.title}</h3>
                  <p className="text-[14.5px] text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center"><a href="#" className="font-sans text-[12px] uppercase tracking-[0.06em] border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">See All Packaging Formats</a></div>
        </div>
      </section>

      {/* 05 — PRIVATE LABEL & BRANDING */}
      <section id="private-label" className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div className="relative group overflow-hidden flex items-center justify-center" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src="/images/products/oem/oem-branding-hero.webp" alt="Private Label Custom Branding" className="w-full h-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 drop-shadow-xl" />
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <div className="eyebrow">05 — Private Label & Branding</div>
              <h2 className="text-[clamp(24px,3vw,34px)] font-['Cormorant_Garamond'] font-medium mb-4">We guide you from a design idea to a finished, retail-ready product.</h2>
              <p className="text-muted-foreground mb-6 max-w-[40ch]">You bring the brand — the name, the idea, the market you're selling to. We handle everything after that: artwork, cone sizing, paper and colour, and the packaging formats from Chapter 04 — turning your design into a real product on the shelf.</p>
              <Link to="/private-label" className="btn-premium border-transparent hover:border-foreground bg-transparent">Start Your Brand</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 06 — CONSULTATION */}
      <section id="consultation" className="py-20 bg-secondary border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            className="border border-border p-14 text-center max-w-[760px] mx-auto bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow center mb-4">06 — Consultation</div>
            <h2 className="text-[clamp(22px,2.6vw,30px)] font-['Cormorant_Garamond'] font-medium mb-4">Your second eye in India, before goods move.</h2>
            <p className="text-muted-foreground max-w-[50ch] mx-auto mb-8">A complimentary first-level review for overseas buyers — checking product, packaging and dispatch-readiness before goods move, even when another supplier is manufacturing the order.</p>
            <a href="/consultation" className="btn-premium-solid">Learn About Consultation</a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / TRUST */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
            <motion.div className="aspect-[4/5] ph-image bg-secondary border border-border" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              Artisan / Hand-Rolling Photo
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <div className="eyebrow">Why JOJO</div>
              <h2 className="text-[clamp(24px,3vw,34px)] font-['Cormorant_Garamond'] font-medium mb-4">Engineered for perfection, rolled entirely by hand.</h2>
              <p className="text-muted-foreground mb-8 max-w-[48ch]">Since 2014, JOJO Papers has manufactured pre-rolled cones, rolling papers and filter tips with close attention to structure, finish and repeatability.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-border pt-6 mt-6">
                <div>
                  <b className="block font-['Cormorant_Garamond'] text-2xl font-medium">10M+</b>
                  <span className="font-sans text-[11px] uppercase tracking-[0.05em] text-muted-foreground">Cones Rolled</span>
                </div>
                <div>
                  <b className="block font-['Cormorant_Garamond'] text-2xl font-medium">200+</b>
                  <span className="font-sans text-[11px] uppercase tracking-[0.05em] text-muted-foreground">Women Empowered</span>
                </div>
                <div>
                  <b className="block font-['Cormorant_Garamond'] text-2xl font-medium">10+</b>
                  <span className="font-sans text-[11px] uppercase tracking-[0.05em] text-muted-foreground">Years' Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-foreground text-background text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <div className="eyebrow center center-white text-white/60 mb-6 before:bg-white/60">Precision in Every Detail</div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-['Cormorant_Garamond'] font-medium max-w-[18ch] mx-auto mb-6 leading-[1.1] text-white">Partner with JOJO for your next production run.</h2>
            <p className="text-white/65 max-w-[46ch] mx-auto mb-10">Bulk cone counts, rolling papers, filter tips and complete private-label systems — one manufacturing partner, one standard.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/20 border border-white/20 max-w-[800px] mx-auto">
              <a href="/contact" className="bg-foreground py-5 px-3 font-sans text-[12px] uppercase tracking-[0.05em] text-white hover:bg-[#1f1f1f] transition-colors">Request Samples</a>
              <a href="/contact" className="bg-foreground py-5 px-3 font-sans text-[12px] uppercase tracking-[0.05em] text-white hover:bg-[#1f1f1f] transition-colors">Get a Quote</a>
              <a href="/contact" className="bg-foreground py-5 px-3 font-sans text-[12px] uppercase tracking-[0.05em] text-white hover:bg-[#1f1f1f] transition-colors">Get Your MOQ</a>
              <a href="/consultation" className="bg-foreground py-5 px-3 font-sans text-[12px] uppercase tracking-[0.05em] text-white hover:bg-[#1f1f1f] transition-colors">Book a Consultation</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
