import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Box, 
  Sparkles, 
  Layers, 
  Magnet, 
  PackageCheck, 
  Store, 
  FileText, 
  Palette, 
  ChevronDown 
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function RollingPaperPackaging() {
  const [activeSection, setActiveSection] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sectionIds = [
        'booklets', 
        'magnetic', 
        'papers-tips', 
        'compact', 
        'hanging', 
        'displays', 
        'india-series', 
        'framework', 
        'faq'
      ];
      
      const offset = window.innerHeight * 0.35;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight - offset && rect.bottom >= offset) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      const navEl = document.getElementById(`nav-${activeSection}`);
      if (navEl) {
        navEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeSection]);

  const navItems = [
    { id: "booklets", label: "01 Booklets", icon: FileText },
    { id: "magnetic", label: "02 Magnetic", icon: Magnet },
    { id: "papers-tips", label: "03 Papers + Tips", icon: Layers },
    { id: "compact", label: "04 Compact Packs", icon: Box },
    { id: "hanging", label: "05 Hanging Retail", icon: Store },
    { id: "displays", label: "06 Counter Displays", icon: PackageCheck },
    { id: "india-series", label: "07 India Series", icon: Sparkles },
    { id: "framework", label: "08 Brand Framework", icon: Palette },
    { id: "faq", label: "09 FAQ", icon: ChevronDown },
  ];

  const faqs = [
    {
      q: "What are the minimum order quantities (MOQ) for custom rolling paper booklets?",
      a: "Our standard MOQ for custom printed rolling paper booklets starts at 2,000 to 5,000 units per artwork, depending on booklet construction (standard tuck, magnetic closure, or papers+tips combination). Volume discounts apply at 10k, 25k, and 50k+ runs."
    },
    {
      q: "Can we combine rolling papers and filter tips inside the same booklet?",
      a: "Yes. We manufacture both integrated 'Emergency Kits' (papers + filter tips + magnetic closure) and standard 2-in-1 flat booklets with perforation lines and tear-away tips."
    },
    {
      q: "What finishes and specialty print treatments are available for retail packaging?",
      a: "We offer soft-touch matte lamination, high-gloss UV, spot UV, hot foil stamping (gold, silver, rose gold, holographic), blind embossing, debossing, and custom die-cut windows."
    },
    {
      q: "Do you supply shelf-ready counter display boxes and master cartons?",
      a: "Every booklet run can be bundled with matching 24-count, 40-count, or 50-count retail counter display boxes, shrink-wrapped inner packs, and barcoded master shipper cartons ready for distributor intake."
    },
    {
      q: "What paper types can be packed into these custom booklets?",
      a: "Choose from 100% Organic Hemp (13 GSM), Unbleached Brown Wood Pulp (12.5 GSM), Ultra-Fine Bleached White (14 GSM), or Pure Rice paper — all food-grade certified with natural Arabic gum."
    }
  ];

  return (
    <div className="pt-[73px] md:pt-[115px] min-h-screen bg-background flex flex-col font-sans text-foreground">
      <SEO
        title="Custom Rolling Paper Booklets & Retail Packaging | JOJO Papers"
        description="B2B OEM retail packaging for rolling papers: custom printed booklets, magnetic closures, papers + tips emergency kits, hanging displays, and counter retail boxes."
        canonical="https://jojopapers.com/retail-packaging/rolling-papers"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Custom Rolling Paper Retail Packaging",
          "provider": {
            "@type": "Organization",
            "name": "JOJO Papers"
          },
          "serviceType": "Contract Manufacturing & Packaging"
        }}
      />
      
      <Breadcrumb items={[
        { label: "Retail & Packaging", href: "/retail-packaging/pre-rolled-cones" },
        { label: "Rolling Papers" }
      ]} />

      {/* HERO SECTION */}
      <section className="py-12 md:py-16 border-b border-border bg-gradient-to-b from-background via-secondary/15 to-background">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="w-[18px] h-[1px] bg-[#b3773f]"></div>
                <span className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] font-medium">
                  ROLLING PAPERS · RETAIL &amp; PACKAGING
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-[clamp(36px,5vw,56px)] leading-[1.05] mb-5 font-['Cormorant_Garamond'] font-medium">
                Custom Rolling Paper Booklets &amp; Retail Packaging
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[16.5px] md:text-[18px] text-muted-foreground leading-[1.7] mb-8">
                From single booklets to shelf-ready counter displays, magnetic closures, and hanging retail systems, JOJO Papers manufactures turnkey retail packaging solutions for volume brands and dispensaries worldwide.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
                <a href="/consultation" className="bg-foreground text-background text-[12.5px] font-semibold uppercase tracking-widest px-7 py-4 hover:bg-foreground/90 transition-colors">
                  Start Your Packaging Brief
                </a>
                <a href="/contact" className="bg-transparent text-foreground border border-foreground text-[12.5px] font-semibold uppercase tracking-widest px-7 py-4 hover:bg-foreground hover:text-background transition-colors">
                  Request Sample Pack
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative bg-white border border-border overflow-hidden shadow-xs"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <img 
                src="/images/products/packaging/papers/00_hero_booklets_displays.webp" 
                alt="Complete Rolling Paper Packaging Line" 
                className="w-full h-[380px] md:h-[460px] object-cover"
              />
              <div className="absolute left-0 right-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <span className="text-white/95 font-sans text-[12px] tracking-widest uppercase font-medium">
                  COMPLETE ROLLING PAPER PACKAGING LINE · BOOKLETS &amp; DISPLAYS
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-secondary/40 py-8 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="py-4 md:py-0 md:pr-6">
              <div className="font-['Cormorant_Garamond'] text-[34px] md:text-[40px] font-semibold text-foreground">5+</div>
              <div className="text-[13.5px] md:text-[14px] text-muted-foreground mt-1 leading-snug">Booklet Formats,<br/>Standard to Papers+Tips</div>
            </div>
            <div className="py-4 md:py-0 md:px-6">
              <div className="font-['Cormorant_Garamond'] text-[34px] md:text-[40px] font-semibold text-foreground">6</div>
              <div className="text-[13.5px] md:text-[14px] text-muted-foreground mt-1 leading-snug">Closure Styles,<br/>Magnetic, Flap, &amp; Box</div>
            </div>
            <div className="py-4 md:py-0 md:px-6">
              <div className="font-['Cormorant_Garamond'] text-[34px] md:text-[40px] font-semibold text-foreground">100%</div>
              <div className="text-[13.5px] md:text-[14px] text-muted-foreground mt-1 leading-snug">Food-Grade Paper,<br/>Natural Arabic Gum</div>
            </div>
            <div className="py-4 md:py-0 md:pl-6">
              <div className="font-['Cormorant_Garamond'] text-[34px] md:text-[40px] font-semibold text-foreground">OEM</div>
              <div className="text-[13.5px] md:text-[14px] text-muted-foreground mt-1 leading-snug">Full Private Label,<br/>Turnkey Box Displays</div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER STRIP */}
      <nav className="sticky top-[73px] md:top-[115px] z-40 border-b border-border bg-white w-full shadow-xs">
        <div className="flex w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-${item.id}`}
                href={`#${item.id}`}
                className={`py-4 px-5 text-[12px] tracking-wider uppercase font-mono transition-colors flex items-center gap-2 shrink-0 border-r border-border last:border-r-0 ${
                  isActive
                    ? 'bg-secondary text-foreground font-bold border-b-2 border-b-foreground'
                    : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-foreground' : 'text-muted-foreground'} />
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* 01 — CUSTOM ROLLING PAPER BOOKLETS */}
      <section id="booklets" className="py-12 md:py-16 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">01 — Booklet Formats</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Choose the pack people buy first.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              Standard tuck-in booklets, papers-only editions, and graphic retail booklets precision-creased with organic Arabic gum strips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Classic Colour Booklet",
                sub: "King Size Slim · Standard Flap",
                img: "/images/products/packaging/papers/01_classic_colour_booklet.webp",
                desc: "Vibrant single-tone cardstocks with foil stamping and crisp tuck flap."
              },
              {
                title: "Papers-Only KS Slim",
                sub: "32 Leaves · Pure Organic",
                img: "/images/products/packaging/papers/02_papers_only_king_size_range.webp",
                desc: "Minimalist slimline booklets designed for pocket carry and fast shelf recognition."
              },
              {
                title: "Natural / Dark Edition",
                sub: "Unbleached · Matte Black",
                img: "/images/products/packaging/papers/03_natural_dark_collection.webp",
                desc: "Raw textured kraft and rich matte black stocks with gold foil accents."
              },
              {
                title: "Graphic King Size Range",
                sub: "Full Colour CMYK · High Gloss",
                img: "/images/products/packaging/papers/04_graphic_king_size_range.webp",
                desc: "Edge-to-edge custom illustrative artwork and character-driven branding."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary/20 border border-border p-6 flex flex-col group hover:border-foreground/40 transition-colors">
                <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[220px] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-auto object-contain max-h-[190px] group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="font-mono text-[11.5px] uppercase tracking-wider text-[#b3773f] mb-1.5 font-medium">{item.sub}</div>
                <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-2 leading-snug">{item.title}</h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — MAGNETIC BOOKLETS */}
      <section id="magnetic" className="py-12 md:py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">02 — Magnetic Closures</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Magnetic Booklets Deserve Their Own Retail Story.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              A satisfying snap closure that keeps papers pristine. Precision neodymium magnets embedded seamlessly into rigid card.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-border p-7 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 bg-secondary/10 border border-border/60 mb-5">
                <img src="/images/products/packaging/papers/05_magnetic_booklet_display_system.webp" alt="Magnetic booklet display system" className="w-full h-auto max-h-[280px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium mb-2 leading-tight">Individual Booklet → Display Box → Outer Packaging</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                A complete modular retail packaging flow from consumer pocket to countertop presentation.
              </p>
            </div>

            <div className="bg-white border border-border p-7 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 bg-secondary/10 border border-border/60 mb-5">
                <img src="/images/products/packaging/papers/06_open_magnetic_booklets.webp" alt="Fully Open Magnetic Booklets" className="w-full h-auto max-h-[280px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium mb-2 leading-tight">Fully Open Magnetic Booklets — White &amp; Unbleached</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Interior printing offers an additional canvas for brand storytelling, strain guides, and QR links.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-border p-7 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 bg-secondary/10 border border-border/60 mb-5">
                <img src="/images/products/packaging/papers/07_premium_magnetic_family.webp" alt="Premium Magnetic Flap Family" className="w-full h-auto max-h-[280px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium mb-2 leading-tight">Premium Magnetic / Flap Booklet Family</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Uniform booklet dimensions engineered to fit standard retail shelves and vending systems.
              </p>
            </div>

            <div className="bg-white border border-border p-7 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4 bg-secondary/10 border border-border/60 mb-5">
                <img src="/images/products/packaging/papers/08_magnetic_booklet_retail_presentation.webp" alt="Magnetic Booklets Retail Presentation" className="w-full h-auto max-h-[280px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium mb-2 leading-tight">Magnetic Booklets + Retail Presentation</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Pair magnetic booklets with matching custom printed point-of-sale display trays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — PAPERS + TIPS (EMERGENCY KIT) */}
      <section id="papers-tips" className="py-12 md:py-16 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">03 — Papers + Tips Combinations</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Papers + Tips in One Retail Pack.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              The 'Emergency Kit' format: 32 leaves + 32 perforated filter tips housed together in a sleek, self-contained booklet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary/20 border border-border p-6 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/09_emergency_kit_family.webp" alt="Emergency Kit Family" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Emergency Kit — Family</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Outer packaging carton plus individual multi-leaf packs.</p>
            </div>

            <div className="bg-secondary/20 border border-border p-6 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/10_emergency_kit_individual.webp" alt="Emergency Kit Individual Pack" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Individual Pack Close-up</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Fold-over protective card protects both papers and tip strips.</p>
            </div>

            <div className="bg-secondary/20 border border-border p-6 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/11_emergency_kit_open_fan.webp" alt="Emergency Kit Open Fan View" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Open Fan View</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Demonstrates built-in tray and fold-out rolling surface.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-border p-6 flex items-center gap-6">
              <img src="/images/products/packaging/papers/12_papers_tips_counter_display.webp" alt="Papers Tips Counter Display" className="w-[150px] h-auto object-contain shrink-0" />
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-[22px] font-medium mb-1.5">Booklet + Counter Display</h4>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed">Complete POP display setup ready for immediate retail placement.</p>
              </div>
            </div>

            <div className="bg-white border border-border p-6 flex items-center gap-6">
              <img src="/images/products/packaging/papers/13_open_papers_tips_booklet.webp" alt="Open Papers Tips Booklet" className="w-[150px] h-auto object-contain shrink-0" />
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-[22px] font-medium mb-1.5">Open Booklet Architecture</h4>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed">Separated internal compartments preventing tip moisture and paper sticking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — COMPACT STRIP PACKS (2+2 / 3+3 / 4+4) */}
      <section id="compact" className="py-12 md:py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">04 — Compact Pack Systems</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Small Packs. Several Retail Ideas.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              Ultra-portable 2+2, 3+3, and 4+4 strip formats with integrated cone or booklet trays for convenience retail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-3 mb-4 flex items-center justify-center min-h-[200px]">
                <img src="/images/products/packaging/papers/15_2plus2_compact_pack.webp" alt="2+2 Compact Strip Pack" className="w-full h-auto max-h-[170px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[22px] font-medium mb-1.5 leading-snug">2+2 Strip Pack</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">Pocket format holding two papers and two filter tips.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-3 mb-4 flex items-center justify-center min-h-[200px]">
                <img src="/images/products/packaging/papers/16_3plus3_compact_pack.webp" alt="3+3 Compact Strip Pack" className="w-full h-auto max-h-[170px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[22px] font-medium mb-1.5 leading-snug">3+3 Strip Pack</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">Tri-fold configuration engineered for single session sales.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-3 mb-4 flex items-center justify-center min-h-[200px]">
                <img src="/images/products/packaging/papers/17_4plus4_compact_pack.webp" alt="4+4 Compact Strip Pack" className="w-full h-auto max-h-[170px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[22px] font-medium mb-1.5 leading-snug">4+4 Strip Pack</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">Quad capacity with rigid perimeter edge protection.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-3 mb-4 flex items-center justify-center min-h-[200px]">
                <img src="/images/products/packaging/papers/18_4x4_retail_box.webp" alt="4x4 Retail Box" className="w-full h-auto max-h-[170px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[22px] font-medium mb-1.5 leading-snug">4×4 Retail Box</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">Counter-top dispensary box holding multi-packs.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-border p-7 flex flex-col">
              <img src="/images/products/packaging/papers/19_compact_pack_colour_directions.webp" alt="Compact Pack Colour Directions" className="w-full h-auto max-h-[240px] object-contain mb-4" />
              <h4 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5">Colour Directions</h4>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Available in natural brown unbleached, white, and pastel brand series.</p>
            </div>

            <div className="bg-white border border-border p-7 flex flex-col">
              <img src="/images/products/packaging/papers/20_compact_pack_collection.webp" alt="Compact Pack Collection" className="w-full h-auto max-h-[240px] object-contain mb-4" />
              <h4 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5">Full Strip Collection</h4>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">A unified packaging architecture across all sizing and paper grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — HANGING RETAIL PACKAGING */}
      <section id="hanging" className="py-12 md:py-16 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">05 — Hanging Retail Systems</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Hanging Retail Packaging for Rolling Paper Booklets.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              Engineered with standard Euro-slot and peg-hole headers for high-visibility pegboard and clip-strip merchandising.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary/20 border border-border p-6 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[240px]">
                <img src="/images/products/packaging/papers/21_inner_booklet_front_back.webp" alt="Inner Booklet Front and Back" className="w-full h-auto max-h-[210px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Inner Booklet — Front + Back</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">High-contrast branding on both front cover and back legal panels.</p>
            </div>

            <div className="bg-secondary/20 border border-border p-6 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[240px]">
                <img src="/images/products/packaging/papers/22_hanging_retail_box_front_back.webp" alt="Hanging Retail Box Front and Back" className="w-full h-auto max-h-[210px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Hanging Box — Front + Back</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Reinforced hanging tab with barcode window and tamper-evident seal.</p>
            </div>

            <div className="bg-secondary/20 border border-border p-6 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[240px]">
                <img src="/images/products/packaging/papers/23_complete_hanging_retail_system.webp" alt="Complete Hanging Retail System" className="w-full h-auto max-h-[210px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Complete Merchandising System</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Direct peg-ready packaging ready to hang in retail channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — COUNTER DISPLAYS & SHELF-READY */}
      <section id="displays" className="py-12 md:py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">06 — Counter Displays &amp; POP</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Counter Displays &amp; Shelf-Ready Packaging.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              Turn individual booklets into commanding countertop point-of-purchase presence with tear-away pop-up headers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/24_classic_white_counter_display.webp" alt="Classic White Counter Display" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Classic White Counter Display</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Holds 24 or 50 booklets with pop-up branded backer board.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/25_colour_coded_display_outer_box.webp" alt="Colour-Coded Display + Outer Box" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Colour-Coded Outer Box</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Rigid outer shipper converts instantly into counter display tray.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/26_king_size_colour_lineup.webp" alt="King Size Slim Colour Line-Up" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">King Size Slim Line-Up</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Multi-flavor and multi-paper color variants presented side-by-side.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/27_display_box_outer_packaging.webp" alt="Display Box + Outer Packaging" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Display Box + Outer Carton</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Dual-layer protective corrugated shipper for overseas freight.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/28_white_paper_display_shelf.webp" alt="White Paper Display in Shelf Context" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">In-Shelf Merchandising</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Optimized footprints designed to slot into standard dispensary fixtures.</p>
            </div>

            <div className="bg-white border border-border p-6 flex flex-col">
              <div className="bg-secondary/10 border border-border/50 p-4 mb-4 flex items-center justify-center min-h-[220px]">
                <img src="/images/products/packaging/papers/29_compact_pack_master_carton.webp" alt="Compact Pack Master Carton" className="w-full h-auto max-h-[190px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[23px] font-medium mb-1.5 leading-snug">Master Carton Packaging</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">Heavy-duty master carton packing 20 to 50 display boxes per case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — INDIA SERIES (MAGNETIC COLLECTION) */}
      <section id="india-series" className="py-12 md:py-16 bg-foreground text-background border-b border-[#222]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[700px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#d4af37] uppercase tracking-[0.2em] mb-2 font-medium">07 — Collection Spotlight</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3 text-white">
              One Magnetic Booklet Format. An Entire Retail Collection.
            </h2>
            <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed">
              The JOJO India Series: Seven collectible artistic editions demonstrating how one unified magnetic booklet structure scales across different graphic identities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#1a1a1a] border border-white/10 p-7 flex flex-col">
              <img src="/images/products/packaging/papers/30_india_series_full_collection.webp" alt="India Series Full Collection" className="w-full h-auto max-h-[280px] object-contain mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium text-white mb-2">Full Magnetic Booklet Collection</h3>
              <p className="text-[14.5px] text-white/60 leading-relaxed">Unified format with tactile soft-touch velvet lamination and gold foil.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 p-7 flex flex-col">
              <img src="/images/products/packaging/papers/31_india_series_booklets_matching_papers.webp" alt="India Series Booklets and Matching Papers" className="w-full h-auto max-h-[280px] object-contain mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium text-white mb-2">Booklets + Matching Paper Leaves</h3>
              <p className="text-[14.5px] text-white/60 leading-relaxed">Each cover concept matches custom tinted paper leaves and watermark patterns.</p>
            </div>
          </div>

          {/* 7 Editions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { name: "Bleached", title: "Eternal", img: "/images/products/packaging/papers/32_bleached_eternal.webp" },
              { name: "Unbleached", title: "Streets", img: "/images/products/packaging/papers/33_unbleached_streets_in_motion.webp" },
              { name: "Pink", title: "New India", img: "/images/products/packaging/papers/34_pink_new_india.webp" },
              { name: "Blue", title: "Blue Stories", img: "/images/products/packaging/papers/35_blue_blue_stories.webp" },
              { name: "Green", title: "The Journey", img: "/images/products/packaging/papers/36_green_the_journey.webp" },
              { name: "Purple", title: "After Dusk", img: "/images/products/packaging/papers/37_purple_after_dusk.webp" },
              { name: "Black", title: "After Dark", img: "/images/products/packaging/papers/38_black_city_after_dark.webp" },
            ].map((ed, i) => (
              <div key={i} className="bg-[#1c1c1c] border border-white/10 p-3.5 flex flex-col text-center">
                <div className="bg-black/40 p-2 mb-2 min-h-[130px] flex items-center justify-center">
                  <img src={ed.img} alt={ed.title} className="w-full h-auto max-h-[110px] object-contain" />
                </div>
                <div className="text-[11px] font-mono text-[#d4af37] uppercase">{ed.name}</div>
                <div className="text-[14px] font-['Cormorant_Garamond'] text-white font-medium">{ed.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — BRAND FRAMEWORK */}
      <section id="framework" className="py-12 md:py-16 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">08 — OEM Development</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Choose the Structure First. Then Change the Brand Language.
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              We provide precision dieline templates for every booklet and display format. You supply the artwork; we handle precision manufacturing and QA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/20 border border-border p-7 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[260px]">
                <img src="/images/products/packaging/papers/39_packaging_collection_directions.webp" alt="Packaging Collection Directions" className="w-full h-auto max-h-[230px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium mb-2 leading-snug">Collection Architecture</h3>
              <p className="text-[14.5px] md:text-[15px] text-muted-foreground leading-relaxed">
                Build consistent SKUs across Single Wide, 1¼ Size, King Size Slim, and Rolls with matching packaging aesthetics.
              </p>
            </div>

            <div className="bg-secondary/20 border border-border p-7 flex flex-col">
              <div className="bg-white border border-border p-4 mb-4 flex items-center justify-center min-h-[260px]">
                <img src="/images/products/packaging/papers/40_private_label_packaging_directions.webp" alt="Private Label Packaging Directions" className="w-full h-auto max-h-[230px] object-contain" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[25px] font-medium mb-2 leading-snug">Private Label Directions</h3>
              <p className="text-[14.5px] md:text-[15px] text-muted-foreground leading-relaxed">
                Custom dieline creation, foil block setup, and compliance labeling tailored to your local regional regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section id="faq" className="py-12 md:py-16 bg-secondary/30 border-b border-border">
        <div className="max-w-[960px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[12px] text-[#b3773f] uppercase tracking-[0.2em] mb-2 font-medium">09 — Common Questions</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,46px)] font-medium leading-[1.08] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[16px] md:text-[17px] text-muted-foreground">
              Everything you need to know about booklet specs, minimums, lead times, and retail display manufacturing.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-border overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-secondary/20 transition-colors"
                  >
                    <span className="font-['Cormorant_Garamond'] text-[20px] md:text-[23px] font-medium text-foreground leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-foreground' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed border-t border-border/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section className="py-14 md:py-20 bg-foreground text-background">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="font-mono text-[12px] text-[#d4af37] uppercase tracking-[0.2em] mb-3 font-medium">Ready to Build?</div>
              <h2 className="font-['Cormorant_Garamond'] text-[34px] md:text-[46px] font-medium leading-[1.06] mb-4 text-white">
                Found the right retail direction? Request a sample or book a consultation.
              </h2>
              <p className="text-[16px] md:text-[17px] text-white/75 leading-relaxed mb-6">
                Tell us about your brand vision, target order volume, and packaging format. We will ship a tactile physical sample kit of our booklet constructions and provide exact production pricing.
              </p>
              <ul className="flex flex-col gap-3 text-[15px] text-white/85">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  Sample kits of standard, magnetic, and emergency kit booklets
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  Direct dieline templates &amp; artwork setup assistance
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  Full turnkey freight &amp; customs documentation support
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 bg-white/5 border border-white/10 p-8">
              <h3 className="font-['Cormorant_Garamond'] text-[26px] font-medium text-white mb-2">Get Started Today</h3>
              <p className="text-[14px] text-white/60 mb-6">Connect directly with our OEM engineering team in New Delhi.</p>
              <Link 
                to="/consultation" 
                className="w-full py-4 bg-white text-foreground font-mono text-[12.5px] font-semibold uppercase tracking-widest text-center hover:bg-white/90 transition-colors"
              >
                Book a Consultation
              </Link>
              <Link 
                to="/contact" 
                className="w-full py-4 bg-transparent text-white border border-white/30 font-mono text-[12.5px] font-semibold uppercase tracking-widest text-center hover:bg-white/10 transition-colors"
              >
                Request Physical Samples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
