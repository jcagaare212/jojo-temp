import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const BulkCones = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sectionIds = ['what-is', 'buyers', 'counts', 'sizes', 'order'];
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

  return (
    <div className="pt-[73px] md:pt-[115px]">
      <SEO
        title="Bulk Pre-Rolled Cones & Tower Packs | High-Volume Wholesale Supply"
        description="High-count pre-rolled cones supplied in organized tower packs (800ct, 900ct, 1,000ct) for distributors, commercial fillers, and volume brands. Fast shipping worldwide."
        canonical="https://jojopapers.com/bulk-cones"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "JOJO Bulk Pre-Rolled Cones (Tower Packs)",
          "description": "High-count pre-rolled cones packed in protective towers for automated and commercial filling operations.",
          "brand": {
            "@type": "Brand",
            "name": "JOJO Papers"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "offerCount": "5",
            "availability": "https://schema.org/InStock"
          }
        }}
      />
      <Breadcrumb items={[{ label: "Bulk Cones" }]} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-8 pb-10 md:pt-10 md:pb-12 border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-xl">
              <motion.div variants={fadeUp} className="inline-block px-3 py-1 mb-6 text-xs font-sans font-medium tracking-wider uppercase bg-secondary text-secondary-foreground rounded-full">
                Wholesale Range · Bulk Cones
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-tight mb-6">
                Bulk cones, built around your operation.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                High-count pre-rolled cones supplied in organised tower packs for distributors, fillers, wholesalers and brands buying in volume. Select the cone size and tower count, then tell us the paper direction required for your order.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-none px-8 font-sans tracking-wide uppercase text-xs">
                  <a href="#counts">View Tower Counts</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none px-8 font-sans tracking-wide uppercase text-xs">
                  <a href="#sizes">View Cone Sizes</a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative">
              <div className="bg-white p-4 border border-border">
                <img 
                  src="/images/products/bulk-cones/bulk_cones_hero.jpg" 
                  alt="Bulk Cone Towers" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORMAT NAV */}
      <div className="sticky top-[73px] md:top-[115px] z-40 bg-white border-b border-border shadow-sm w-full">
        <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { id: 'what-is', label: 'What is a Bulk Tower?' },
              { id: 'buyers', label: 'Who Buys Bulk?' },
              { id: 'counts', label: 'Tower Counts' },
              { id: 'sizes', label: 'Cone Sizes' },
              { id: 'order', label: 'How to Order' },
            ].map(link => (
              <a 
                key={link.id} 
                id={`nav-${link.id}`}
                href={`#${link.id}`}
                className={`py-4 px-6 text-[10px] font-sans font-medium tracking-widest uppercase whitespace-nowrap transition-colors border-b-2 flex items-center justify-center shrink-0 ${
                  activeSection === link.id ? 'border-foreground text-foreground bg-secondary' : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link 
              to="/contact"
              className="py-4 px-6 text-[10px] font-sans font-medium tracking-widest uppercase whitespace-nowrap text-muted-foreground hover:text-foreground shrink-0 flex items-center justify-center border-b-2 border-transparent hover:bg-secondary"
            >
              Enquire
            </Link>
          </div>
      </div>

      {/* WHAT IS A BULK TOWER? */}
      <section id="what-is" className="py-10 md:py-12 bg-background scroll-mt-[120px] border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
            <div className="text-xs font-sans font-medium tracking-wider uppercase text-muted-foreground mb-4">01 — Bulk Tower Format</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.05] mb-4">More cones in one organised commercial pack.</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A JOJO bulk tower is a high-count supply format for businesses that need pre-rolled cones in volume. It is not a small consumer pack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border border border-border">
            <div className="bg-white p-6 md:p-10">
              <h3 className="text-2xl font-serif mb-3">What you receive.</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Pre-rolled cones organised in a tower/tray format and packed by the selected cone size and count, ready for commercial handling.
              </p>
            </div>
            <div className="bg-white p-6 md:p-10">
              <h3 className="text-2xl font-serif mb-3">Why buyers use it.</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                It reduces the need for many small packs and gives distributors, fillers and volume buyers a cleaner way to receive and manage cone inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO BUYS BULK CONES */}
      <section id="buyers" className="py-10 md:py-12 bg-secondary/30 scroll-mt-[120px] border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mb-8 md:mb-10">
            <div className="text-xs font-sans font-medium tracking-wider uppercase text-muted-foreground mb-3">02 — Who Buys Bulk Cones?</div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-3">Built for businesses that need volume.</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Bulk towers make the most sense when cones are being purchased for a commercial operation rather than as a finished consumer pack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border">
            {[
              { id: '01', title: 'Distributors & Wholesalers', desc: 'For buyers holding stock and supplying retailers, regional accounts or multiple customers.' },
              { id: '02', title: 'Filling & Packing Operations', desc: 'For businesses that need organised cones ready for their own filling or packing workflow.' },
              { id: '03', title: 'Large Retail Programs', desc: 'For retail groups and trade buyers purchasing larger cone quantities on a repeat basis.' },
              { id: '04', title: 'Brands Buying in Volume', desc: 'For brands that first need the cone supply itself and want to discuss packaging separately.' }
            ].map((buyer, i) => (
              <div key={i} className="bg-white p-6 md:p-8">
                <div className="text-[10px] font-sans font-medium text-muted-foreground tracking-widest uppercase mb-4">{buyer.id}</div>
                <h3 className="text-xl font-serif mb-3 leading-tight">{buyer.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{buyer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOWER COUNTS */}
      <section id="counts" className="py-10 md:py-12 bg-background scroll-mt-[120px] border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
            <div className="text-xs font-sans font-medium tracking-wider uppercase text-muted-foreground mb-3">03 — Tower Counts</div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-3">Choose the quantity per tower.</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Standard JOJO tower directions range from 200 to 1,000 cones. The most suitable count depends on the cone size and your commercial requirement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[1px] bg-border border border-border mb-6">
            {['200', '400', '500', '600', '800', '900', '1,000'].map((count, i) => (
              <div key={i} className="bg-white p-6 md:p-8 text-center flex flex-col items-center justify-center">
                <b className="text-2xl md:text-3xl font-serif font-medium block mb-1">{count}</b>
                <span className="text-[10px] font-sans font-medium text-muted-foreground tracking-widest uppercase">Pieces</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mb-8 md:mb-10">
            Available configuration may vary by cone size. We confirm the final tower count before production.
          </p>

          <div className="bg-foreground text-background p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-foreground">
            <div className="max-w-xl">
              <h3 className="text-2xl font-serif mb-2">Not sure which tower count to choose?</h3>
              <p className="text-background/70 text-sm leading-relaxed">
                Send us the cone size and expected total order quantity. We will suggest a practical tower configuration for the requirement.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-none px-8 font-sans tracking-wide uppercase text-xs border-background bg-transparent text-background hover:bg-background hover:text-foreground shrink-0">
              <Link to="/contact">Ask JOJO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CONE SIZES */}
      <section id="sizes" className="py-10 md:py-12 bg-background scroll-mt-[120px] border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
            <div className="text-xs font-sans font-medium tracking-wider uppercase text-muted-foreground mb-3">05 — Core Bulk Cone Sizes</div>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-3">Choose the cone format you need in bulk.</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              The same bulk-supply approach can be planned around five core JOJO cone sizes. Final dimensions and tip specification are confirmed with the order.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-border border border-border mb-8 md:mb-10">
            {[
              { size: '70 mm', name: 'Dogwalker', desc: 'Compact cone format for short-size requirements.' },
              { size: '78 mm', name: 'Mini', desc: 'Short-format cone option for compact product ranges.' },
              { size: '84 mm', name: '1¼ Size', desc: 'Common 1¼ format for volume cone programs.' },
              { size: '98 mm', name: '98 mm Special', desc: 'Longer format for buyers requiring a 98 mm cone.' },
              { size: '109 mm', name: 'King Size', desc: 'Full-length King Size format for volume supply.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 text-center flex flex-col items-center">
                <b className="text-2xl font-serif font-medium block mb-2">{item.size}</b>
                <span className="text-[10px] font-sans font-medium text-muted-foreground tracking-widest uppercase mb-4">{item.name}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.12fr_0.88fr] gap-6">
            <figure className="bg-white border border-border p-4 flex flex-col group">
              <div className="overflow-hidden bg-white mb-4">
                <img 
                  src="/images/products/bulk-cones/bulk_cones_visual_tower_family_view.jpg" 
                  alt="Tower Family View" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <figcaption className="px-2 pb-2">
                <b className="text-lg font-serif block mb-1">Tower Family View</b>
                <span className="text-sm text-muted-foreground">Various cone sizes organised in protective tower layers.</span>
              </figcaption>
            </figure>
            <figure className="bg-white border border-border p-4 flex flex-col group">
              <div className="overflow-hidden bg-white mb-4 h-full">
                <img 
                  src="/images/products/bulk-cones/bulk_cones_visual_specification-led_pack.jpg" 
                  alt="Specification-led Pack" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <figcaption className="px-2 pb-2 mt-auto">
                <b className="text-lg font-serif block mb-1">Specification-led Pack</b>
                <span className="text-sm text-muted-foreground">Consistent packing designed for supply chain efficiency.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ORDER PROCESS */}
      <section id="order" className="py-10 md:py-12 bg-background scroll-mt-[120px] border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl font-serif mb-3">How to order bulk cones.</h2>
            <p className="text-muted-foreground">Our process is designed to confirm exact specifications before production begins.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We review your cone size, paper type, and expected volume requirement.' },
              { step: '02', title: 'Finalise Specification', desc: 'We confirm the exact cone dimensions, tip length, and tower count configuration.' },
              { step: '03', title: 'Commercial Proposal', desc: 'You receive a formal quotation based on your specification and delivery location.' },
              { step: '04', title: 'Lead Time & Delivery', desc: 'Upon approval, we schedule production and confirm your expected dispatch window.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 min-h-[180px] flex flex-col">
                <span className="text-[11px] font-sans font-medium tracking-widest text-muted-foreground uppercase mb-4 block">Step {item.step}</span>
                <h3 className="text-xl font-serif mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND NOTE (PRIVATE LABEL) */}
      <section className="py-10 md:py-12 bg-secondary/50 border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center">
            <div className="bg-white border border-border p-4">
              <img 
                src="/images/products/bulk-cones/bulk_cones_private_label.jpg" 
                alt="Custom printed cones" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif leading-[1.05] mb-4">Need it custom printed? Private Label & OEM.</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                If you require branded filter tips, custom retail packaging, or a complete OEM product line, we offer a dedicated Private Label service to bring your vision to market.
              </p>
              <Button asChild variant="outline" className="rounded-none font-sans tracking-wider uppercase text-xs px-6 py-6 group">
                <Link to="/private-label">
                  Explore Private Label 
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-16 bg-foreground text-background text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] max-w-2xl mx-auto mb-4">
            Ready to order bulk cones?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8 text-lg">
            Contact us to request pricing, discuss tower counts, or start your volume cone program.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-[1px] bg-background/20 border border-background/20">
            {[
              { label: 'Enquire Now', to: '/contact' },
              { label: 'View Pre-Rolled Cones', to: '/pre-rolled-cones' },
              { label: 'Retail & Packaging', to: '/retail-packaging' },
              { label: 'Rolling Papers', to: '/rolling-papers' }
            ].map((link, i) => (
              <Link 
                key={i} 
                to={link.to}
                className="bg-foreground py-5 px-4 text-[11px] font-sans font-medium tracking-widest uppercase hover:bg-background hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkCones;
