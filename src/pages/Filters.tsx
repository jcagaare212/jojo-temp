import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const stagger: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Filters() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[73px] md:pt-[115px] bg-background text-foreground overflow-hidden font-sans">
      <SEO
        title="Filter Tips Manufacturer | Spiral & M-Shape Custom Tips"
        description="Precision-engineered filter tips in Spiral and M-Shape constructions. Custom logo printing, unbleached brown, bleached white, and custom paper colours."
        canonical="https://jojopapers.com/filters"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "JOJO Precision Filter Tips",
          "description": "Spiral and M-Shape rolled filter tips engineered for optimal airflow, structural support, and particulate retention.",
          "brand": {
            "@type": "Brand",
            "name": "JOJO Papers"
          }
        }}
      />
      <Breadcrumb items={[{ label: "Filter Tips" }]} />

      {/* HERO SECTION */}
      <section className="py-12 md:py-20 bg-secondary border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_0.92fr] gap-12 md:gap-16 items-end">
            <motion.div className="pb-8 md:pb-12" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
              <motion.div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-3" variants={fadeInUp}>
                <span className="w-10 h-[1px] bg-border block"></span>
                Better Sessions, Live Cleaner
              </motion.div>
              <motion.h1 className="text-[clamp(40px,5.5vw,68px)] leading-[1.06] mb-4 font-['Cormorant_Garamond'] font-semibold" variants={fadeInUp}>
                Filter Tips
              </motion.h1>
              <motion.p className="font-sans text-[13.5px] uppercase tracking-[0.1em] text-foreground mb-2.5" variants={fadeInUp}>
                Small detail. Bigger session.
              </motion.p>
              <motion.p className="text-[18px] text-muted-foreground max-w-[44ch] leading-relaxed font-['Cormorant_Garamond'] italic" variants={fadeInUp}>
                Your roll. Your style. Your JOJO.
              </motion.p>
              
              <motion.div className="mt-8 flex gap-4 flex-wrap" variants={fadeInUp}>
                <a href="#construction" className="bg-foreground text-background text-[12px] font-semibold uppercase tracking-widest px-6 py-3.5 hover:bg-foreground/90 transition-colors">
                  See the Constructions
                </a>
                <a href="#colours" className="bg-transparent text-foreground border border-foreground text-[12px] font-semibold uppercase tracking-widest px-6 py-3.5 hover:bg-foreground hover:text-background transition-colors">
                  View Colours &amp; Print
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div className="relative w-full h-[400px] md:h-[480px] bg-white flex items-center justify-center overflow-hidden border border-border" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1}}>
               <img src="/images/products/tips/extracted/00_jojo_pre-rolled_cones_with_coloured_filt.webp" alt="Cones fitted with JOJO filter tips" className="w-full h-full object-cover" />
               <div className="absolute left-0 right-0 bottom-0 p-4 md:p-[16px_20px] bg-gradient-to-t from-black/75 to-transparent">
                  <span className="text-white/95 font-sans text-[11px] tracking-widest uppercase">CONES FITTED WITH JOJO FILTER TIPS</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-secondary pb-10 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border pt-10">
            <div className="pr-4 md:pr-6 border-r border-b md:border-b-0 border-border pb-6 md:pb-0">
              <div className="font-['Cormorant_Garamond'] text-[32px] md:text-[36px] font-semibold text-foreground">2</div>
              <div className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">Tip constructions,<br/>Spiral and M-Shape</div>
            </div>
            <div className="px-4 md:px-6 md:border-r border-b md:border-b-0 border-border pb-6 md:pb-0">
              <div className="font-['Cormorant_Garamond'] text-[32px] md:text-[36px] font-semibold text-foreground">6</div>
              <div className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">Standing colours,<br/>ready to ship</div>
            </div>
            <div className="pr-4 md:px-6 border-r border-border pt-6 md:pt-0">
              <div className="font-['Cormorant_Garamond'] text-[32px] md:text-[36px] font-semibold text-foreground">5</div>
              <div className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">Print styles,<br/>logo to full custom</div>
            </div>
            <div className="pl-4 md:pl-6 pt-6 md:pt-0">
              <div className="font-['Cormorant_Garamond'] text-[32px] md:text-[36px] font-semibold text-foreground">100%</div>
              <div className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">Food-grade paper,<br/>every tip</div>
            </div>
          </div>
        </div>
      </section>



      {/* INTRO SECTION */}
      <section className="py-14 md:py-20 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
            <div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-3">The Details</div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,3.8vw,42px)] font-medium leading-[1.08]">
                A small piece of paper. It changes the whole roll.
              </h2>
            </div>
            <div className="text-[15px] md:text-[16px] text-muted-foreground leading-[1.75] pt-1 md:pt-6">
              <p className="mb-4">
                Every JOJO cone ships with a filter tip built to a real internal structure, not just a rolled up scrap. The tip holds the cone open at the mouth end, keeps the pack firm through handling and travel, and gives every session a clean, consistent pull from first hit to last.
              </p>
              <p>
                We build two tip constructions, Spiral Tip and M-Shape Tip, plus a full range of plain colours, printed variants, and paper tip styles, so the tip can match the cone, the brand, or the order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTIONS */}
      <section id="construction" className="bg-secondary/40 py-14 md:py-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[620px] mx-auto mb-12 md:mb-16">
            <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-3">Structural Design</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,3.8vw,44px)] font-medium leading-[1.08] mb-3">
              Two constructions. Both built for airflow.
            </h2>
            <p className="text-[15px] text-muted-foreground leading-[1.6]">
              Each tip starts as a flat piece of food-grade paper. How it's folded determines how air moves through it, and how well it holds the cone open.
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Construction 1: Spiral Tip */}
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-center bg-white border border-border p-6 md:p-10 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="bg-white border border-border p-4 flex items-center justify-center">
                  <img src="/images/products/tips/extracted/02_spiral_tip_structural_diagram.webp" alt="Spiral Tip structural diagram" className="w-full max-h-[220px] object-contain mix-blend-multiply" />
                </div>
                <div className="bg-white border border-border p-2 flex items-center justify-center">
                  <img src="/images/products/tips/extracted/03_spiral_tips_in_five_colours__classic_flo.webp" alt="Spiral Tips in five colours" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-9 h-9 border border-[#b3773f] text-[#8a5a2e] font-mono text-[13px] rounded-full mb-4">
                  01
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[28px] md:text-[32px] font-medium mb-2">Spiral Tip</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.65] mb-6">
                  Classic flow, smooth pull. The paper is wound into a continuous spiral, which gives the tip a firm core while leaving open channels for air to travel through.
                </p>
                <div className="border-t border-border">
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">01</span>
                    <p className="text-[13.5px] text-muted-foreground">The paper is <strong className="text-foreground font-medium">rolled into a cylinder.</strong></p>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">02</span>
                    <p className="text-[13.5px] text-muted-foreground">The inner end is <strong className="text-foreground font-medium">guided into a spiral formation.</strong></p>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">03</span>
                    <p className="text-[13.5px] text-muted-foreground">The <strong className="text-foreground font-medium">spiral structure</strong> is formed.</p>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">04</span>
                    <p className="text-[13.5px] text-muted-foreground">The spiral <strong className="text-foreground font-medium">supports the cone</strong> and keeps it open.</p>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">05</span>
                    <p className="text-[13.5px] text-muted-foreground">Air flows smoothly through the spiral for <strong className="text-foreground font-medium">consistent use.</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction 2: M-Shape Tip */}
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 items-center bg-white border border-border p-6 md:p-10 shadow-xs">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-9 h-9 border border-[#b3773f] text-[#8a5a2e] font-mono text-[13px] rounded-full mb-4">
                  02
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[28px] md:text-[32px] font-medium mb-2">M-Shape Tip</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.65] mb-6">
                  A folded M sits inside the tip instead of a spiral, opening a set of even channels along its length. Built for a firmer pack and a steady draw.
                </p>
                <div className="border-t border-border">
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3.5 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">01</span>
                    <p className="text-[13.5px] text-muted-foreground">An <strong className="text-foreground font-medium">M-shaped fold</strong> is set inside the tip.</p>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3.5 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">02</span>
                    <p className="text-[13.5px] text-muted-foreground">The fold creates <strong className="text-foreground font-medium">gentle channels</strong> through the tip.</p>
                  </div>
                  <div className="grid grid-cols-[28px_1fr] gap-3 py-3.5 border-b border-border">
                    <span className="font-mono text-[11px] text-[#b3773f] pt-0.5">03</span>
                    <p className="text-[13.5px] text-muted-foreground">Air passes through <strong className="text-foreground font-medium">evenly</strong> while keeping the cone <strong className="text-foreground font-medium">firm and easy to pack.</strong></p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-4">
                <div className="bg-white border border-border p-4 flex items-center justify-center">
                  <img src="/images/products/tips/extracted/04_m-shape_tip_structural_diagram.webp" alt="M-Shape Tip structural diagram" className="w-full max-h-[220px] object-contain mix-blend-multiply" />
                </div>
                <div className="bg-white border border-border p-2 flex items-center justify-center">
                  <img src="/images/products/tips/extracted/05_jojo_pre-rolled_cone_with_m-shape_tip.webp" alt="JOJO pre-rolled cone with M-Shape tip" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLOURS & PRINT OPTIONS */}
      <section id="colours" className="py-14 md:py-20 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[620px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-3">Colours &amp; Print Options</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,3.8vw,44px)] font-medium leading-[1.08] mb-3">Plain. Printed. Custom. Yours.</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.6]">
              Six standing colours, ready to ship, plus logo print, icon print, pattern, art, and full custom tips for private label runs.
            </p>
          </div>

          <div className="bg-white border border-border p-4 md:p-8 flex justify-center mb-8 shadow-xs">
            <img src="/images/products/tips/extracted/06_jojo_filter_tip_colours_and_print_option.webp" alt="Colours and Print Options" className="max-w-full h-auto object-contain mix-blend-multiply" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-border pt-6">
            <div className="p-4 text-center border-r border-b md:border-b-0 border-border">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground leading-snug block">Premium<br/>Food-Grade Paper</span>
            </div>
            <div className="p-4 text-center border-r border-b md:border-b-0 border-border">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground leading-snug block">Smooth &amp;<br/>Consistent Airflow</span>
            </div>
            <div className="p-4 text-center border-r border-b sm:border-b-0 border-border">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground leading-snug block">Strong &amp;<br/>Reliable Structure</span>
            </div>
            <div className="p-4 text-center border-r border-border">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground leading-snug block">Custom Print &amp;<br/>Colour Options</span>
            </div>
            <div className="p-4 text-center col-span-2 sm:col-span-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground leading-snug block">OEM / Private Label<br/>Available</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* STYLES IN ACTION */}
      <section className="bg-white py-14 md:py-20 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-3">Styles In Action</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,3.8vw,44px)] font-medium leading-[1.08] mb-3">On the cone, up close.</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.6]">
              How the colours, prints, and constructions actually look once they're rolled.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-border border border-border shadow-xs">
             <figure className="bg-white relative p-6 flex flex-col min-h-[380px] md:min-h-[440px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/extracted/07_white_cone_with_blue_printed_filter_tip.webp" alt="White cone with blue printed filter tip" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground text-left w-full">PRINTED TIP · BLUE</figcaption>
             </figure>
             <figure className="bg-white relative p-6 flex flex-col min-h-[380px] md:min-h-[440px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/extracted/08_rolled_filter_tips_in_printed_patterns.webp" alt="Rolled filter tips in printed patterns" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground text-left w-full">ROLLED DETAIL</figcaption>
             </figure>
             <figure className="bg-white relative p-6 flex flex-col min-h-[380px] md:min-h-[440px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/extracted/09_filter_tips_with_jojo_branding_detail.webp" alt="Filter tips with JOJO branding detail" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground text-left w-full">BRAND DETAIL</figcaption>
             </figure>
             <figure className="bg-white relative p-6 flex flex-col min-h-[380px] md:min-h-[440px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/extracted/10_cones_with_coloured_filter_tips_lined_up.webp" alt="Cones with coloured filter tips lined up" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-4 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-muted-foreground text-left w-full">FULL RANGE</figcaption>
             </figure>
          </div>
        </div>
      </section>

      {/* WORDMARK TRANSITION BAND */}
      <section className="py-12 bg-secondary/30 border-b border-border flex items-center justify-center">
        <div className="max-w-[540px] px-6">
          <img 
            src="/images/products/tips/extracted/11_jojo_papers_filter_tips_wordmark.webp" 
            alt="JOJO Papers Filter Tips wordmark" 
            className="w-full h-auto object-contain mix-blend-multiply" 
          />
        </div>
      </section>

      {/* PRINTED TIPS SHOWCASE */}
      <section className="py-14 md:py-20 bg-secondary/40 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[640px] mx-auto mb-10 md:mb-12">
            <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-3">Printed Tips</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,3.8vw,44px)] font-medium leading-[1.08] mb-3">Make it yours.</h2>
            <p className="text-[15px] text-muted-foreground leading-[1.6]">
              From a single JOJO wordmark to a fully custom pattern or icon set, every print option runs on the same Spiral or M-Shape construction underneath.
            </p>
          </div>

          <div className="bg-white border border-border p-4 md:p-8 shadow-xs flex items-center justify-center">
            <img 
              src="/images/products/tips/extracted/12_jojo_printed_filter_tips.webp" 
              alt="JOJO printed filter tips make it yours" 
              className="w-full max-h-[520px] object-contain mix-blend-multiply" 
            />
          </div>
        </div>
      </section>

      {/* CRAFT GRID / QUALITY CONTROL */}
      <section className="bg-foreground text-background py-16 md:py-24 border-b border-[#222]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[620px] mx-auto mb-12">
            <div className="font-mono text-[11px] text-[#8f8f8f] uppercase tracking-[0.2em] mb-3">Made By Hand</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,3.8vw,44px)] font-medium leading-[1.08] mb-3">Every tip, rolled and checked one at a time.</h2>
            <p className="text-[15px] text-[#bfbfbf] leading-[1.6]">
              Spiral and M-Shape tips are formed and inspected individually before they ever reach a cone — the same care that goes into every JOJO pack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-[2px] bg-[#2a2a2a] mb-10">
            <div className="bg-white flex items-center justify-center p-6 md:p-8">
               <img src="/images/products/tips/extracted/14_hand-rolling_spiral_tip_filter_tips.webp" alt="Hand-rolling Spiral Tip filter tips" className="w-full h-[360px] md:h-[420px] object-contain mix-blend-multiply" />
            </div>
            <div className="bg-white flex items-center justify-center p-6 md:p-8">
               <img src="/images/products/tips/extracted/15_hand-rolling_m-shape_tip_filter_tips.webp" alt="Hand-rolling M-Shape Tip filter tips" className="w-full h-[360px] md:h-[420px] object-contain mix-blend-multiply" />
            </div>
          </div>
          
          <p className="max-w-[600px] mx-auto text-center font-['Cormorant_Garamond'] italic text-[17px] text-[#e6e6e6]">
            It takes longer, but it's the only way to guarantee the airflow is right.
          </p>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/50 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
            <div>
              <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-3">Get In Touch</div>
              <h2 className="font-['Cormorant_Garamond'] text-[32px] md:text-[38px] font-medium leading-[1.08] mb-4">
                Request a sample or book a consultation.
              </h2>
              <p className="text-[15px] text-muted-foreground leading-[1.7] mb-6">
                Tell us what you're working on and we'll follow up with the right tip construction, colour, or print set-up, whether that's a sample pack or a full sourcing conversation.
              </p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-3 text-[14px] text-muted-foreground items-start">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#b3773f] mt-2 shrink-0"></span>
                  Sample packs of Spiral and M-Shape tips
                </li>
                <li className="flex gap-3 text-[14px] text-muted-foreground items-start">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#b3773f] mt-2 shrink-0"></span>
                  Custom colour and print consultation
                </li>
                <li className="flex gap-3 text-[14px] text-muted-foreground items-start">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#b3773f] mt-2 shrink-0"></span>
                  Private label and OEM set-up support
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:justify-end md:items-end w-full">
              <Link
                to="/contact"
                className="bg-foreground text-background py-4 px-8 font-mono text-[11.5px] uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors text-center w-full sm:w-auto md:w-[260px] border border-foreground shadow-xs"
              >
                Request Samples
              </Link>
              <Link
                to="/consultation"
                className="bg-transparent text-foreground py-4 px-8 font-mono text-[11.5px] uppercase tracking-wider font-medium hover:bg-foreground hover:text-background transition-colors text-center w-full sm:w-auto md:w-[260px] border border-foreground shadow-xs"
              >
                Book a Consultation
              </Link>
              <Link
                to="/private-label"
                className="inline-flex items-center justify-center gap-2 pt-2 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                Build Private Label Brief &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CAPABILITIES CTA */}
      <section className="py-16 md:py-24 bg-[#0d0d0d] text-white text-center">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-2.5 mb-4 font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 before:content-[''] before:w-5 before:h-px before:bg-white/60">
            Precision In Every Detail
          </div>
          <h2 className="text-white text-[clamp(28px,3.8vw,44px)] font-medium max-w-[22ch] mx-auto mb-4 leading-tight font-['Cormorant_Garamond']">
            Partner with JOJO for your next production run.
          </h2>
          <p className="text-white/65 text-[15px] max-w-[48ch] mx-auto mb-8 leading-relaxed">
            Bulk cone counts, rolling papers, filter tips and complete private-label systems — one manufacturing partner, one standard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/20 border border-white/20 max-w-[800px] mx-auto">
            <Link
              to="/pre-rolled-cones"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[11.5px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Pre-Rolled Cones
            </Link>
            <Link
              to="/bulk-cones"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[11.5px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Bulk Cones
            </Link>
            <Link
              to="/rolling-papers"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[11.5px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Rolling Papers
            </Link>
            <Link
              to="/contact"
              className="bg-[#0d0d0d] py-5 px-3 font-mono text-[11.5px] tracking-[0.05em] uppercase text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Contact JOJO
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
