import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const BASE_COUNT = 10000000;
const START_TIME = new Date('2026-09-01T00:00:00+05:30').getTime();
const RATE_PER_SEC = 2.8; // ~2.8 cones per second

const Index = () => {
  const [activeSection, setActiveSection] = useState("");
  const [coneCount, setConeCount] = useState<number>(() => {
    const elapsed = Math.max(0, (Date.now() - START_TIME) / 1000);
    return BASE_COUNT + Math.floor(elapsed * RATE_PER_SEC);
  });
  const [isTicking, setIsTicking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.max(0, (Date.now() - START_TIME) / 1000);
      const newCount = BASE_COUNT + Math.floor(elapsed * RATE_PER_SEC);
      setConeCount(newCount);
      setIsTicking(true);
      setTimeout(() => setIsTicking(false), 250);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <SEO
        title="JOJO Papers — B2B OEM Rolling Papers & Pre-Rolled Cones Manufacturer"
        description="Premier B2B contract manufacturer for pre-rolled cones, rolling papers, filter tips, and custom retail packaging. Supplying dispensaries and volume brands worldwide since 2014."
        canonical="https://jojopapers.com"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "B2B OEM Rolling Paper and Pre-Rolled Cone Manufacturing",
          "provider": {
            "@type": "Organization",
            "name": "JOJO Papers",
            "url": "https://jojopapers.com",
            "email": "info@jojopapers.com",
            "telephone": "+91 99715 08200"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "JOJO Manufacturing Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Pre-Rolled Cones" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Rolling Paper Booklets" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk Cone Tower Packs" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Retail Packaging" } }
            ]
          }
        }}
      />
      
      {/* HERO SECTION WITH LIVE PRODUCTION COUNTER */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 border-b border-border bg-white">
        <motion.div 
          className="max-w-[1100px] mx-auto text-center px-6"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Live Production Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-[#4a4a4a] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#a97922] shadow-[0_0_0_4px_rgba(169,121,34,0.18)] animate-pulse inline-block" />
            Live Production · Made in India since 2014
          </motion.div>

          {/* Sub-headline */}
          <motion.div variants={fadeInUp} className="font-['Cormorant_Garamond'] text-[clamp(22px,2.5vw,34px)] text-[#363636] font-normal mb-2">
            More than a decade in every roll.
          </motion.div>

          {/* Live Dynamic Counter */}
          <motion.div variants={fadeInUp} className="py-2">
            <div 
              className={`font-bold font-sans tracking-[-0.04em] text-[#0a0a0a] text-[clamp(34px,8.2vw,136px)] sm:text-[clamp(54px,9.5vw,148px)] leading-[0.88] select-none tabular-nums whitespace-nowrap transition-all duration-200 ${
                isTicking ? 'scale-[1.006] text-[#000]' : 'scale-100 text-[#0a0a0a]'
              }`}
            >
              {coneCount.toLocaleString('en-US')}
            </div>
            <div className="text-[clamp(18px,2.6vw,38px)] font-bold tracking-tight text-[#111] mt-3 sm:mt-4">
              pre-rolled cones <span className="font-['Cormorant_Garamond'] font-normal italic text-[#a97922]">and counting.</span>
            </div>
          </motion.div>

          {/* Descriptive Copy */}
          <motion.p variants={fadeInUp} className="text-[15px] sm:text-[17px] text-muted-foreground mt-6 mb-8 max-w-[640px] mx-auto leading-relaxed font-light">
            JOJO develops pre-rolled cones, rolling papers and filter tips for B2B buyers — with bulk supply, retail packaging, private-label development and India-side consultation available around the product.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeInUp} className="flex gap-3.5 justify-center flex-wrap">
            <Link to="/private-label" className="btn-premium-solid py-3.5 px-8 text-[11px] font-mono tracking-wider uppercase">
              Start Your Custom Build
            </Link>
            <Link to="/contact" className="btn-premium bg-transparent text-foreground hover:bg-foreground hover:text-background border-foreground py-3.5 px-8 text-[11px] font-mono tracking-wider uppercase">
              Request Samples
            </Link>
          </motion.div>

          {/* Proof Strip */}
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-10 mt-10 border-t border-border/80 font-mono text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-[#777]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
              Pre-Rolled Cones
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
              Rolling Papers
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
              Filter Tips
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a97922]" />
              Bulk Supply &amp; OEM
            </span>
          </motion.div>
        </motion.div>
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
      <section className="py-20 border-b border-border bg-[#fafaf8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <div className="eyebrow mb-3">Why JOJO</div>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-['Cormorant_Garamond'] font-medium leading-[1.08] text-foreground">
                Engineered for perfection,<br className="hidden sm:inline" /> rolled entirely by hand.
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <p className="text-muted-foreground text-[15.5px] leading-relaxed mb-8 max-w-[52ch]">
                Since 2014, JOJO Papers has manufactured pre-rolled cones, rolling papers and filter tips with close attention to structure, finish and repeatability.
              </p>
              
              <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
                <div>
                  <b className="block font-['Cormorant_Garamond'] text-3xl font-medium text-foreground">10M+</b>
                  <span className="font-sans text-[11px] uppercase tracking-[0.05em] text-muted-foreground">Cones Rolled</span>
                </div>
                <div>
                  <b className="block font-['Cormorant_Garamond'] text-3xl font-medium text-foreground">200+</b>
                  <span className="font-sans text-[11px] uppercase tracking-[0.05em] text-muted-foreground">Women Empowered</span>
                </div>
                <div>
                  <b className="block font-['Cormorant_Garamond'] text-3xl font-medium text-foreground">10+</b>
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
