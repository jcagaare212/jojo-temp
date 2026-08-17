import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
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
      <Breadcrumb items={[{ label: "Filter Tips" }]} />

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-secondary border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_0.92fr] gap-16 items-end">
            <motion.div className="pb-16" initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
              <motion.div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-7 flex items-center gap-3" variants={fadeInUp}>
                <span className="w-10 h-[1px] bg-border block"></span>
                Better Sessions, Live Cleaner
              </motion.div>
              <motion.h1 className="text-[clamp(44px,6vw,72px)] leading-[1.06] mb-5 font-['Cormorant_Garamond'] font-semibold" variants={fadeInUp}>
                Filter Tips
              </motion.h1>
              <motion.p className="font-sans text-[13.5px] uppercase tracking-[0.1em] text-foreground mb-2.5" variants={fadeInUp}>
                Small detail. Bigger session.
              </motion.p>
              <motion.p className="text-[19px] text-muted-foreground max-w-[44ch] leading-relaxed font-['Cormorant_Garamond'] italic" variants={fadeInUp}>
                Your roll. Your style. Your JOJO.
              </motion.p>
              
              <motion.div className="mt-10 flex gap-4 flex-wrap" variants={fadeInUp}>
                <a href="#construction" className="bg-foreground text-background text-[13px] font-semibold uppercase tracking-widest px-6 py-3 hover:bg-foreground/90 transition-colors">
                  See the Constructions
                </a>
                <a href="#colours" className="bg-transparent text-foreground border border-foreground text-[13px] font-semibold uppercase tracking-widest px-6 py-3 hover:bg-foreground hover:text-background transition-colors">
                  View Colours &amp; Print
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div className="relative w-full h-[520px] bg-white flex items-center justify-center overflow-hidden rounded-sm" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1}}>
               <img src="/images/products/tips/extracted_1.webp" alt="Hero Media" className="w-full h-full object-cover" />
               <div className="absolute left-0 right-0 bottom-0 p-4 md:p-[18px_22px] bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white/90 font-sans text-[11px] tracking-widest uppercase">CONES FITTED WITH JOJO FILTER TIPS</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-secondary pb-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-border pt-12">
            <div className="md:pr-6 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 pt-8 md:pt-0">
              <div className="font-['Cormorant_Garamond'] text-[34px] font-semibold text-foreground">2</div>
              <div className="text-[13.5px] text-muted-foreground mt-2 leading-relaxed">Tip constructions,<br/>Spiral and M-Shape</div>
            </div>
            <div className="md:px-6 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 pt-8 md:pt-0">
              <div className="font-['Cormorant_Garamond'] text-[34px] font-semibold text-foreground">6</div>
              <div className="text-[13.5px] text-muted-foreground mt-2 leading-relaxed">Standing colours,<br/>ready to ship</div>
            </div>
            <div className="md:px-6 border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 pt-8 md:pt-0">
              <div className="font-['Cormorant_Garamond'] text-[34px] font-semibold text-foreground">5</div>
              <div className="text-[13.5px] text-muted-foreground mt-2 leading-relaxed">Print styles,<br/>logo to full custom</div>
            </div>
            <div className="md:pl-6 pt-8 md:pt-0">
              <div className="font-['Cormorant_Garamond'] text-[34px] font-semibold text-foreground">100%</div>
              <div className="text-[13.5px] text-muted-foreground mt-2 leading-relaxed">Food-grade paper,<br/>every tip</div>
            </div>
          </div>
        </div>
      </section>



      {/* INTRO SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 items-start">
            <div>
              <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-4">The Details</div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,44px)] font-medium leading-[1.06]">
                A small piece of paper. It changes the whole roll.
              </h2>
            </div>
            <div className="text-[16px] text-muted-foreground leading-[1.75] pt-1 md:pt-8">
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
      <section id="construction" className="bg-secondary pb-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-[600px] mx-auto pt-20 md:pt-24 pb-12 md:pb-16">
            <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-4">Structural Design</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,44px)] font-medium leading-[1.06] mb-4">
              Two constructions. Both built for airflow.
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">
              Each tip starts as a flat piece of food-grade paper. How it's folded determines how air moves through it, and how well it holds the cone open.
            </p>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Construction 1: M-Shape */}
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center border-t border-border pt-16">
              <div className="bg-white border border-border p-5">
                <img src="/images/products/tips/m-shape-tip.webp" alt="M-Shape Construction" className="w-full h-auto object-contain mix-blend-multiply" />
              </div>
              <div className="py-4 md:py-8">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-[#b3773f] text-[#8a5a2e] font-sans text-[13.5px] rounded-full mb-5">
                  1
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[30px] font-medium mb-3">M-Shape Tip</h3>
                <p className="text-[16px] text-muted-foreground leading-[1.7] mb-8">
                  The industry standard for pre-rolled cones. The paper is folded into a tight 'M' or 'W' shape before rolling, creating a strong internal truss.
                </p>
                <div className="border-t border-border">
                  <div className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b border-border">
                    <span className="font-sans text-[12px] text-[#b3773f] pt-0.5">01</span>
                    <p className="text-[14.5px] text-muted-foreground leading-[1.5]">
                      <strong className="text-foreground font-semibold">Structure:</strong> The internal folds press outward against the outer wrap, keeping the tip rigid and round.
                    </p>
                  </div>
                  <div className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b border-border">
                    <span className="font-sans text-[12px] text-[#b3773f] pt-0.5">02</span>
                    <p className="text-[14.5px] text-muted-foreground leading-[1.5]">
                      <strong className="text-foreground font-semibold">Airflow:</strong> Creates multiple large air channels for an open, easy draw.
                    </p>
                  </div>
                  <div className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b border-border">
                    <span className="font-sans text-[12px] text-[#b3773f] pt-0.5">03</span>
                    <p className="text-[14.5px] text-muted-foreground leading-[1.5]">
                      <strong className="text-foreground font-semibold">Blockage:</strong> The tight angles of the 'M' fold catch ash and debris before it reaches the mouth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction 2: Spiral Shape */}
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center border-t border-border pt-16">
              <div className="order-2 md:order-1 py-4 md:py-8">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-[#b3773f] text-[#8a5a2e] font-sans text-[13.5px] rounded-full mb-5">
                  2
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-[30px] font-medium mb-3">Spiral Tip</h3>
                <p className="text-[16px] text-muted-foreground leading-[1.7] mb-8">
                  Also known as an 'S' tip or scroll tip. The paper is rolled inward in a continuous curve rather than folded, creating a tighter, more restrictive center.
                </p>
                <div className="border-t border-border">
                  <div className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b border-border">
                    <span className="font-sans text-[12px] text-[#b3773f] pt-0.5">01</span>
                    <p className="text-[14.5px] text-muted-foreground leading-[1.5]">
                      <strong className="text-foreground font-semibold">Structure:</strong> Excellent rigidity at the outer edge, with a dense, coiled core.
                    </p>
                  </div>
                  <div className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b border-border">
                    <span className="font-sans text-[12px] text-[#b3773f] pt-0.5">02</span>
                    <p className="text-[14.5px] text-muted-foreground leading-[1.5]">
                      <strong className="text-foreground font-semibold">Airflow:</strong> More restrictive than an M-Shape. Pulls slower, which can help regulate burn rate.
                    </p>
                  </div>
                  <div className="grid grid-cols-[30px_1fr] gap-4 py-4 border-b border-border">
                    <span className="font-sans text-[12px] text-[#b3773f] pt-0.5">03</span>
                    <p className="text-[14.5px] text-muted-foreground leading-[1.5]">
                      <strong className="text-foreground font-semibold">Blockage:</strong> The dense spiral provides maximum protection against Scooby Snacks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-4">
                 <div className="bg-white border border-border p-4">
                   <img src="/images/products/tips/spiral-tip.webp" alt="Spiral Tip Construction" className="w-full h-auto object-contain mix-blend-multiply" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLOURS & PRINT OPTIONS */}
      <section id="colours" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Swatches & Icons Image */}
          <div className="flex justify-center mb-16 px-4">
            <img src="/images/products/tips/construction/Colours%20&%20Print%20filter.jpg" alt="Colours and Print Options" className="max-w-full h-auto object-contain mix-blend-multiply" />
          </div>
        </div>
      </section>
      
      {/* STYLES IN ACTION */}
      <section className="bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-[0.2em] mb-4">Styles in Action</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,44px)] font-semibold leading-[1.06] mb-4">On the cone, up close.</h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6]">
              How the colours, prints, and constructions actually look once they're rolled.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] bg-border border-t border-border">
             <figure className="bg-white relative p-6 flex flex-col h-[500px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/construction/10.webp" alt="Printed Tip Blue" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-6 font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#b3773f] text-left w-full">PRINTED TIP - BLUE</figcaption>
             </figure>
             <figure className="bg-white relative p-6 flex flex-col h-[500px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/construction/15.webp" alt="Rolled Detail" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-6 font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#b3773f] text-left w-full">ROLLED DETAIL</figcaption>
             </figure>
             <figure className="bg-white relative p-6 flex flex-col h-[500px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/construction/16.webp" alt="Brand Detail" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-6 font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#b3773f] text-left w-full">BRAND DETAIL</figcaption>
             </figure>
             <figure className="bg-white relative p-6 flex flex-col h-[500px]">
               <div className="flex-1 flex items-center justify-center">
                 <img src="/images/products/tips/construction/17.webp" alt="Full Range" className="w-full h-full object-contain mix-blend-multiply" />
               </div>
               <figcaption className="pt-6 font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#b3773f] text-left w-full">FULL RANGE</figcaption>
             </figure>
          </div>
        </div>
      </section>

      {/* CRAFT GRID */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <div className="font-sans text-[11px] text-[#8f8f8f] uppercase tracking-[0.2em] mb-4">Quality Control</div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(34px,4vw,44px)] font-medium leading-[1.06] mb-4">Every tip, rolled and checked one at a time.</h2>
            <p className="text-[16px] text-[#bfbfbf] leading-[1.6]">
              We don't use extruded cardboard tubes or pre-formed plugs. Every JOJO tip is folded and rolled from a flat sheet of heavy-weight paper, then inspected for tension and shape before it ever touches a cone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-[2px] bg-[#2a2a2a] mb-12">
            <div className="bg-white flex items-center justify-center p-8">
               <img src="/TIPS/Types Of Tip/M Shape Tip/3081a262-9c8d-4385-b5dc-acd12baa9693.png" alt="Crafting Tips 1" className="w-full h-[420px] object-contain mix-blend-multiply" />
            </div>
            <div className="bg-white flex items-center justify-center p-8">
               <img src="/TIPS/Types Of Tip/Spiral /75a282df-db19-4b75-8362-461adea44ff7.png" alt="Crafting Tips 2" className="w-full h-[420px] object-contain mix-blend-multiply" />
            </div>
          </div>
          
          <p className="max-w-[600px] mx-auto text-center font-['Cormorant_Garamond'] italic text-[18.5px] text-[#e6e6e6]">
            It takes longer, but it's the only way to guarantee the airflow is right.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-secondary border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-[35px] font-medium leading-[1.06] mb-5">
                Get In Touch
              </h2>
              <p className="text-[16px] text-muted-foreground leading-[1.7] mb-7">
                <strong className="text-foreground font-medium block mb-2">Request a sample or book a consultation.</strong>
                Tell us what you're working on and we'll follow up with the right tip construction, colour, or print set-up, whether that's a sample pack or a full sourcing conversation.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3 text-[14.5px] text-muted-foreground items-start">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#b3773f] mt-2 shrink-0"></span>
                  Sample packs of Spiral and M-Shape tips
                </li>
                <li className="flex gap-3 text-[14.5px] text-muted-foreground items-start">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#b3773f] mt-2 shrink-0"></span>
                  Custom colour and print consultation
                </li>
                <li className="flex gap-3 text-[14.5px] text-muted-foreground items-start">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#b3773f] mt-2 shrink-0"></span>
                  Private label and OEM set-up support
                </li>
              </ul>
            </div>
            <div className="flex md:justify-end">
                <Link to="/contact" className="bg-foreground text-background py-4 px-12 font-sans text-[13px] uppercase tracking-[0.01em] font-semibold hover:bg-foreground/90 transition-colors inline-block text-center w-full sm:w-auto">
                  Contact Us
                </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
