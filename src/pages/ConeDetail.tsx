import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const coneData: Record<string, any> = {
  "dogwalker": {
    sizeNum: "70mm Pre-Rolled Cone",
    name: "DogWalker",
    tagline: "JOJO DogWalker is the most compact standard cone format in the range, with a 70mm overall length and a 20mm integrated filter tip.",
    specs: {
      "Dimensions": "70mm Length\n20mm Tip\nØ5.0mm / Ø8.5mm",
      "Paper": "13-14 GSM\nFrench & Austrian Mills",
      "Filter Tip": "140-160 GSM\nM/W or Spiral Shape",
      "Branding": "Unbranded Standard\nCustom Printing Available"
    },
    img: "/images/products/cones/dogwalker-mini-70mm.png"
  },
  "mini": {
    sizeNum: "78mm Pre-Rolled Cone",
    name: "Mini",
    tagline: "Slightly longer than the DogWalker, the Mini offers a comfortable draw and a smooth burn. It's the perfect middle ground for a solo session.",
    specs: {
      "Dimensions": "78mm Length\n20mm Tip\nØ5.0mm / Ø9.0mm",
      "Paper": "13-14 GSM\nFrench & Austrian Mills",
      "Filter Tip": "140-160 GSM\nM/W or Spiral Shape",
      "Branding": "Unbranded Standard\nCustom Printing Available"
    },
    img: "/images/products/cones/mini-78mm.png"
  },
  "1-1-4-size": {
    sizeNum: "84mm Pre-Rolled Cone",
    name: "1¼ Size",
    tagline: "The 1¼ Size is the most popular and versatile cone in the market. It strikes the perfect balance between capacity and burn time.",
    specs: {
      "Dimensions": "84mm Length\n26mm Tip\nØ5.5mm / Ø10.0mm",
      "Paper": "13-14 GSM\nFrench & Austrian Mills",
      "Filter Tip": "140-160 GSM\nM/W or Spiral Shape",
      "Branding": "Unbranded Standard\nCustom Printing Available"
    },
    img: "/images/products/cones/1-1-4-size-84mm.png"
  },
  "98mm-special": {
    sizeNum: "98mm Pre-Rolled Cone",
    name: "98mm Special",
    tagline: "Designed for those who want a bit more out of their session, the 98mm Special provides an extended burn and holds enough volume for sharing.",
    specs: {
      "Dimensions": "98mm Length\n26mm Tip\nØ5.5mm / Ø11.5mm",
      "Paper": "13-14 GSM\nFrench & Austrian Mills",
      "Filter Tip": "140-160 GSM\nM/W or Spiral Shape",
      "Branding": "Unbranded Standard\nCustom Printing Available"
    },
    img: "/images/products/cones/98mm-special.png"
  },
  "king-size": {
    sizeNum: "109mm Pre-Rolled Cone",
    name: "King Size",
    tagline: "The King Size is crafted for maximum capacity. Whether you're passing it around with friends or enjoying an extended session.",
    specs: {
      "Dimensions": "109mm Length\n26mm Tip\nØ5.5mm / Ø12.5mm",
      "Paper": "13-14 GSM\nFrench & Austrian Mills",
      "Filter Tip": "140-160 GSM\nM/W or Spiral Shape",
      "Branding": "Unbranded Standard\nCustom Printing Available"
    },
    img: "/images/products/cones/king-size-109mm.png"
  }
};

const colors = [
  { name: "Unbleached Brown", paper: "#c89d66", tip: "#b77b3e" },
  { name: "Bleached White", paper: "#fbfbfb", tip: "#e2e2e2" },
  { name: "Rose Pink", paper: "#f0b8c6", tip: "#d99fb3" },
  { name: "Mint Green", paper: "#a4d3b6", tip: "#8bc2a2" },
  { name: "Lavender Purple", paper: "#b4a0cd", tip: "#9a87b5" },
  { name: "Midnight Black", paper: "#2b2b2b", tip: "#1c1c1c" },
  { name: "Ocean Blue", paper: "#a4c4e0", tip: "#8caacf" }
];

const coneOrder = ["dogwalker", "mini", "1-1-4-size", "98mm-special", "king-size"];

const ConeDetail = () => {
  const { sizeId } = useParams();
  const navigate = useNavigate();
  const data = coneData[sizeId || "dogwalker"];
  const [activeColor, setActiveColor] = useState(colors[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveColor(colors[0]);
  }, [sizeId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <h1 className="text-2xl font-serif">Size not found.</h1>
      </div>
    );
  }

  const stagger: Variants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  return (
    <div className="bg-background text-foreground font-sans overflow-hidden">
      
      {/* BREADCRUMB */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-8 mt-24">
        <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-widest">
          <Link to="/" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground">Home</Link> / <Link to="/pre-rolled-cones" className="hover:text-foreground transition-colors pb-0.5 border-b border-transparent hover:border-foreground">Pre-Rolled Cones</Link> / {data.name}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-4 pb-14">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[0.86fr_1.14fr] gap-10 md:gap-[70px] items-center">
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={stagger}>
              <motion.div className="eyebrow flex items-center gap-2.5 mb-3 font-sans text-[10px] tracking-[0.14em] uppercase text-foreground before:content-[''] before:w-5 before:h-[1px] before:bg-foreground" variants={fadeInUp}>
                Pre-Rolled Cone
              </motion.div>
              <motion.h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,60px)] font-medium leading-[1] mb-2" variants={fadeInUp}>
                {data.name}
              </motion.h1>
              <motion.div className="font-sans text-[11px] tracking-[0.18em] uppercase mb-5" variants={fadeInUp}>
                {data.sizeNum}
              </motion.div>
              <motion.p className="text-[16px] text-muted-foreground max-w-[51ch] leading-relaxed" variants={fadeInUp}>
                {data.tagline}
              </motion.p>
            </motion.div>
            
            <motion.div className="border border-border bg-gradient-to-b from-white to-[#fbfaf7] p-5" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              {data.img && (
                <img src={data.img} alt={data.name} className="w-full h-auto rounded-sm mix-blend-multiply" />
              )}
              <div className="border-t border-border pt-4 mt-4 flex justify-between gap-3 flex-wrap font-sans text-[9px] uppercase tracking-[0.07em] text-muted-foreground">
                <span>Cone: <b className="text-foreground font-medium">{data.name}</b></span>
                <span>Base: <b className="text-foreground font-medium">Unbleached Brown</b></span>
                <span>Tip: <b className="text-foreground font-medium">M/W Shape</b></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPECS GRID */}
      <section className="py-8 border-y border-border">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-5">
            {Object.entries(data.specs).map(([key, value], i) => (
              <div key={key} className={`md:border-r border-border md:pr-4 ${i === 3 ? 'md:border-r-0' : ''}`}>
                <span className="block mb-2 font-sans text-[9px] uppercase tracking-[0.07em] text-muted-foreground">{key}</span>
                <strong className="font-['Cormorant_Garamond'] text-[20px] font-medium whitespace-pre-line">
                  {value as string}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAPER OPTIONS */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[660px] mb-10">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,3.5vw,36px)] font-medium leading-[1.06] mb-3">Paper Formulations</h2>
            <p className="text-[16px] text-muted-foreground max-w-[56ch]">Our {data.name} cones can be produced using four distinct paper bases, all sourced from premium French and Austrian mills to guarantee an even, slow burn.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {['Wood Pulp', 'Rice Paper', 'Hemp Paper', 'Flax Paper'].map((paper, i) => (
              <div key={i} className="border border-border bg-white p-6 min-h-[116px]">
                <div className="font-sans text-[9px] uppercase tracking-[0.08em] text-muted-foreground">Base 0{i+1}</div>
                <h3 className="font-['Cormorant_Garamond'] text-[24px] font-medium mt-4">{paper}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLOURS */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[660px] mb-10">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,3.5vw,36px)] font-medium leading-[1.06] mb-3">Custom Colours</h2>
            <p className="text-[16px] text-muted-foreground max-w-[56ch]">Go beyond standard white and brown. We offer food-grade, safe dye options to match your brand's palette, from subtle pastels to deep, solid blacks.</p>
          </div>
          
          <div className="border border-border bg-white p-6 md:p-10">
            {/* Cone Visualizer Stage */}
            <div className="min-h-[220px] md:min-h-[340px] flex items-center justify-center py-4 md:py-6">
              <div className="w-[min(750px,95%)] flex items-center drop-shadow-xl transition-all duration-500">
                <div 
                  className="w-[25%] h-[52px] md:h-[76px] rounded-l-full border border-black/10 flex items-center justify-center font-bold text-white/50 text-[15px] md:text-[21px] relative z-10 transition-colors duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, rgba(255,255,255,0.14), transparent 26%, rgba(0,0,0,0.06)), ${activeColor.tip}` 
                  }}
                >
                  JOJO
                </div>
                <div 
                  className="flex-1 h-[82px] md:h-[120px] ml-[-2px] border border-black/10 transition-colors duration-500"
                  style={{
                    borderRadius: '0 60px 60px 0',
                    clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 82%)',
                    background: `repeating-linear-gradient(24deg, rgba(255,255,255,0.14) 0 2px, transparent 2px 8px), repeating-linear-gradient(116deg, rgba(0,0,0,0.025) 0 1px, transparent 1px 9px), ${activeColor.paper}`
                  }}
                />
              </div>
            </div>

            {/* Swatches */}
            <div className="flex justify-center gap-4 flex-wrap mt-4">
              {colors.map((c, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <button 
                    onClick={() => setActiveColor(c)}
                    className={`w-10 h-10 rounded-full border border-black/20 cursor-pointer relative ${activeColor.name === c.name ? "after:content-[''] after:absolute after:-inset-[5px] after:border after:border-foreground after:rounded-full" : ""}`}
                    style={{ background: c.paper }}
                    aria-label={`Select ${c.name}`}
                  />
                  <small className="font-sans text-[8px] uppercase text-muted-foreground hidden md:block">{c.name.split(' ')[0]}</small>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center font-sans text-[9px] uppercase tracking-[0.08em] text-muted-foreground">
              Selected Colour: <b className="text-foreground font-medium">{activeColor.name}</b>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TIPS */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-[0.74fr_1.26fr] gap-10 items-start">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,3.5vw,36px)] font-medium leading-[1.06] mb-3">Filter Tip Options</h2>
              <p className="text-[16px] text-muted-foreground max-w-[44ch] mb-5">We utilize high-grade, rigid filter paper to prevent collapsing during use, ensuring a clear, open draw.</p>
              <div className="p-4 bg-secondary border-l-2 border-foreground text-[12px] text-muted-foreground mb-5">
                All filter tips can be custom-printed with your logo, text, or brand pattern. Food-grade inks are used on both the inside and outside of the tip.
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-border bg-white">
                <img src="/images/tips/m-shape-tip.jpeg" alt="M/W Shape Filter" className="aspect-[4/3] object-cover w-full" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMmYyZjIiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMmYyZjIiIC8+PC9zdmc+'}} />
                <div className="p-4 border-t border-border">
                  <small className="block font-sans text-[8px] uppercase tracking-[0.07em] text-muted-foreground mb-1">Standard Option</small>
                  <h3 className="font-['Cormorant_Garamond'] text-[20px] font-medium">M/W Shape</h3>
                  <p className="font-sans text-[12px] text-muted-foreground mt-1">The industry standard fold, providing excellent structure and preventing material pull-through.</p>
                </div>
              </div>
              <div className="border border-border bg-white">
                <img src="/images/tips/spiral-tip.jpeg" alt="Spiral Shape Filter" className="aspect-[4/3] object-cover w-full" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMmYyZjIiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMmYyZjIiIC8+PC9zdmc+'}} />
                <div className="p-4 border-t border-border">
                  <small className="block font-sans text-[8px] uppercase tracking-[0.07em] text-muted-foreground mb-1">Alternative Option</small>
                  <h3 className="font-['Cormorant_Garamond'] text-[20px] font-medium">Spiral Shape</h3>
                  <p className="font-sans text-[12px] text-muted-foreground mt-1">A smooth, concentric fold preferred by some brands for its unique visual appeal and airflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONE RANGE STRIP */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="max-w-[660px] mb-8">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,3.5vw,36px)] font-medium leading-[1.06] mb-3">Explore the Range</h2>
            <p className="text-[16px] text-muted-foreground">Select another size below to view its specific technical dimensions.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 border border-border bg-white overflow-hidden">
            {coneOrder.map((id, index) => {
              const item = coneData[id];
              const isCurrent = id === sizeId;
              return (
                <div 
                  key={id} 
                  onClick={() => navigate(`/pre-rolled-cones/${id}`)}
                  className={`p-4 md:border-r border-b md:border-b-0 border-border cursor-pointer transition-colors ${isCurrent ? 'bg-secondary' : 'hover:bg-secondary'} ${index === coneOrder.length - 1 ? 'md:border-r-0' : ''} ${index % 2 === 0 ? 'border-r' : 'border-r-0'}`}
                >
                  <div className="h-[120px] flex items-center justify-center mb-3">
                    <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="border-t border-border pt-2.5">
                    <span className="block font-sans text-[8px] uppercase tracking-[0.08em] text-muted-foreground mb-1">{item.sizeNum.split(' ')[0]} {item.sizeNum.split(' ')[1]}</span>
                    <strong className="block font-['Cormorant_Garamond'] text-[17px] font-medium">{item.name}</strong>
                    <small className="block mt-0.5 font-sans text-[9px] text-muted-foreground">{item.specs.Dimensions.split('\n')[0]}</small>
                  </div>
                </div>
              );
            })}
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
            Ready to order the {data.name}?
          </h2>
          <p className="text-white/65 max-w-[48ch] mx-auto mb-8 text-[16px]">
            Whether you need blank standard cones or a fully branded private label run, our team is ready to engineer your solution.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-premium-solid bg-background text-foreground hover:bg-white/90">Request Samples</Link>
            <Link to="/contact" className="btn-premium bg-transparent text-background hover:bg-background hover:text-foreground border-background/40">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConeDetail;
