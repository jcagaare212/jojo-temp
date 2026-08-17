import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box, Cylinder, Disc, Grid3x3, LayoutTemplate, Layers } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

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

const RetailPackaging = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sectionIds = ['tins', 'paper-tubes', 'jars', 'individual', 'premium-boxes', 'hanging', 'outer'];
      let isAnySectionInView = false;
      const offset = window.innerHeight * 0.4; // Highlights when section crosses the upper/middle viewport

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight - offset && rect.bottom >= offset) {
            setActiveSection(id);
            isAnySectionInView = true;
            break; // Stop at the first visible section
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
      if (navEl) {
        navEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeSection]);

  return (
    <div className="pt-[73px] md:pt-[115px] min-h-screen bg-background flex flex-col">
      <Breadcrumb items={[{ label: "Retail & Packaging" }]} />

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.87fr_1.13fr] gap-12 md:gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-[20px] h-[1px] bg-foreground"></div>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground">Pre-Rolled Cones · Retail &amp; Packaging</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond'] text-[clamp(44px,5.8vw,74px)] font-medium leading-[0.96] mb-6">
                Pre-Rolled Cone Packaging for Different Retail Formats
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[16px] text-muted-foreground leading-[1.83] max-w-[63ch] mb-8">
                JOJO can develop pre-rolled cone packaging around how the product needs to be sold:
                durable metal tins, rigid paper tubes, clear jars, individual and low-count packs,
                drawer boxes, hanging retail formats, premium presentation cartons and outer packaging.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="#formats" className="bg-foreground text-background py-4 px-8 font-sans text-[11.5px] uppercase tracking-[0.06em] font-medium hover:bg-foreground/90 transition-colors inline-flex items-center justify-center">
                  Explore Packaging Formats
                </a>
                <Link to="/private-label" className="bg-background text-foreground border border-foreground py-4 px-8 font-sans text-[11.5px] uppercase tracking-[0.06em] font-medium hover:bg-foreground hover:text-background transition-colors inline-flex items-center justify-center">
                  Build Under Your Brand
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-border p-3 bg-secondary relative group"
            >
              <img src="/images/products/retail-packaging/extracted_1.jpg" alt="JOJO pre-rolled cone packaging size family" className="w-full aspect-[1.18/1] object-cover bg-white" />
              <div className="absolute left-5 right-5 bottom-5 bg-foreground/95 text-background p-3 flex items-center justify-center gap-3 font-sans text-[8px] uppercase tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Cone Formats</span>
                <span className="text-muted-foreground">·</span>
                <span>Retail Counting</span>
                <span className="text-muted-foreground">·</span>
                <span>Box Structures</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 md:py-24 bg-secondary border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16 items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-['Cormorant_Garamond'] text-[clamp(40px,4.7vw,57px)] font-medium leading-[1.01]"
            >
              The Role of Retail Packaging
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-[14px] text-muted-foreground leading-[1.82] mb-6">
                The function of retail packaging goes beyond just moving pre-rolled cones from A to B. It protects the structural integrity of the paper and filter during transport, prevents crushing on the shelf, manages moisture, provides surface area for compliance labelling and serves as the primary visual anchor for your brand in a retail setting.
              </p>
              <div className="border-l-2 border-foreground pl-4 mt-6">
                <p className="font-sans text-[11.5px] text-muted-foreground leading-relaxed">
                  Every structure listed below can be developed for different cone sizes and unit counts under your private label.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* SECTION: TINS */}
      <section id="tins" className="py-24 bg-white border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[700px] mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Metal Tin Packaging</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Metal tins create a compact, durable retail pack and can be developed around different cone lengths, counts and brand positions. The footprint, depth and internal arrangement should be chosen around the selected cone before artwork is finalised.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-secondary mb-6 overflow-hidden flex items-center justify-center aspect-square">
                <img src="/images/products/retail-packaging/extracted_2.jpg" alt="Metal Tin Size Family" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Metal Tin Packaging — Size Family</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">A clean metal-tin direction shown across multiple cone sizes. Useful when the pack itself should feel durable, compact and reusable.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-secondary mb-6 overflow-hidden flex items-center justify-center aspect-square">
                <img src="/images/products/retail-packaging/extracted_3.jpg" alt="Metal Tins Size & Count Planning" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Metal Tins With Size &amp; Count Planning</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">A development reference showing how tin dimensions, cone size and retail count can be planned together before artwork is finalised.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-secondary mb-6 overflow-hidden flex items-center justify-center aspect-square">
                <img src="/images/products/retail-packaging/extracted_4.jpg" alt="Premium Metal Tin Design" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Premium Metal Tin Design Directions</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">A broader tin collection showing multiple colours, finishes and narrow-format options for different retail positions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: PAPER TUBES */}
      <section id="paper-tubes" className="py-24 bg-secondary border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[700px] mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Rigid Paper Tube Packaging</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Rigid paper tubes offer a cylindrical packaging route that can scale in height and diameter. They can be developed as small-count or larger-count packs, with colour and print direction adapted to the brand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-white mb-6 overflow-hidden flex items-center justify-center aspect-[4/3]">
                <img src="/images/products/retail-packaging/extracted_5.jpg" alt="Paper Tube Size Family" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Paper Tube Packaging — Mixed Size Family</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">Rigid paper tubes shown in several heights and diameters, including an open tube that demonstrates how pre-rolled cones can be organised inside.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-white mb-6 overflow-hidden flex items-center justify-center aspect-[4/3]">
                <img src="/images/products/retail-packaging/extracted_6.jpg" alt="Paper Tube Colour & Size Range" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Paper Tube Packaging — Colour &amp; Size Range</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">A second paper-tube direction showing how one cylindrical packaging system can scale across sizes, colours and retail counts.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: JARS */}
      <section id="jars" className="py-24 bg-white border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Clear Plastic Jars for Larger Counts</motion.h2>
              <motion.p variants={fadeUp} className="text-[15px] text-muted-foreground leading-[1.8] mb-8">
                Clear screw-lid jars offer a straightforward larger-count format where the product remains visible through the pack. Label design, jar dimensions and internal count can be developed around the final cone specification.
              </motion.p>
              <motion.div variants={fadeUp} className="border-t border-b border-border py-6 my-6">
                <h3 className="font-['Cormorant_Garamond'] text-[22px] font-medium leading-tight mb-2">Clear Plastic Jar Packaging</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">Larger-count clear plastic jars with screw lids. This format makes the contents visible while giving the pack a straightforward bulk-retail presentation.</p>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="border border-border p-6 bg-secondary overflow-hidden flex items-center justify-center">
              <img src="/images/products/retail-packaging/extracted_7.jpg" alt="Clear Plastic Jars" className="w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: INDIVIDUAL / LOW COUNT */}
      <section id="individual" className="py-24 bg-secondary border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[700px] mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Compact Retail Packaging for Pre-Rolled Cones</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Low-count pre-rolled cone packaging can range from individual cone tubes to 3-piece drawer boxes and 6-piece carton formats. These packs are designed around portability, shelf footprint and the number of cones the buyer wants inside one retail unit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                img: "extracted_8.jpg", 
                title: "Individual Cone Tube Packaging", 
                desc: "Single-cone tube concepts shown across multiple lengths and paper colours. A compact format for low-count or individual retail presentation."
              },
              { 
                img: "extracted_9.jpg", 
                title: "6-Piece Retail Box With Cone Loader", 
                desc: "A coffin-style retail box family shown across cone sizes, paired with a cone loader and packing stick as part of the complete pack concept."
              },
              { 
                img: "extracted_10.jpg", 
                title: "3-Piece Drawer Box + Master Box", 
                desc: "A small drawer-style retail box that holds a low cone count, shown together with the larger outer/master box used to group multiple drawer packs."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
                <div className="border border-border p-4 bg-white mb-6 overflow-hidden flex items-center justify-center aspect-square">
                  <img src={`/images/products/retail-packaging/${item.img}`} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">{item.title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PREMIUM BOXES */}
      <section id="premium-boxes" className="py-24 bg-white border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[700px] mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Premium Pre-Rolled Cone Retail Boxes</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Drawer boxes and larger presentation cartons give more space to build a complete retail experience around the cone pack. They can accommodate the main cone product together with supporting pack components where required by the project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {[
              { 
                img: "extracted_11.jpg", 
                title: "Candy Series Drawer Box", 
                desc: "A premium drawer-box direction with an internal tray, shown alongside the matching coloured cones and supporting retail accessories."
              },
              { 
                img: "extracted_12.jpg", 
                title: "Precision Series Retail Kit — 1¼ Size", 
                desc: "A larger premium retail carton combining pre-rolled cones with supporting pack components, designed as a complete presentation rather than a simple low-count box."
              },
              { 
                img: "extracted_13.jpg", 
                title: "Signature Series Retail Kit — King Size", 
                desc: "A larger King Size presentation box using the same premium retail-kit logic with a coordinated cone loader and secondary pack component."
              },
              { 
                img: "extracted_14.jpg", 
                title: "Retail Carton Dieline & Print Planning", 
                desc: "A pre-production artwork reference showing how different retail cartons can be translated into flat dielines before final printing and manufacture."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
                <div className="border border-border p-4 bg-secondary mb-6 overflow-hidden flex items-center justify-center aspect-[4/3]">
                  <img src={`/images/products/retail-packaging/${item.img}`} alt={item.title} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">{item.title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: HANGING */}
      <section id="hanging" className="py-24 bg-secondary border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="border border-border p-6 bg-white overflow-hidden flex items-center justify-center">
              <img src="/images/products/retail-packaging/extracted_15.jpg" alt="Hanging Retail Packs" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Peg-Ready Hanging Retail Packs</motion.h2>
              <motion.p variants={fadeUp} className="text-[15px] text-muted-foreground leading-[1.8] mb-8">
                A hanging pack creates another route to shelf by using vertical peg or hook space. The front can focus on the product presentation while the back carries the information architecture needed for retail.
              </motion.p>
              <motion.div variants={fadeUp} className="border-t border-b border-border py-6 my-6">
                <h3 className="font-['Cormorant_Garamond'] text-[22px] font-medium leading-tight mb-2">Hanging Retail Pack — Front &amp; Back</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">A peg-ready hanging pack shown from both sides. The front presents the colour assortment while the back carries product and size information.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: OUTER */}
      <section id="outer" className="py-24 bg-white border-b border-border scroll-mt-[160px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[700px] mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,50px)] font-medium leading-[1.05] mb-6">Build the Packaging Hierarchy Beyond the Individual Pack</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              Once the individual retail format is approved, larger grouped cartons and master packaging can be developed around it. This keeps the consumer-facing pack, retailer-facing group pack and distribution layer connected.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-secondary mb-6 overflow-hidden flex items-center justify-center aspect-[4/3]">
                <img src="/images/products/retail-packaging/extracted_16.jpg" alt="Handled Multi-Pack Retail Carton" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Handled Multi-Pack Retail Carton</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">A larger handled carton shown with several narrow inner packs. This direction creates a complete hierarchy from individual unit to grouped retail packaging.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="flex flex-col group">
              <div className="border border-border p-4 bg-secondary mb-6 overflow-hidden flex items-center justify-center aspect-[4/3]">
                <img src="/images/products/retail-packaging/extracted_17.jpg" alt="Retail Boxes + Master Carton" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium leading-tight mb-3">Retail Boxes + Master Carton</h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">Three inner retail boxes shown together with a larger shipping/master carton, demonstrating how the consumer-facing box can scale into distribution packaging.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: OEM DEVELOPMENT */}
      <section className="py-20 md:py-24 bg-foreground text-background">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.72fr_1.28fr] gap-12 md:gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-[20px] h-[1px] bg-muted-foreground"></div>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground">From Concept to Final Packaging</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond'] text-[clamp(40px,4.7vw,57px)] font-medium leading-[1.01] text-background">
                Start with the cone. Then engineer the pack around it.
              </motion.h2>
            </motion.div>
            
            <motion.div 
              variants={stagger} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-[#333] border border-[#333]"
            >
              {[
                { num: "01", title: "Cone Format", desc: "Size · paper · colour · filter tip" },
                { num: "02", title: "Retail Count", desc: "How many cones per pack" },
                { num: "03", title: "Pack Structure", desc: "Tin · tube · jar · box · hanging" },
                { num: "04", title: "Artwork", desc: "Branding · print · information hierarchy" },
                { num: "05", title: "Outer Pack", desc: "Display · grouped carton · master" },
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#111] p-5 md:p-6 min-h-[140px] flex flex-col justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#777] block mb-4">{step.num}</span>
                  <div>
                    <b className="block font-['Cormorant_Garamond'] text-[20px] font-medium leading-tight text-white mb-2">{step.title}</b>
                    <small className="block font-sans text-[11px] leading-[1.5] text-[#999]">{step.desc}</small>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section className="py-20 md:py-24 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-[20px] h-[1px] bg-foreground"></div>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground">FAQ · Pre-Rolled Cone Packaging</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond'] text-[clamp(40px,4.7vw,57px)] font-medium leading-[1.01]">
                Common questions before packaging development.
              </motion.h2>
            </motion.div>
            
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="border-t border-border">
              {[
                {
                  q: "What packaging formats can JOJO develop for pre-rolled cones?",
                  a: "JOJO can develop retail concepts using metal tins, rigid paper tubes, clear plastic jars, individual cone tubes, low-count cartons, drawer boxes, hanging packs, premium presentation cartons and corresponding outer or master packaging."
                },
                {
                  q: "Can pre-rolled cone packaging be developed in different sizes?",
                  a: "Yes. The packaging structure can be adapted around the selected cone size and planned retail count. Final dimensions should be confirmed after the cone format and internal arrangement are approved."
                },
                {
                  q: "Can JOJO develop custom metal tins for pre-rolled cones?",
                  a: "Yes. Metal tin concepts can be developed in different footprints, depths, colours and artwork directions depending on the selected cone size, count and retail position."
                },
                {
                  q: "Can pre-rolled cones be packed in paper tubes or jars?",
                  a: "Yes. Rigid paper tubes can be developed for different cone lengths and counts, while clear plastic jars can be used for larger-count retail or wholesale-style presentation."
                },
                {
                  q: "Can JOJO develop low-count retail boxes for cones?",
                  a: "Yes. Low-count concepts can include individual cone tubes, small drawer boxes, 6-piece carton formats and other compact retail structures developed around the project brief."
                },
                {
                  q: "Can retail packs be supplied with outer or master packaging?",
                  a: "Yes. Once the individual retail unit is approved, corresponding display, outer or master packaging can be developed around the final dimensions and pack count."
                },
                {
                  q: "Can these packaging concepts be developed under a private label?",
                  a: "Yes. The retail format can be taken into the JOJO Private Label & OEM process to define cone size, paper, colour, filter tip, branding, artwork and final packaging under the buyer's brand."
                }
              ].map((faq, i) => (
                <motion.details key={i} variants={fadeUp} className="group border-b border-border">
                  <summary className="flex items-center justify-between cursor-pointer py-6 font-['Cormorant_Garamond'] text-[22px] font-medium list-none">
                    {faq.q}
                    <span className="ml-6 flex-shrink-0 w-6 h-6 flex items-center justify-center border border-border rounded-full group-open:rotate-180 transition-transform duration-300">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-[14px] text-muted-foreground leading-[1.8] pb-6 pr-12">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section className="py-24 bg-foreground text-background border-t border-[#333]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_400px] gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-[20px] h-[1px] bg-muted-foreground"></div>
                <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#aaa]">Retail Packaging → Private Label &amp; OEM</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond'] text-[clamp(40px,4.7vw,58px)] font-medium leading-[1] text-background mb-6">
                Found a packaging direction that fits your market?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[14.5px] leading-[1.8] text-[#aaa] max-w-[55ch]">
                Take the selected format into the JOJO Private Label &amp; OEM process to define cone size,
                paper base, paper colour, filter tip, tip branding, artwork, retail packaging and outer pack.
              </motion.p>
            </motion.div>
            
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-4">
              <motion.a variants={fadeUp} href="/private-label" className="bg-background text-foreground py-4 px-6 flex items-center justify-between font-sans text-[11.5px] uppercase tracking-[0.06em] font-semibold hover:bg-background/90 transition-colors">
                Build Your Pre-Rolled Cone Brief
                <ArrowRight size={18} />
              </motion.a>
              <motion.a variants={fadeUp} href="mailto:info@jojopapers.com?subject=Pre-Rolled%20Cone%20Retail%20Packaging%20Enquiry" className="border border-[#555] text-background py-4 px-6 text-center font-sans text-[11px] uppercase tracking-[0.06em] font-medium hover:border-[#888] transition-colors">
                Send an Existing Packaging Brief
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RetailPackaging;
