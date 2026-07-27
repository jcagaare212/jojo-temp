import { Link } from "react-router-dom";
import B2BForm from "@/components/B2BForm";

const PrivateLabel = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/jojo_assets/JOJO Website 26-06-2026/11.webp" 
            alt="Factory Layout" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            End-to-End <br className="md:hidden" /> Custom Manufacturing
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your brand with world-class OEM capabilities. From custom watermarked papers to luxury printed tins, we build premium smoking essentials at global scale.
          </p>
        </div>
      </section>

      {/* Capabilities Breakdown (Bento Style) */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">OEM Capabilities</h3>
            <p className="text-muted-foreground text-lg max-w-2xl">We don't just print logos. We engineer products from the pulp up to meet the exacting standards of the world's top brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capability 1 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/24.webp" alt="Custom Watermarks" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">Custom Watermarks & Blends</h4>
                <p className="text-slate-200 text-sm max-w-md">We engineer proprietary paper blends featuring custom watermarks that protect your brand identity while delivering an exceptional, slow-burning smoking experience.</p>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/4.webp" alt="Luxury Packaging" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">Luxury Retail Packaging</h4>
                <p className="text-slate-200 text-sm max-w-md">Stand out on the shelf with bespoke packaging solutions. We offer everything from embossed metal tins to premium magnetic closure boxes and minimalist glass tubes.</p>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/30.webp" alt="Pre-rolled Cones" className="w-full h-full object-cover object-top transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">Precision Pre-Rolled Cones</h4>
                <p className="text-slate-200 text-sm max-w-md">Manufactured to exact tolerances, our pre-rolled cones are crafted for perfect airflow. Available in various sizes, custom paper blends, and featuring custom-printed crutches.</p>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border/50 aspect-video md:aspect-auto md:h-[400px]">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/images/jojo_assets/JOJO Website 26-06-2026/28.webp" alt="Retail Displays" className="w-full h-full object-cover transform-gpu backface-hidden [transform:translateZ(0)] group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h4 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">Retail Display Solutions</h4>
                <p className="text-slate-200 text-sm max-w-md">Drive point-of-sale impact with custom-engineered retail displays. We design counter-ready solutions that perfectly showcase your pre-rolls and booklets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The OEM Pipeline */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">The Manufacturing Pipeline</h3>
            <p className="text-muted-foreground text-lg">A seamless, proven process to take your brand from concept to global distribution.</p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Consultation & Prototyping",
                desc: "We start by understanding your brand vision and target market. Our design team works closely with you to prototype custom paper blends, tip designs, and primary packaging."
              },
              {
                step: "02",
                title: "Sampling & Refinement",
                desc: "Before full-scale production, we provide physical samples of your products. This ensures every detail—from the watermark clarity to the foil stamping—meets your exact specifications."
              },
              {
                step: "03",
                title: "Automated Mass Production",
                desc: "Once approved, your products enter our state-of-the-art manufacturing facility. High-volume automation ensures precision consistency across production runs of any scale."
              },
              {
                step: "04",
                title: "QC & Global Logistics",
                desc: "Every batch undergoes rigorous quality assurance testing. Finally, our logistics network ensures your premium private label products are delivered securely anywhere in the world."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="font-display text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateLabel;
